# Guião de entrevistas a vendedores multicanal

Estado: pronto a usar
Data: 2026-10-23
Liga a: questão 12 do documento de desenho (`docs/design/2026-10-23-hub-core-design.md`) e relatórios em `reports/`

## 1. Para que servem estas entrevistas

Os dois relatórios de pesquisa assentam em termos contratuais, documentação de integradores e queixas de consumidores. Quase não há testemunhos de vendedores portugueses ou espanhóis. As entrevistas existem para medir o que a pesquisa só conseguiu inferir: a frequência real das dores, quanto custam e quanto os vendedores já pagam para as resolver.

Cada entrevista tem de ajudar a fechar uma destas decisões:

| Decisão em aberto | O que a muda | Blocos do guião |
|---|---|---|
| Ordem dos canais depois do envio de stock (D36: Amazon.es antes do KuantoKusta) | Quantos vendedores estão de facto em cada canal, e com que volume | 3.2 |
| Valores por omissão das regras de aceitação (questão 10) | Margens mínimas aceitáveis, stock de segurança usado hoje, o que faz recusar uma encomenda | 3.3 e 3.4 |
| Margem por SKU viável desde o primeiro dia (D27) | Se o custo está preenchido no PrestaShop ou noutro sítio | 3.5 |
| Faturação certificada como terceiro passo (D36) | Que software usam e como passam as encomendas dos marketplaces para lá | 3.2 e 3.6 |
| Quando sobe o PIM | Peso da marca própria face à revenda de marcas já catalogadas, e trabalho de catálogo por canal | 3.2 e 3.3 |
| Free tier e preços (questão 5) | Quanto pagam hoje por mês e por que ferramentas | 3.6 |
| Confiança na aceitação automática e no agente (D13, D29) | Se deixariam o sistema aceitar sozinho, e em que condições | 3.7 |

## 2. Quem entrevistar

Entre 10 e 20 conversas, com esta mistura como alvo:

| Perfil | Quantos | Porquê |
|---|---|---|
| Loja PrestaShop que vende na Worten | 6 a 8 | É o perfil da primeira fatia |
| Dos anteriores, que vende também na Amazon.es | pelo menos 3 | Valida a decisão de pôr a Amazon antes do KuantoKusta |
| Dos anteriores, que vende também no KuantoKusta | pelo menos 3 | Testa o canal que nenhuma ferramenta global cobre |
| Vendedor com marca própria | pelo menos 3 | Mede a necessidade de PIM e de criação de produto |
| Agência que gere vendedores em marketplaces | 2 a 3 | Canal de revenda e atração do PIM |
| Vendedor espanhol | 1 a 2, opcional | Primeiro sinal de Espanha (VeriFactu, operadores Mirakl espanhóis) |

Recrutamento, por ordem de facilidade: clientes da TargX, agências parceiras, vendedores Worten e KuantoKusta contactados pelo LinkedIn ou pelas lojas, e grupos de comerciantes portugueses.

## 3. Guião (45 minutos)

### Regras da conversa

1. **Falar do passado, não de opiniões.** Perguntar "a última vez que" e "mostre como faz", nunca "usaria" ou "pagaria". Uma resposta sobre o futuro é um elogio, não um dado.
2. **Não apresentar o produto antes do bloco 3.8.** Se a pessoa perguntar, responder que se explica no fim.
3. **Pedir para ver.** O back office da Worten, a folha de cálculo de margens, o ecrã do software de faturação. O que se vê vale mais do que o que se conta.
4. **Dinheiro em números atuais.** Quanto pagam hoje, a quem, e quanto custou o último incidente.
5. **Anotar frases literais** entre aspas na folha de síntese.
6. **RGPD.** Pedir autorização para gravar ou tomar notas e explicar que as notas são anonimizadas. Apagar as gravações depois da síntese e não guardar dados de clientes finais que apareçam nos ecrãs.

### 3.1 Abertura (3 min)

"Estamos a estudar como as lojas online que vendem em vários marketplaces gerem o dia a dia. Não há respostas certas, e o mais útil são casos concretos, mesmo os que correram mal."

### 3.2 Perfil (7 min)

1. Em que canais vende hoje? Desde quando em cada um?
2. Quantas encomendas por mês, mais ou menos, em cada canal?
3. Quantos produtos ativos tem? Que parte são marcas de outros e que parte é marca própria?
4. Quem trata das encomendas, do stock e do catálogo? Quantas pessoas, e quantas horas por semana?
5. Onde está o stock: um armazém próprio, a casa, um operador logístico, o FBA da Amazon?
6. Que loja usa (PrestaShop, Shopify, WooCommerce) e que versão?
7. Que software usa para faturar? E um ERP?

Ouvir: volumes, dispersão de canais, onde vive a verdade do stock.

### 3.3 O último dia normal (10 min)

1. Conte-me o que fez ontem, ou no último dia de trabalho, desde que abriu o computador até fechar as encomendas.
2. Como sabe que entrou uma encomenda na Worten? E na Amazon, no KuantoKusta?
3. Como decide aceitar ou recusar uma encomenda? Quanto tempo demora entre a encomenda entrar e ser aceite?
4. Como atualiza o stock em cada canal? Com que frequência?
5. Como faz as etiquetas e como chega o código de seguimento a cada marketplace?
6. Como passa a encomenda do marketplace para a fatura?
7. Qual destes passos lhe tira mais tempo?

Ouvir: trabalho manual, cópias entre ecrãs, frequência das sincronizações, prazos apertados.

### 3.4 Incidentes (10 min)

1. Qual foi a última vez que vendeu algo que já não tinha em stock? O que aconteceu a seguir?
2. Já teve uma penalização, um aviso ou uma suspensão num marketplace? Em qual, quando, porquê? Quanto tempo e quanto dinheiro custou?
3. Lembra-se de uma encomenda aceite tarde ou cancelada por falta de stock no último mês? Quantas houve?
4. Já teve um problema com a fatura de uma venda de marketplace (prazo, documento errado, a Amazon)?
5. Depois desse incidente, mudou alguma coisa na forma de trabalhar? O quê?

Ouvir: custo real dos incidentes e o que já mudaram por causa deles. Quem não mudou nada depois de uma suspensão tem uma dor menor do que parece.

### 3.5 Margem e decisões (7 min)

1. Sabe quanto ganha, depois de comissões e portes, numa venda na Worten? E na Amazon? Como sabe?
2. Pode mostrar onde faz essa conta?
3. O custo de compra de cada produto está registado em algum sítio? No PrestaShop, no ERP, numa folha?
4. Qual foi a última decisão de preço ou de canal que tomou (baixar um preço, tirar um produto de um canal)? Com que dados a tomou?
5. Investe em publicidade (Google, Meta, Worten Ads, Amazon Ads)? Sabe se compensa?

Ouvir: se o custo existe (condição para a margem por SKU), e se as decisões são tomadas com dados ou por instinto.

### 3.6 Ferramentas e dinheiro (5 min)

1. Que ferramentas paga hoje para vender online? Quanto por mês, em cada uma?
2. Já experimentou alguma ferramenta multicanal (Base.com, Lengow, Channable, Koongo, outra) e deixou de usar? Porquê?
3. Se uma ferramenta pudesse desaparecer amanhã sem problema, qual seria? E qual faria mais falta?

Ouvir: o orçamento real e as razões de abandono (preço, configuração, falhas de sincronização, suporte).

### 3.7 IA e confiança (3 min)

1. Usa hoje alguma ferramenta de IA no negócio? Para quê?
2. Imagine que um sistema aceita as encomendas sozinho quando há stock e margem, e só lhe pergunta as duvidosas. O que teria de ser verdade para confiar nisso?
3. O que nunca deixaria um sistema fazer sem a sua aprovação?

Ouvir: as condições de confiança, que alimentam as regras por omissão e a fila de exceções.

### 3.8 Fecho (até 5 min)

1. Se pudesse resolver um único problema na operação, qual seria?
2. Explicar o hub em duas frases e perguntar o que lhe parece mais e menos útil.
3. Teria interesse em experimentar uma primeira versão gratuita com a sua loja? Pedir um compromisso concreto: uma data, acesso de teste, ou indicar outro vendedor.

Ouvir: um compromisso concreto vale mais do que entusiasmo.

### 3.9 Variante para agências

Substituir os blocos 3.2 a 3.5 por:

1. Quantos vendedores gere em marketplaces, e em quais?
2. Que serviços fatura a esses vendedores (entrada no marketplace, catálogo, publicidade, gestão mensal)?
3. Que ferramentas usa para gerir vários vendedores ao mesmo tempo? Quanto custam, e quem paga?
4. Qual foi o último problema de um cliente com um marketplace, e quanto trabalho deu?
5. Revende software aos clientes? Com que modelo (comissão, margem, marca branca)?

## 4. Folha de síntese (uma por entrevista)

| Campo | Resposta |
|---|---|
| Código (sem nome) | |
| Perfil (vendedor ou agência; marca própria ou revenda) | |
| Canais e encomendas por mês em cada um | |
| Produtos ativos | |
| Pessoas e horas por semana na operação | |
| Onde está o stock | |
| Loja, ERP, software de faturação | |
| Sobrevendas no último mês | |
| Penalizações ou suspensões (canal, data, custo) | |
| Aceitação: como e em quanto tempo | |
| Seguimento: como chega ao canal | |
| Custo por produto registado? Onde? | |
| Sabe a margem por canal? Como? | |
| Ferramentas pagas e custo mensal total | |
| Ferramentas abandonadas e porquê | |
| Condições para confiar na aceitação automática | |
| Problema número um, em frase literal | |
| Compromisso obtido no fecho | |

## 5. Como ler o conjunto

Depois de 10 entrevistas, contar:

1. **Canais.** Quantos vendedores estão na Amazon.es com envio próprio, quantos no KuantoKusta, quantos noutros operadores Mirakl. A regra de decisão do relatório multicanal mantém-se como verificação de D36: se a maioria vende na Amazon.es com envio próprio, a ordem decidida confirma-se; se o KuantoKusta aparecer mais do que a Amazon, rever a ordem.
2. **Incidentes.** A mediana de sobrevendas e de recusas por mês, e quantos tiveram penalizações no último ano.
3. **Custo.** Quantos têm o custo por produto registado. Se forem poucos, a importação por CSV e a estimativa por categoria passam a ser o caminho principal, e não o recurso.
4. **Orçamento.** O total mensal que já pagam, para calibrar o free tier e os preços.
5. **Catálogo.** A parte de marca própria. Se for alta, e se as agências pedirem catálogo, o PIM sobe.
6. **Confiança.** As condições mais repetidas para aceitar automaticamente, que passam a ser as regras por omissão propostas na spec `mirakl-order-acceptance`.

Os sinais fortes são comportamentos passados com custo: pagaram, mudaram de ferramenta, contrataram alguém, foram suspensos e mudaram a forma de trabalhar. Os sinais fracos são opiniões e promessas sobre o futuro.
