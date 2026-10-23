# Multichannel listing, feed management and order management tools for PT/ES SMB sellers: landscape and pricing

_How these notes were made: every figure was "seen" on 2026-10-23, but only through web-search result summaries. Direct page fetches (WebFetch/curl) failed for every vendor domain because of DNS errors and proxy refusals, and the session's shared web-search budget ran out before the reviews pass and several vendor-specific checks. No vendor pricing page was read in full. Treat each price as "reported on or about the vendor page as of Oct 2026" and re-verify before quoting it to customers. Labels used below: **[V]** = the claim is attributed to the vendor's own page or docs; **[3P]** = third-party directory, review or competitor; **[INF]** = my inference; **[TK]** = background from training knowledge, not re-verified this session._

## Q1. Price points and tier contents per tool

### Takeaway
The market splits into three price bands:
- **Enterprise / managed (≈ $1,000–$15,000+/month, quote only, onboarding fees, annual contracts):** Rithum, Productsup, Feedonomics, Sellercloud, Linnworks, Lengow, Shoppingfeed, Sales Layer, and now Mirakl Connect at $699–$2,299/month with a 12-month upfront commitment.
- **Mid-market (≈ €249–€400/month):** e-tailize, Shoppingfeed (third-party figure).
- **SMB / long tail (free to ≈ €100/month):** Base.com Freemium (100 orders), Koongo (free tier, then €19–24), DataFeedWatch (feeds only, from $64), Sellbrite (free for 30 orders, US channels), Shopify Marketplace Connect (free for 50 orders, Shopify only), and one-off PrestaShop/WooCommerce plugins (Webkul $129, CedCommerce $39/month).

Only Base.com, Sellbrite and Shopify Marketplace Connect combine a real free tier with order management. Of those three, only Base.com shows Worten support (verified in this session) and also targets EU/PrestaShop sellers.

### Comparative table (all seen 2026-10-23; currency as reported)

| Tool | Core focus | Entry price / tiers | Setup / minimums | Worten / Mirakl | Target size | Evidence |
|---|---|---|---|---|---|---|
| **Base.com (ex-BaseLinker)** | Order management (OMS) hub: orders, listings, stock, shipping, invoicing | Freemium €0, up to 100 orders/month and 1,000 products. Business = fixed fee + per-order fee; reported figures conflict: $19 + $0.19/order (Dec 2024); $39 + $0.19; £29 + £0.19; $99 + $0.49 (Jul 2026); PLN 279 (≈€63.94) + PLN 0.99 (≈€0.23)/order (Sep 2026). Enterprise custom (above ~5,000 orders/month) | 14-day trial of all features (3P) | Yes, two-way: download orders, list and sync offers, unlimited Worten accounts (V) | SMB → mid | V for Worten; 3P for prices |
| **Channable** | Feeds + marketplace APIs + orders | Package (items/projects/channels) + Core plan (Standard/Plus/Pro) + optional modules. CSS €29/month per active CSS shop (V). Totals not public in the snippets; aggregators' $39–$339 is likely outdated | No setup fees; invoiced monthly in advance (V) | Yes, Worten via Mirakl credentials; Fnac order connection via Mirakl (V) | SMB → mid / agencies | V (structure), 3P (tiers) |
| **Lengow** | Feeds + marketplaces ("NetMarkets") + orders | Pricing on request; custom annual licence; tiers Essential / Pro / Scale (3P), prices undisclosed | Annual licence incl. onboarding/training/support (3P via Capterra) | Yes, Worten integration page and Worten (Mirakl) order docs with an accept action (V) | Mid → enterprise | V + 3P |
| **Shoppingfeed** | Feeds + marketplaces + orders | "From €399/month" (3P, logiciels.pro); quote-based / sales-led, no free plan (3P competitor Pricefy) | Free trial (3P); free migration (3P) | Not verified this session | Mid | 3P only |
| **Mirakl Connect** | Seller-side channel manager for Mirakl marketplaces + Amazon + "450+ marketplaces" | Growth $699/month (≤$50K GMV/month, ≤10K products); Pro $2,299/month (≤$200K GMV/month, 20K products, Insights); Enterprise custom | 12-month commitment paid upfront; extra GMV billed per 10K block; 30-day trial on Growth (V) | Native (Mirakl's own product) | Mid → enterprise brands | V |
| **Rithum (ChannelAdvisor + CommerceHub)** | Enterprise marketplaces, retail drop-ship, ads | Not public. Estimates: $2–3K (starter), $4–7K (mid), $8–15K/month (advanced); TrustRadius shows "from $619" (unclear) | Onboarding $10–40K; 2–3% revenue share is common; annual/multi-year contracts (3P) | Not verified this session | Enterprise | 3P only |
| **Linnworks** | Inventory + order management (OMS), UK | Not public. Estimates $150–$449/month; tiered by order volume; add-on modules cost extra | Onboarding $2–5K; first year $8–17K for 10 users (3P ITQlick) | Yes, via a third-party Mirakl app (V, Linnworks page) | Mid | 3P prices, V for Worten |
| **Sellbrite (GoDaddy)** | Listing + orders, US channels | Free $0 (30 orders); Pro 100 $29; Pro 500 $79; Pro 2K $179; Power 10K $399/month annual … Power 100K $1,699/month annual; FBA add-on $19 | None stated | Not found [INF: US-centric] | Micro → SMB (US) | V |
| **e-tailize** | Managed marketplace expansion (NL) | From €249/month, fee "follows new marketplace revenue"; one all-modules plan | First month paid at signing; 72-hour refund window; 90-day money-back; monthly cancellation (V, llms.txt) | Not verified (lists bol, Amazon, MediaMarkt, Decathlon, Kaufland; "200+ marketplaces") | SMB → mid (Benelux) | V |
| **DataFeedWatch** | Feeds only (Google/Meta/comparison sites) | Shop $64/month ($639/yr); Merchant $84 ($839/yr); Agency $239 ($2,388/yr; 30K SKUs, 150 channels); Enterprise custom (100K+ SKUs); +$5 per extra 1K products | 15-day trial; annual saves 17% | N/A [TK: no order management] | SMB → agencies | V |
| **Productsup** | Enterprise feed / product-content syndication | Not public; ≈$999–$1,000/month starting (3P) | Priced by SKUs, feeds, modules, sync frequency, seats, countries; no free plan | Not verified | Enterprise | 3P |
| **Feedonomics (BigCommerce)** | Managed feed service | "Custom pricing: flat monthly fee, contact us" (V, BigCommerce app listing); estimates $500–$5,000+/month | — | Not verified | Mid → enterprise | V + 3P |
| **Sales Layer** | PIM with channel connectors (Spain) [TK: HQ Valencia] | Quote-based; packages Scale / Premium / Enterprise / Enterprise Plus; Premium ≈10 users / 50K SKUs; "≈$1,000/month" unconfirmed | 30-day trial | Not verified; connectors include Shopify, Magento, BigCommerce, Excel (V) and reportedly Amazon, WooCommerce, PrestaShop (3P) | Mid → enterprise | V + 3P |
| **Zentail** | US multichannel listing / OMS | From $300/month (Base); Pro $2,000/month (3P); "usage-based" (G2/GetApp) | — | Not verified | Mid (US) | 3P |
| **Sellercloud (Descartes)** | US OMS / WMS | $1,349/month billed annually (3P); $500 (ITQlick); pay-as-you-go, $1,199 monthly minimum (G2) | Monthly minimum | Not verified | Mid → enterprise (US) | 3P |
| **Shopify Marketplace Connect (Codisto)** | Shopify-only marketplace connector | Free up to 50 marketplace orders/month; then 1% of sales, capped at $99/month | Marketplace fees separate | Not verified [TK: Amazon, eBay, Walmart, Etsy, Target Plus…] | Shopify SMB | 3P (community + listings) |
| **ChannelEngine** (not in brief, but a key Worten integrator) | Marketplace integration (NL) | Aggregator figures Start $8 / Grow $16 / Scale $149 look implausible; otherwise "on request" | Onboarding/integration fees; possible success-based GMV fees (3P) | Yes, Worten marketplace guide (V) | Mid → enterprise | 3P prices |
| **Koongo** | Feed + marketplace connector (CZ) | Free plan (no card); paid from €24/month (PrestaShop-Worten page) or from €19/month (general Worten page); cost scales with stores, products, feeds, marketplaces, add-ons | Older model: €145 one-time + €19.95/month | Yes: PrestaShop → Worten listings, stock, and Worten orders into PrestaShop (V) | Micro → SMB | V |
| **Webkul PrestaShop Mirakl Connector** | One-off PrestaShop module | $129 one-time | — | Connects only to **Mirakl Connect**, not to individual Mirakl marketplaces | Micro | 3P summary of vendor store |
| **CedCommerce Mirakl (WooCommerce)** | Woo plugin | From $39/month; 7-day trial | — | Mirakl via "Mirakl Connect integration" | Micro → SMB | V (Woo marketplace) |
| **Worten Conector (WooCommerce)** | Worten-specific plugin, "official Worten partner" | Paid, 7-day free trial (price not captured) | Order tracking needs a separate plugin | Catalog, offers (price/stock), optional order module | Micro → SMB (Woo) | V (wordpress.org) |

### Cited Findings
**Channable**
- Pricing is a package sized by items, projects and channels, plus a Core plan, plus optional modules (3P) — [WisePIM guide](https://wisepim.com/alternatives/channable-pricing); also [Channable pricing page](https://www.channable.com/pricing).
- Core Standard / Plus / Pro differ mainly in syncs per day (Standard 1/day, Pro up to 24) and in AI features (3P) — [WisePIM](https://wisepim.com/alternatives/channable-pricing).
- An active CSS shop costs €29/month regardless of how many countries it covers (V); CSS Pro is €99/month (3P) — [Channable Pricing FAQ](https://helpcenter.channable.com/account-billing/manage-your-subscription/pricing-faqs); [WisePIM](https://wisepim.com/alternatives/channable-pricing).
- No setup fees. Invoices are issued in advance on the 20th of each month, in EUR or USD (V) — [Channable Pricing FAQ](https://helpcenter.channable.com/account-billing/manage-your-subscription/pricing-faqs).
- Aggregators quote $39–$339/month, which is likely outdated (one page dated April 2025) — [SoftwareSuggest](https://www.softwaresuggest.com/channable/pricing); [ZoftwareHub](https://zoftwarehub.com/en-ae/products/channable/pricing).

**Base.com**
- Freemium is €0 for up to 100 orders/month, with a 1,000-product cap, 3 team profiles and a 14-day all-features trial (3P) — [TrustRadius](https://trustradius.com/products/baselinker/pricing); [EuropeanPurpose](https://europeanpurpose.com/tool/base-com). Attribution comes from a search summary over these pages.
- Business-tier figures conflict:
  - $19/month + $0.19/order for the first 1,000 orders, then $0.09 (Dec 2024) — [TrustRadius](https://trustradius.com/products/baselinker/pricing).
  - $39 + $0.19/order — [PulseSignal](https://getpulsesignal.com/pricing/base).
  - $99 fixed + $0.49/order (Jul 2026) — [CommerceLogica 2026 review](https://commercelogica.com/reviews/basecom-review/) / [Advox "prices are rising"](https://www.advoxstudio.com/blog/baselinker-prices-are-rising-where-to-look-for-an-alternative) (the search summary does not pin it to one page).
  - PLN 279 (≈€63.94) + PLN 0.99 (≈€0.23)/order (Sep 2026) — [Commercraft, PL integrators compared](https://commercraft.com/en/e-commerce-integrators-in-poland/).
  - "EUR 99 + EUR 0.19/order, priced for 1,000 orders; Enterprise above 5,000 orders" — [EuropeanPurpose](https://europeanpurpose.com/tool/base-com) (3P).

**Lengow**
- Pricing is customised by catalog structure, growth goals and features; buyers must request a quote (V) — [Lengow help center](https://help.lengow.com/hc/en-us/articles/29799474733724--What-are-the-pricing-plans-for-the-Lengow-platform).
- Capterra shows "Contact vendor" and no free trial; G2 has no pricing — [Capterra](https://capterra.com/p/162794/Lengow/); [G2](https://g2.com/products/lengow/pricing).
- Three tiers (Essential, Pro, Scale), none with disclosed prices — [PricingSaaS](https://pricingsaas.com/companies/lengow).
- A core licence plus per-unit modules, including NetMarkets for marketplaces (competitor claim) — [Pricefy](https://www.pricefy.io/comparisons/lengow-vs-pricefy).
- Annual licence fee covering platform, onboarding, training and support, with extra costs per product chosen — [Capterra UK](https://www.capterra.co.uk/software/162794/lengow).

**Shoppingfeed**
- "From €399.00/month", free trial, several offers (3P) — [logiciels.pro](https://www.logiciels.pro/shoppingfeed/).
- Quote-based, sales-led with no free plan, free migration, and described as "part of Centric Software" (competitor claim, unverified) — [Pricefy](https://www.pricefy.io/comparisons/shoppingfeed-vs-pricefy).

**Mirakl Connect**
- Growth is $699/month (up to $50K GMV/month and 10K products; knowledge base, email support, standard professional services). Pro is $2,299/month (up to $200K GMV/month and 20K products, adds Insights). Enterprise is custom (V) — [Mirakl Connect pricing](https://www.mirakl.com/products/connect/pricing/); [ES version](https://www.mirakl.com/es-es/products/connect/pricing/).
- Unlimited channels, no per-channel fees, "Sell on Amazon and 450+ marketplaces" (V) — [Mirakl Connect pricing](https://www.mirakl.com/products/connect/pricing/).
- 12-month commitment paid upfront; order management included; extra GMV billed per 10K block (V) — [Mirakl for sellers pricing](https://www.mirakl.com/products/mirakl-for-sellers/pricing).
- AI image transformation and agentic channels are add-ons, reported at +$399/month (Growth) and +$699/month (Pro) — [PricingSaaS Mirakl](https://pricingsaas.com/companies/mirakl) (3P tracker of the V page).
- Trial availability conflicts:
  - 30-day trial on Growth (V) — [Mirakl Connect pricing](https://www.mirakl.com/products/connect/pricing/).
  - "No free tier" — [PricingSaaS](https://pricingsaas.com/companies/mirakl).
  - Trial "not mentioned" — [3DSellers](https://www.3dsellers.com/marketplace-apps/mirakl).
- ColdIQ cites per-unit overage fees; PricingSaaS says overages were removed for Growth and Pro — [ColdIQ](https://coldiq.com/tools/mirakl); [PricingSaaS](https://pricingsaas.com/companies/mirakl).

**Rithum**
- Estimated $2–3K / $4–7K / $8–15K per month across tiers, plus onboarding of about $10–40K (3P) — [Spendbase](https://www.spendbase.co/?p=37042).
- Base subscriptions above $2K/month; a 2–3% revenue share is common; onboarding is mandatory; annual or multi-year contracts (3P, competitor) — [GetOneCart](https://www.getonecart.com/channeladvisor-alternatives/).
- "From $619/month" next to "Get a quote" (unclear) — [TrustRadius](https://www.trustradius.com/compare-products/godatafeed-vs-rithum).

**Linnworks**
- No public pricing. Estimates of $150, ~$200 and ~$449/month; tiered on order volume; add-on modules extra; Capterra's "$29 per user" is an outlier — [GetOneCart](https://www.getonecart.com/linnworks-alternatives/); [ERPResearch](https://erpresearch.com/erp-add-ons/marketplace/linnworks/pricing); [Capterra](https://www.capterra.com/p/116088/Linnworks/pricing/).
- Onboarding $2–5K; first-year total of $8–17K for 10 users (3P estimate) — [ITQlick](https://www.itqlick.com/linnworks/pricing).

**Sellbrite**
- Free $0 (30 orders/month), Pro 100 $29, Pro 500 $79, Pro 2K $179, Power 10K $399/month billed annually, up to Power 100K $1,699/month billed annually. FBA orders don't count toward limits; FBA add-on $19/month (V) — [Sellbrite pricing](https://sellbrite.com/pricing-pro).
- An older page lists Power 10K at $159/month — [Sellbrite older page](https://www.sellbrite.com/?p=7395).

**e-tailize**
- From €249/month; first month paid at signing; fee "follows the new marketplace revenue it creates"; 72-hour full-refund window, 90-day money-back, monthly cancellation; 200+ marketplaces (bol, Amazon, MediaMarkt, Decathlon, Kaufland) (V) — [e-tailize llms.txt](https://e-tailize.com/llms.txt).
- "One all-modules plan based on the marketplace revenue we help you make." Keeps stock, listings and orders connected (V) — [e-tailize Shopify integration](https://e-tailize.com/integrations/shopify/).
- Picqer's listing describes it instead as a fixed monthly fee with no extra costs (conflict) — [Picqer](https://picqer.com/en/integrations/e-tailize).

**DataFeedWatch**
- Shop $64, Merchant $84, Agency $239, Enterprise custom (100K+ SKUs). Yearly billing saves 17%; +$5 per extra 1,000 products (V) — [DataFeedWatch pricing](https://www.datafeedwatch.com/pricing?via=uzair).
- Shopify app shows $639 / $839 / $2,388 per year, a 15-day trial, and Agency at 30K SKUs / 150 channels — [Shopify App Store](https://apps.shopify.com/datafeedwatch?utm_id=pdf).
- Wiser Review (Jul 2026) lists Merchant ≈$74 and Agency ≈$219, which conflicts with the vendor's figures — [Wiser Review](https://wiserreview.com/blog/datafeedwatch-alternatives/).

**Productsup**
- ≈$1,000/month starting, or $999 base plus extras; priced by SKUs, feeds, modules, sync frequency, seats and countries; no free plan (3P) — [ZoftwareHub](https://zoftwarehub.com/products/productsup/pricing); [WisePIM](https://wisepim.com/alternatives/productsup-pricing); [SaaSworthy](https://www.saasworthy.com/product/productsup/pricing).

**Feedonomics**
- "Custom Pricing: Flat Monthly Fee — Contact Us" (V) — [BigCommerce app listing](https://bigcommerce.co.uk/apps/feedonomics).
- Estimates range from $500 to $5,000+/month (3P), from $1,000 to $5,000 (3P), and $2,000+ in common quotes (3P, competitor-adjacent) — [MakerStack](https://makerstack.co/reviews/feedonomics-review/); [Spendflo](https://www.spendflo.com/vendors/feedonomics); [Wiser Review](https://wiserreview.com/blog/feedonomics-alternatives/).

**Sales Layer**
- Channel Marketplace connectors for Shopify, Magento, BigCommerce and Excel; more specific connectors are handled by partners at custom pricing (V) — [Sales Layer pricing](https://saleslayer.com/pricing).
- Quote-based packages (Scale, Premium, Enterprise, Enterprise Plus); Premium ≈10 users / 50K SKUs; a "≈$1,000/month" figure is unconfirmed; 30-day trial (3P) — [SoftwareFinder](https://softwarefinder.com/ecommerce-software/sales-layer); [GetApp](https://www.getapp.com/project-management-planning-software/a/sales-layer/).

**Zentail and Sellercloud**
- Zentail from $300/month, Pro $2,000 (3P) — [PulseSignal](https://getpulsesignal.com/compare/sellercloud-vs-zentail). GetApp lists it as "usage-based, from 1000" — [GetApp](https://www.getapp.com/website-ecommerce-software/a/zentail).
- Sellercloud $1,349/month billed annually — [PulseSignal](https://getpulsesignal.com/compare/sellercloud-vs-zentail); $500 custom — [ITQlick](https://www.itqlick.com/sellercloud/pricing); pay-as-you-go with a $1,199 monthly minimum — [G2](https://www.g2.com/compare/descartes-sellercloud-vs-zentail-zentail).

**Shopify Marketplace Connect**
- Free up to 50 managed marketplace orders/month; from the 51st order, 1% of sales capped at $99/month; marketplace fees are separate — [Shopify Community](https://community.shopify.com/t/shopify-marketplace-connect-fees/339329/1); [Analyzify](https://analyzify.com/shopify-apps/shopify-marketplace-connect); [Codisto pricing](https://www.codisto.com/pricing).

**ChannelEngine**
- Aggregators list Start $8, Grow $16 and Scale $149/month (implausibly low), plus success-based GMV fees and onboarding/integration fees — [Spendbase](https://www.spendbase.co/?p=34649). Software Advice lists "pricing upon request" — [Software Advice](https://www.softwareadvice.com/inventory-management/channelengine-profile/).

**Koongo**
- Free plan with no card required; paid plans from €24/month for PrestaShop + Worten (V) — [Koongo PrestaShop-Worten](https://www.koongo.com/integration/prestashop/worten/).
- "From 19 EUR/month", with cost depending on stores, products, feeds, marketplaces and add-ons (V) — [Koongo Worten](https://www.koongo.com/worten.html).
- Older model: connector €145 one-time + service €19.95/month — [Koongo PrestaShop price page](https://www.koongo.com/integration/prestashop/price/).

**Plugins and one-off connectors**
- Webkul's PrestaShop Mirakl Connector costs $129 and connects only to Mirakl Connect — [Webkul store](https://store.webkul.com/prestashop-mirakl-connector.html).
- CedCommerce's WooCommerce Mirakl connector costs from $39/month with a 7-day trial — [WooCommerce marketplace](https://woocommerce.com/products/mirakl-connect-integration/).
- M2E's Magento Mirakl connector has a 30-day trial — [Adobe Commerce Marketplace](https://commercemarketplace.adobe.com/m2e-mirakl-magento-adobe-commerce.html).

### Inferences
- [INF] For a PrestaShop seller doing 100–1,000 orders/month on Worten + PrestaShop, the realistic choice set today is **Base.com** (≈€0–€300/month depending on volume and which price list is current), **Koongo** (€19–24+/month), **Channable** (mid-tens to low hundreds of €/month [TK]), or a one-off module. Lengow, Shoppingfeed, Mirakl Connect ($699 + 12 months upfront ≈ $8.4K/year), Rithum, Productsup, Feedonomics and Sellercloud are priced above what a micro or small PT seller will pay.
- [INF] Per-order pricing (Base.com, Shopify Marketplace Connect at 1%, e-tailize's revenue-linked fee, Rithum's revenue share) is common. A flat, affordable plan with a free tier matches the gap between Freemium (≤100 orders) and the next jump.
- [INF] Base.com's price list seems to have changed several times between 2024 and 2026, and an Advox article is titled "Baselinker prices are rising". That points to price-sensitive SMB churn, which an entrant could target.
- [TK] Lengow, Channable, Shoppingfeed, Base.com, DataFeedWatch and Koongo all publish PrestaShop modules/connectors. This was not re-verified this session.

### Gaps
- No vendor pricing page was read in full (fetches were blocked), so all prices come from search summaries. Exact Channable package and Core amounts, Shoppingfeed's official grid, and Base.com's current EU list (EUR) need direct verification.
- Not covered for lack of search budget: Spanish/Portuguese vendor connectors beyond Koongo and the Worten Conector (e.g., Spanish PrestaShop agencies, Portuguese agencies, BeezUP, Bluu/Hipercloud-type local tools), and the PrestaShop Addons listings for Worten/Mirakl/KuantoKusta modules (one search found no Addons listing for Worten).
- Feature-by-feature coverage (repricing, shipping, invoicing, analytics, AI) was not systematically verified per vendor.

## Q2. Which tools support Worten and other Mirakl marketplaces, how, and do they automate order acceptance?

### Takeaway
Worten (PT + ES) is well covered in this session's checks by EU integrators: Base.com, Channable, Lengow, ChannelEngine, PlentyONE, Linnworks (through a third-party Mirakl app), Koongo, BigBuy, Boostmyshop, and WooCommerce plugins. All of them connect via the seller's Mirakl API key or credentials. Order acceptance (Mirakl's `WAITING_ACCEPTANCE` state) is handled per connector, usually as a blunt "auto-accept on import" switch. No tool found offers a human-approval queue with decision support for accept/refuse. In 2026 Mirakl began rate-limiting external partners, which made third-party order syncs slower.

### Cited Findings
- **Base.com:** two-way Worten integration covering order downloads and offer listing/sync, with unlimited connected Worten accounts — [Base.com Worten integration](https://base.com/en-US/integrations/worten).
- **Channable:**
  - The Worten API runs on Mirakl and needs a Mirakl account; setup is a login with Mirakl credentials on the Connections page. Separate per-country Worten APIs on the same connection overwrite each other — [Channable: Setting up a Worten API](https://helpcenter.channable.com/list-advertise/sell-on-marketplaces/mirakl-marketplaces/setting-up-a-worten-api).
  - The Fnac order connection also runs over Mirakl and needs the Fnac Offers API; a separate Fnac Products API handles new listings — [Channable blog: Fnac](https://www.channable.com/blog/blog-send-new-products-fnac-with-channable).
- **Mirakl rate limit (July 2026):** Mirakl orders in Channable now sync every 15 minutes instead of every 5, after Mirakl applied a rate limit to external partners. Channable's Mirakl channels include Fnac, Decathlon, Leroy Merlin, Darty and MediaMarkt — [Channable changelog Jul 2026](https://helpcenter.channable.com/changelog/2026/july/mirakl-orders-now-sync-every-15-minutes).
- **Lengow:**
  - Has a Worten integration and notes that Worten needs product content in each country's native language — [Lengow Worten](https://www.lengow.com/integrations/worten/).
  - Its "Worten (Mirakl) Orders Management" doc maps the Mirakl `WAITING_ACCEPTANCE` state and lists "accept order" as an action — [Lengow help](https://help.lengow.com/hc/en-us/articles/12199842176924-Worten-Mirakl-Orders-Management).
- **ChannelEngine:** Worten marketplace guide; Worten itself charges no setup fee, a 7–15% commission by category and €29.99/month excl. VAT — [ChannelEngine Worten guide](https://support.channelengine.com/hc/en-us/articles/9711189737885-Worten-marketplace-guide).
- **PlentyONE:** a "certified" Worten integration for listings, orders and inventory — [PlentyONE Worten](https://www.plentyone.com/marketplaces/worten).
- **Linnworks:**
  - Connects to Worten through a third-party Mirakl app — [Linnworks Worten](https://www.linnworks.com/integrations/worten/).
  - Says Worten has no setup costs, no listing fees and offers six months free (secondhand, possibly dated) — [Linnworks Worten](https://www.linnworks.com/integrations/worten/).
- **Worten's own fees (2026):** commissions range from 4% to 18% by category, plus VAT — [Zunapro Worten PT](https://www.zunapro.com/portugal/pt/mercado/worten-pt). This partly conflicts with ChannelEngine's 7–15%.
- **Koongo:** PrestaShop → Worten connector that syncs listings and stock and pulls Worten orders into PrestaShop — [Koongo PrestaShop-Worten](https://www.koongo.com/integration/prestashop/worten/).
- **BigBuy:** its Multi-Channel Integration Platform syncs Worten with the seller's Worten API key. Selling in Spain requires international listing, and the seller agrees to answer customers within 24h — [BigBuy Academy](https://www.bigbuy.eu/academy/en/how-to-synchronise-worten-through-the-multi-channel-integration-platform/).
- **Boostmyshop:** repricing + shipping for Worten; myFulfillment imports Worten orders automatically — [Boostmyshop Worten](https://www.boostmyshop.com/en/partners/worten).
- **Worten Conector (WooCommerce):** described as an official Worten partner plugin via Mirakl. It syncs catalog, offers (price/stock) and orders. The optional order module creates a Woo order and pushes confirmations, cancellations and shipping/tracking back; tracking needs a separate plugin. Currently WooCommerce only — [wordpress.org Worten Conector](https://wordpress.org/plugins/worten-conector/).
  - A mirror says order integration is "only for PrestaShop stores"; this looks outdated — [mxp.tw mirror](https://www.mxp.tw/plugins/worten-conector/).
- **Auto-accept in connectors:**
  - A WooCommerce Mirakl plugin has an "auto-accept orders waiting for acceptance (per shop)" setting — [wordpress.org plugin](https://wordpress.org/plugins/?p=358237).
  - Order Desk can "automatically send an order acceptance notice to Mirakl as soon as the order is imported" — [Order Desk Mirakl](https://help.orderdesk.com/?p=5281).
- **Mirakl Connect API:** `acceptOrderLines` accepts or refuses lines in `AWAITING_ACCEPTANCE` from Mirakl Connect and syncs the line status to the sales channel. Recommended use is "on each new order"; the v1 endpoint is deprecated in favour of v2 — [Mirakl developer: acceptOrderLines](https://developer.mirakl.com/content/product/connect/rest/connect/openapi3/orders/acceptorderlines).
- **Webkul's PrestaShop Mirakl Connector** connects only to Mirakl Connect, not to individual Mirakl marketplaces — [Webkul store](https://store.webkul.com/prestashop-mirakl-connector.html).
- **Official certification:** no search result showed Lengow, Channable, ChannelEngine or Shoppingfeed in a Mirakl-certified-connector list. Mirakl describes its ecosystem partners as "vetted and certified" without naming them in the snippet — [Mirakl ecosystem partners](https://www.mirakl.com/ecosystem/partners).
  - Mirakl runs a Mirakl Connect Partner Program for agencies, with certification requirements and performance reviews — [Mirakl agency partners](https://www.mirakl.com/partners/agencies).
- **Worten partner page:** Worten has a marketplace partners page, but its integrator list was not visible in search — [Worten parceiros](https://www.worten.pt/marketplace/parceiros).

### Inferences
- [INF] Accepting or refusing Worten order lines is an explicit seller step, normally done by a connector, and the industry default is blanket auto-accept. A "human approval with AI recommendation" flow (stock check, margin after the 4–18% commission, carrier SLA, fraud or price-error signals) is not offered by any tool found. That makes it a real differentiator, but a narrow one: competitors can add a toggle-based rule engine.
- [INF] Two Mirakl moves make direct per-marketplace integrations riskier for a newcomer: the 2026 rate limit on external partners, and Mirakl Connect APIs that act as an aggregation layer (Webkul's module only talks to Connect). Mirakl appears to be steering third parties toward Mirakl Connect. The hub's design should plan for both paths: the per-operator Mirakl Seller API (MMP), with Worten-issued API keys, and the Mirakl Connect API.
- [INF] Channable's warning that per-country Worten APIs overwrite each other on one connection suggests PT and ES offers share one Mirakl shop with per-channel pricing. A connector should model Worten PT/ES as channels inside one shop, not as two shops. This needs checking against Worten/Mirakl docs.

### Gaps
- Not verified for any tool: support for **KuantoKusta** (not Mirakl), **El Corte Inglés** (Mirakl-based [TK]), **Miravia** (Alibaba, own API [TK]), **Fnac PT/ES** (Mirakl-based per Channable, but the PT/ES instances were not confirmed), or **Amazon** per tool. The only KuantoKusta result was a Shopify Community thread where a merchant had KuantoKusta's Swagger link but no ready connector and was told to hire a developer — [Shopify Community](https://community.shopify.com/t/install-markeplace-api-on-shopify-to-automatically-create-orders/62729).
- Whether Shoppingfeed, Rithum, Productsup, Feedonomics, Zentail, Sellercloud, Sellbrite or Shopify Marketplace Connect support Worten was not checked.
- The exact auto-accept rules of Base.com, Channable and Lengow (rules by stock, price or carrier) were not verified.

## Q3. What G2/Capterra/Trustpilot reviews praise and criticise

### Takeaway
The only structured review data gathered (Lengow on Capterra, 4.1/5 from 54 reviews) shows the recurring pattern: support rated well (4.2), value for money worst (3.7). Reviewers call it "robust but expensive" and "good to start but not for scaling". Review mining for Channable, Base.com, Shoppingfeed and others could not be done because the search budget ran out.

### Cited Findings
- Lengow scores 4.1/5 overall on Capterra (54 reviews), with customer support 4.2 and value for money 3.7 — [Capterra UK](https://www.capterra.co.uk/software/162794/lengow).
- Reviewers call Lengow's price "too high for their project" and describe a "robust but expensive feed management solution"; support is rated 4–5/5 and "there to help with deployments" — [Software Advice](https://www.softwareadvice.com/ecommerce/lengow-profile/).
- A 2021 reviewer gave value for money 2/5 and said "good to start but not for scaling business"; another said "not all the channels are easy to connect to"; technical glitches were "promptly addressed by the support team" — [Capterra reviews p.2](https://www.capterra.com/p/162794/Lengow/reviews/?page=2).
- The Capterra Lengow review pages also contain entries about NetRivals (a Lengow-group product [TK]), which should be excluded — [Capterra reviews p.2](https://www.capterra.com/p/162794/Lengow/reviews/?page=2).
- An Advox Studio article titled "Baselinker prices are rising — where to look for an alternative?" points to price-related dissatisfaction among Base.com users (title-level evidence only) — [Advox Studio](https://www.advoxstudio.com/blog/baselinker-prices-are-rising-where-to-look-for-an-alternative).
- Rithum: contracts are "annual or multi-year … hard to exit early", with mandatory onboarding (competitor claim) — [GetOneCart](https://www.getonecart.com/channeladvisor-alternatives/).

### Inferences
- [INF] The pattern matches the price bands in Q1. Enterprise and mid tools win on support and breadth but lose on value for money, which is the dimension that matters most to PT SMBs.
- [TK, not verified this session] Common public complaints: Channable is complex to configure and gets expensive as items or projects grow; Base.com's UI is dense or Polish-centric, with per-order fees adding up; Linnworks has a steep learning curve and costly onboarding. Do not quote these without verifying them.

### Gaps
- No G2, Capterra or Trustpilot data was collected for Channable, Base.com, Shoppingfeed, Linnworks, Sellbrite, Rithum, Mirakl Connect, ChannelEngine or Koongo (search budget exhausted).
- No reviews specifically about PT/ES coverage, Portuguese-language support or Portuguese invoicing were found.

## Q4. Is Mirakl Connect free for sellers, what does it do, and does it reduce the need for third-party connectors?

### Takeaway
As of Oct 2026, Mirakl Connect is **not** free as a channel manager. Its public plans are Growth at $699/month and Pro at $2,299/month, with a 12-month upfront commitment and GMV/product caps; AI and agentic add-ons cost extra. Free sign-up appears only in narrower contexts, such as the Amazon MCF connector listing. Mirakl Connect covers catalog transformation, order management across Mirakl marketplaces, Amazon and "450+ marketplaces", plus insights and Amazon Ads (Adspert). It could replace a third-party connector for a mid-sized brand. For a PT SMB, the price floor of ≈$8.4K/year means it does not remove the need for cheap connectors. It does make Mirakl a direct competitor in the channel-manager space.

### Cited Findings
- Plans and caps: Growth $699/month (≤$50K GMV/month, ≤10K products), Pro $2,299/month (≤$200K GMV/month, 20K products, Insights), Enterprise custom; unlimited channels with no per-channel fees; "Sell on Amazon and 450+ marketplaces" — [Mirakl Connect pricing](https://www.mirakl.com/products/connect/pricing/).
- 12-month commitment paid upfront; order management ("receive, process and track orders from all your marketplaces in one place") included; extra GMV billed per 10K block — [Mirakl for sellers pricing](https://www.mirakl.com/products/mirakl-for-sellers/pricing).
- Catalog Transformer automatically matches, enriches and reformats product data to each marketplace's listing requirements — [Mirakl Connect pricing](https://www.mirakl.com/products/connect/pricing/) (via search summary).
- Mirakl Connect offers "tiered pricing based on your sales volume" — [Mirakl Connect product page](https://www.mirakl.com/products/connect/).
- Developer docs describe Connect as letting sellers manage their Mirakl-powered marketplace stores from one place (profile, customer care, catalog, orders) — [Mirakl developer: Connect](https://developer.mirakl.com/content/product/connect).
- Amazon became fully integrated as a Mirakl Connect channel in Q3 2025 — [Mirakl product update Q3 '25](https://www.mirakl.com/blogs/marketplace/mirakl-product-update-q3-25-smarter-delivery-management-and-streamlined/).
- Mirakl reported that Mirakl Connect generated $11.7M ARR "in under a year" (Feb 2026 results release) — [Mirakl Momentum 2025 news](https://www.mirakl.com/news/mirakl-momentum-2025-key-results-launch-mirakl-nexus-agentic-commerce).
- Adspert, for Amazon Ads optimisation, is "our latest addition to the Mirakl Connect platform" — [Mirakl Connect channel manager](https://info.mirakl.com/mirakl-connect-channel-manager).
- AI image transformation and agentic channels are paid add-ons: +$399/month (Growth) and +$699/month (Pro) — [PricingSaaS](https://pricingsaas.com/companies/mirakl).
- Free signals:
  - Amazon's MCF integration page says sellers "can sign up for free" to Mirakl Connect to sell with MCF — [Amazon Supply Chain: Mirakl](https://supplychain.amazon.co.uk/integrations/mirakl).
  - The Amazon SP Appstore listing says the MCF connector and the platform cost nothing — [Amazon SP Appstore](https://sellercentral.amazon.com/selling-partner-appstore/dp/amzn1.sp.solution.5dbe840d-bc6a-4ec2-bd94-d65fe790ab6f).
  - Both are third-party or integration contexts and narrower than the channel-manager plans.
- Third-party connectors build on Mirakl Connect rather than compete with it:
  - Webkul's PrestaShop module connects only to Mirakl Connect — [Webkul](https://store.webkul.com/prestashop-mirakl-connector.html).
  - CedCommerce's WooCommerce product is named "Mirakl Connect integration" — [WooCommerce](https://woocommerce.com/products/mirakl-connect-integration/).
  - The Connect API exposes order-line acceptance — [Mirakl dev](https://developer.mirakl.com/content/product/connect/rest/connect/openapi3/orders/acceptorderlines).

### Inferences
- [TK, needs verification] Mirakl Connect started (around 2021–2023) as a free seller portal for Mirakl-powered marketplaces: marketplace discovery and a single place to manage Mirakl shops. It was later extended into a paid multichannel "Channel Manager" (Amazon in 2025, then Adspert and agentic add-ons). A free basic seller account may still exist alongside the paid channel-manager tiers; the search results neither confirmed nor ruled this out. A TechCrunch article on the launch exists, but its date was not visible — [TechCrunch](https://techcrunch.com/?p=1836907).
- [INF] For the founder, Mirakl Connect is both:
  - a possible **integration path**: one Connect API reaching many Mirakl operators, if seller-authorised third-party access is allowed at a free tier;
  - a **competitor**: an upmarket channel manager with AI add-ons.
  Its $699/month, 12-month-upfront entry leaves the sub-€100/month PT SMB segment open.
- [INF] The 2026 Mirakl rate limit on external partners (see Q2) could reflect Mirakl favouring its own Connect product over third-party connectors. That is a platform-dependency risk to monitor.

### Gaps
- Whether a free Mirakl Connect seller tier still exists (dashboard and order handling for Mirakl-only marketplaces such as Worten), and whether third-party apps can use the Connect API without the seller holding a paid plan, could not be confirmed.
- Whether Worten sellers are onboarded through Mirakl Connect or only through the operator's Mirakl back office (MMP), and which API (MMP seller API vs Connect API) Worten recommends to integrators, could not be confirmed.

## Q5. Gaps for a Portuguese SMB seller (price floor, Worten/KuantoKusta support, Portuguese language/invoicing, local ERP stock sync, decision support)

### Takeaway
The clearest gaps evidenced in this session:
1. **Price floor.** Below ≈€100/month the only options are Base.com Freemium (≤100 orders), Koongo and one-off plugins; most capable tools cost €249 to several thousand per month, or require 12-month upfront commitments.
2. **KuantoKusta.** No ready connector was found in any search; merchants are told to hire developers.
3. **Order acceptance.** Default tooling is blind auto-accept, with no human-in-the-loop decision support.
4. **AI decision support.** No order or margin analytics with AI recommendations aimed at SMBs; AI is sold as an expensive add-on (Mirakl +$399/month, Channable's higher Core tiers).

Portuguese certified invoicing and local ERP sync could not be verified (budget), so they remain likely-but-unproven gaps.

### Cited Findings
- **Price-floor evidence:**
  - Mirakl Connect: $699/month with 12-month upfront commitment — [Mirakl](https://www.mirakl.com/products/mirakl-for-sellers/pricing).
  - Rithum: $2K+/month, onboarding $10–40K — [Spendbase](https://www.spendbase.co/?p=37042).
  - Productsup: ≈$1K/month — [ZoftwareHub](https://zoftwarehub.com/products/productsup/pricing).
  - Feedonomics: $500–5K+/month — [MakerStack](https://makerstack.co/reviews/feedonomics-review/).
  - Sellercloud: $1,199 monthly minimum — [G2](https://www.g2.com/compare/descartes-sellercloud-vs-zentail-zentail).
  - Shoppingfeed: from €399/month — [logiciels.pro](https://www.logiciels.pro/shoppingfeed/).
  - e-tailize: from €249/month plus a revenue-linked fee — [e-tailize](https://e-tailize.com/llms.txt).
  - Lengow: annual licence, quote only — [Lengow help](https://help.lengow.com/hc/en-us/articles/29799474733724--What-are-the-pricing-plans-for-the-Lengow-platform).
- **Low-cost options and their limits:**
  - Base.com Freemium is capped at 100 orders and 1,000 products — [TrustRadius](https://trustradius.com/products/baselinker/pricing).
  - Sellbrite's free tier is 30 orders, on US channels — [Sellbrite](https://sellbrite.com/pricing-pro).
  - Shopify Marketplace Connect is free for 50 orders but Shopify-only — [Shopify Community](https://community.shopify.com/t/shopify-marketplace-connect-fees/339329/1).
  - Koongo has a free plan, then €19–24/month — [Koongo](https://www.koongo.com/integration/prestashop/worten/).
  - DataFeedWatch starts at $64/month but covers feeds only — [DataFeedWatch](https://www.datafeedwatch.com/pricing?via=uzair).
- **KuantoKusta:** a merchant with only KuantoKusta's Swagger UI link, no integration guide, was told it needs webhooks and a developer — [Shopify Community thread](https://community.shopify.com/t/install-markeplace-api-on-shopify-to-automatically-create-orders/62729). Two searches (EN and PT) found no PrestaShop module or major-tool connector for KuantoKusta — [search set incl. InvoiceXpress PrestaShop guide](https://invoicexpress.com/vender-online-faturar-prestashop/).
- **PrestaShop ↔ Worten module gap:** no PrestaShop Addons listing for a Worten/Mirakl module was found. The nearest options are Webkul's $129 module (Mirakl Connect only) and Koongo's SaaS. The Worten Conector plugin is WooCommerce-only — [Webkul](https://store.webkul.com/prestashop-mirakl-connector.html); [wordpress.org Worten Conector](https://wordpress.org/plugins/worten-conector/).
- **Worten operational constraints a tool must handle:**
  - Native-language content per country — [Lengow](https://www.lengow.com/integrations/worten/).
  - 24h customer-response commitment, and international listing to sell in Spain — [BigBuy](https://www.bigbuy.eu/academy/en/how-to-synchronise-worten-through-the-multi-channel-integration-platform/).
  - €29.99/month plus a 7–15% commission — [ChannelEngine](https://support.channelengine.com/hc/en-us/articles/9711189737885-Worten-marketplace-guide); or 4–18% plus VAT — [Zunapro](https://www.zunapro.com/portugal/pt/mercado/worten-pt).
- **Mirakl sync latency:** order sync is now every 15 minutes because of Mirakl's rate limit on partners — [Channable changelog](https://helpcenter.channable.com/changelog/2026/july/mirakl-orders-now-sync-every-15-minutes). This affects how quickly a seller can see and accept orders when acceptance deadlines apply [TK: Mirakl operators set acceptance time limits].
- **AI as premium add-on:**
  - Mirakl's AI image transformation and agentic channels cost +$399 or +$699/month — [PricingSaaS](https://pricingsaas.com/companies/mirakl).
  - Channable's AI features are tied to its higher Core tiers — [WisePIM](https://wisepim.com/alternatives/channable-pricing).

### Inferences
- [INF] **Positioning opportunity.** Most incumbents compete either on breadth (450+ channels) or on feeds. A hub that is Worten-first and PrestaShop-first, covers KuantoKusta, and has a real free tier would occupy an empty spot. The order module would offer: an approval queue with AI-recommended accept/refuse, margin after Worten commission and shipping, stock confidence, and deadline countdown. The closest rivals are Base.com (cheap, broad, no decision support found) and Koongo (cheap, feed/connector-centric).
- [INF] **Defensible features vs commoditised ones.** Order import plus auto-accept is commoditised (Koongo, Base.com, plugins at €0–€30/month). What isn't commoditised is decision support on acceptance and an "orders analyst" that explains margin, return and refusal patterns. Monetisation should therefore sit in analytics and AI, while basic order sync stays in the free tier.
- [INF] **KuantoKusta** is a PT-only comparison marketplace with its own API (not Mirakl). It is too small a market for global vendors to prioritise, which makes it a local moat, if KuantoKusta's seller API terms allow third-party integrators (unverified).
- [INF] **Platform risk.** Mirakl is tightening third-party API rate limits while selling its own channel manager. The hub should stay efficient with Mirakl calls (incremental order polling, webhooks if Worten offers them) and should not depend on sub-15-minute latency guarantees.

### Gaps
- **Portuguese invoicing:** not researched. This covers AT-certified invoicing software, SAF-T PT, ATCUD/QR codes on invoices, and whether Base.com or Channable issue PT-compliant invoices or integrate InvoiceXpress, Moloni, Vendus, TOConline or PHC. Expect most foreign tools to rely on local invoicing apps [TK]. This needs a dedicated search.
- **Local ERP stock sync** (PHC, Primavera/Jasmin, Sage PT, Moloni; Spain: Holded, A3, Sage ES): no data was gathered.
- **Portuguese-language UI and support** for each tool: not verified. [TK] Base.com publishes a pt-BR help center (see [Base.com help pt-BR](https://base.com/pt-BR/ajuda/knowledgebase/sobre-a-baselinker/)); Lengow, Channable and Shoppingfeed have FR/ES/EN interfaces, and their PT coverage is unverified.
- **Fnac PT/ES, El Corte Inglés, Miravia and KuantoKusta coverage** in Base.com, Lengow, Shoppingfeed and ChannelEngine: not verified.
- **Size of the PT SMB segment** (number of Worten sellers, KuantoKusta merchants, PrestaShop stores in PT): not researched here.
