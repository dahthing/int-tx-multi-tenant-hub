# Hub multi tenant para ecommerce: desenho do core

Estado: em revisão
Data: 2026-10-23
Origem: sessão de brainstorming (perguntas, alternativas e decisões registadas abaixo)
Revisão: 2026-10-23, depois do relatório `reports/Módulos iniciais do hub ecommerce.md` (D12 e D13 revistas, D26 a D32 novas, questões 8 a 12)
Revisão: 2026-10-23, depois do relatório `reports/Dores dos ecommerces multicanal.md` (D28 e D30 revistas, D33 a D36 novas, questões 13 a 15)

Este documento consolida o desenho do core do produto. Não é uma spec: cada bloco aqui descrito será transformado numa ou mais changes OpenSpec, com cenários, testes escritos antes do código e só depois implementação (ver secção 9).

## 1. Visão e âmbito

Um SaaS multi tenant para negócios de ecommerce, agnóstico ao ERP, à plataforma de ecommerce, ao marketplace e às plataformas de Ads. Princípios de partida:

1. Agentic e IA first.
2. SaaS com subscrições e free tier desde o primeiro dia.
3. 2FA e RBAC multinível.
4. Backoffice interno para gerir empresas, utilizadores, subscrições, packs, permissões, métricas, logs, créditos de IA, ligações a ERPs, marketplaces e ecommerces, e módulos por empresa.

Módulos possíveis (não fazem parte do primeiro marco, exceto encomendas, leitura de stock e margem): dashboards e métricas customizadas, automações, PIM, WMS, integrações com ecommerce, marketplaces e ERPs, suporte, gestão de encomendas multicanal, Ads (Google Ads, Meta Ads, Google Analytics, Bing).

### 1.1 Primeiro marco

Core completo mais uma fatia vertical fina que o valida de ponta a ponta:

1. Importar encomendas de **PrestaShop 9** e de **Mirakl (Worten)**.
2. Ler o stock do PrestaShop e reservar esse stock quando a encomenda entra no hub. O hub não escreve stock nos canais neste marco.
3. Aceitar linhas de encomenda Mirakl automaticamente por regras deterministas (stock confirmado, margem acima do limiar). As linhas que falham uma regra vão para uma **fila de exceções** com aprovação humana (stock em falta, margem negativa depois da comissão, preço anómalo, prazo de envio em risco), com contagem decrescente até ao fim do prazo. É a primeira ação de escrita do produto.
4. Margem de contribuição por canal e por SKU (custo, comissão, portes, devoluções), no lugar de um painel de vendas. Os custos vêm do PrestaShop, de importação por CSV ou, quando faltam, de uma estimativa por categoria assinalada como tal. As comissões são calculadas por um **motor de comissões** que conhece a base de cada canal (preço líquido, total com portes, ou total com portes e IVA), as taxas fixas por encomenda, as taxas regulatórias e a mensalidade repartida.
5. **Motor de regras por canal**: prazos de aceitação e de envio, limiares e janelas dos indicadores ficam guardados como dados, com versão, data e fonte, editáveis pelo staff no backoffice, e nunca escritos no código. Na primeira fatia traz as regras da Worten (taxa e tempo de aceitação, envio dentro do prazo), com alertas antes de cada limiar. O conector Mirakl é parametrizado por operador desde o início.
6. Contagem decrescente até ao limite de envio de cada encomenda, só de leitura. Enviar o código de seguimento para o canal fica para o segundo módulo.
7. Catálogo fino com o dígito de controlo do EAN validado e os campos GPSR (fabricante e pessoa responsável na UE).
8. **Agente de exceções**: trabalha a fila de exceções e escreve um resumo diário. Os números vêm só de métricas deterministas, com a fórmula visível.

Porquê (relatório de 2026-10-23): a dor mais grave do segmento são os indicadores de aceitação da Mirakl, com suspensão da conta; o recorte anterior (importar, aprovar tudo à mão, painel de vendas, chat) já existe de graça no Base.com; a disposição para pagar está no stock; nenhum produto encontrado dá margem do lado do vendedor Mirakl. A aprovação humana de todas as linhas punha em risco o prazo de 24 horas fora do horário de trabalho.

Porquê os pontos 4 a 7 (relatório multicanal de 2026-10-23): Worten, KuantoKusta, Amazon, eBay e os operadores Mirakl castigam as mesmas falhas com números diferentes, as regras mudam e aparecem em versões contraditórias, e cada canal cobra comissão sobre uma base diferente. Guardar regras e bases como dados desde a primeira fatia evita reescrever o modelo quando chegar o segundo canal.

### 1.2 Fora do primeiro marco

Envio de stock e preço para os canais, com o código de seguimento (segundo módulo, ver secção 10), PIM, WMS, automações, suporte, Ads, ERPs, faturação grossista com pool de créditos partilhado, SSO/SAML, módulo PrestaShop próprio com eventos em tempo real.

## 2. Base técnica

O repositório parte do template `nestjs-angular-monorepo` (da equipa), importado com histórico completo (`main` v1.8.1 e `develop`), com o original como remote `upstream`.

### 2.1 O que o template já resolve

| Área | Estado |
|---|---|
| Stack | Turborepo + pnpm, NestJS 11, Angular 22 (signals, standalone), Tailwind 4 + Material, Prisma 7, Zod v4 partilhado |
| Autenticação | Better Auth 1.7: email e password, verificação de email, reset, Google, 2FA TOTP e códigos de backup, plugin admin (ban, impersonation) |
| Jobs | BullMQ com DLQ e API de gestão, painel de filas só leitura, cron, emails Brevo |
| Audit | Audit log append only para autenticação, administração e escritas de negócio (hoje no MongoDB; passa para Postgres, ver 7.3) |
| Observabilidade | Pino com correlation IDs, Prometheus, Grafana, Loki, Sentry, health probes |
| Qualidade | Jest 30, testcontainers, factories, cobertura mínima de 80%, CI e releases |
| Processo | OpenSpec com SDD obrigatório (spec, testes, código) e configuração Claude (agentes, comando `tdd`) |

Verificado na importação: build verde, 572 testes unitários de backend e 163 de frontend a passar.

### 2.2 O que falta e é o core do produto

Multi tenancy, RBAC com âmbitos, parceiros, planos e entitlements, metering, billing, créditos de IA, runtime de agentes, framework de conectores, API keys, passkeys, MCP.

### 2.3 Problemas conhecidos a corrigir na Fase 0

Resolvidos pela change `fix-ci-baseline` (implementada, por arquivar).

1. `apps/api/src/app.module.spec.ts` depende de existir `.env` (o AppModule valida o ambiente ao ser importado). Num CI limpo falha.
2. O contexto de `openspec/config.yaml` ainda descreve um template genérico; tem de passar a descrever o domínio do hub.
3. Falta um `LICENSE` proprietário e uma nota de proveniência do template.

### 2.4 Prova de conceito de RLS existente

O branch `upstream/feature/rls-multi-tenant-poc` prova isolamento por RLS com Prisma 7 (10 testes de integração, incluindo fuga entre ligações do pool). Não foi fundido; o `forTenant` e o guard `assertRlsEnforceable` serão portados na change de isolamento. Lição principal: superusers e papéis com `BYPASSRLS` ignoram o RLS, e o papel do docker do template é superuser. A aplicação liga com um papel restrito; migrações e seeds usam o papel dono.

## 3. Identidade, tenancy e permissões

### 3.1 Hierarquia

```
Plataforma            staff interno, com papéis de plataforma
  Parceiro            agência; acesso delegado a várias organizações
  Organização         empresa cliente; unidade de isolamento e de faturação
    Âmbitos           lojas, marcas, armazéns, canais
      Recursos        encomendas, produtos, ligações, automações
```

### 3.2 Regras

1. **Identidade global, pertença por organização.** Um login, várias organizações. Organização ativa na sessão (`activeOrganizationId` do plugin `organization` do Better Auth) e seletor na interface.
2. **A organização é a fronteira de isolamento.** Todas as linhas de negócio têm `organization_id`. Duas camadas: extensão Prisma que injeta o tenant e RLS no Postgres como rede de segurança. O parceiro nunca é dono de dados: o que cria dentro de um cliente pertence ao cliente.
3. **Parceiro com acesso delegado.** Concessão explícita, com papel máximo e âmbitos opcionais, revogável pelo owner da organização a qualquer momento. O admin do parceiro distribui clientes pela sua equipa dentro desse teto. O audit regista "via parceiro X".
4. **Permissões `modulo:recurso:acao`** (por exemplo `orders:order:read`). Cada módulo declara as suas no código, de onde se gera o catálogo. Papéis de sistema como modelo (Owner, Admin, Gestor, Operador, Leitura), papéis custom conforme o plano, atribuições com âmbito opcional.
5. **Três verificações em todas as ações** (UI, API pública e tools de agente):
   1. Entitlement: o plano inclui este módulo ou funcionalidade?
   2. Permissão: o principal tem a permissão neste âmbito?
   3. Quota: o limite do período não foi atingido?
   Implementado uma vez, num `AccessModule` com `can(principal, acao, recurso)`. Módulo fora do plano devolve 403 `entitlement_required`, mesmo a um Owner.
6. **Tipos de principal:** utilizador; API key (conta de serviço de uma organização); agente invocado (herda o utilizador e fica ligado a um `run_id`); automação autónoma (conta de serviço com papel atribuído por um admin).
7. **Staff da plataforma** com papéis próprios (super admin, suporte, billing, leitura). Acede a dados de tenants apenas por sessão de suporte, com motivo e limite de tempo, só leitura por omissão, auditada. 2FA obrigatório, preferencialmente passkey. Reaproveita a impersonation do plugin admin por baixo.
8. **2FA:** TOTP e códigos de backup (existentes) mais passkeys. O owner pode exigir 2FA a todos os membros. Não é funcionalidade paga; o que se cobra no plano enterprise é SSO/SAML.

### 3.3 Implementação

1. Plugin `organization` do Better Auth (organizações, membros, convites, equipas, dynamic access control).
2. Tabelas próprias para parceiros, acessos delegados, âmbitos e atribuições com âmbito.
3. Permissões efetivas em cache no Redis por principal e organização, invalidadas por eventos.
4. Sem OpenFGA nem SpiceDB por agora. A interface `can()` permite trocar mais tarde.

## 4. Catálogo, entitlements, billing e créditos de IA

Decisão: os dois modos de faturação existem desde o início (organização paga por si; parceiro paga pelos clientes). Nota registada: a recomendação inicial era começar só com o primeiro modo; o desenho contém o custo com a abstração de conta de faturação.

### 4.1 Modelo

```
Plano (versões imutáveis)   módulos, features, limites por período
Pack / add on               créditos de IA, conectores extra, módulos extra
Override (backoffice)       ajuste por organização, com motivo e validade

Conta de faturação  ──paga──▶  Subscrição  ──cobre──▶  Organização(ões)
(da própria organização ou de um parceiro)
```

1. **Conta de faturação:** cada organização aponta para uma, a sua ou a de um parceiro. Os dados fiscais (NIF, morada) e o token do meio de pagamento vivem aqui.
2. **Planos versionados:** mudar preço ou limites cria nova versão; subscritores existentes mantêm a sua até migração explícita.
3. **Entitlements efetivos** = versão do plano + packs + overrides, num `EntitlementsService` com cache no Redis invalidada por eventos.
4. **Quotas:** contadores por período no Redis; fonte de verdade numa tabela de eventos de uso no Postgres, com chave de idempotência por evento.

### 4.2 Motor de subscrições interno

Decisão: o sistema de subscrições é nosso. Os fornecedores de pagamento e de faturação são adaptadores trocáveis: Easypay e faturação manual no MVP, Stripe e Moloni no futuro se fizer sentido.

1. **Entidades:** `BillingAccount`, `Subscription` (versão do plano, linhas com quantidade, período atual, estado), `Charge` (valor de um período: linhas, excedentes de uso, prorata, IVA), `Payment` (transação no fornecedor), `InvoiceRecord` (documento legal emitido).
2. **Renovação:** um job do cron fecha cada período, calcula o valor seguinte e pede a cobrança ao adaptador de pagamento.
3. **Mudanças de plano:** upgrade com efeito imediato e cobrança da diferença em prorata por dias; downgrade no fim do período.
4. **Parceiro que paga:** uma subscrição por parceiro, com uma linha por plano e quantidade (por exemplo "Pro × 7, Starter × 12"). O nosso sistema sabe que organização está em que plano. Uma cobrança e um documento por período, independentemente do número de clientes.
5. **IVA calculado por nós**, para cobrar o valor certo: 23% continente, 22% Madeira, 16% Açores; autoliquidação B2B na UE com NIF válido; fora do âmbito fora da UE. Regras e motivos de isenção a validar com o contabilista.
6. **Interfaces:** `PaymentProvider` (tokenizar meio de pagamento, cobrar um valor, consultar transação, validar notificação) e `InvoicingProvider` (emitir documento, anular, nota de crédito). Testes de contrato iguais para qualquer implementação.

### 4.3 Pagamentos com Easypay

1. **Pagamentos frequentes** (cliente tokenizado no Checkout e valores variáveis cobrados pela Payments API) são o encaixe certo, porque o valor muda entre períodos (prorata, quantidades do parceiro, excedentes). As subscrições nativas da Easypay são de valor fixo e só aceitam cartão e débito direto.
2. **Métodos:** débito direto e cartão como recorrentes preferidos; MB WAY e Multibanco disponíveis nos pagamentos frequentes, sendo que uma referência Multibanco depende de o cliente pagar e alimenta o fluxo de cobrança em atraso.
3. **Notificações:** recebidas por fila, idempotentes, e sempre confirmadas consultando a transação na API antes de mudar qualquer estado.
4. A confirmar no contrato com a Easypay: métodos ativos para pagamentos frequentes, limites mínimos e máximos, fluxo do mandato de débito direto.

### 4.4 Faturação manual no MVP

1. Cada pagamento confirmado cria uma **fatura por emitir** numa fila do backoffice, com os dados do cliente, as linhas e o IVA já calculados.
2. Quem fatura emite o documento no software certificado e regista no backoffice o número, a data e o PDF. O cliente vê os seus documentos na aplicação.
3. **Prazo legal:** em regra, a fatura sai até ao 5.º dia útil seguinte ao momento em que o imposto é devido; num pagamento recebido antes da prestação (subscrição paga adiantada), deve sair na data do recebimento. A fila mostra o prazo de cada fatura e alerta antes de expirar. Regras a confirmar com o contabilista.
4. **Destinatário da fatura no modo parceiro:** a fatura emite se ao destinatário dos serviços, independentemente de quem paga. O modelo contratual proposto é de revenda: o parceiro contrata connosco e é o destinatário; ele fatura os seus clientes. A validar com o contabilista e refletir nos termos de serviço.
5. **Limite deste modo:** funciona com dezenas de faturas por mês. O gatilho para o adaptador Moloni (ou outro software certificado com API) é o volume, ou o prazo começar a falhar.

### 4.5 Ciclo de vida

1. Pagamento falhado: `past_due`, 7 dias de acesso total com aviso.
2. Depois: `restricted`, só leitura, sincronizações e agentes em pausa.
3. Aos 30 dias: `suspended`. Dados mantidos 90 dias, depois apagados segundo a política RGPD.
4. Cancelamento: passa ao free tier; o excedente fica em pausa e só leitura, nunca apagado de imediato.
5. Fim de parceria ou parceiro deixa de pagar: o acesso do parceiro é revogado e o cliente tem 14 dias de graça para definir um meio de pagamento próprio; sem isso, passa ao free tier. Os dados são sempre do cliente.

### 4.6 Créditos de IA

1. Carteira por organização, implementada como ledger de entradas e saídas.
2. Entradas: créditos mensais do plano (expiram no fim do período), packs (12 meses), ofertas do backoffice. Consome primeiro o que expira mais cedo.
3. Cada run de agente reserva créditos estimados antes de arrancar e liquida pelo real no fim. Sem saldo, não arranca.
4. Cada chamada regista modelo, tokens de entrada, saída e cache, custo real em euros e créditos cobrados. Daqui sai a margem por tenant.
5. Um crédito tem valor fixo para o cliente; a tabela de conversão por modelo é versionada.
6. Parceiros podem comprar packs e atribuí los a um cliente. Pool partilhado fica para depois.

### 4.7 Free tier (pontos de partida a afinar)

| Limite | Free | Planos pagos |
|---|---|---|
| Lojas ligadas | 1 PrestaShop | várias lojas e canais |
| Utilizadores | 2 | por plano |
| Encomendas sincronizadas por mês | 300 | por plano, com excedente |
| Frequência de sincronização | 60 min | até 5 min ou tempo real |
| Histórico | 90 dias | completo |
| Créditos de IA | poucos, limite duro | do plano, mais packs |
| API keys e MCP | não | sim |

Proteção contra abuso: email verificado, captcha no registo, limite de organizações grátis por pessoa.

O relatório de 2026-10-23 sugere um free tier de cerca de 100 encomendas, uma loja e um marketplace, com regras de aceitação, margem básica e resumo semanal, e planos pagos em degraus de 19 a 29 €, 39 a 49 € e 79 a 149 € por mês. É uma hipótese por validar; os números continuam em aberto (questão 5).

## 5. Modelo canónico e conectores

### 5.1 Modelo canónico de encomendas

1. Entidades: `Channel`, `Connection` (credenciais cifradas, estado, capacidades), `Order`, `OrderLine`, `Address`, `Shipment`, `OrderEvent` (linha temporal).
2. Estados canónicos: `pending_acceptance`, `accepted`, `processing`, `shipped`, `delivered`, `cancelled`, `refunded`. O estado original é sempre guardado.
3. Unicidade por (`connection_id`, `external_id`): ressincronizar atualiza, nunca duplica.
4. Valores em cêntimos, com moeda e impostos explícitos.
5. Payload original em JSONB e campos específicos do canal em `attributes`, separados por conector.
6. Dados pessoais cifrados com o `EncryptionService` do template; retenção por plano; remoção RGPD como operação de primeira classe.
7. Métricas a partir de agregados diários por organização, canal e dia. O agente usa tools de consulta tipadas; não há geração de SQL livre.
8. Catálogo fino, só o necessário para stock, margem e conformidade: SKU mestre, EAN com dígito de controlo validado, título, custo (com a origem: PrestaShop, CSV ou estimativa por categoria), IVA, e os campos GPSR (fabricante e pessoa responsável na UE). Cada SKU liga a uma oferta por canal (identificador externo, preço, estado). Não é um PIM.
9. Stock por localização com histórico de movimentos, e reservas criadas pela importação de encomendas e libertadas por envio, cancelamento ou recusa.
10. Cada linha de encomenda guarda as taxas do canal (comissão, portes) e a base sobre a qual foram calculadas, para que a margem seja calculada por linha. A forma exata destas entidades é definida nas specs.
11. Regras de canal como dados versionados: cada regra tem canal (e operador, na Mirakl), tipo (prazo de aceitação, prazo de envio, limiar de indicador, base de comissão), valor, janela, data de início, fonte e versão. As encomendas guardam a versão da regra com que foram avaliadas.

### 5.2 Framework de conectores

1. Cada conector declara: manifesto com versão e capacidades (`orders.read`, `orders.accept`, `stock.read`, `products.read`, ...), tipo de autenticação, `listChangedOrders(cursor)`, `getOrder(id)`, função pura `mapOrder(raw)`, ações de escrita.
2. Motor de sincronização genérico: agendamento por ligação conforme o plano, cursor persistido, importação inicial com profundidade conforme o plano, rate limit por ligação, retries com backoff, DLQ, estado "precisa de reautenticação" em falhas de credenciais.

### 5.3 PrestaShop 9

1. Admin API com OAuth e scopes por entidade (`order_read`, ...). Não está confirmado que expõe encomendas; o Webservice antigo continua no PrestaShop 9 e cobre encomendas.
2. A change começa com uma spike contra PrestaShop 9 em Docker para confirmar a cobertura e gravar fixtures. Se a Admin API não chegar, o conector usa o Webservice para encomendas. A spike cobre também a leitura de stock (`stock_availables` no Webservice) e do custo do produto (`wholesale_price`), que alimentam a reserva e a margem.
3. Sem webhooks nativos: polling incremental pela data de atualização. Mais tarde, módulo próprio com eventos em tempo real (também canal de aquisição na PrestaShop Addons).

### 5.4 Mirakl (Worten)

1. Seller API com API key por marketplace; a spike compara com a Mirakl Connect.
2. Encomendas chegam em `WAITING_ACCEPTANCE` e têm de ser aceites (OR21) dentro do prazo, sob pena de cancelamento automático; na Worten, 24 horas segundo os termos v2025.10.23 (a confirmar, questão 8). Por isso a aceitação e a recusa entram no primeiro marco.
3. A aceitação automática é feita por um motor de regras determinista, configurado pela organização; nunca é uma decisão do modelo. O agente só trabalha a fila de exceções e propõe, e a pessoa aprova (ver 6.2, ponto 3).
4. Os indicadores Worten são calculados pelo hub a partir das encomendas importadas (instantes de receção, aceitação e envio). A spike verifica se a Seller API expõe os valores oficiais do vendedor e os campos de comissão por linha (questão 11).

### 5.5 Testes de conectores

Testes de mapeamento orientados por tabelas a partir de fixtures reais anonimizadas; conector falso para testar o core sem rede; testes de contrato contra mock gerado do OpenAPI da Mirakl; execução noturna contra PrestaShop 9 em Docker.

## 6. Runtime de agentes

### 6.1 Abordagem

Claude API com o Tool Runner do SDK TypeScript (`@anthropic-ai/sdk`), a correr nos nossos workers. Managed Agents não serve (loop e sandbox na infraestrutura da Anthropic, quando as tools precisam do contexto do tenant no nosso processo). Agent SDK não serve (harness orientado a código e ficheiros).

### 6.2 Componentes

1. **Registo de tools:** cada módulo declara tools com schemas Zod, com permissão e entitlement exigidos, nível de risco (leitura, escrita reversível, escrita irreversível) e se expõe dados pessoais. As tools chamam os mesmos serviços que os controllers REST.
2. **Execução:** `AgentRun` com organização, principal, orçamento e estado. Cada chamada de tool passa pelas três verificações e fica no audit com o `run_id`. O isolamento é garantido pelos serviços e pelo RLS, nunca por instrução ao modelo.
3. **Aprovações:** tool de escrita pausa o run e cria um pedido de aprovação (ação proposta, impacto, prazo). O utilizador aprova ou recusa; o job retoma a partir do histórico guardado. Escritas irreversíveis nunca correm sem aprovação no MVP.
4. **Streaming:** worker publica eventos no Redis; a API expõe SSE por run; o Angular consome com signals. O estado é persistido.
5. **Encaminhamento multi modelo** (decisão do produto):

   | Rota | Modelo | Effort inicial |
   |---|---|---|
   | Classificação e extração (volume) | `claude-haiku-5-5` | baixo |
   | Agente de exceções (propostas e conversa) | `claude-sonnet-5-5` | médio |
   | Análises complexas e planeamento | `claude-opus-5-5` | alto |

   Regras: o modelo escolhe se no início do run e nunca muda a meio (raciocínio e cache estão presos ao modelo); cada rota tem evals próprios; a tabela de créditos tem conversão por modelo. Preços de referência por milhão de tokens (entrada/saída): Opus 5.5 $4/$20, Sonnet 5.5 $2/$10, Haiku 5.5 $0,10/$0,50.
6. **Prompt caching:** prefixo estável (tools em ordem determinística, system prompt fixo), contexto do tenant depois do ponto de cache, prefixos agrupados por plano.
7. **Orçamento:** reserva de créditos, `task_budget` para o modelo gerir o esforço, corte duro por turno, número máximo de turnos.
8. **Segurança:** tratar `stop_reason: refusal`; fallback do lado do servidor em Opus e Sonnet; no Haiku, nova tentativa feita por nós com Sonnet. Texto externo entra marcado como dados. O agente nunca vê credenciais.
9. **Dados pessoais:** API da Anthropic diretamente, com DPA e tools que enviam o mínimo de dados pessoais. Adaptador de fornecedor preparado para Bedrock ou Vertex numa região da UE se um cliente o exigir.
10. **Evals:** tools com testes unitários normais; comportamento dos agentes avaliado com conjuntos fixos de perguntas sobre fixtures, em execução noturna.
11. **MCP:** servidor MCP por organização nos planos pagos, autenticado por API key com scopes, sobre o mesmo registo de tools e as mesmas verificações.
12. **Filas:** agentes e sincronizações em filas separadas, com limite de concorrência por organização.

### 6.3 Primeiro agente

"Agente de exceções" (substitui o "Analista de encomendas"):

1. Trabalha a fila de exceções: para cada linha explica a regra que falhou, mostra stock, margem depois da comissão e prazo restante, e propõe aceitar ou recusar. Com aprovação, executa.
2. Escreve um resumo diário: exceções tratadas e pendentes, indicadores Worten face aos limiares, linhas com margem negativa.
3. Os números vêm só de métricas deterministas, cada uma com a fórmula visível; o agente nunca calcula valores e pode responder "não sei".
4. Proposto, por decidir (D32): perguntas livres sobre encomendas no mesmo agente, pagas em créditos; resumos em lote com o modelo pequeno.

Porquê: a evidência é forte para IA assistiva em tarefas delimitadas e fraca para perguntas livres sobre números (erros de soma documentados, acerto baixo em geração de consultas), e as plataformas já oferecem copilotos de conversa sem custo.

## 7. Backoffice, aplicação de cliente, audit e observabilidade

### 7.1 Duas aplicações Angular

1. **Aplicação de cliente** (nova): onboarding, ligações, encomendas, métricas, agente, faturação, membros e permissões.
2. **Backoffice interno** (evolução do `apps/web` atual): subdomínio próprio, só staff, 2FA obrigatório.
3. Componentes partilhados num pacote de UI do monorepo.

Motivo: postura de segurança diferente e superfície de ataque menor no backoffice.

### 7.2 Backoffice: conteúdos

Empresas e parceiros; utilizadores; subscrições, planos, packs e overrides; catálogo de permissões e papéis de sistema; módulos por empresa; ligações por empresa (ecommerce, marketplaces, ERPs) com estado e atraso de sincronização; créditos de IA por empresa (ledger, consumo, custo real); métricas de negócio (MRR, churn, uso, **margem por tenant**); logs e audit; runs de agentes; sessões de suporte.

### 7.3 Audit e logs (MongoDB em standby)

O MongoDB fica em standby e não faz parte do MVP. Hoje o template exige o para arrancar (`MONGO_URI` obrigatório no schema de ambiente base e `MongoModule` importado pelo `SharedModule`), por isso pô lo em standby é uma change própria do Marco 0 (`remove-mongo-dependency`):

1. **O audit passa para Postgres**, numa tabela `audit_event`, mantendo a interface do `AuditService` e os cenários da spec `audit-log` existente.
   1. Append only garantido pela base de dados: o papel da aplicação só tem `INSERT` e `SELECT` nesta tabela.
   2. Retenção por `expire_at`, dependente do plano. Um job diário apaga as linhas expiradas através de uma função `SECURITY DEFINER` que só remove o que expirou. Nenhuma operação edita ou apaga um evento individual.
   3. Campos novos: `organization_id`, tipo de ator (utilizador, API key, agente, staff, via parceiro) e `run_id`. RLS por organização: os admins veem o audit da sua organização; o staff vê tudo através do backoffice e das sessões de suporte.
   4. Particionamento mensal apenas quando o volume o justificar.
2. **Logs de pedidos HTTP**: deixam de ir para base de dados e ficam nos logs estruturados do pino, recolhidos pelo Loki que já existe. O `LoggingInterceptor` deixa de escrever no MongoDB.
3. **Logs de email**: passam também para os logs estruturados. Nenhuma funcionalidade os lê hoje.
4. O código Mongo é removido, com uma tag git imediatamente antes da remoção para o recuperar se voltar a fazer falta (por exemplo, para volumes muito grandes de eventos).

Infraestrutura resultante no MVP: Supabase (Postgres) e, no VPS, Redis e as aplicações.

### 7.4 Observabilidade

Sobre a stack existente: métricas de atraso de sincronização por ligação, profundidade de filas, custo por run de agente, consumo de créditos. Alertas: faturas por emitir perto do prazo, cobranças falhadas, crescimento da DLQ, falhas de autenticação de ligações.

## 8. Alojamento

### 8.1 MVP: aplicações no VPS, Postgres no Supabase

1. Docker Compose de produção num VPS na UE: nginx com TLS, api, workers (sincronização, agentes, geral), cron, Redis com AOF, stack de observabilidade. Sem MongoDB (ver 7.3).
2. Postgres no Supabase, numa região da UE próxima do VPS, usado **apenas como Postgres gerido**. Não se usam Supabase Auth, Storage, Realtime, Edge Functions nem as bibliotecas cliente: a autenticação é do Better Auth e a API é a nossa.
3. Regras obrigatórias:
   1. **Data API desligada no projeto.** Com ela ligada, qualquer tabela do schema `public` sem RLS, incluindo as do Better Auth, fica acessível com a chave anon. As chaves anon e service role não são usadas em lado nenhum.
   2. **A aplicação liga com um papel próprio, restrito, sem `BYPASSRLS`.** Isto contraria de propósito a recomendação geral do Supabase para backends (um papel com bypassrls): o isolamento entre tenants depende do RLS. O guard `assertRlsEnforceable` recusa arrancar com os papéis `postgres` ou `service_role`. Migrações e seeds usam o papel dono.
   3. **Ligações.** O backend é de longa duração, por isso usa a ligação direta ou o pooler em modo sessão. O modo transação não suporta os prepared statements do Prisma. Migrações pela ligação direta ou em modo sessão. Pools pequenos por processo, para caber no limite de ligações do plano. Se o VPS só tiver IPv4, a ligação direta exige o add on de IPv4; o pooler em modo sessão funciona sem ele.
   4. O tenant é definido com `set_config(..., true)`, local à transação, o que funciona em qualquer modo de ligação.
   5. **Medir cedo** a latência entre o VPS e o Supabase e o custo da transação extra por query do RLS, que a prova de conceito não mediu. Se pesar, abre se uma transação por pedido em vez de uma por query.
   6. Plano pago desde o primeiro cliente real (backups e sem pausa por inatividade; condições exatas a confirmar na contratação).
4. Portabilidade, para a saída futura:
   1. Só Postgres standard: schema `public`, extensões comuns (pgcrypto, pgvector, pg_stat_statements), nada dos schemas `auth`, `storage` ou `realtime`, nem pg_graphql.
   2. Os testes de integração correm contra a imagem oficial do Postgres, na mesma versão major do Supabase. O que só funcionar no Supabase falha no CI.
   3. A versão major fica fixada num ADR e é igual no Supabase, nos testcontainers e no futuro Postgres interno.

### 8.2 Saída para Postgres interno

1. Gatilhos: custo, limites de ligações ou de compute, exigência contratual de um cliente, ou configuração e extensões que o Supabase não permita.
2. Método: replicação lógica do Supabase para o servidor novo e corte numa janela curta. Enquanto a base for pequena, um `pg_dump` e `pg_restore` numa janela de manutenção também serve.
3. Passos: recriar os papéis (dono e restrito), restaurar, validar com a suite de isolamento e com o guard de arranque, trocar o `DATABASE_URL`, monitorizar.
4. A partir daí: backups com recuperação para um ponto no tempo enviados para object storage, e um ensaio de reposição mensal.

### 8.3 Escala

Mais containers de worker; depois, workers num segundo VPS.

## 9. Processo: Spec Driven Development com testes primeiro

1. Cada change OpenSpec segue: proposta, spec com cenários (WHEN/THEN), testes escritos a partir dos cenários e a falhar, implementação, verificação, arquivo.
2. Nenhum código de produção sem o teste que o exige escrito antes. Comportamento não decidido fica marcado como BLOCKED, nunca especificado.
3. Suites obrigatórias:
   1. Isolamento entre tenants gerado a partir do schema: um modelo novo com `organization_id` e sem RLS faz falhar o CI.
   2. Matriz de permissões (papel × ação × âmbito) em tabela.
   3. Máquina de estados do billing.
   4. Invariantes do ledger de créditos com testes por propriedades (saldo nunca negativo, reservas sempre liquidadas).
   5. Notificações Easypay com fixtures gravadas e testes de idempotência; testes de contrato comuns a todos os adaptadores de pagamento e de faturação.
   6. Cálculo de valores (prorata, quantidades, IVA) com testes por propriedades e tabelas de casos.
   6. Mapeamentos de conectores orientados por tabelas.
   7. Evals dos agentes (noturnos).
4. Cobertura mínima de 80% mantida; 90% recomendado em acesso, billing e créditos.

## 10. Roadmap de changes (desenvolvimento a solo com Claude)

Cada change é uma fatia vertical pequena e entregável (API, UI quando aplicável, testes). Ordem proposta:

### Marco 0: fundação

1. `fix-ci-baseline`: testes independentes de `.env`, contexto OpenSpec do domínio, LICENSE e proveniência.
2. `remove-mongo-dependency`: audit para Postgres append only, logs HTTP e de email para o pino, remoção do `MONGO_URI` e do `MongoModule` (ver 7.3).
3. `consolidate-runtime`: juntar api, auth e notifications numa só app NestJS modular; manter worker e cron como processos separados; remover a chamada RPC de autenticação por pedido.
4. `split-web-apps`: aplicação de cliente e backoffice, com pacote de UI partilhado.

### Marco 1: identidade e tenancy

1. `organizations-and-membership`
2. `tenant-isolation-rls`
3. `access-control`
4. `partners-and-delegated-access`
5. `platform-staff-and-support-sessions` (inclui passkeys e política de 2FA)
6. `api-keys`

### Marco 2: planos e limites (o free tier funciona desde aqui)

1. `plan-catalog-and-entitlements`
2. `usage-metering-and-quotas`
3. `ai-credits-ledger`

### Marco 3: conectores e encomendas

1. `connector-framework` (com conector falso)
2. `canonical-orders` (com taxas por linha)
3. `prestashop9-connector` (começa com spike; encomendas, stock e custo)
4. `mirakl-connector` (começa com spike Seller API vs Connect; encomendas e comissões)
5. `thin-catalog-and-costs` (SKU mestre, EAN validado, campos GPSR, ofertas por canal, custos do PrestaShop, por CSV ou estimados por categoria)
6. `stock-read-and-reservation`
7. `channel-rules` (regras por canal como dados versionados, editáveis no backoffice; regras da Worten na primeira versão)
8. `margin-metrics` (motor de comissões por base de canal e margem de contribuição por canal e SKU)
9. `marketplace-kpis` (indicadores calculados a partir das encomendas, alertas antes dos limiares, contagem até ao limite de envio)
10. `mirakl-order-acceptance` (regras deterministas e fila de exceções com aprovação)

### Marco 4: agentes

1. `agent-runtime` (registo de tools, runs, encaminhamento de modelos, reserva de créditos, SSE)
2. `agent-approvals`
3. `exceptions-agent` (fila de exceções e resumo diário, com evals)
4. `mcp-server`

### Marco 5: cobrança (antes de abrir os planos pagos)

1. `billing-engine` (contas de faturação, subscrições internas, períodos, cálculo de valores com IVA, renovação)
2. `easypay-payments` (tokenização no Checkout, cobrança por período, notificações)
3. `manual-invoicing` (fila de faturas por emitir, registo do documento, prazos e alertas)
4. `partner-billing`
5. `subscription-lifecycle` (estados de cobrança, downgrade, fim de parceria)

Futuro, como adaptadores do mesmo motor: `stripe-payments` e `moloni-invoicing`.

Ordem decidida: planos, entitlements e quotas existem desde o Marco 2, para o free tier funcionar com limites reais; a cobrança vem depois da fatia vertical, para validar o produto com utilizadores free mais cedo.

### Depois do Marco 5

Decidido (D30, D36):

1. `stock-push`: envio de stock e preço para as ofertas Mirakl e para o PrestaShop, e envio do código de seguimento para o canal; segundo módulo e primeiro gatilho pago, lançado junto com a cobrança. Desenhado por eventos, com orçamento de chamadas por canal e reconciliação desde o primeiro dia.
2. `invoicing-routing`: encaminhar as encomendas de todos os canais para software certificado (Moloni, InvoiceXpress), com o gatilho dos cinco dias da Worten. É faturação dos clientes; a faturação do próprio hub continua manual (D9).
3. `amazon-connector`: Amazon.es sem dados pessoais (stock, preço, estado das encomendas, seguimento, stock FBA só de leitura). O registo como programador público começa no passo 2, porque a revisão leva semanas que não dependem do código.
4. `kuantokusta-connector`, depois de confirmar os termos da API para integradores (questão 13).
5. Ponte para etiquetas e seguimento com parceiros (Sendcloud, Packlink, CTT); o armazém continua com parceiros.
6. Restantes operadores Mirakl (Leroy Merlin, El Corte Inglés, PcComponentes, MediaMarkt, Carrefour) por ofertas EAN, a ponte para Espanha.

Proposto, por decidir:

7. PIM ligeiro de conformidade, com IA para textos em português e espanhol e mapeamento de atributos por operador; entrada em Espanha com faturação compatível com o VeriFactu.
8. Caixa única de mensagens com rascunhos de IA aprovados por uma pessoa; feed Google Shopping e Ads como leitura de rentabilidade (D31); WMS através de parceiros até o volume o justificar (D31); eBay só a pedido.

## 11. Registo de decisões

| # | Decisão | Estado |
|---|---|---|
| D1 | Template da equipa como base, importado com histórico e `upstream` | Decidido |
| D2 | Vender a lojas diretas e a agências/parceiros | Decidido |
| D3 | Hierarquia Plataforma, Parceiro, Organização, Âmbitos | Proposto |
| D4 | Isolamento por `organization_id` com extensão Prisma e RLS; app com papel restrito | Proposto |
| D5 | RBAC `modulo:recurso:acao` com âmbitos; três verificações numa só função `can()` | Proposto |
| D6 | Staff só acede a tenants por sessão de suporte auditada | Proposto |
| D7 | 2FA não é funcionalidade paga; SSO/SAML no enterprise | Proposto |
| D8 | Dois modos de faturação desde o início, com conta de faturação | Decidido |
| D9 | Motor de subscrições interno; Easypay para cobrar e faturação manual no MVP; Stripe e Moloni no futuro como adaptadores | Decidido |
| D10 | Créditos de IA da plataforma com ledger, reserva e liquidação | Decidido |
| D11 | Fim de parceria: cliente passa a pagar por si, 14 dias de graça | Decidido |
| D12 | Primeira fatia: encomendas, stock lido e reservado, margem e indicadores Worten, com PrestaShop 9 e Mirakl | Decidido (revisto a 2026-10-23) |
| D13 | Aceitação Mirakl automática por regras deterministas; aprovação humana só na fila de exceções; sem modo sombra | Decidido (revisto a 2026-10-23; antes: aprovação humana em todas as linhas) |
| D14 | Claude API com Tool Runner nos nossos workers | Proposto |
| D15 | Multi modelo desde o início, modelo fixo por run | Decidido |
| D16 | API Anthropic direta com minimização de dados pessoais e DPA | Decidido |
| D17 | Sem SQL livre gerado pelo agente; tools de consulta tipadas | Proposto |
| D18 | MongoDB em standby: audit em Postgres append only, logs HTTP e de email no pino e Loki | Decidido |
| D19 | Consolidar runtime num monólito modular mais workers | Decidido |
| D20 | Duas aplicações Angular (cliente e backoffice) | Proposto |
| D21 | Aplicações em VPS com Docker na UE | Decidido |
| D22 | Documentos de produto em português; specs OpenSpec, código e commits em inglês | Decidido |
| D23 | Postgres no Supabase (UE) no MVP, só como Postgres gerido; Postgres interno depois | Decidido |
| D24 | Data API do Supabase desligada; app com papel restrito sem `BYPASSRLS` | Proposto |
| D25 | Testes de integração contra Postgres oficial na mesma versão major, para garantir portabilidade | Proposto |
| D26 | Ler e reservar stock na primeira fatia; o envio de stock para os canais fica fora do primeiro marco | Decidido |
| D27 | Margem de contribuição por canal e SKU no lugar do painel de vendas; custos do PrestaShop, por CSV ou estimados por categoria | Decidido |
| D28 | Motor de regras por canal: prazos, limiares e janelas como dados versionados com fonte, editáveis no backoffice; indicadores calculados pelo hub com alertas antes de cada limiar; Worten na primeira versão | Decidido (revisto a 2026-10-23; antes: só indicadores Worten) |
| D29 | Primeiro agente é o agente de exceções; números só de métricas deterministas, com fórmula visível | Decidido |
| D30 | Segundo módulo e primeiro gatilho pago: envio de stock, preço e código de seguimento, lançado com a cobrança | Decidido (revisto a 2026-10-23) |
| D31 | Ads como leitura de rentabilidade, não gestão de lances; WMS através de parceiros de envio | Proposto |
| D32 | Perguntas livres ao agente pagas em créditos; resumos em lote com o modelo pequeno | Proposto |
| D33 | Motor de comissões com a base de cada canal, taxas fixas, taxas regulatórias e mensalidade repartida, desde a primeira fatia | Decidido |
| D34 | Catálogo fino com EAN validado e campos GPSR desde a primeira fatia; PIM completo depois | Decidido |
| D35 | Contagem até ao limite de envio na primeira fatia, só de leitura; envio do seguimento no segundo módulo | Decidido |
| D36 | Ordem depois do envio de stock: faturação certificada PT, Amazon.es sem dados pessoais, KuantoKusta, etiquetas, operadores Mirakl por EAN | Decidido (a Amazon passa à frente do KuantoKusta, contra a ordem do relatório) |

## 12. Questões em aberto

As questões 8, 11, 13, 14 e 15 têm uma lista de verificação, com o modo de confirmar cada uma, em `docs/research/pontos-a-confirmar.md`. A questão 12 tem o guião em `docs/research/guiao-entrevistas-vendedores.md`.

1. Easypay: métodos ativos para pagamentos frequentes, limites e fluxo do mandato de débito direto (confirmar no contrato antes da spec `easypay-payments`).
2. Contabilista: motivos de isenção de IVA, prazo de emissão em subscrições pagas adiantadas, tipo de documento (fatura recibo ou fatura e recibo) e destinatário da fatura no modo parceiro (modelo de revenda).
3. Cobertura de encomendas na Admin API do PrestaShop 9 (spike).
4. Mirakl Seller API ou Mirakl Connect (spike).
5. Números do free tier, preços dos planos e valor do crédito (hipótese do relatório na secção 4.7).
6. Região do Supabase, versão major do Postgres e plano a contratar.
7. Períodos de retenção por plano (RGPD), incluindo audit e transcrições de agentes.
8. Termos Worten em vigor: versão do anexo XI, prazo de aceitação (24 horas nos termos de vendedor, 72 horas nos termos da conta online), limiares e número de suspensões até ao encerramento. Bloqueia os valores por omissão das regras (D13) e dos alertas (D28).
9. O que acontece a uma linha da fila de exceções quando o prazo de aceitação se aproxima sem decisão humana (aceitar, recusar ou deixar expirar). BLOCKED na spec `mirakl-order-acceptance` até ser decidido.
10. Valores por omissão das regras de aceitação: limiar de margem, stock mínimo, margem de segurança e o que conta como preço anómalo.
11. Se a Mirakl Seller API expõe os indicadores oficiais do vendedor, o índice de completude, as mensagens e a comissão por linha, e se a API é a mesma em todos os operadores, mudando só o endereço e a chave (spike do `mirakl-connector`).
12. Validação com 10 a 20 vendedores multicanal (guião em `docs/research/guiao-entrevistas-vendedores.md`): canais, encomendas e SKUs por mês, cancelamentos e recusas, custo preenchido no PrestaShop, faturação usada, envio próprio ou FBA, revenda de marcas já catalogadas.
13. KuantoKusta: termos da API para integradores (uma SaaS pode guardar as chaves de muitos vendedores?), webhooks, atualização de ofertas em lote, e qual dos dois prazos de aceitação está em vigor. Bloqueia o `kuantokusta-connector`.
14. Amazon SP-API: se expõe a taxa de entrega no prazo e o índice de saúde da conta, e quanto demora a revisão de programador público. Afeta o `amazon-connector` e os alertas.
15. Termos Worten e limites de pedidos que a Mirakl aplica hoje a parceiros externos na Worten (complementa a questão 8).
