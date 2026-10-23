# PIM, WMS/inventory/stock-sync tools for SMB ecommerce, and the Portuguese ERP/invoicing ecosystem

> Research date: 2026-10-23. Method caveat: WebFetch could not resolve any vendor domain from this environment, and direct HTTP was refused by the egress proxy. So **every finding below comes from web-search result summaries, not from reading the full pages**. The session's web-search budget also ran out before the AI-feature checks for Sales Layer and Channable, and before any Logista, Spain-specific or G2 review searches. Prices are excl. VAT unless noted. Labels used throughout: "official" = a vendor-controlled page; "third-party" = aggregator or competitor; "inference" = my reasoning.

---

## 1. PIM: SMB-relevant offerings (price/month, SKU limits, syndication, AI content, PrestaShop connectors)

### Takeaway
Standalone PIMs split into two groups. Group 1 is freemium/SMB (Plytix, Ergonode, Base.com's bundled PIM): a free tier of roughly 100–1,000 SKUs, then a jump to about €150–€500/month. Group 2 is mid-market/enterprise (Akeneo Growth/Enterprise, Sales Layer, Pimberly, Bluestone, inRiver, Salsify): about €8k–€90k+/year, quote-only, with heavy implementation costs. Nobody in either group targets the €10–€50/month band that Portuguese merchants pay for their invoicing/stock software. PrestaShop connectors exist for Akeneo and Sales Layer, mostly through partners or plugins. I found no Plytix–PrestaShop connector.

### Cited Findings

**Plytix (Spain/US freemium PIM, the closest SMB comparable)**
- Plytix's own knowledge base (updated July 2026) lists three plans:
  - **Standard: free**, 500 SKUs, 500 monthly AI credits, 5,000 API calls/hour, unlimited users.
  - **Pro: from €499/month**, 50,000 SKUs.
  - **Enterprise: custom.**
  - Source: [Plytix KB pricing](https://knowledge.plytix.com/about/plytix-pricing/)
- WISEPIM (third-party, checked 2026-10-10) describes **SKU-tier pricing with ten tiers from 100 to 25,000 SKUs**. It says Standard covers 100 SKUs at €0, Pro is €499 for 50,000 SKUs, and there is no list price above 25,000 SKUs. Its API limits are 2,000/h Standard, 15,000/h Pro and 25,000/h Enterprise, which conflicts with Plytix's 5,000/h. Source: [WISEPIM – Plytix pricing](https://wisepim.com/alternatives/plytix-pricing)
- PricingSaaS change logs:
  - The Standard SKU limit was **cut from 1,000 to 500 in March 2026**.
  - It later moved to SKU-tier pricing, with the **free plan reduced to 100 SKUs and Pro "from $149"**.
  - Enterprise went from unlimited SKUs to a custom allocation.
  - Sources: [PricingSaaS 2026W11](https://pricingsaas.com/companies/plytix/diffs/2026W11), [PricingSaaS 2026Q2](https://pricingsaas.com/companies/plytix/diffs/2026Q2)
- Ecommercefastlane (June 2026) says the free plan covers 1,000 SKUs and a **Shopify-specific plan costs $149/month for 10,000 SKUs**. This is probably superseded by the changes above. Source: [Ecommercefastlane Plytix review](https://ecommercefastlane.com/plytix-review/)
- **AI:**
  - Plytix says "Plytix AI is included for free in all accounts", with monthly renewing credits even on the free plan.
  - The AI Content Studio page says 1,000 free credits/month, which conflicts with the KB's 500.
  - It generates and translates descriptions, features, specs and marketing copy using product context, with brand guidelines for tone, terminology and blocked terms.
  - One fashion customer translates English into Danish and German, replacing an agency, and uses **on average 41,000 credits/month**.
  - Sources: [Plytix AI credits](https://www.plytix.com/ai-credits/), [AI Content Studio KB](https://knowledge.plytix.com/?p=5143), [Plytix AI translation page](https://www.plytix.com/?p=31319)
- **PrestaShop:** no Plytix–PrestaShop connector turned up in a search covering Akeneo, Plytix and Sales Layer connectors. Source: [search results incl. Sales Layer / Akeneo connectors](https://saleslayer.com/prestashop-pim-connector)

**Akeneo (open-source origin, now mid-market/enterprise SaaS)**
- Growth and Enterprise editions are **quote-only**. The official Growth price is not published. Source: [rfp.wiki Akeneo vs Sales Layer](https://www.rfp.wiki/retail-ecommerce/product-information-management-solutions/akeneo/sales-layer)
- Third-party estimate: **Growth about $45,000/year**. Zoftwarehub's figure was updated April 2025, and a 2026 article attributes the same number to G2. European guides cite an **entry point around €25,000**. Sources: [Zoftwarehub Akeneo pricing](https://zoftwarehub.com/en-ae/products/akeneo/pricing), [WiserReview Akeneo alternatives 2026](https://wiserreview.com/blog/akeneo-alternatives/)
- Third-party articles make two further cost claims. I could not tell which of the two articles makes which claim.
  - Implementation adds **50–200% on top of the first-year licence**.
  - **Community Edition is free but self-hosted with no support**, and partner setup costs **€15,000–€40,000**.
  - Sources: [PIMinto – true cost of Akeneo 2026](https://piminto.com/blog/akeneo-pricing), [WiserReview](https://wiserreview.com/blog/akeneo-alternatives/)
- **AI:**
  - "AI-enhanced enrichment" generates descriptions from attribute values or from assets (images, PDFs), either in the edit form or through automation rules.
  - On 2025-07-28 the AI settings moved to a central AI Configuration page.
  - Source: [Akeneo Help – AI-enhanced enrichment](https://help.akeneo.com/ai-enhanced-enrichment-in-the-pim)
  - The Spring 2024 release added generative translation into **50+ languages**. The AI capability came from the 2023 Unifai acquisition. Source: [Newsfile – Akeneo Spring 2024 release](https://www.newsfilecorp.com/release/200364/Akeneo-Unveils-Its-Spring-2024-Release-Featuring-AIPowered-Innovations-and-Deeper-Integrations-with-Salesforce)
- **PrestaShop connectors:**
  - **Prestaneo** by Synolia, announced in 2016. Source: [Akeneo blog – Prestaneo](https://www.akeneo.com/blog/prestaneo-akeneo-prestashop-connector)
  - **Webkul's PrestaShop Akeneo Connector, $299**, which covers products, models, categories, families and variants. It works with Community and Enterprise; Serenity (SaaS) is "contact us". Source: [Webkul store](https://store.webkul.com/PrestaShop-Akeneo-Connector.html)

**Sales Layer (Spanish, Valencia)**
- Pricing depends on catalogue size, users and features ("pay only for what you use"). Source: [Sales Layer – PIM budget 2025](https://www.saleslayer.com/pim-budget-2025)
- A third-party listing says pricing **"starts at $1,000"** (unclear whether per month), higher than the PIM average, with a free trial and custom pricing. Source: [Zoftwarehub Sales Layer pricing](https://zoftwarehub.com/products/sales-layer/pricing)
- Capterra shows no Sales Layer price; the $300/user/month figure on that page belongs to PIMinto. Source: [Capterra Sales Layer](https://capterra.com/p/170183/sales-layer/)
- **PrestaShop connector** is in the Sales Layer plugin store or on GitHub and can connect to one or more PrestaShop stores. Source: [Sales Layer PrestaShop connector](https://saleslayer.com/prestashop-pim-connector)

**Pimcore (open core)**
- Community Edition moved from **GPLv3 to the Pimcore Open Core License (POCL)** in 2025. It stays free for non-profits, education, and organisations with **< €5M revenue/year**. Existing Professional/Enterprise/PaaS contracts are unchanged. Sources: [Blackbit – Pimcore licence change](https://www.blackbit.com/en/blog/pimcores-wechsel-von-gplv3-zur-pimcore-open-core-lizenz-hintergründe-und-konsequenzen-für-unternehmen), [Pimcore Professional Edition page](https://pimcore.com/en/products/edition/professional)
- Third-party (WISEPIM, Oct 2026): **Professional $9,900/year** (from €8,400/year on Pimcore's German page) and **Enterprise $29,900/year**. Not confirmed on Pimcore's official pricing page. Source: [WISEPIM – Pimcore pricing](https://wisepim.com/alternatives/pimcore-pricing)

**Ergonode (Polish, headless PIM)**
- Annual pricing per rfp.wiki and Fitgap:
  - **Free €0**
  - **Advance from €5,990/year** (about €499/month)
  - **Scale from €19,990/year** (about €1,666/month)
  - **Enterprise: quote**
  - Billed annually upfront, excl. VAT.
  - Sources: [rfp.wiki Ergonode vs Plytix](https://www.rfp.wiki/retail-ecommerce/product-information-management-solutions/ergonode/plytix), [Fitgap Ergonode](https://us.fitgap.com/products/ergonode-pim)
- The free-tier limits conflict: 1,000 products and 2 users in one source, 2 active users and 5,000 products per Fitgap. Directory listings show "from €599/month" (Software Advice) and "$599/month" (TrustRadius), probably older. Sources: [Software Advice Ergonode](https://www.softwareadvice.com/ecommerce/ergonode-profile), [TrustRadius Ergonode](https://www.trustradius.com/compare-products/ergonode)

**Catsy (US)**
- **Quote-only** packages: Essential, Multi-Store and Enterprise. The tier limits are public but the fees are not. A "~$599/month" figure from directories is unverified. Source: [rfp.wiki Catsy vs Plytix](https://www.rfp.wiki/retail-ecommerce/product-information-management-solutions/catsy/plytix)
- A 2020 listing says custom pricing and no free plan. Source: [SaaSworthy Catsy](https://www.saasworthy.com/product/catsy/pricing)
- Catsy's own blog mentions a generic sample tier, "Pro Plan: $300/month for up to 5,000 SKUs". It is not clearly Catsy's own price list. Source: [Catsy blog – PIM cost](https://catsy.com/blog/pim-cost/)

**Pimberly (UK, mid-market)**
- Official pricing page: **Regular €28,000/year, Pro €56,000/year**, add-ons from £6,000/year. Source: [Pimberly pricing](https://pimberly.com/pricing)
- An aggregator lists Regular at $36k/year (**50,000 SKUs, 20 users**), Pro at $60k and Corporate at $90k. AI add-on estimates run from about $7,500/year, and catalogue automation to about $30k/year. Source: [Fitgap Pimberly](https://us.fitgap.com/products/pimberly-saas-pim-dam)

**Enterprise references (quote-only, all third-party estimates)**
- **Bluestone PIM** partner ballparks:
  - about **$2,500/month** (small: under 5 users, 1 language)
  - about **$3,500/month** (5 languages)
  - about **$9,500/month** (25+ users, 10 languages)
  - AWS Marketplace contracts around $35,400/year.
  - Source: [rfp.wiki Bluestone vs inRiver](https://www.rfp.wiki/retail-ecommerce/product-information-management-solutions/bluestone-pim/inriver)
- **inRiver**: Foundation, Core, Professional and Enterprise tiers with no public prices. Estimated at about **$50k+/year**, and **$70k–$120k+ in the first year**. Sources: [WiserReview](https://wiserreview.com/blog/akeneo-alternatives/), [rfp.wiki Salsify vs inRiver](https://www.rfp.wiki/retail-ecommerce/product-information-management-solutions/salsify/inriver)
- **Salsify**: for a small business with 1–10 users, about **$25k–$75k/year**, plus 20–50% for implementation in year 1 (ITQlick, flagged as a rough guess). Source: [ITQlick Salsify](https://www.itqlick.com/salsify)

**PIM bundled in multichannel tools**
- **Base.com** (formerly BaseLinker), all third-party:
  - **Free tier**: 100 orders, 1,000 products and 3 team profiles, including inventory/invoicing ("ERP, WMS and PIM"), but with **hourly sync**.
  - **Business tier**: unlimited products, **real-time sync**. Its price differs by source: **$39/month + $0.19/order** for the first 1,000 orders then $0.09 (TrustRadius, Fitgap); **€99 + €0.19/order** (EuropeanPurpose); **from £29** (GetApp/ecommercetech).
  - **Enterprise** applies above about **5,000 orders or €250k GMV/month**.
  - Sources: [EuropeanPurpose Base.com](https://europeanpurpose.com/tool/base-com), [Fitgap Base](https://us.fitgap.com/products/028498/base), [TrustRadius Base.com](https://www.trustradius.com/compare-products/base-com), [ecommercetech.io Base](https://ecommercetech.io/apps/base)
  - Base describes itself as a combined ERP/WMS/PIM. Source: [Base Shopify app](https://apps.shopify.com/base-1)
- **Channable**:
  - Price = item/project/channel package + Core plan (Standard/Plus/Pro) + optional modules.
  - **Each variant counts as one item**, and **a channel is one country on one platform** (Amazon in 3 countries = 3 channels). Source: [Channable pricing FAQ](https://helpcenter.channable.com/account-billing/manage-your-subscription/pricing-faqs)
  - Packages range from Small business (500 items, 1 project, 3 channels) to XXL (100,000 items, 15 projects, 75 channels); Enterprise covers 250k–3M items. CSS-only costs €29/shop/month, CSS Pro €99. Source: [WISEPIM – Channable pricing (2026-10-11)](https://wisepim.com/alternatives/channable-pricing)
  - An older (April 2025) third-party figure puts it at roughly **$39–$339/month**. Source: [SoftwareSuggest Channable](https://www.softwaresuggest.com/channable/pricing)
  - Its Worten connector advertises **daily stock updates**. Source: [Channable – Worten integration](https://channable.com/integrations/worten)
- **Lengow**: no public Lengow price was found. Lengow's Worten page describes **Worten's own seller fees: €29.99/month + 7–15% commission by category**. The free-period wording is internally inconsistent (6 vs 12 months). Source: [Lengow IT – Worten](https://www.lengow.com/it/integrations/worten)
  - ChannelEngine's guide confirms the same Worten fees: 7–15% commission, €29.99/month excl. VAT, payouts twice a month. Source: [ChannelEngine Worten guide](https://support.channelengine.com/hc/en-us/articles/9711189737885-Worten-marketplace-guide)
- **e-tailize** (Worten integrator) offers a programme from **€249/month**, with a fee that follows new revenue. Source: [e-tailize – selling on Worten](https://e-tailize.com/integrations/selling-on-worten/)
- **Worten/Mirakl content flow**: BeezUP says Worten **product publication runs every 24 hours, while the offer (price/stock) cadence depends on the subscription**, so the product and offer flows are separate. Source: [BeezUP – Worten product publication](https://help.beezup.com/en/articles/5685512-worten-product-publication)
- Worten claims more than 50M products across 30+ categories on its marketplace. Source: [Worten – O que é o Marketplace](https://www.worten.pt/marketplace/)

### Inferences
- **Price-ladder gap (inference)**. Standalone SMB PIMs go from €0 (100–1,000 SKUs) to about €149–€499/month (Plytix Pro/SKU tiers, Ergonode Advance about €499/month equivalent). Mid-market starts around €700–€2,500/month (Pimcore Pro about €700/month equivalent, Bluestone small about $2,500/month, Akeneo Growth about €2,000–€3,750/month). There is a visible empty band at **€20–€99/month for 500–5,000 SKUs with PT/ES AI copy**. That is roughly what PT merchants already pay for Moloni/PHC GO (Section 3).
- **AI content is already table stakes, not a differentiator, at the top end.** Plytix gives AI credits even on its free plan, and Akeneo has had generation and 50-language translation since 2024. A hub's edge would have to be **marketplace-specific** content: Worten/Mirakl category-attribute mapping, PT-PT rather than PT-BR, ES copy, and validation against marketplace rejection reports. Generic description writing alone would not be enough.
- **PrestaShop is under-served by the SMB PIMs.** Plytix has no PrestaShop connector in the results, Akeneo relies on partner plugins (a 2016 module, Webkul at $299), and Sales Layer has one. A PrestaShop-native PIM-lite would face little direct competition in PT. The market may also be small, since PrestaShop merchants often use the PrestaShop back office itself as their catalogue (unverified).
- **Mirakl's split between products and offers matters for PIM priority (partly inference).** Many Worten sellers resell branded goods that already exist in the catalogue, matched by EAN, so they mainly push *offers* (price and stock). For them PIM is a lower priority than stock and price sync. Own-brand or private-label sellers who must create products are the PIM buyers.

### Gaps
- I could not read Plytix's live pricing page. The free-tier SKU count (100 vs 500 vs 1,000) and whether there are mid tiers (e.g. €49–€199) are unresolved.
- No Sales Layer list price or AI-feature details; the search budget ran out. No Sales Layer PT/ES customer pricing evidence.
- No checks of AI features for Channable or Lengow, and no Lengow subscription price.
- No current G2/Capterra review synthesis for PIM SMB satisfaction.
- No verification of whether Worten requires sellers to create full product sheets, or lets them attach offers to existing EANs; no official Worten seller documentation was found.

---

## 2. WMS / inventory / stock sync for SMB (pricing, tier contents, overselling prevention, PT logistics players)

### Takeaway
"Stock sync" (one stock number pushed to every channel, with buffers and reservations) is cheap or free and bundled with order tools: Base.com free and Business tiers, Veeqo free, Zoho from about $39/month. "WMS" (bins, picking, packing, carriers) is a separate, crowded tier from about €99 to €1,000/month: Shippingbo WMS, Linnworks/SkuVault, Cin7, ShipStation Premium, Ordoro Pro. Vendors put the WMS threshold around **50 orders/day (~1,500/month)**, above most of the target band of 50–5,000 orders/month. Overselling is prevented with real-time or near-real-time sync, reservation on order import, safety buffers, per-channel allocation and order routing. The weak point is sync latency: Base free syncs hourly, the Channable Worten connector daily, the Moloni→Woo scheduled job takes minutes.

### Cited Findings

**Odoo (Inventory app is part of the suite; priced per user)**
- Prices depend on the **IP geolocation** of the visitor, and Europe is priced in EUR. **Custom rose about 20% on 2026-09-24 while Standard was unchanged** (third-party blog). Source: [oec.sh – Odoo price hike 2026-09](https://oec.sh/blog/odoo-price-hike-2026-09)
- A UK G-Cloud procurement document (Jan 2026) lists **Standard £31.10/user/month and Custom £46.80/user/month**. It may be a partner's price list, not Odoo's own. Source: [G-Cloud 15 pricing doc](https://assets.applytosupply.digitalmarketplace.service.gov.uk/g-cloud-15/documents/718848/861677969762032-pricing-document-2026-01-21-1303.pdf)
- US promotional prices are about **$24.90/user/month (Standard) and about $49 (Custom)**, billed annually. Source: [Octura – Odoo pricing 2026](https://octurasolutions.com/resources/odoo-pricing-2026-complete-transparent-breakdown-us-canada)
- A consultancy estimates **€25–€40/user/month** for 2026. Source: [Kolonell – Odoo custom vs standard 2026](https://kolonell.com/en/blog/odoo-custom-vs-standard-implementation-cost-2026)
- Odoo WMS is integrated with sales, purchasing and accounting. Source: [Cleverence – Odoo WMS](https://www.cleverence.com/amp/articles/sistemas-erp-pt/streamlining-warehouse-operations-with-odoo-wms-1938472/)
- The Odoo Mirakl connector (Ecosire) works like this:
  - It computes **sellable stock from stock quants across selected warehouses, net of reserved and incoming stock, plus a safety buffer**.
  - It syncs on a scheduled cron "at the polling cadence each operator permits".
  - Source: [Ecosire – Odoo Mirakl connector](https://ecosire.com/apps/odoo/mirakl-marketplace-connector)

**Zoho Inventory**
- Tiers per GetApp/Software Advice (monthly billing):

  | Plan | Price/month | Orders/month | Users | Warehouses |
  |---|---|---|---|---|
  | Standard | $39 | 500 | 2 | 1 |
  | Professional | $99 | 3,000 | 2 | 2 |
  | Premium | $159 | 7,500 | 2 | 3 |
  | Enterprise | $299 | 15,000 | 7 | 7 |

  Source: [Software Advice Zoho Inventory](https://www.softwareadvice.com/inventory-management/zoho-inventory-profile/)
- Conflicting 2026 figures from Ecosire:
  - A **free tier with 50 orders/month**, 1 user, 1 warehouse.
  - Premium at $249 (10,000 orders), Enterprise at $329 (25,000 orders, 15 warehouses).
  - Extra users at $9/user/month.
  - Source: [Ecosire – Odoo vs Zoho Inventory 2026](https://ecosire.com/zh/blog/odoo-inventory-vs-zoho-inventory-2026-comparison)
- From $29/month with annual billing. Source: [HashMicro Zoho Inventory review 2026](https://www.hashmicro.com/ph/blog/zoho-inventory-review/)

**Cin7 Core (formerly DEAR)**
- **Standard $349/month** (5 users, 2 ecommerce/app integrations).
- **Pro $599/month** (8 users, 2 ecommerce integrations + 1 API integration).
- **Advanced: $999** (Capterra, Eightx) **or $1,199** (ERPResearch, Software Advice).
- Standard covers about **6,000 orders/year** (~500/month).
- Implementation costs **$2,000–$8,000**. No free plan.
- Sources: [Capterra Cin7 Core pricing](https://www.capterra.com/p/133038/Cin7-Core/pricing/), [Eightx – Cin7 cost](https://eightx.co/blog/compare/how-much-does-cin7-cost), [ERPResearch Cin7 Core](https://erpresearch.com/erp-add-ons/distribution/cin7-core/pricing)

**Linnworks / SkuVault**
- Official: plans are **tiered by monthly orders, with overages**. Listing, WMS and SkuVault Enhanced Warehouse are order-based; Forecasting is a flat fee. No public figures. Source: [Linnworks pricing](https://www.linnworks.com/pricing/)
- Third-party estimates:
  - **$150/month** (ITQlick, with onboarding of $2,000–$5,000)
  - **about $200/month** (ERPResearch)
  - **about $449/month** (alternatives sites)
  - Sources: [ITQlick Linnworks](https://www.itqlick.com/linnworks/pricing), [ERPResearch Linnworks](https://erpresearch.com/erp-add-ons/marketplace/linnworks/pricing), [OneCart – Linnworks alternatives](https://www.getonecart.com/linnworks-alternatives/), [Rework – Linnworks alternatives](https://resources.rework.com/tools/commerce/best-linnworks-alternatives)
- SkuVault Core: **price on request**. Owned by Linnworks; Capterra rating 4.2/5 from 80 reviews. Source: [Capterra SkuVault pricing](https://www.capterra.com/p/139964/SkuVault/pricing/)

**ShipStation** (third-party sources conflict; several are competitors)
- Tiers:
  - **Starter $14.99/month for 50 shipments**.
  - **Standard from $29.99**, needed for your own carrier accounts, the API and unlimited automations.
  - **Premium about $349.99/month for inventory and warehouse features**.
- Postage is billed separately. 30-day free trial; −20% with annual billing. Tiers changed around July 2025.
- Sources: [Eightx – ShipStation cost](https://eightx.co/blog/compare/how-much-does-shipstation-cost), [Ship.com vs ShipStation](https://www.ship.com/post/ship-com-vs-shipstation)

**Sendcloud (shipping; strong in Spain and the Benelux)**
- **Free plan: 20 parcels/month, 1 user**. **Lite from €28/month (annual)**. **A per-label fee of €0.07–€0.10** comes on top of carrier postage. Source: [Hackceleration – Sendcloud pricing (June 2026)](https://www.hackceleration.com/labs/sendcloud-pricing)
- Official price update for **Spain/Germany/Austria from 2026-08-01**: **Lite €35–€39, Growth €109, Premium €219–€229/month**. Portugal is not listed. Source: [Sendcloud support – 2026 pricing updates](https://support.sendcloud.com/hc/en-us/articles/47637578774929-2026-Subscription-pricing-updates-for-Spain-Germany-and-Austria)
- PricingSaaS shows €35/€109/€219. Source: [PricingSaaS Sendcloud](https://pricingsaas.com/companies/sendcloud)

**Shippingbo (French OMS+WMS)**
- **All-in-one from €39/month (starter) to €499/month (expert)**. **OMS alone €99–€279**, **WMS alone €99–€399/month**. The same page also mentions "from €9/month", which is inconsistent. Source: [Blog du Modérateur – Shippingbo](https://www.blogdumoderateur.com/tools/shippingbo/)
- It claims 100+ platforms and 30+ carriers (another source says 300+ connectors). The WMS covers bin locations and picking. Source: [La Fabrique du Net – Shippingbo](https://www.lafabriquedunet.fr/logiciel/shippingbo)

**Ordoro (US)**
- **Express $59/month** (shipping, barcode scanning, automation). **Pro $499/month** and **Enterprise $999/month**. **Inventory, kitting, dropship and POs are only in Pro and above.** Sources: [Ordoro platform page](https://www.ordoro.com/welcome/ecommerce-logistics-platform), [CostBench Ordoro free plan](https://costbench.com/software/inventory-management/ordoro/free-plan/)
- Ordoro added a Mirakl integration in March 2025. Source: [Ordoro blog – Mirakl integration](https://blog.ordoro.com/2025/03/19/ordoros-mirakl-integration-automates-marketplace-selling/)

**Veeqo (Amazon-owned; free)**
- **Free: unlimited orders, labels and users.** Amazon funds it through carrier shipping volume. Inventory rules can show lower stock than is on hand, **leave a buffer to prevent overselling**, and **route orders** by channel, stock or destination. Integrations include Amazon, eBay, Etsy and Shopify. Source: [Veeqo features](https://veeqo.com/features)
- **UK Fair Usage Policy**: to use the inventory features, you must ship **at least 50% of online orders** using Veeqo rates or your own carrier connected to Veeqo; the Priority plan removes this. Source: [Veeqo UK – MYO](https://www.veeqo.com/gb/content/myo)

**Base.com stock module**
- The free tier syncs **hourly**; Business syncs in **real time** (third-party; see Section 1). Source: [EuropeanPurpose Base.com](https://europeanpurpose.com/tool/base-com)

**Marketplace stock-sync claims (Worten)**
- **Channable** advertises **daily** stock updates to Worten. Source: [Channable Worten](https://channable.com/integrations/worten)
- **ChannelEngine** advertises **real-time** inventory updates. Source: [ChannelEngine Worten](https://channelengine.com/en/all-marketplaces/worten)
- Connecting requires an approved Worten seller account plus an **API key and Store ID** from the Worten back office, for PT and ES. Source: [e-tailize – sell on Worten](https://e-tailize.com/help/marketplaces/sell-on-worten/)
- Connector vendors advise keeping the ERP/WMS as the stock source of truth, with Mirakl reading availability from it "to reduce oversell risk". Sources: [iWeb – Mirakl](https://www.iweb.co.uk/integrations/mirakl), [Ecosire – Mirakl connector](https://ecosire.com/apps/odoo/mirakl-marketplace-connector)
- A WooCommerce↔Worten (Mirakl) connector plugin exists that syncs catalogue, offers (price/stock) and orders. Source: [WP plugin listing (wenpai mirror)](https://wenpai.org/plugins/wp-json/wp/v2/posts/202352)
- Worten order statuses in Mirakl include "refused", "canceled" and "refunding". Source: [Lengow Help – Worten Mirakl orders](https://help.lengow.com/hc/en-us/articles/12199842176924-Worten-Mirakl-Orders-Management)
- No official Worten cancellation-rate threshold was found. An example Mirakl-based audit template (written for Target Plus, not Worten) uses **< 2% cancellation and 99% on-time dispatch**. Source: [VortexIQ KPI audit (Target Plus)](https://docs.vortexiq.ai/nerve-centre/kpi-cards/target-plus/audit)

**PT logistics / fulfilment / WMS players**
- **CTT Logística** offers e-fulfilment for SMEs and startups (receiving, storage, preparation, dispatch, delivery and returns through one online platform). The article is older. Source: [Executive Digest – CTT](https://executivedigest.sapo.pt/?p=51167)
- CTT bought a Spanish e-commerce logistics/customs operator (CACESA). Source: [Forbes PT](https://www.forbespt.com/?p=146012)
- CTT says its parcels business will overtake mail. Source: [ECO interview](https://eco.sapo.pt/entrevista/negocio-de-encomendas-dos-ctt-vai-superar-correio-certamente-este-ano/)
- Older CTT tie-ups with Shopkit and Facestore connected their shops to CTT dispatch. Sources: [Jornal de Negócios – CTT/start-up](https://www.jornaldenegocios.pt/empresas/telecomunicacoes/detalhe/ctt-entram-em-parceria-com-start-up-para-crescer-no-comercio-online), [Executive Digest – Facestore](https://executivedigest.sapo.pt/?p=22070)
- **No public CTT fulfilment price list was found.**
- **ZunaPro** (Lisbon/Porto 3PL): storage **from €2.30/month**, ships via CTT, Chronopost, DPD, Nacex, MRW and DHL, **€1.80 per processed return**, packaging at cost. The pick/pack fee is not public. This is marketing material. Sources: [ZunaPro fulfilment centre (EN)](https://www.zunapro.com/portugal/en/fulfillment-center), [ZunaPro (PT)](https://www.zunapro.com/portugal/pt/centro-de-fulfillment)
- **ShipBob** has a Portugal location with quote-only pricing. Source: [ShipBob Portugal](https://www.shipbob.com/au/shipbob-locations/europe/portugal/)
- **Shopogolic Portugal** (Aveiro) is a 3PL offering pick/pack, FBA prep and returns. Source: [CargoLinked](https://cargolinked.com/directory/shopogolic-portugal-323f63df)
- An IMARC report exists on the Portugal e-commerce fulfilment market; no figures were extracted. Source: [IMARC](https://www.imarcgroup.com/report/en/portugal-e-commerce-fulfillment-market)
- **PT WMS software**: no clearly Portuguese SMB WMS vendor surfaced. Capterra PT lists **WISE** (4.4/5 from 21 reviews, supports European Portuguese) and **Focus WMS** (3.6/5 from 16 reviews); their headquarters are not stated. Sources: [Capterra PT – WISE](https://www.capterra.pt/software/77719/wise), [Capterra PT – Focus WMS](https://www.capterra.pt/software/71930/focus-wms)
- CTT integrations from invoicing tools: Vendus–CTT and InvoiceXpress–CTT. Sources: [Vendus – CTT integration](https://www.vendus.pt/blog/integracao-com-ctt/), [InvoiceXpress – CTT](https://invoicexpress.com/ctt/)

### Inferences
- **Two products hide under "WMS" (inference):**
  - **(a) Multichannel stock sync / inventory-lite**: one stock ledger, reservations, buffers, push to PrestaShop and Worten. It extends the orders module the founder is already building, uses the same connectors, and competes with free offerings (Veeqo, Base free) mostly on PT/Worten fit and latency.
  - **(b) Warehouse execution**: bins, picking, packing and carrier labels. That market is crowded at €39–€1,000/month (Shippingbo, Sendcloud, ShipStation, Ordoro, Linnworks) and needs carrier integrations.
  - For a solo founder, (a) is high-value and low-cost. (b) should be partnered: Sendcloud for labels, a 3PL or CTT for fulfilment.
- **Latency is the competitive gap to measure.** Base free syncs hourly, Channable→Worten daily, the Moloni plugins run on scheduled jobs. A PT merchant selling the same SKU on PrestaShop and Worten with low stock is exposed to overselling between sync runs. Reserving stock the moment an order is imported, with a push to every channel within minutes, is a concrete selling point.
- **Free and low-cost anchors set price expectations.** Veeqo is free (but UK/US-centric; no PrestaShop or Worten seen in its integration list), Base is free up to 100 orders, Zoho starts at $39 and Sendcloud has a free tier of 20 parcels. A stock-sync add-on above about €30–€50/month for a 50–500 orders/month merchant would be hard to justify unless it is bundled.

### Gaps
- No Logista, Rangel, Luís Simões or other PT 3PL e-commerce pricing; search budget exhausted.
- No PT-specific Sendcloud price (only ES/DE/AT and UK).
- No official Worten or Mirakl documentation on required stock-update frequency, how stock is decremented on order acceptance, or oversell penalties.
- No confirmation of Odoo's live EUR prices for Portugal, or of the "One App Free" plan (which covers a single app such as Inventory; known from prior knowledge, unverified here).
- No Base.com, Veeqo or Zoho evidence for PrestaShop and Worten connectors specifically; not searched.

---

## 3. Portuguese ERP/invoicing ecosystem: stock modules, ecommerce/marketplace integrations, cost, source of truth

### Takeaway
PT SMB merchants run their fiscal and stock records in cheap, AT-certified cloud invoicing/ERP tools. These typically cost about **€4–€26/month** (Moloni, KeyInvoice, InvoiceXpress, Vendus, TOConline), or **€40–€95/month and up** (Cegid PHC GO). Cegid Jasmin costs **€119–€599/year**, and Sage 50 desktop/cloud is quoted. Most of them have a stock module. Their ecommerce integrations target WooCommerce, PrestaShop and Shopify, and they are invoice-first: orders go into the ERP to issue invoices, and stock goes back to the store, often by cron or webservice. I found **no evidence of native Worten/Mirakl integrations in any PT invoicing/ERP tool**. In practice the "source of truth" for stock is split between the ERP/invoicing tool and the PrestaShop back office, with marketplaces fed by a third tool such as Channable, Lengow, Base or an integrator.

### Cited Findings

**Moloni (market-leading PT cloud invoicing)**
- Plan prices:

  | Plan | Annual billing (per month) | Monthly billing | Other |
  |---|---|---|---|
  | Base | from €3.50 (plans page) or €6.49 (campaign page) | no monthly option | |
  | Flex | €10.90 (€130.80/year) | €20.99 | |
  | Pro | €15.90 | €25.99 | €21.67 quarterly |

- Extra users cost €1/month. 30-day trial. Excl. VAT. New prices from 2024-12-01 affected annual billing only.
- Sources: [Moloni – Planos](https://www.moloni.pt/planos/), [Moloni – campaign plans](https://www.moloni.pt/campanhas/planos-e-precos/), [Moloni changelog – price update](https://www.moloni.pt/changelog/pagina-web-moloni-pt/2024-4-trimestre/atualizacao-dos-precos-moloni)
- **PrestaShop plugin**:
  - Syncs articles through **WebServices triggered periodically (e.g. by CRON)**.
  - A tool to **update articles and stocks via WebServices** was added in 2023, and a 2024 Q1 update lets you choose which fields to update.
  - An "automatic product sync" option sits in the Advanced tab, and an import creates or updates products in PrestaShop.
  - Sources: [Moloni – configure PrestaShop plugin](https://www.moloni.pt/suporte/como-configurar-o-plugin-moloni-no-prestashop), [Moloni changelog – PrestaShop webservice URL](https://www.moloni.pt/changelog/plugins/2024-1-trimestre/prestashop-adicionada-janela-para-gerar-url-de-webservice)
- **WooCommerce**: automatic stock sync runs after each Moloni stock movement **through a scheduled event, which "may take a few minutes"**. Source: [Moloni – WordPress stock sync](https://www.moloni.pt/suporte/moloni-e-wordpress-sincronizacao-de-stocks)
- A "Moloni Spain" module is on PrestaShop Addons, so Moloni operates in ES too. Source: [PrestaShop Addons – Moloni Spain](https://addons.prestashop.com/pt/contabilidade-cobranca/88776-moloni-spain.html)
- The Shopify app is made by a third party (Webinfor). Source: [Shopify – Moloni Portugal](https://apps.shopify.com/moloni-portugal)
- Moloni has a dedicated "Lojas Online e eCommerce" page. Source: [Moloni – Lojas online](https://www.moloni.pt/campanhas/lojas-online/)

**InvoiceXpress (PT, certified invoicing)**
- Plans are distinguished **by number of documents per month**: X3, X1K … X20k/X30k/X40k, **all with unlimited users**.
- **X3 costs €3/month for 3 documents**; the EN page says 1 document, which conflicts. **X1K costs €43/month** (about €36/month with annual billing). Excl. VAT. Prices were updated on 2023-03-31.
- A free entry plan was launched.
- Sources: [InvoiceXpress – Planos e preços](https://invoicexpress.com/planos-precos/), [InvoiceXpress – EN pricing](https://invoicexpress.com/en/pricing/), [InvoiceXpress – free plan blog](https://invoicexpress.com/blog/plano-gratisinvoicexpress-novos-planos/)
- It markets itself as "Software de Faturação Certificado". Stock/inventory features did not appear in the results. Source: [InvoiceXpress plans page](https://invoicexpress.com/planos-precos/)

**Cegid Jasmin (formerly Primavera Jasmin; Cegid acquired Primavera)**
- The **Dec 2023 PT price table** (per company per year, excl. VAT) lists **Standard €119, Plus €227, Premium €299, Ultimate €599**. An inventory line shows 194/227/39 € (the column mapping is unclear; an extra inventory user may be €39). Source: [Primavera – Tabela de Preços PT, Dec 2023 (PDF)](https://www.primaverabss.com/pt/Userfiles/Downloads/Tabela_Precos_PT_01Dezembro23.pdf)
- Ultimate inventory features: stock adjustments, valuation (weighted average cost), **multi-warehouse support and inter-warehouse transfers**. Source: [Cegid Jasmin – features](https://www.jasminsoftware.pt/ver-funcionalidades/)
- A "Compras e inventário" training course costs €45 + VAT. Source: [Cegid Academy – Jasmin Compras e Inventário](https://pt.primaverabss.com/pt/formacoes/catalogo/cegid-jasmin-compras-e-inventario/)
- Prices may have changed since 2023; no 2026 table was found.

**Cegid PHC GO**
- Three plans: Corporate, Advanced and Enterprise. Prices are inconsistent across the vendor's own pages:
  - **Corporate**: about **€38.36/month on a 3-year subscription**, **€45.83/month annual**.
  - **Advanced**: about **€78.81/month (3-year)**, **€94.08/month annual**.
  - **Enterprise**: **€2,579.04/year (3-year)**.
  - Annual equivalents of €549.96 and €1,128.96 are also quoted.
  - Sources: [PHC GO planos (PT)](https://phcsoftware.com/pt/phc-go/phc-go-planos), [PHC GO planos extenso](https://phcsoftware.com/pt/phc-go/phc-go-planos-extenso)
- Stock management is included, with more stock features in Advanced and Enterprise. **Shopify stock integration requires Advanced and costs €16.5/month (3-year)**. Source: [PHC GO Store – Shopify stock integration](https://phcsoftware.com/pt/phc-go-store/software-de-shopify-integracao-stocks)

**Sage 50 (PT)**
- An e-commerce connector links to **Shopify, PrestaShop and WooCommerce**. Orders and **stock levels are tracked and synced automatically**. Sage 50 Loja covers invoicing, stock, customers and suppliers, on desktop or cloud. Source: [Sage PT – e-commerce integrations](https://www.sage.com/pt-pt/produtos/sage-50cloud/funcionalidades/integracoes-ecommerce/)
- Published prices are for new desktop customers; **cloud pricing is on request**. Source: [Sage PT – preço](https://www.sage.com/pt-pt/produtos/sage-50cloud/preco/)
- A user forum thread asks whether the WooCommerce integration needs an extra paid module; no official answer was given. Source: [Sage Community Hub thread](https://communityhub.sage.com/pt/sage-50cloud-portugal/f/forum-geral/258136/integracao-woocommerce/655536)

**Vendus (PT POS/invoicing)**
- The plan with online-store integrations costs **€15 + VAT/month or €131.88 + VAT/year per point of sale**, and includes purchases and stock management. Source: [Vendus help – preço](https://www.vendus.pt/ajuda/preco-vendus)
- Integrations (Jumpseller, Shopkit, Weasy, Shopify, CTT) need the **Flex or Pro plans**, and any API use needs Pro. **Vendus Go! is free, without integrations.** Sources: [Vendus – Jumpseller](https://www.vendus.pt/blog/integracao-jumpseller/), [Vendus – Weasy](https://www.vendus.pt/blog/integracao-com-weasy-plataforma-de-criacao-de-lojas-online/amp/), [Vendus – Shopkit](https://www.vendus.pt/blog/shopkit-criar-loja-online/)

**TOConline (OCC, the accountants' order, platform)**
- **Outdated 2019 price table**: commercial management (sales, purchases and **stock**) at an indicative **€5/month (€60/year) per tax number (NIF)**. Source: [OCC – TOConline price table v9 (PDF, 2019)](https://portal.occ.pt/fotos/editor2/toconline_precario_v9.pdf)
- The suite's modules include Stocks, which feed its assisted accounting. Source: [OCC – TOConline landing](https://www.occ.pt/tocoline_landing_page/toconline-lp.html)
- The "TOConline for WooCommerce" plugin exports products (prices, SKUs, tax) and invoices; **stock sync is not listed**. No PrestaShop integration was found. Source: [WordPress.org – TOConline for WooCommerce](https://wordpress.org/plugins/toconline-for-woocommerce/)

**KeyInvoice (PT)**
- Annual licences quoted as monthly equivalents: **StartUp €4.73, Silver €7.26, POS Gold €10.78, POS Platinum €14.19/month + VAT**. A 50% annual-subscription campaign ran until 2026-10-25. Another page shows €3.90/€5.90/€8.00/€12.90. Sources: [KeyInvoice home](https://www.keyinvoice.com/), [KeyInvoice – preço](https://www.keyinvoice.com/programa-faturacao-preco.php)
- It has multi-company and multi-store pages. Stock and Worten integration details were not found. Source: [KeyInvoice – multiempresa/lojas](https://www.keyinvoice.com/software-de-faturacao-multiempresa-lojas.php)

**Worten integration from the PT ERPs**
- Searches for KeyInvoice, Worten and stock returned only third-party marketplace connectors (Channable, ChannelEngine, e-tailize, BigBuy). **No PT invoicing/ERP vendor with a native Worten connector was found.** Sources: [Channable Worten](https://channable.com/integrations/worten), [ChannelEngine Worten](https://channelengine.com/en/all-marketplaces/worten), [BigBuy academy – Worten sync](https://www.bigbuy.eu/academy/en/?p=509)

### Inferences
- **Source of truth today (inference, from how the integrations are designed).**
  - Small PT merchants (Moloni/KeyInvoice/InvoiceXpress tier) usually keep stock in **PrestaShop** or in **Moloni**, pushed to the store by plugin or cron.
  - Larger SMBs (PHC GO, Jasmin, Sage 50) keep it in the **ERP**, which has multi-warehouse support.
  - Marketplace stock (Worten) then comes from a **separate feed tool** (Channable daily, Lengow, Base, ChannelEngine).
  - The result is **two or three systems with independent sync loops**. That is exactly the oversell-prone setup a hub with a single stock ledger could fix.
- **The hub should integrate with, not replace, the fiscal ERP.** In PT, invoices must come from certified software (the vendors stress "certificado"; the AT certification requirement is prior knowledge, not verified here). So the realistic positioning is: **hub = operational stock and catalogue truth → ERP = fiscal documents**, with Moloni/InvoiceXpress/Vendus/PHC GO connectors as a selling point.
- **Willingness-to-pay anchor.** The tools merchants already pay for cost €4–€26/month (Moloni Pro €25.99 monthly; KeyInvoice €4.73–€14.19; Vendus €15) and €40–€95/month for PHC GO. A hub priced at roughly **€0 free / €29–€49 / €79–€149** would sit between "invoicing" and "Base/Channable/Shippingbo". Above about €150/month the hub would compete with Cin7, Linnworks and Pimberly-class tools that PT SMBs rarely buy (inference).

### Gaps
- Current (2026) Cegid Jasmin and TOConline price lists; only 2023 and 2019 tables were found.
- Whether Moloni's PrestaShop plugin pushes stock automatically or only through a cron-triggered webservice; PrestaShop-specific documentation was not found.
- Whether PHC GO, Jasmin or Sage have PrestaShop-native or Worten connectors (PHC GO's Shopify stock connector is confirmed; PrestaShop not checked).
- No survey or market-share data on which tool PT merchants use as their stock master. I found no reliable source; this needs primary research (merchant interviews).
- Spain equivalents (Holded, Sage ES, A3, Factorial) were not researched.

---

## 4. Demand evidence: at what catalogue size does PIM become necessary, and at what order volume WMS?

### Takeaway
Vendor rules of thumb (mostly from PIM and WMS sellers, so biased toward "earlier"):
- **PIM**: from about **100–500 SKUs** when the catalogue changes often, is sold on **3+ channels**, or is edited by **several people**. "Dedicated PIM is necessary" at **1,000–5,000+ SKUs**.
- **Lightweight WMS**: from about **50 orders/day** (~1,500/month). **Full WMS**: above about **500 orders/day**. Some vendors put the strain point at **300–500 orders/month** when orders are complex (multi-line, variants).
- Against the target band (50–5,000 orders/month, 100–20,000 SKUs), multichannel stock sync is relevant to almost everyone. A PIM matters mainly to merchants with their own catalogue and several channels or languages. Full WMS matters only to the top of the band.

### Cited Findings
- **Plytix**: fewer than 100 stable SKUs is usually manageable without a PIM. **100+ SKUs with frequent changes, 3+ channels, or 5+ people editing content** is a strong signal. Source: [Plytix KB – When do you need a PIM](https://knowledge.plytix.com/pim/buying/when-do-you-need-a-pim/)
- **Plytix blog**: "if you have or plan to have more than **150 SKUs**, it's probably the right time to invest". Small single-channel companies with few variations can manage without one. Source: [Plytix – When to get PIM](https://www.plytix.com/blog/when-to-get-pim)
- **Bluestone**: under 100 SKUs, a reliable spreadsheet plus a description template can be enough. **More than 10,000 SKUs on 3+ channels → start with a PIM.** For small, stable catalogues on 1–2 channels, a DAM alone is reasonable. Sources: [Bluestone – When should I consider PIM](https://www.bluestonepim.com/when-should-i-consider-using-a-pim-solution), [Bluestone – DAM vs PIM](https://www.bluestonepim.com/blog/dam-vs-pim-which-platform-wins-for-product-content)
- Another source sets **500 SKUs with many attributes, media or product relations** as the point to "seriously consider" PIM. I could not tell which of these two sources makes the claim. Sources: [Univio – Who should be interested in PIM](https://univio.com/blog/who-should-be-interested-in-pim), [Gepard – when a store needs PIM](https://gepard.io/resources/when-ecommerce-store-needs-pim)
- **Ultracommerce**: dedicated PIM becomes necessary at **over 1,000–5,000 SKUs**, or with complex enrichment. Source: [Ultracommerce – PIM's role](https://ultracommerce.co/resources/blog/understand-pim-s-role-in-streamlining-e-commerce-success)
- **Sendcloud**: consider a "WMS Lite" at **over 50 orders/day** or with multiple fulfilment centres. Full WMS makes sense **above 500 orders/day or 10,000/year**. Below 50/day "the investment is often too high". Source: [Sendcloud – WMS software overview](https://www.sendcloud.com/en_uk/wms-software/)
- **ChannelDock** (a WMS vendor): the strain point is **300–500 orders/month**. The real trigger is **exception volume**: 600 simple single-SKU orders can survive on basic tools longer than 150 multi-line fashion orders. Source: [ChannelDock – outgrowing webshop warehouse tools](https://channeldock.com/en/blogs/outgrow-webshop-warehouse-tools/)
- **Niblin** (comparison site) positions ShipStation for **50–200 orders/day** and Deposco for **300+/day**. Overselling, picking errors and multi-location sync problems are the signs you need a WMS. Source: [Niblin – best WMS for ecommerce](https://niblin.com/blog/best-wms-for-ecommerce)
- Plytix's own customer evidence on AI demand: one fashion brand spends about **41,000 AI credits/month** on translation into DA/DE, replacing an agency. Source: [Plytix AI translation page](https://www.plytix.com/?p=31319)
- **Market demand signal on Worten**: Mirakl's case study title claims Worten grew **seller adoption by 130% and monetisation by 267% with Mirakl Ads**. This is a vendor case study, but it suggests a growing pool of PT/ES sellers needing multichannel tooling. Source: [Mirakl – Worten customer story](https://www.mirakl.com/content/customer-stories/worten/)

### Inferences
- **Mapping to the target band (inference).** At 50–5,000 orders/month (≈2–170/day), most merchants sit **below Sendcloud's 50/day WMS-Lite line**. Only the top third reaches it, and almost none reach "full WMS". At 100–20,000 SKUs, **most cross the vendors' 100–500 SKU PIM line**. But the PIM trigger depends on **channels × languages × own catalogue**, and Worten resellers attaching offers to existing EANs need less PIM.
- **Ordering signal for the founder (inference).**
  1. **Stock sync**, as a direct extension of the orders module. It reuses the same PrestaShop and Worten connectors, every multichannel merchant needs it on day one, it addresses a monetisable failure (cancellations and seller-score damage on Worten), and it is the data foundation for metrics and AI (stock cover, reorder suggestions).
  2. **PIM-lite with AI content** (PT-PT/ES descriptions and translations, Worten attribute mapping and completeness checks). It targets own-brand merchants and Spain expansion, and is cheaper to differentiate via AI.
  3. **Warehouse execution** (bins, picking, carriers): later, or through partners (Sendcloud, CTT, 3PLs).
- Vendor thresholds are marketing-influenced: PIM vendors push "earlier", WMS vendors talk about "exceptions". No independent survey of PT or ES SMB adoption was found.

### Gaps
- No independent (non-vendor) survey of PIM or WMS adoption by catalogue size or order volume, and nothing PT/ES-specific (e.g. ACEPI/IDC e-commerce studies were not searched).
- No data on the share of Worten sellers who are resellers (EAN matching) versus own-brand (product creation); this matters for PIM demand.
- No G2/Capterra review mining for "overselling" or "stock sync" complaints by PT/ES merchants.

---

## 5. Implementation complexity and integration cost signals: building PIM vs WMS as a solo developer

### Takeaway
Little direct evidence exists. The market signals are:
- Incumbents charge large implementation fees: Akeneo +50–200%, Cin7 $2k–$8k, Linnworks onboarding $2k–$5k.
- Even mature connectors rely on scheduled polling with buffers (Odoo↔Mirakl, Moloni cron).

My inference: **multichannel stock sync is the smallest well-bounded build**. It is a ledger plus reservations plus a per-channel push, reusing the order connectors. **PIM-lite** is moderate: the hard part is per-marketplace attribute mapping, not storage. **Full WMS** is the largest: bins, picking flows, scanners, carrier label APIs and returns, against a crowded market.

### Cited Findings
- **Implementation cost signals from incumbents:**
  - Akeneo: implementation adds 50–200% on top of the first-year licence; Community partner setup costs €15k–€40k. Sources: [PIMinto](https://piminto.com/blog/akeneo-pricing), [WiserReview](https://wiserreview.com/blog/akeneo-alternatives/)
  - Cin7 Core: one-time implementation of $2,000–$8,000. Source: [Eightx – Cin7](https://eightx.co/blog/compare/how-much-does-cin7-cost)
  - Linnworks: onboarding of $2,000–$5,000, priced on the "best fit package". Sources: [ITQlick Linnworks](https://www.itqlick.com/linnworks/pricing), [Rework](https://resources.rework.com/tools/commerce/best-linnworks-alternatives)
  - Salsify: implementation adds 20–50% in year 1. Source: [ITQlick Salsify](https://www.itqlick.com/salsify)
- **Variant counting**: Channable bills each variant as an item (one T-shirt in 3 sizes × 3 colours = 9 items). PIM and stock models must be variant-level. Source: [Channable pricing FAQ](https://helpcenter.channable.com/account-billing/manage-your-subscription/pricing-faqs)
- **Stock computation pattern**: the Odoo↔Mirakl connector computes **sellable = on hand across selected warehouses − reserved (± incoming) − safety buffer**, then pushes it on a cron at each operator's allowed cadence. Source: [Ecosire – Odoo Mirakl connector](https://ecosire.com/apps/odoo/mirakl-marketplace-connector)
- **Oversell controls in commercial tools**: Veeqo uses buffers, shows lower stock than on hand, and routes orders by channel, stock or destination. Source: [Veeqo features](https://veeqo.com/features)
- **Mirakl separates the product (catalogue) flow from the offer (price/stock) flow**: Worten product publication runs every 24 hours, and the offer cadence depends on the plan. Source: [BeezUP – Worten product publication](https://help.beezup.com/en/articles/5685512-worten-product-publication)
- **PrestaShop sync patterns already in use in PT**: the Moloni PrestaShop plugin uses webservices triggered by cron with selectable fields. Source: [Moloni – PrestaShop plugin](https://www.moloni.pt/suporte/como-configurar-o-plugin-moloni-no-prestashop)
- Akeneo's PrestaShop connector (Webkul) maps products, product models, families, variants, categories and attribute options. This shows the minimum PIM→PrestaShop mapping surface. Source: [Webkul PrestaShop Akeneo Connector](https://store.webkul.com/PrestaShop-Akeneo-Connector.html)
- **Carrier surface in PT**: a Lisbon/Porto 3PL ships via CTT, Chronopost, DPD, Nacex, MRW and DHL, which is at least six carrier integrations for a "full" WMS. Source: [ZunaPro](https://www.zunapro.com/portugal/en/fulfillment-center)
- Shippingbo claims 30+ carriers and 100+ platforms. Source: [Blog du Modérateur – Shippingbo](https://www.blogdumoderateur.com/tools/shippingbo/)
- WMS scope: the Shippingbo WMS includes bin locations and picking. Cegid Jasmin Ultimate includes multi-warehouse support, transfers and weighted-average-cost valuation. Sources: [La Fabrique du Net – Shippingbo](https://www.lafabriquedunet.fr/logiciel/shippingbo), [Cegid Jasmin features](https://www.jasminsoftware.pt/ver-funcionalidades/)
- A ChannelDock WMS requirements checklist for ecommerce sellers exists; its content was not extracted. Source: [ChannelDock – WMS requirements checklist](https://channeldock.com/en/blogs/wms-requirements-checklist-ecommerce-sellers/)

### Inferences
All points in this subsection are my own analysis; none is from a cited source.
- **Stock-sync MVP data model (estimate: a few weeks for a solo developer on top of the existing orders module):**
  - tables: `product`/`variant` (SKU, EAN-13), `location` (warehouse, optional bin), `stock_movement` (append-only ledger: receipt, sale, return, adjustment, transfer), `reservation` (order line × variant × location), and `channel_listing` (variant × channel × buffer/allocation × last pushed qty)
  - jobs: on order import, reserve and recompute availability, then queue pushes to PrestaShop (stock_availables through the webservice) and to Mirakl offers
  - The hard parts are **concurrency** (the last unit sold on two channels at once; use row-level locks or serializable updates in Postgres), **idempotency of order imports**, **rate limits and polling cadence** on Mirakl, and **reconciliation** jobs that detect drift between channel stock and the ledger.
  - This fits the existing NestJS, BullMQ, Postgres and Redis stack: queue jobs per channel push, Redis locks.
- **PIM-lite MVP:**
  - entities: attribute families with typed attributes (text, localised text per PT-PT/ES/EN, select, number with unit, media), variant axes, categories, assets in object storage, CSV/XLSX import/export, completeness per channel and locale
  - AI: LLM-generated descriptions and translations, which are cheap to build with LLM APIs
  - The **costly, ongoing part is marketplace schema mapping**: Worten/Mirakl category hierarchies and required attributes per category, value lists, error reports on rejected products. On top of that comes PrestaShop write-back (combinations, features, images).
  - Moderate initial build, high ongoing maintenance per marketplace.
- **Full WMS:**
  - receiving and putaway, bin locations, pick lists and waves, scan-to-verify packing (barcode/EAN, mobile UI), carrier labels and tracking (CTT, DPD, GLS, Nacex, MRW, SEUR for ES), returns, cycle counts
  - This means hardware and UX work (scanners, printers), several carrier APIs, and on-site operational support. It is the worst fit for a solo founder, and incumbents (Sendcloud, Shippingbo) already sell it from about €28–€99/month.
  - Better to **integrate Sendcloud or CTT for labels** and expose pick lists only.
- **EAN/barcodes:**
  - store GTIN/EAN-13 per variant, validated with a check digit; Worten matching likely relies on EAN (unverified)
  - PT merchants obtain codes from GS1 Portugal (prior knowledge, not cited here)
  - Barcode scanning in a web UI is feasible later (camera or USB HID scanners act as keyboards).
- **Recommendation signal:** implementation risk and competitive density both point the same way. Do **stock sync first** (inside the orders module), then a **PIM-lite with AI and Worten mapping**, and leave **warehouse execution to partners**.

### Gaps
- No public engineering write-ups or effort estimates for building a PIM or WMS from scratch; none found in the available search results.
- Exact Mirakl seller API limits and polling cadence for Worten, and PrestaShop 9 webservice specifics for stock and combinations, were not verified. The search budget was exhausted, and Mirakl and PrestaShop developer docs should be read directly.
- Carrier API availability and cost in PT (CTT API access for SMBs, DPD PT, Nacex) were not researched.
