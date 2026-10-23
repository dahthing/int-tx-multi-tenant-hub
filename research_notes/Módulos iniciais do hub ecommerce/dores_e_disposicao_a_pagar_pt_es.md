# Operational pains, size, software spend and willingness to pay of SMB multichannel ecommerce merchants in Portugal and Spain

> **How these notes were made (read first).** The page-fetch tool failed for every domain tried (DNS resolution error), so I could not read any source page in full. Every finding below comes from search-engine result summaries of the cited URLs, not from reading the documents myself. Treat exact quotes and numbers as "reported by the search index for that URL" and re-check the high-stakes ones (Worten Annex XI thresholds, fees) against the PDFs before using them in a pitch or pricing decision. The shared web-search budget ran out after about 40 queries, so some planned lookups (official Amazon thresholds, the official Worten fee page, ONTSI enterprise data, SMB order/SKU benchmarks) did not run. They are listed under Gaps.
>
> Labels used: **[HARD]** = official statistic, primary contract or terms document, or a survey with a stated method. **[VENDOR]** = vendor or agency marketing, or a vendor-run survey. **[ANECDOTE]** = an individual complaint or forum post. **[INFERENCE]** = my own reasoning.

## 1. What are the most cited operational pains of SMB multichannel sellers in PT/ES, ranked by frequency and severity?

### Takeaway
The pain that comes up most often is the manual work of keeping listings, content, prices and stock right on many channels. The most severe pain on Mirakl marketplaces is meeting the order-acceptance and shipping KPIs, because missing them leads to automatic suspension. Order acceptance and stock sync are tightly linked: overselling forces a cancellation or a refused order, and that is exactly what the suspension KPIs measure. Shipping cost is the most cited logistics concern in Spain. In Portugal, "AI and data analytics" is the investment priority online retailers name most often. No PT/ES-specific survey ranks all these pains together, so the ranking below is partly my own inference.

### Cited Findings
**Manual catalogue and stock work (multichannel, Europe and US)**
- In ChannelEngine's *Marketplace Seller Trends Report 2025* (470 marketplace decision makers, US and Europe), sellers say they lose about **36% of the working week (about 1.8 days) to manual work**: fixing product listings, updating inventory and handling returns. **[VENDOR survey]** — [ChannelEngine](https://www.channelengine.com/en/blog/state-of-marketplace-selling-channelengine-report); [ChannelX](https://channelx.world/2025/10/channelengine-reveal-manual-processes-holding-marketplace-sellers-back/)
- In the same report, about **45% still update product content and pricing by hand in marketplace portals**, **over half rely on spreadsheets or internal tools**, and **91% call automation "very important" or "business critical"**. **[VENDOR survey]** — [ChannelEngine, "Automation or stagnation"](https://www.channelengine.com/en/blog/automation-or-stagnation-hidden-cost-of-manual-marketplace-work)
- The average seller in that sample is active on **6 marketplaces**, and **34% sell on 7 or more**. Keeping product data accurate across channels is named as a major challenge. **[VENDOR survey]** — [WorldEF](https://worldef.com/2025/10/13/most-sellers-active-on-six-marketplaces/); [ChannelEngine, "Marketplace expansion paradox"](https://www.channelengine.com/en/blog/barriers-to-marketplace-growth)
- In the 2026 edition, **39% manage 7 or more marketplaces** (up from 34%), **profit margin has overtaken net sales** as the key success metric, and **82% of marketplace sellers have adopted AI**. **[VENDOR survey]** — [PR Newswire via Morningstar, 22 Sep 2026](https://www.morningstar.com/news/pr-newswire/20260922ph53806/marketplace-sellers-shift-from-expansion-to-profitability-as-ai-adoption-reaches-82); [MarTech Cube](https://www.martechcube.com/82-of-marketplace-sellers-adopt-ai-as-profitability-takes-priority/)
- Linnworks' *State of Commerce Ops 2025* (200+ mid-market US retailers, so not PT/ES) has two top challenges, tied at **43%**: connecting to new marketplaces, and managing order fulfilment and logistics across platforms. **[VENDOR survey, US only]** — [Linnworks](https://www.linnworks.com/report/soco-report-2025/)
- Veeqo says sellers now manage 8 or more channels and that **27% still rely on spreadsheets**. **[VENDOR blog]** — [Veeqo](https://www.veeqo.com/blog/the-truth-about-multichannel-ecommerce-in-2025)

**Stock sync and overselling**
- Many tools marketed as "real-time" actually poll each channel every few minutes. In that window the last unit can sell twice, because each channel keeps its own copy of the stock count. **[VENDOR/trade press]** — [PCTechMag](https://pctechmag.com/?p=96073)
- A 10–15 minute update cycle is scheduled sync, not real-time control, and the risk is concentrated in fast-moving SKUs. Overselling also comes from SKU-mapping errors, location rules, and returns put back on sale before inspection. **[VENDOR]** — [ChannelDock](https://channeldock.com/en/blogs/negative-inventory-multichannel-ecommerce/)
- Marketplaces punish overselling through lower visibility, lower seller ratings or account restrictions. **[VENDOR]** — [Tradebyte](https://www.tradebyte.com/en/blog/how-to-prevent-stockouts-and-overselling/)
- One vendor blog says "23% of multichannel sellers" name inventory-related complaints as their top challenge, but it gives no source or method. **Treat it as unreliable.** — [Ecosire](https://ecosire.com/blog/multi-channel-inventory-sync)
- Portuguese consumer complaints show what this looks like on Worten: marketplace orders cancelled *after the seller accepted them*, and stock-out cancellations compensated with a €10 voucher. **[ANECDOTE, 2020–2026]** — [DECO PROteste](https://www.deco.proteste.pt/reclamar/todas-as-reclamacoes/cancelamento-injustificado-de-/8194844b9f73d63e18); [Portal da Queixa](https://portaldaqueixa.com/brands/worten/complaints/worten-cancelamento-injustificado-de-encomenda-apos-confirmacao-de-compra-160564026)

**Shipping, logistics and returns (Spain and Portugal)**
- Spain, *Logística de E-commerce en España 2025* (Ecommerce News + UNO Logística): **30.7% of companies say delivery costs are their main logistics concern**. Shipping times, operational efficiency and returns management are each cited by **11.54%**. The sample size is not stated. **[Survey, weak method disclosure]** — [Asest summary](https://asest.es/story/noticias-problemas-de-logistica-comercio-electronico/)
- Spain, Correos Express *Tendencias e-commerce 2025-2026* (Oct 2025): **87.8% of Spaniards say they have abandoned an online purchase because of shipping costs**. This is consumer-side data. **[Survey]** — [Marketing4eCommerce](https://marketing4ecommerce.net/abandono-compra-por-gastos-envio/)
- Spain's online return rate was about **25% in 2023, up from 19% four years earlier** (Statista, cited by Asest). **[Secondary]** — [Asest](https://asest.es/story/porcentaje-de-devoluciones-ecommerce/)
- Portugal, CTT e-commerce barometer, 1st wave 2025: **73.3% of companies grew online sales in H1 2025**, and **33.3% already offer same-day delivery**. **[Survey, CTT retailer panel]** — [CTT blog](https://www.ctt.pt/blog/barometro-ctt-e-commerce-primeira-vaga-2025); [ecommerceparatodos.pt](https://ecommerceparatodos.pt/barometro-ctt-2025-crescimento-solido-entregas-rapidas-e-ia-como-prioridade/)
- A May 2026 write-up of the CTT barometer is headlined "e-commerce continues to grow, but puts pressure on logistics, deliveries and returns". I could not read the body. **[Survey coverage]** — [Supply Chain Magazine](https://www.supplychainmagazine.pt/2026/05/07/barometro-ctt-e-commerce-continua-a-crescer-mas-pressiona-logistica-entregas-e-devolucoes/)
- In the *CTT e-Commerce Report 2025*, e-sellers in PT and ES see online as *complementary* to physical retail, and use of social networks and marketplaces to diversify is growing. The retailer sample is small: **70 telephone surveys of retailers in PT, 150 in ES, and 12 face-to-face interviews with PT e-sellers**. **[Survey]** — [CTT press release](https://www.ctt.pt/grupo-ctt/media/noticias/mercado-iberico-de-comercio-eletronico-devera-valer-125-mil-milhoes-de-euros-em-2025); [CTT blog](https://www.ctt.pt/blog/e-commerce-em-2025-as-tendencias-que-estao-a-transformar-o-mercado-iberico)

**Invoicing and tax compliance (mandatory, country-specific)**
- Portugal: selling on Worten or KuantoKusta needs **AT-certified invoicing software and a monthly SAF-T PT submission**, and Worten also requires an active NIF and a regular VAT status. **[VENDOR, Zunapro — confirm with AT]** — [Zunapro Worten](https://www.zunapro.com/portugal/pt/mercado/worten-pt); [Zunapro KuantoKusta](https://www.zunapro.com/portugal/pt/mercado/kuantokusta)
- Worten requires the seller to mark the order "shipped" and **make the invoice available to the customer within 5 days of shipment**. **[HARD, Worten T&C]** — [Worten T&C v2025.10.23](https://www.worten.pt/i/d9ee77d2db3f792f8acfebf7c29e3ffacd1f72ad)
- Spain: VeriFactu was postponed by one year. It now applies from **1 Jan 2027 to companies paying corporate tax**, and from **1 Jul 2027 to everyone else** (about 3.4M self-employed). **[HARD, Dec 2025 press coverage of the government decision]** — [Legal Today](https://www.legaltoday.com/actualidad-juridica/noticias-de-derecho/hacienda-aplaza-un-ano-hasta-2027-la-entrada-en-vigor-del-sistema-de-facturacion-digital-verifactu-2025-12-02/); [Infoautónomos](https://www.infoautonomos.com/blog/verifactu-cuando-es-obligatorio-a-quien-afecta/)
- Online stores are not automatically VeriFactu-compliant because they run on Shopify or WooCommerce. Invoicing apps and extensions need the manufacturer's or integrator's compliance declaration. **[VENDOR, Quipu]** — [Quipu](https://getquipu.com/blog/verifactu-ecommerce/)
- Business associations (Pimec, Cambra de Reus) asked for subsidies and warned against delaying adaptation, which suggests SMBs are cost-sensitive about compliance. **[Press]** — [Diari de Tarragona](https://www.diaridetarragona.com/economia/246839/empresas-relajan-aplazamiento-verifactu-2027_amp.html)

**Where Portuguese retailers want to invest (proxy for what hurts)**
- CTT barometer: **"Artificial Intelligence & Data Analytics" is the top investment priority for the next 6–12 months**. Counts differ between write-ups: 34 of 45 panellists, 39 of 47, or "86%". The leading uses are customer service and personalised recommendations, with customer segmentation rising. Forecasting, dynamic pricing and smart logistics rank lower. **[Survey; figures inconsistent across coverage]** — [ecommerceparatodos.pt](https://ecommerceparatodos.pt/barometro-ctt-2025-crescimento-solido-entregas-rapidas-e-ia-como-prioridade/); [Hipersuper](https://www.hipersuper.pt/2025/08/28/barometro-ctt-e-commerce-2025-indica-que-vendas-online-continuam-a-crescer); [ecommerceparatodos.pt 2026](https://ecommerceparatodos.pt/ecommerce-portugal-2026-barometro-ctt/)

### Inferences
- **[INFERENCE] Proposed pain ranking for a PT-first SMB seller on PrestaShop + Worten/KuantoKusta (+ Amazon/ES Mirakl marketplaces):**

| # | Pain | Frequency | Severity | Why |
|---|------|-----------|----------|-----|
| 1 | Catalogue and listing content per marketplace (EAN matching, mandatory category attributes, PT/ES localisation, images, rejected imports) | Very high: every new SKU and every new channel | High: a product that is not listed sells nothing | 36% of the week lost to manual work; 45% edit content by hand; Mirakl product-vs-offer model and EAN errors (section 2) |
| 2 | Stock and price sync plus order acceptance across channels (overselling leads to refusals and cancellations) | Daily | **Very high on Mirakl**: 95% acceptance and 24 h acceptance time are suspension triggers; cancelling an accepted order can trigger suspension | Worten Annex XI, PcComponentes automated Quality Control (section 2) |
| 3 | Shipping cost, labels, carrier choice and on-time dispatch | Daily | High: the 95% on-time dispatch KPI; shipping cost is the top logistics concern in ES | ES logistics survey, Worten KPIs |
| 4 | Invoicing compliance (PT certified + SAF-T; ES VeriFactu 2027) and the invoice-within-5-days rule | Every order | High but **already solved by cheap, existing PT tools** (Moloni, InvoiceXpress) | Mandatory, commoditised |
| 5 | Returns and incidents | Weekly | Medium: Worten incident-rate KPI (5% in an older version); Miravia sellers report being penalised for accepting returns | ES return rate of about 25% |
| 6 | No consolidated profit/margin view across channels and fees | Continuous | Medium to high, and growing: profit margin is now the #1 metric | ChannelEngine 2026; varied commission levels (4–18%) make margin per channel opaque |
| 7 | Ads/ROAS (Worten Ads, Amazon Ads, Google Shopping) | Weekly for a minority | Medium | Worten Ads went from fewer than 30 to more than 350 sellers out of 3,000+ (section 5), so it is still a minority need |

- **[INFERENCE]** Pains 1 and 2 share one data backbone: a single product and stock master keyed by EAN/SKU, plus the Mirakl APIs. That points to a first module of "PIM-lite + multichannel stock/order sync for Mirakl operators", with metrics read from the same data. The CTT finding that AI and data analytics is the top investment priority suggests the AI and metrics layer is what merchants *want*, while catalogue and stock work is what they *lose time to*.

### Gaps
- I found no PT- or ES-specific survey that ranks multichannel operational pains. ChannelEngine and Linnworks are Europe+US and US-only respectively, and I could not find a Spain breakdown for ChannelEngine.
- I could not read the body of the 2026 CTT barometer coverage on logistics and returns pressure.
- I found no credible survey with a measured overselling or stock-out rate.
- Seller communities (Facebook or LinkedIn groups, Reddit, the Fórum PrestaShop PT/ES) could not be searched effectively. I found no seller-written Reddit threads about Worten.

## 2. What do Worten/Mirakl, KuantoKusta and Amazon sellers specifically complain about, and what are the concrete rules (acceptance deadlines, penalties, cancellation rates, EAN, PT/ES content)?

### Takeaway
Worten's seller terms are strict and in the seller's own words: confirm the order within 24 h, a 95% minimum acceptance rate over 30 days, a 95% on-time shipping rate, provisional suspension, and termination after 3 suspensions. Worten can also withhold payments. Other Mirakl operators in Spain (PcComponentes, MediaMarkt, El Corte Inglés) use the same automated KPI-and-suspension logic. The catalogue is EAN-driven: if the EAN is not already in the operator's catalogue, the seller has to create the product with category-specific mandatory attributes, localised content and image standards. Seller-side complaints are scarce online. The ones I found are about commissions charged wrongly, VAT invoices and support (Miravia, Worten). Consumer complaints show the downstream effect of stock-sync failures: cancellations after the seller accepted the order.

### Cited Findings
**Worten (Mirakl): order flow and KPIs** **[HARD — Worten seller T&C; versions v2025.02.18, v2025.05.19, v2025.10.23 and v2026.08.01 exist, and thresholds differ between them]**
- The seller has **at most 24 hours from receiving the order to validate and confirm it** (v2025.10.23). Worten's general online T&C give a different figure: if the seller does not accept **within 72 h, the contract is automatically resolved and the customer refunded**. — [T&C v2025.10.23](https://www.worten.pt/i/d9ee77d2db3f792f8acfebf7c29e3ffacd1f72ad); [Worten online T&C](https://www.worten.pt/termos-e-condicoes-da-conta-online)
- Annex XI KPI table: **minimum order acceptance rate 95%** (accepted ÷ total orders, last 30 days), **maximum average acceptance time 24 h**, **minimum on-time shipping rate 95%**. Breaching them leads to temporary suspension, and **after 3 suspensions the account can be terminated**. An older version also had a **maximum incident rate of 5%**, with termination after 2 suspensions. — [T&C (Annex XI)](https://www.worten.pt/i/b3f24e1e12d1022185ec802abd0028edec357587); [v2025.10.23](https://www.worten.pt/i/d9ee77d2db3f792f8acfebf7c29e3ffacd1f72ad)
- An earlier version measures a **late-shipment rate below 2.5% over the last 30 days**. Qualification criteria in another clause: active for more than 90 days, late shipments below 2.5%, and an average rating of at least 4 stars over 90 days. Newer versions also weigh how fast orders are confirmed, whether shipping deadlines are met, and customer communication. — [T&C v2025.02.18](https://www.worten.pt/i/b3c1ee3058eba6c68bb6cb829a569a5b87491896); [v2025.05.19](https://www.worten.pt/i/15fed15b26923f22532ec887ca7ce8a89265f5e4)
- **Cancelling an order that was already accepted can lead to provisional suspension** (Annex XI). Worten may **immediately terminate registration and suspend payments to the seller**. A temporary suspension blocks the seller's account from selling, and its length depends on how serious the breach is. — [T&C](https://www.worten.pt/i/b3f24e1e12d1022185ec802abd0028edec357587)
- In the **first month of sales** Worten may run a verification of delivery performance, customer satisfaction (NSS) and ratings. — [T&C](https://www.worten.pt/i/b3f24e1e12d1022185ec802abd0028edec357587)
- The seller sets the delivery lead time (including preparation) in the back office. If it is missed, the customer can set an extra period and then terminate, and the seller must refund everything, including delivery costs, **within 14 days**. — [T&C v2025.10.23](https://www.worten.pt/i/d9ee77d2db3f792f8acfebf7c29e3ffacd1f72ad)
- Click & Collect rules: drop-off 10:00–16:00 on business days, delivery slip on the outside of the package. **The penalty for non-compliance equals the commission charged on that product**. — [T&C v2025.10.23](https://www.worten.pt/i/d9ee77d2db3f792f8acfebf7c29e3ffacd1f72ad)
- One complaint from a seller exists, titled "Incorrect calculation of seller commissions on the Worten marketplace" (title only, body not read). **[ANECDOTE]** — [Portal da Queixa](https://portaldaqueixa.com/brands/worten/complaints/worten-calculo-incorrecto-das-comissoes-de-vendedor-no-marketplace-da-worten-87734123)
- Consumer-side complaints: counterfeit goods sold by a marketplace seller (a Reddit-originated story), wrong items with no reply from the seller, and criticism of Worten's support. These create pressure on Worten to police sellers. **[ANECDOTE]** — [Leak.pt](https://www.leak.pt/worten-marketplace/); [Portal da Queixa](https://portaldaqueixa.com/brands/worten/complaints/worten-marketplace-muito-inseguro-78313522)

**Worten: catalogue, content and fees**
- Mirakl product-vs-offer model: a **product is a unique catalogue item identified by EAN, created once**, and an offer is the seller's price, stock, VAT and SLA for it. If the EAN does not exist, the seller must **create the product with the mandatory Worten attributes for that category**, mapped from the store's data and validated before submission. **[VENDOR, official partner WooCommerce plugin]** — [Worten Conector (WordPress.org)](https://wordpress.org/plugins/worten-conector/)
- Typical Mirakl "EAN not recognised" errors come from pending processing, or from an import failing because mandatory or category-specific attributes are missing or invalid. **[VENDOR]** — [Channable Mirakl guide](https://helpcenter.channable.com/list-advertise/sell-on-marketplaces/mirakl-marketplaces/mirakl-guide-settings-and-solutions)
- Required data: EANs, brand, model, technical specs, images, titles, descriptions, price, stock, delivery info and **country-specific attributes**. Content must be localised. English is accepted as an *additional* language, but native-language content is required where mandated. **[VENDOR, Lengow]** — [Lengow ES](https://www.lengow.com/es/integrations/worten); [Lengow IT](https://www.lengow.com/it/integrations/worten)
- Worten ES: **EAN/GTIN mandatory**, images on a **white background, at least 1000×1000 px**. **[VENDOR, Zunapro]** — [Zunapro ES](https://www.zunapro.com/spain/es/mercado/worten)
- Worten and Fnac PT may require **customer service in Portuguese or English**, and Portuguese VAT applies above local thresholds or when goods are stored in PT. **[VENDOR]** — [Lengow PT guide](https://www.lengow.com/?p=85372)
- Fees: **€29.99/month after the first 12 months, plus a 7–15% commission by category, with no setup fee**. The same source also mentions "6 free months", which contradicts the 12 months. **[VENDOR, unconfirmed]** — [Lengow ES](https://www.lengow.com/es/integrations/worten)
- Scale: **3,000+ sellers on the Portuguese site and 180M annual sessions**. **[VENDOR case study, Mirakl]** — [Mirakl](https://www.mirakl.com/content/customer-stories/worten/)
- On Worten, sellers generally invoice and dispatch themselves. **[Press]** — [4gnews](https://4gnews.pt/marketplace-em-portugal/)

**Other Mirakl operators in Spain (and EU benchmarks)**
- **PcComponentes** uses Mirakl automated Quality Control. It sends a preventive warning as a metric nears its limit and **automatically suspends the shop when the suspension threshold is hit**. Metrics: order acceptance, incident rate, valid tracking and acceptance time. Late-shipment bands appear to start at about **8% (warning) and 10% (suspension)**, but the source table was garbled. **[HARD, operator help centre; numbers uncertain]** — [PcComponentes help](https://marketplacehelp.pccomponentes.com/hc/en-us/articles/20561228339357-Automated-quality-criteria)
- PcComponentes' marketplace conditions make the seller **solely responsible for delivery**, with PcComponentes acting only as intermediary. **[HARD]** — [PcComponentes conditions](https://www.pccomponentes.com/condiciones-generales-de-marketplace)
- **MediaMarkt (ES)**: order acceptance time and the number of rejections are seller KPIs, and missing them "may lead to consequences". **[HARD]** — [MediaMarktSaturn seller docs](https://sell.mediamarktsaturn.com/en-ES/order-and-shop-management/2-order-details-processing-and-invoicing)
- **El Corte Inglés** (ES + PT): a **selective concession model** that generally takes established sellers. It requires Mirakl structured category templates, **mandatory EANs**, image guidelines and **variant-grouping rules (fashion)**. Its focus is brand fit and catalogue quality. **[VENDOR, Lengow]** — [Lengow](https://www.lengow.com/integrations/el-corte-ingles/)
- EU benchmarks for Mirakl operators: Conrad requires **at least 92% confirmed orders over 3 months and at most 3 consecutive automatic declines**. Best Buy requires **95% acceptance and at most 5% late shipments**. **[HARD, non-Iberian]** — [Conrad](https://platform.conrad.de/en/kb/quality-standards/); [Best Buy](https://partners.bestbuy.com/-/seller-hub/set-up-your-store/guidelinesfaqs/defs-key-perf-indicators)

**Miravia (ES, not Mirakl)**
- Commission estimates vary: **6–15%** by category and seller type with no monthly fee (several guides). Lógicos (Nov 2025) gives official stores 7–15% and regular sellers 6–10%. Packlink gives 10–15%. **[VENDOR, inconsistent]** — [Lógicos](https://www.logicos3pl.com/es/articulos/miravia-oportunidad-ganar-dinero); [Packlink](https://www.packlink.es/blog/como-vender-en-miravia/)
- Seller complaints (forum, 2023): **double the advertised commission charged**, incorrect VAT invoices from the platform, an unreachable account manager, **prices or discounts applied without authorisation**, and being penalised for accepting returns. **[ANECDOTE, 2023]** — [Chollometro](https://www.chollometro.com/temas/miravia-opiniones-reales-de-compradores-939012)
- With Delivery by Seller, the seller must meet service levels "to avoid sanctions". **[VENDOR]** — [Channable](https://www.channable.com/es/blog/empezar-vender-miravia)

**KuantoKusta (PT)**
- Commissions of **4–18% by category**. Requirements: a Portuguese IBAN, AT-certified invoicing and monthly SAF-T PT. Scale: about **4M monthly visitors and 5,500+ active sellers**. **[VENDOR, Zunapro — not confirmed by KuantoKusta]** — [Zunapro](https://www.zunapro.com/portugal/pt/mercado/kuantokusta); [Zunapro guide](https://www.zunapro.com/portugal/pt/blog/vender-kuantokusta-guia-vendedores)
- Marketplace stores get a dedicated account manager. **[Press]** — [Forbes PT](https://www.forbespt.com/?p=23115). At launch (2018), KuantoKusta handled customer service for marketplace sales. **[Press, old]** — [ECO](https://eco.sapo.pt/2018/11/14/comparador-de-precos-kuantokusta-estreia-se-como-marketplace/)
- KuantoKusta is positioning around AI to speed up online commerce. **[Press]** — [Dinheiro Vivo](https://dinheirovivo.dn.pt/8451863234/kuantokusta-aposta-na-ia-para-acelerar-comercio-online)

**Amazon (ES)**
- **Order Defect Rate must stay below 1%** over a 60-day window (negative feedback, A-to-Z claims and similar). Breaching it can lead to a warning or suspension. **[VENDOR blogs, not official]** — [Repricer ES](https://www.repricer.com/es/blog/8-maneras-de-mejorar-tu-tasa-de-defectos-en-los-pedidos-de-amazon-guia-completa-del-vendedor/); [SellerAssistant](https://www.sellerassistant.app/es/blog/amazon-order-defect-rate-odr-all-you-need-to-know/)
- Late-shipment target: **below 4%**. **[VENDOR]** — [tool4seller](https://www.tool4seller.com/blog/key-points-to-amazon-seller-appeal-performance-measurement.html)
- **17,000+ Spanish SMEs sell on Amazon**. They exported **€1.2bn in 2024 (+20%)**, **75% sell outside Spain**, and **more than 60% of items sold come from third-party sellers**. **[HARD, Amazon press release, Oct 2025]** — [Amazon ES press](https://press.aboutamazon.com/es/noticias/impacto-economico/2025/10/pymes-espanolas-venden-amazon-1-200-millones-euros-exportaciones-2024)

### Inferences
- **[INFERENCE]** The 24 h acceptance window combined with the 95% acceptance rate means a seller who misses about 1 in 20 orders in a month gets suspended. For a small seller with 100 orders/month, that is **5 missed or refused orders**. Overselling of a single fast SKU across Worten, KuantoKusta and the web store can produce that. This is the highest-severity, most quantifiable pain, and an "acceptance SLA guard" is easy to demonstrate: auto-accept when stock is confirmed, alerts, and stock reservation across channels.
- **[INFERENCE]** Mirakl operators share the same API and KPI concepts (acceptance, acceptance time, on-time shipping, valid tracking, incidents). One Mirakl connector therefore unlocks Worten PT/ES, PcComponentes, MediaMarkt ES, El Corte Inglés, Carrefour (Mirakl-based, not verified here) and others, which gives strong leverage for an Iberian hub.
- **[INFERENCE]** The EAN-first catalogue plus category-specific attributes is the main onboarding friction. A PIM that maps PrestaShop attributes to Mirakl category templates and validates them before export addresses the "36% of the week" manual-work finding directly.
- **[INFERENCE, unverified from my background knowledge]** Amazon's commonly cited pre-fulfilment cancel-rate target is below 2.5% and its valid-tracking-rate target above 95%. I could not verify either in this session.

### Gaps
- I could not confirm which Worten T&C version is in force (v2026.08.01 exists), and could not read the full Annex XI table.
- I found no official Worten fee schedule. The €29.99/month figure comes only from Lengow.
- I found no official KuantoKusta seller terms (fees, KPIs, EAN rules), no Fnac PT/ES or Carrefour ES marketplace KPIs, and no Spanish-language PcComponentes seller complaints.
- I found no seller-written Reddit, Facebook or LinkedIn threads about Worten or KuantoKusta. Online sentiment is dominated by consumer complaints.
- Official Amazon EU account-health thresholds (late shipment, cancellation, tracking) were not verified because the search budget ran out.

## 3. How big is the target segment (stores in PT/ES, platform share, orders and SKUs, share selling on marketplaces)?

### Takeaway
No source gives an official count of online stores in either country. Platform trackers suggest WooCommerce leads in both (roughly 43–49% of detected stores). PrestaShop holds about 10% and is shrinking worldwide, and Shopify is growing fast (+31% YoY in both PT and ES). Spain has roughly 15.5k PrestaShop and 44–46k Shopify stores, and Portugal about 13.6k Shopify stores. On the marketplace side: Worten PT has 3,000+ sellers, KuantoKusta claims 5,500+, and 17,000+ Spanish SMEs sell on Amazon. Portuguese firms sell online much less than Spanish ones (small firms 19.5% vs 30.4%). I found no reliable data on orders per month or SKU counts for SMB sellers.

### Cited Findings
**Platform counts and shares — Spain**
- AfterShip's count of active sites in Spain: **WooCommerce 94.74k (43.41%), Shopify 43.78k (20.06%), custom cart 11.16%, PrestaShop 22.12k (10.14%)**. **[Tracker]** — [AfterShip](https://www.aftership.com/ecommerce/statistics/regions/es)
- Store Leads (as reported): **46,204 active Shopify stores in Spain on 17 Oct 2025, +31% YoY in Q3 2025**. **[Tracker; the summary attributes it to Store Leads, but I could not identify the exact page — re-verify]** — [GemPages Shopify Spain guide](https://gempages.net/es/blogs/shopify/shopify-spain-guide)
- Store Leads, PrestaShop: **Spain has 15,479 stores, 10.4% of all PrestaShop stores worldwide**. The worldwide total is falling: **184,222 (Q1 2025) → 170,545 (Q4 2025) → 148,373 (Q3 2026 to date)**. **[Tracker]** — [Store Leads PrestaShop](https://storeleads.app/reports/prestashop)
- Older BuiltWith figures (via Factorial): WooCommerce 37,900 (26%), **PrestaShop 26,310 (18%)**, Shopify and Ecwid 12% each, and about **135,000 active online stores in Spain (2022)**. WooCommerce overtook PrestaShop, which led until about 2020. **[Secondary, 2022 — old]** — [Factorial](https://factorial.es/blog/plataforma-ecommerce)

**Platform counts and shares — Portugal**
- Store Leads: **13,552 live Shopify stores in Portugal** (updated 9 Jan 2026), 13,616 active in Q4 2025, **+31% YoY**. **[Tracker]** — [Store Leads Shopify PT](https://storeleads.app/reports/shopify/PT/top-stores)
- BuiltWith via Statista (Aug 2024): **WooCommerce Checkout has the largest share of Portuguese ecommerce sites at 24%**, followed by Wix Stores at 17%. **[Tracker via Statista]** — [Statista (proxy link)](https://www-statista-com.ezproxy.canberra.edu.au/statistics/1306891/e-commerce-software-market-share-portugal)
- BuiltWith: 12,591 WooCommerce Checkout sites in PT (undated), and 9,416 Shopify theme detections in PT (Jul 2025). Detections are not the same as store counts. **[Tracker]** — [BuiltWith WooCommerce PT](https://trends.builtwith.com/ru/websitelist/WooCommerce-Checkout/Portugal); [BuiltWith Shopify themes PT](https://trends.builtwith.com/shop/shopify-theme/country/Portugal)
- WMTips (2026): **WooCommerce 49.2%, PrestaShop 9.8%, Shopify 9.3%** of PT ecommerce sites. The method is not stated. **[Tracker]** — [WMTips](https://www.wmtips.com/technologies/e-commerce/country/pt/)

**Market size and how many firms sell online**
- Portugal: online product purchases of about **€12.9bn in 2025 (+6.7%)** and €12.26bn in 2024 (+10%), with **5M+ online shoppers**. **More than 35% of Portuguese sellers say half their sales are online**. These are CTT figures as relayed by InvoiceXpress. **[Survey via vendor blog]** — [InvoiceXpress](https://invoicexpress.com/blog/tendencias-comercio-eletronico-2025/)
- Iberian ecommerce market: **€125.6bn in 2025 (+13.7%), with Spain about 90% of it**. **[HARD-ish, CTT report]** — [CTT](https://www.ctt.pt/grupo-ctt/media/noticias/mercado-iberico-de-comercio-eletronico-devera-valer-125-mil-milhoes-de-euros-em-2025)
- Spain B2C ecommerce: **€110,683M in 2024 (+11.5%)** (ONTSI). IAB Spain 2025: **77% of internet users aged 16–75 buy online (about 27.4M)**. **[HARD]** — [Marketing4eCommerce](https://marketing4ecommerce.net/estudio-ecommerce-espana-2025/); [Emprendedores](https://emprendedores.es/marketing-y-ventas/ecommerce-marketing-y-ventas/ecommerce-espanol-supero-112000-millones-en-2025/)
- Spain, Elogia *Estudio de Marketplaces 2025*: **1 in 2 euros spent online passes through a marketplace**, and **93% of online buyers use marketplaces**. **[Survey]** — [Emprendedores](https://emprendedores.es/marketing-y-ventas/ecommerce-marketing-y-ventas/marketplaces-se-imponen-comercio-electronico/)
- Eurostat via Statista, 2024: share of enterprises with ecommerce sales. **Small firms (10–49 employees): Spain 30.4%, Portugal 19.47%. Medium firms (50–249): Spain 37.92%, Portugal 28.32%**. **[HARD, secondary]** — [Statista](https://www.statista.com/statistics/1350864/smes-b2c-e-commerce-sales-via-a-website-eu-country/)
- Portugal: about **14.5% of enterprises made B2C web sales in 2024**. **[HARD via Statista]** — [Statista](https://www.statista.com/statistics/669930/share-of-enterprises-that-make-b2c-e-commerce-sales-via-a-website-portugal)
- EU-wide only, as no PT/ES split was found. 2025 survey, which measures 2024 sales for firms with 10+ employees: **23.6% had e-sales, 20.7% web sales, 9.3% sold via a marketplace, and 6.3% sold via both their own channel and a marketplace**. Of firms with web sales in 2024, **85.65% used their own site or app and 45% used a marketplace**. E-sales are at **23% for SMEs vs 46% for large firms**. **[HARD, EU-level]** — [Eurostat E-commerce statistics](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=E-commerce_statistics); [Eurostat Digitalisation 2025](https://ec.europa.eu/eurostat/web/interactive-publications/digitalisation-2025)
- An Ecommerce Europe chart may show Portugal at 45% and Spain at 32% in a marketplace-related column, but the labels are ambiguous. **Do not use it without checking.** — [Ecommerce Europe 2024 light](https://ecommerce-europe.eu/wp-content/uploads/2024/10/CMI2024_Complete_light_v1.pdf)
- Portugal, ACEPI/IDC: **70% of companies have an online presence** (Feb 2025 coverage). The forecast that ecommerce "will exceed six million euros in 2027" is almost certainly a units error in the article. The 2022 edition gave 62%. A separate Porto Business School/ACEPI/GoingNext study (Dec 2025) puts **digital at 39% of national production and 23% of employment**. **[HARD-ish]** — [Jornal Económico](https://jornaleconomico.sapo.pt/?p=1273731); [ACEPI 2022](https://www.acepi.pt/media/t21a5elm/estudo-2022.pdf)

**Marketplace seller populations**
- Worten PT: **3,000+ sellers** — [Mirakl](https://www.mirakl.com/content/customer-stories/worten/). KuantoKusta: **5,500+ active sellers (claimed)** — [Zunapro](https://www.zunapro.com/portugal/pt/mercado/kuantokusta). Amazon: **17,000+ Spanish SMEs** — [Amazon ES](https://press.aboutamazon.com/es/noticias/impacto-economico/2025/10/pymes-espanolas-venden-amazon-1-200-millones-euros-exportaciones-2024).
- The ChannelEngine sample averages 6 marketplaces per seller, but it is a mid-to-large, international seller base. **[VENDOR]** — [WorldEF](https://worldef.com/2025/10/13/most-sellers-active-on-six-marketplaces/)

### Inferences
- **[INFERENCE] Rough Portugal-first addressable segment:** Portugal probably has on the order of 25–40k live ecommerce stores, based on about 13.6k Shopify stores at roughly 9–20% share and about 12.6k WooCommerce Checkout sites. Applying PrestaShop's ~10% gives **roughly 2.5–4k PrestaShop stores in PT**. The tighter "multichannel" core is the overlap with the about 3,000 Worten PT sellers and 5,500 KuantoKusta sellers. Many of these will overlap with each other, and some are foreign sellers. A **realistic beachhead of 1–3k Portuguese multichannel SMB sellers** looks plausible. In Spain, the PrestaShop base alone is about 15.5k stores, plus about 44–46k Shopify and about 95k WooCommerce.
- **[INFERENCE]** PrestaShop's worldwide base shrank about 7% within 2025 and is still falling. A PrestaShop-first strategy fits Iberian incumbents, but the product needs WooCommerce and Shopify connectors early, since Shopify is the fastest-growing platform in both countries (+31% YoY).
- **[INFERENCE]** Eurostat excludes firms with fewer than 10 employees, which are most of the target. Real SMB ecommerce participation, including micro-firms, is therefore not captured by the 19.5%/30.4% figures.

### Gaps
- I found no official count of online stores for PT or ES for 2025–2026. The Factorial figure of 135k for ES is from 2022.
- I found no PT- or ES-specific Eurostat figure for the share of enterprises selling via marketplaces (table isoc_ec_eseln2 not retrieved).
- I found no data on typical orders per month, AOV or SKU counts for SMB sellers in PT/ES. This needs to come from primary interviews or from connector vendors' customer stats.
- I found no PrestaShop store count for Portugal from a dated tracker, only shares.

## 4. What do SMB merchants in PT/ES spend per month on ecommerce software, and how price-sensitive are they?

### Takeaway
No PT or ES survey measures monthly software spend. Published price points show a low-cost stack. Certified invoicing in Portugal costs **€6.49–15.90/month** (Moloni). Small-seller marketplace connectors start at **€24/month** (Koongo), and some have free tiers. Shipping can be free and pay-per-label (Packlink PRO). Shopify costs **€24–92/month** for the plans SMBs use. Marketplace fees are mostly commission-based (4–18%), with Worten adding about €30/month. Enterprise multichannel tools are quote-based and much more expensive (Lengow, ChannelEngine, Outvio at about €375/month). Spain's Kit Digital subsidy capped ecommerce solutions at €2,000 for 12 months of service. Price sensitivity looks high: SMBs ask for subsidies to meet compliance, and the invoicing tools they use cost single-digit euros per month.

### Cited Findings
**Platform**
- Shopify Spain (2026): **Basic €32/month billed monthly or €24 billed annually; Grow €92 or €69; Advanced €384 or €289**. Card fees are 2.1% + €0.30 on Basic, 1.8% + €0.30 on Grow and 1.6% + €0.30 on Advanced. Third-party gateway surcharges are 2%, 1% and 0.6%. Plans were restructured in April 2025, when "Grow" replaced the old middle tier. **[VENDOR analyses]** — [eesel.ai](https://www.eesel.ai/es/blog/shopify-pricing); [Impulsa eCommerce](https://impulsaecommerce.com/?p=3231)
- A German 2026 guide gives Starter €5, Basic €33/€25, Grow €88/€66 and Advanced €384/€289, net of VAT. **[VENDOR]** — [Qualimero](https://qualimero.com/blog/shopify-preise)
- PrestaShop and WooCommerce are open-source. I did not retrieve their recurring costs (hosting and paid modules). See Gaps.

**Invoicing (Portugal)**
- Moloni: **Base €6.49/month, Flex €10.90/month (adds ecommerce integration and multi-currency), Pro €15.90/month (adds warehouse management and multiple users)**, plus €1/month per extra user. **[G2 listing, may be outdated]** — [G2](https://www.g2.com/products/moloni/pricing)
- InvoiceXpress PrestaShop module (third-party, by Karma Design): **€119.99 + VAT one-off** (module plus 3 months of support), an optional €50 install fee, then **€18 + VAT per year** for support. The WooCommerce plugin (by Webdados) has a free manual tier and paid Pro tiers per installation. The InvoiceXpress subscription itself costs extra (price not retrieved). **[VENDOR]** — [InvoiceXpress PrestaShop](https://invoicexpress.com/vender-online-faturar-prestashop/); [InvoiceXpress WooCommerce](https://invoicexpress.com/blog/plugin-faturacao-loja-online-woocommerce/)

**Marketplace connectors and feeds**
- Koongo (PrestaShop ↔ Worten): **free plan, paid plans from €24/month**. It syncs titles, prices, images and stock, and pulls orders back into PrestaShop. **[VENDOR]** — [Koongo](https://www.koongo.com/integration/prestashop/worten/)
- Worten Conector (official partner plugin for WooCommerce): syncs catalogue, offers (price and stock) and orders, with a 7-day trial. Price not shown. **[VENDOR]** — [WordPress.org](https://wordpress.org/plugins/worten-conector/)
- Shoppingfeed: Capterra lists a **starting price of 399 (USD, period unclear)**. Lengow is aimed at mid-size and large brands, and its price was not published. Capterra rates ChannelEngine 4.6/5 vs Lengow 4.1/5. **[Review site]** — [Capterra ES compare](https://www.capterra.es/compare/162794/164774/lengow/vs/shopping-feed); [Capterra IE](https://www.capterra.ie/compare/162794/209775/lengow/vs/channelengine)
- BigBuy "Ecommerce Pack" (dropshipping plus a multichannel bundle): **€90 registration plus €69/month** (€57.50 billed semi-annually, €51.75 annually). **[Third-party, possibly outdated]** — [DoDropshipping](https://dodropshipping.com/bigbuy-pricing-plans/)

**Shipping**
- Packlink PRO: **no fixed fee, pay per label**, with an optional subscription for extra features and discounts. **[VENDOR]** — [Shopify App Store](https://apps.shopify.com/packlink-pro?locale=es)
- Outvio: no self-serve pricing. Entry level is said to be **about €4,500/year (about €375/month)**, but this figure comes from a competitor (ShippyPro). **[VENDOR, biased]** — [ShippyPro](https://www.shippypro.com/es/shippypro-vs-outvio)

**Marketplace fees (as a budget competitor to software)**
- Worten: about €29.99/month after 12 months plus 7–15% commission — [Lengow](https://www.lengow.com/es/integrations/worten). KuantoKusta: 4–18% — [Zunapro](https://www.zunapro.com/portugal/pt/mercado/kuantokusta). Miravia: 6–15%, no monthly fee — [Lógicos](https://www.logicos3pl.com/es/articulos/miravia-oportunidad-ganar-dinero). **[VENDOR]**

**Subsidies and price-sensitivity signals**
- Spain, Kit Digital: the **ecommerce solution is capped at €2,000 with 12 months of service required** for Segments I (10–49 employees, €12k total voucher) and II (3–9 employees, €6k total). Segment III (0–2 employees) has a €2k total voucher. **[HARD-ish, regional agency sheets and Holded; mostly 2021–2022]** — [Extremadura Avante, Segment II](https://extremaduraavante.es/wp-content/uploads/2024/05/082-F_KIT-DIGITAL-SEGMENTO-II-2.pdf); [Holded](https://www.holded.com/es/blog/kit-digital)
- Spanish SMB associations asked for subsidies to adapt to VeriFactu. **[Press]** — [Diari de Tarragona](https://www.diaridetarragona.com/economia/246839/empresas-relajan-aplazamiento-verifactu-2027_amp.html)
- Portugal (2019, old): companies knew the benefits of digitalisation, but **64% said they lacked the people needed**. **[Survey, old]** — [ACEPI 2019 summary](https://acepi.pt/media/2ykjfvpu/estudo-economia-digital-2019_resumo.pdf)
- ChannelEngine names "cautious budgets" and resource limits among the barriers to marketplace growth. **[VENDOR survey]** — [ChannelEngine](https://www.channelengine.com/en/blog/barriers-to-marketplace-growth)

### Inferences
- **[INFERENCE] Typical monthly stack of a PT PrestaShop seller on Worten and KuantoKusta**, assembled from the price points above:

| Component | Assumed choice | Monthly cost |
|---|---|---|
| Hosting | Not retrieved; commonly cheap shared or VPS hosting | Unknown |
| Certified invoicing | Moloni Flex/Pro | €11–16 |
| Worten connector | Koongo | €0–24+ |
| Worten subscription | — | about €30 |
| Shipping | Packlink | €0 + labels |
| **Total explicit software** | | **roughly €40–100/month**, before ads and before an agency |

A Shopify-based seller adds €24–92.
- **[INFERENCE]** The Kit Digital cap of €2,000 for 12 months of service works out to about €167/month. That is a "subsidised ceiling" Spanish SMBs got used to for an ecommerce solution. Paying that with their own money is a different matter.
- **[INFERENCE]** A free tier plus an entry paid plan around **€19–49/month** would sit between Koongo (€24) and Moloni Pro (€15.90) on one side and the €375+ enterprise tools on the other. This fits the evidence of low SMB budgets. Higher tiers (€79–149) would need to replace several tools at once: connector, stock sync, labels and metrics.

### Gaps
- I found no PT or ES survey of monthly software spend by SMB merchants. ACEPI, Adigital and ONTSI enterprise reports were not retrieved, and the CTT reports found do not cover it.
- I did not retrieve PrestaShop hosting or module recurring costs, InvoiceXpress subscription tiers, Sendcloud pricing, or Lengow, ChannelEngine, Sales Layer and Plytix PIM prices (all quote-based or not found).
- I found no direct measure of price elasticity or churn on price for Iberian SMB SaaS.

## 5. Is there evidence on willingness to pay for each capability (PIM/feeds, order management, stock sync, WMS, analytics, ads tools, AI assistants)?

### Takeaway
I found no direct willingness-to-pay study for PT/ES. The evidence is indirect: what merchants already pay for similar tools, what they say they will invest in, and how the problem hurts. Merchants clearly pay a little for invoicing (compulsory and commoditised) and for connectors with stock/order sync (€24+/month). Interest in AI and data analytics is high (the #1 investment priority in the CTT barometer; 82% of marketplace sellers using AI), but Portuguese companies' actual AI adoption is low (about 11.5% of firms vs a 20% EU average). Ads management is a minority need on Worten so far. A standalone WMS has no SMB price evidence. PIM is valued mainly as a way to get listed, not as a separate product.

### Cited Findings
- **Stock and order sync with connectors:** the paid entry point is **€24/month** (Koongo, PrestaShop↔Worten) — [Koongo](https://www.koongo.com/integration/prestashop/worten/). The official Worten Conector for WooCommerce is a paid plugin after a 7-day trial — [WordPress.org](https://wordpress.org/plugins/worten-conector/). **91% of sellers say automation is very important or business critical** — [ChannelEngine](https://www.channelengine.com/en/blog/automation-or-stagnation-hidden-cost-of-manual-marketplace-work). **[VENDOR]**
- **PIM and feeds:** Shoppingfeed starts at 399 (USD, per Capterra) — [Capterra](https://www.capterra.es/compare/162794/164774/lengow/vs/shopping-feed). Lengow and ChannelEngine are quote-based and aimed at mid-size and large sellers — same source. **45% edit content and prices by hand in portals** — [ChannelEngine](https://www.channelengine.com/en/blog/automation-or-stagnation-hidden-cost-of-manual-marketplace-work). **[VENDOR]**
- **Shipping and returns tools:** pay-per-label with no fixed fee (Packlink PRO) — [Shopify App Store](https://apps.shopify.com/packlink-pro?locale=es) — vs about €375/month entry for Outvio, as claimed by a competitor — [ShippyPro](https://www.shippypro.com/es/shippypro-vs-outvio). **[VENDOR]**
- **WMS:** the only SMB-priced warehouse feature found is "warehouse management" bundled in **Moloni Pro at €15.90/month** — [G2](https://www.g2.com/products/moloni/pricing). PT fulfilment providers sell same-day dispatch with a 14:00 cut-off and integrations with Worten, Fnac PT and KuantoKusta as an outsourced alternative — [Zunapro fulfilment](https://www.zunapro.com/portugal/pt/centro-de-fulfillment). **[VENDOR]**
- **Analytics and metrics:** **profit margin is now the #1 success metric**, ahead of net sales, for marketplace sellers (2026) — [PR Newswire/Morningstar](https://www.morningstar.com/news/pr-newswire/20260922ph53806/marketplace-sellers-shift-from-expansion-to-profitability-as-ai-adoption-reaches-82). "AI & Data Analytics" is the **top investment priority for the next 6–12 months among PT online retailers** — [ecommerceparatodos.pt](https://ecommerceparatodos.pt/barometro-ctt-2025-crescimento-solido-entregas-rapidas-e-ia-como-prioridade/). **[Survey]**
- **AI assistants:** **82% of marketplace sellers have adopted AI** (ChannelEngine 2026, vendor survey) — [MarTech Cube](https://www.martechcube.com/82-of-marketplace-sellers-adopt-ai-as-profitability-takes-priority/). Preferred AI uses among PT retailers are customer service, product recommendations and customer segmentation. Forecasting, dynamic pricing and smart logistics rank lower — [ecommerceparatodos.pt](https://ecommerceparatodos.pt/barometro-ctt-2025-crescimento-solido-entregas-rapidas-e-ia-como-prioridade/). Eurostat 2025 AI use by enterprises (10+ employees) is **19.95% across the EU, about 11.54% in Portugal (22nd of 28) and about 20.27% in Spain**. The PT and ES figures come via a secondary source — [Eurostat](https://ec.europa.eu/eurostat/statistics-explained/index.php/Use_of_artificial_intelligence_in_enterprises); [Inzonex PT](https://inzonex.co.uk/ai/countries/portugal); [Inzonex ES](https://inzonex.co.uk/ai/countries/spain). **[HARD / secondary]**
- **Ads:** Worten Ads (Mirakl Ads, cost-per-click) claims **+130% seller adoption and +267% monetisation**. A Jan 2026 podcast says it grew from **fewer than 30 to more than 350 advertising sellers in 7 months** and that Worten achieves **800%+ ROAS** on marketplace retail media. Both figures are operator and vendor claims. **[VENDOR]** — [Mirakl case study](https://www.mirakl.com/content/customer-stories/worten/); [Mirakl press release](https://www.mirakl.com/news/worten-chooses-mirakl-ads-to-launch-its-marketplace-advertising-strategy); [Podcast summary](https://podcastaddict.com/episode/https%3A%2F%2Fmedia.transistor.fm%2F62043028%2Fd162d98d.mp3&podcastId=5719463)
- About **a third of EU enterprises advertise online** (Eurostat news, Aug 2025, headline only). **[HARD, EU-level]** — [Eurostat](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20250814-2)

### Inferences
- **[INFERENCE] Willingness-to-pay ranking (highest to lowest):**

| # | Capability | Evidence | WTP and pricing implication |
|---|---|---|---|
| 1 | Stock and order sync with Mirakl KPI protection | Ties straight to revenue and to avoiding suspension; €24+/month already paid | Highest and most proven WTP. The best paid anchor |
| 2 | Listing/PIM-to-marketplace (EAN matching, attribute mapping, validation) | Valued as "getting listed", usually bought bundled in the connector | Weak as a standalone; strong inside the connector |
| 3 | Consolidated profit and metrics per channel (fees, shipping, ads) | Strong stated interest; no price evidence | Good **free-tier hook and retention** feature, hard to charge for alone |
| 4 | AI decision support | High stated priority but low real adoption in PT | Sell as an upsell on top of the data the hub already holds, not as the entry module |
| 5 | Ads management | Small but fast-growing share of Worten sellers advertise | Later module |
| 6 | WMS | SMBs get basic stock-location features bundled in €16/month invoicing or outsource to fulfilment centres | Lowest standalone WTP at SMB scale |

- **[INFERENCE]** Invoicing is mandatory but already cheap and solved (€6–16/month, certified). The hub should **integrate with Moloni/InvoiceXpress (PT) and VeriFactu-compliant tools (ES)** rather than compete. The Worten "invoice within 5 days of shipment" rule is a good automation trigger.
- **[INFERENCE]** Recommended first module, from the combined evidence: **"Mirakl-first multichannel orders + stock sync + catalogue push" for PrestaShop**, with an acceptance-SLA/KPI dashboard and basic per-channel margin metrics in the free tier. This hits the most frequent pain (manual catalogue and stock work), the most severe one (Mirakl suspension KPIs) and the capability merchants already pay for (connectors at €24+/month). It also builds the data foundation for later AI and ads modules.

### Gaps
- I found no PT/ES survey or conjoint study on willingness to pay per capability. This should be validated with merchant interviews or a pricing survey, for example through ACEPI members, PrestaShop PT/ES communities or Worten seller events.
- I found no SMB price points for standalone analytics or BI tools, ads-management tools or AI assistants in the Iberian market.
- The Worten Ads figures cannot be verified independently, and the baselines and periods behind +130% and +267% are unknown.
