# Pontos a confirmar antes de especificar

Estado: aberto
Data: 2026-10-23
Liga a: questões 8, 11, 13, 14 e 15 do documento de desenho (`docs/design/2026-10-23-hub-core-design.md`)

A pesquisa não conseguiu abrir as páginas de origem, por isso estes valores vieram de resumos de pesquisa e estão em conflito ou em falta. Cada ponto bloqueia ou altera uma spec. Uma resposta confirmada é registada aqui com a data e a fonte (documento, email ou ecrã), e depois passa para a questão correspondente do documento de desenho.

| # | Ponto | Porque importa | Como confirmar | Bloqueia | Estado |
|---|---|---|---|---|---|
| 1 | Versão em vigor dos termos de vendedor Worten e do anexo XI: prazo de aceitação (24 h nos termos de vendedor contra 72 h nos termos gerais), limiares, número de suspensões até ao encerramento | Valores por omissão das regras Worten (D13, D28) | Back office de vendedor de um cliente da TargX (documentos contratuais descarregáveis), ou gestor de conta Worten | `channel-rules`, `mirakl-order-acceptance` | Aberto |
| 2 | Limites de pedidos que a Mirakl aplica hoje a parceiros externos na Worten, e se há notificações ou só sondagem | Frequência de sincronização e free tier (secção 4.7) | Documentação de programador da Mirakl, ou pergunta ao suporte de vendedores Worten | `mirakl-connector` | Aberto |
| 3 | Se a API de vendedor Mirakl é a mesma em todos os operadores, mudando só o endereço e a chave; se expõe indicadores, índice de completude, mensagens e comissão por linha | Custo de cada operador Mirakl novo e alertas de saúde da conta | `developer.mirakl.com` e a spike do conector, com uma chave de teste de um vendedor real | `mirakl-connector`, `marketplace-kpis` | Aberto |
| 4 | KuantoKusta: termos da API para integradores (uma SaaS pode guardar as chaves de vários vendedores?), webhooks, atualização de ofertas em lote, prazo de aceitação em vigor (24 h ou dois dias úteis), mensalidade de 29,90 € e tabela oficial de comissões | Viabilidade e custo do conector; regras do canal | Email ao suporte de vendedores do KuantoKusta, e a especificação em `seller.kuantokusta.pt/api/kms/` | `kuantokusta-connector` | Aberto |
| 5 | Amazon SP-API: prazo da revisão de programador público; se a API expõe a taxa de entrega no prazo e o índice de saúde da conta; requisitos da conta AWS para notificações | Calendário do `amazon-connector` (o registo começa no passo 2 de D36) e alertas | Registo de programador em Seller Central e documentação em `developer-docs.amazon.com/sp-api` | `amazon-connector` | Aberto |
| 6 | Moloni e InvoiceXpress: API para criar documentos a partir de encomendas, limites, custo para o comerciante, e o que muda com a assinatura qualificada em 2027 | Desenho do `invoicing-routing` | Documentação das APIs e contacto comercial de cada fornecedor | `invoicing-routing` | Aberto |
| 7 | Data em que a assinatura qualificada das faturas em PDF passa a ser obrigatória em Portugal (1 de janeiro de 2027 numa fonte, 2026 noutra) | Argumento comercial com data marcada | Portal das Finanças ou contabilista | Nenhuma spec; afeta a comunicação | Aberto |
| 8 | Leroy Merlin Portugal: o canal do marketplace está ativo para vendedores portugueses, e quais são os limiares de desempenho e a tabela de comissões | Ordem dos operadores Mirakl (passo 6 de D36) | Gestor de conta Leroy Merlin, ou um vendedor que já lá esteja | Operadores Mirakl por EAN | Aberto |
