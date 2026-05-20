const cards = document.querySelectorAll(".product-card");
const filters = document.querySelectorAll("[data-filter]");
const typeChips = document.querySelectorAll("[data-type]");
const productSearch = document.querySelector("[data-product-search]");
const resultCount = document.querySelector("[data-result-count]");
const activeFilterText = document.querySelector("[data-active-filter-text]");
const emptyProducts = document.querySelector("[data-empty-products]");
const resetFilterButtons = document.querySelectorAll("[data-reset-filters]");
const productModal = document.querySelector("[data-product-modal]");
const detailImage = document.querySelector("[data-detail-image]");
const detailTag = document.querySelector("[data-detail-tag]");
const detailTitle = document.querySelector("[data-detail-title]");
const detailText = document.querySelector("[data-detail-text]");
const detailLocation = document.querySelector("[data-detail-location]");
const detailType = document.querySelector("[data-detail-type]");
const detailSpecs = document.querySelector("[data-detail-specs]");
const quoteForm = document.querySelector(".quote-form");
const productSelect = quoteForm?.querySelector("select[name='product']");
const messageField = quoteForm?.querySelector("textarea[name='message']");
const smartTabs = document.querySelectorAll("[data-smart]");
const smartPanels = document.querySelectorAll("[data-smart-panel]");

const productState = {
  category: "all",
  type: "all",
  query: "",
};

const categoryLabels = {
  all: "All products",
  water: "Water Supply",
  sanitary: "Sanitary Ware",
  valves: "Valves",
  adhesives: "Adhesives",
  accessories: "Accessories",
  pipes: "PVC-U Pipes",
  fittings: "Fittings",
  drains: "Floor Drains",
  outdoor: "Outdoor Solutions",
};

const typeLabels = {
  all: "All types",
  pipes: "Pipes",
  fittings: "Fittings",
  valves: "Valves",
  sanitary: "Sanitary Ware",
  adhesives: "Adhesives",
  accessories: "Accessories",
  drains: "Floor Drains",
  outdoor: "Outdoor Solutions",
};

const categoryToQuoteOption = {
  water: 0,
  pipes: 0,
  fittings: 0,
  drains: 1,
  outdoor: 1,
  sanitary: 2,
  valves: 3,
  adhesives: 3,
  accessories: 3,
};

let currentProduct = null;

function visibleCards() {
  return [...cards].filter((card) => !card.classList.contains("is-hidden"));
}

function formatCount(count) {
  return count === 1 ? "1 matching product" : `${count} matching products`;
}

function updateFilterSummary(count) {
  if (resultCount) resultCount.textContent = formatCount(count);

  const parts = [];
  if (productState.category !== "all") parts.push(categoryLabels[productState.category] || productState.category);
  if (productState.type !== "all") parts.push(typeLabels[productState.type] || productState.type);
  if (productState.query) parts.push(`search: "${productState.query}"`);

  if (activeFilterText) {
    activeFilterText.textContent = parts.length ? `Showing ${parts.join(" / ")}` : "Showing the full catalog";
  }

  resetFilterButtons.forEach((button) => {
    button.disabled = parts.length === 0;
  });
}

function applyProductFilters() {
  let count = 0;

  cards.forEach((card) => {
    const matchesCategory = productState.category === "all" || card.dataset.category === productState.category;
    const matchesType = productState.type === "all" || card.dataset.productType === productState.type;
    const text = `${card.dataset.search || ""} ${card.textContent}`.toLowerCase();
    const matchesQuery = !productState.query || text.includes(productState.query);
    const visible = matchesCategory && matchesType && matchesQuery;

    card.classList.toggle("is-hidden", !visible);
    if (visible) count += 1;
  });

  if (emptyProducts) emptyProducts.hidden = count > 0;
  updateFilterSummary(count);
}

function setCategory(category) {
  productState.category = category;
  filters.forEach((button) => button.classList.toggle("active", button.dataset.filter === category));
  applyProductFilters();
}

function setType(type) {
  productState.type = type;
  typeChips.forEach((button) => button.classList.toggle("active", button.dataset.type === type));
  applyProductFilters();
}

function resetFilters() {
  productState.category = "all";
  productState.type = "all";
  productState.query = "";
  if (productSearch) productSearch.value = "";
  filters.forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
  typeChips.forEach((button) => button.classList.toggle("active", button.dataset.type === "all"));
  applyProductFilters();
}

function getProductFromCard(card) {
  const image = card.querySelector("img");
  return {
    card,
    image,
    title: card.querySelector("h3")?.textContent?.trim() || "Selected product",
    tag: card.querySelector(".tag")?.textContent?.trim() || "Product",
    text: card.querySelector("p")?.textContent?.trim() || "",
    category: card.dataset.category || "all",
    type: card.dataset.productType || "all",
  };
}

function prepareQuote(product) {
  if (!product) return;

  if (productSelect && categoryToQuoteOption[product.category] !== undefined) {
    productSelect.selectedIndex = categoryToQuoteOption[product.category];
  }

  if (messageField && !messageField.value.trim()) {
    messageField.value = `I would like a quote for ${product.title}. Please share price, available sizes, and delivery options.`;
  }
}

function openProductDetail(card) {
  if (!productModal) return;

  const product = getProductFromCard(card);
  const specs = card.querySelector("dl");
  currentProduct = product;

  detailImage.src = product.image?.src || "";
  detailImage.alt = product.image?.alt || product.title;
  detailTag.textContent = product.tag;
  detailTitle.textContent = product.title;
  detailText.textContent = product.text;
  detailLocation.textContent = `Catalog > ${categoryLabels[product.category] || product.category}`;
  detailType.textContent = typeLabels[product.type] || product.type;
  if (detailSpecs) detailSpecs.innerHTML = specs?.innerHTML || "";

  productModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeProductDetail() {
  if (!productModal) return;
  productModal.hidden = true;
  document.body.style.overflow = "";
}

function decorateProductCards() {
  cards.forEach((card) => {
    if (card.querySelector(".product-card-actions")) return;

    const actions = document.createElement("div");
    actions.className = "product-card-actions";
    actions.innerHTML = `
      <span>
        <strong data-card-action data-i18n="card.viewDetails">View details</strong>
        <small data-card-action-hint data-i18n="card.hint">Specs and quote options</small>
      </span>
      <a href="index.html#quote" data-card-quote data-i18n="card.quote">Request quote</a>
    `;

    actions.querySelector("[data-card-quote]").addEventListener("click", (event) => {
      event.stopPropagation();
      prepareQuote(getProductFromCard(card));
    });

    card.querySelector(".product-body")?.append(actions);
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", card.querySelector("h3")?.textContent?.trim() || "View product details");
    card.addEventListener("click", () => openProductDetail(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProductDetail(card);
      }
    });
  });
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => setCategory(filter.dataset.filter));
});

typeChips.forEach((chip) => {
  chip.addEventListener("click", () => setType(chip.dataset.type));
});

productSearch?.addEventListener("input", () => {
  productState.query = productSearch.value.trim().toLowerCase();
  applyProductFilters();
});

resetFilterButtons.forEach((button) => {
  button.addEventListener("click", resetFilters);
});

smartTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = tab.dataset.smart;
    smartTabs.forEach((item) => item.classList.toggle("active", item === tab));
    smartPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.smartPanel === selected);
    });
  });
});

productModal?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-product]")) closeProductDetail();
});

document.querySelector("[data-request-product]")?.addEventListener("click", () => {
  prepareQuote(currentProduct);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && productModal && !productModal.hidden) closeProductDetail();
});

decorateProductCards();
if (cards.length) applyProductFilters();

// ==========================================
// TRANSLATION (i18n) ENGINE & DICTIONARY
// ==========================================

const translations = {
  en: {
    "brand.name": "Nashwan Al-Faqih",
    "brand.subtitle": "Yemen Building Solutions",
    "brand.catalog": "General Product Catalog",
    "brand.factory": "Smart Home Factory Partner",
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.products": "General Catalog",
    "nav.smartHome": "Smart Home Factory",
    "nav.quote": "Request Quote",
    "language.btn": "Arabic",
    "hero.eyebrow": "Premium Plumbing & Building Solutions in Yemen",
    "hero.title": "Complete water supply and drainage solutions for modern projects.",
    "hero.text": "Nashwan Al-Faqih provides contractors, plumbers, retailers, and homeowners across Yemen with durable pipes, fittings, sanitary ware, valves, accessories, and project supply packages selected for local site conditions.",
    "hero.catalogCta": "Browse General Catalog",
    "hero.factoryCta": "Explore Smart Home Factory",
    "hero.cardValue": "Yemen",
    "hero.cardLabel": "Project-ready supply",
    "hero.stat1Value": "6",
    "hero.stat1Label": "Core product lines",
    "hero.stat2Value": "100+",
    "hero.stat2Label": "Catalog items",
    "hero.stat3Value": "Yemen",
    "hero.stat3Label": "Market focus",
    "intro.eyebrow": "Complete project supply",
    "intro.title": "A practical partner for contractors, plumbers, stores, and homeowners.",
    "intro.text": "Find exactly what your project demands. From robust water supply and drainage networks to elegant sanitary ware and reliable accessories, we supply high-quality materials engineered for the Yemeni market.",
    "products.eyebrow": "Choose your catalog",
    "products.title": "Two focused paths for faster buying decisions.",
    "products.lede": "General plumbing inventory and Smart Home factory drainage products now live on dedicated pages, making it easier for buyers to compare, filter, and request the right package.",
    "products.promise1": "Fast product matching",
    "products.promise2": "Quote-ready selections",
    "products.promise3": "Project package support",
    "teaser1.tag": "General Catalog",
    "teaser1.title": "Water supply, sanitary ware, valves, adhesives, and accessories.",
    "teaser1.text": "Browse a focused inventory for villas, buildings, retail counters, maintenance work, and contractor supply packages.",
    "teaser1.cta": "Browse General Catalog",
    "teaser2.tag": "Factory Partner",
    "teaser2.title": "Smart Home PVC-U drainage systems for indoor and outdoor applications.",
    "teaser2.text": "Explore pipes, fittings, drains, outdoor channels, inspection chambers, and backwater protection from the Smart Home range.",
    "teaser2.cta": "Explore Smart Home Factory",
    "quality.eyebrow": "Quality assurance",
    "quality.title": "Certified Quality & Project Confidence",
    "quality.text": "We supply products that meet rigorous testing and production standards. From quality materials to recognized certifications, we provide supplies that offer long-lasting performance and peace of mind for important projects.",
    "quality.item1Title": "Tested product systems",
    "quality.item1Text": "Products are positioned around durability, pressure performance, installation reliability, and long service life.",
    "quality.item2Title": "Recognized standards",
    "quality.item2Text": "Quality programs and product approvals help buyers specify materials with confidence.",
    "quality.item3Title": "Yemen project support",
    "quality.item3Text": "We help customers select compatible pipes, fittings, drainage, valves, and accessories for each project.",
    "services.eyebrow": "Services",
    "services.title": "More than a product list.",
    "services.item1Title": "Complete project packages",
    "services.item1Text": "Coordinate water supply, drainage, accessories, and sanitary items in one clear quote.",
    "services.item2Title": "Technical guidance",
    "services.item2Text": "Support plumbers and contractors with product matching and installation choices.",
    "services.item3Title": "Bulk supply",
    "services.item3Text": "Prepare organized requests for villas, buildings, stores, and industrial projects.",
    "services.item4Title": "Buyer support",
    "services.item4Text": "Help homeowners and retailers choose practical, compatible materials before purchase.",
    "quote.eyebrow": "Yemen inquiries",
    "quote.title": "Request products, quantities, or a project package.",
    "quote.text": "Get in touch with our team today for a tailored quote. Provide your project details, required quantities, and location, and we will prepare a comprehensive package for you.",
    "quote.phone": "Phone: +967 000 000 000",
    "quote.whatsapp": "WhatsApp: +967 000 000 000",
    "quote.address": "Address: Yemen - add your branch address here",
    "form.name": "Name",
    "form.product": "Product Needed",
    "form.message": "Message",
    "form.submit": "Send Request",
    "form.option1": "Water supply systems",
    "form.option2": "Drainage solutions",
    "form.option3": "Sanitary ware",
    "form.option4": "Valves and accessories",
    "form.option5": "Complete project package",
    "footer.name": "Nashwan Al-Faqih",
    "footer.text": "Yemen catalog for water supply, drainage, sanitary ware, valves, fittings, adhesives, and accessories.",
    "footer.quote": "Request a quote",
    "footer.smartQuote": "Request a Smart Home factory quote",
    "catalog.eyebrow": "General inventory",
    "catalog.heroTitle": "Reliable plumbing and building materials for projects across Yemen.",
    "catalog.heroText": "Filter water supply systems, sanitary ware, valves, adhesives, and accessories to find the right materials for villas, buildings, shops, maintenance work, and contractor supply orders.",
    "catalog.browseBtn": "Browse Products",
    "catalog.quoteBtn": "Request Package Quote",
    "catalog.eyebrow2": "Browse by need",
    "catalog.title2": "General catalog for fast product selection.",
    "catalog.lede2": "Every item below is written for buyer clarity: what it is, where it fits, and why it belongs in a durable project package.",
    "catalog.promise1": "Contractor-ready stock",
    "catalog.promise2": "Retail-friendly categories",
    "catalog.promise3": "Quote-ready product cards",
    "tools.step1": "1. Choose category",
    "tools.step2": "2. Search products",
    "tools.step3": "3. Narrow by type",
    "tools.searchHolder": "Search products",
    "tools.reset": "Reset filters",
    "filter.all": "All",
    "filter.water": "Water Supply",
    "filter.sanitary": "Sanitary Ware",
    "filter.valves": "Valves",
    "filter.adhesives": "Adhesives",
    "filter.accessories": "Accessories",
    "type.pipes": "Pipes",
    "type.fittings": "Fittings",
    "empty.title": "No products match this view.",
    "empty.text": "Try clearing the search or choosing a wider product category.",
    "prod.ppr.title": "PP-R Pressure Pipe Systems",
    "prod.ppr.text": "Durable hot and cold water pipe systems for homes, buildings, stores, and light commercial projects.",
    "prod.pprct.title": "PP-RCT Heavy Duty Lines",
    "prod.pprct.text": "High-performance pipe options for larger networks, technical installations, and demanding project specifications.",
    "prod.uv.title": "UV-Resistant Multilayer Pipes",
    "prod.uv.text": "Outdoor-ready piping built for sun exposure, pressure stability, and long service life in harsh climates.",
    "prod.fittings.title": "Tee, Elbow, Socket, and Reducer Fittings",
    "prod.fittings.text": "Essential fittings for clean distribution layouts, maintenance access, and reliable installation work.",
    "prod.wash.title": "Matte Tabletop Washbasins",
    "prod.wash.text": "Premium washbasin selections for villas, apartments, showrooms, hotels, and modern renovations.",
    "prod.dual.title": "Dual Finish Sanitary Sets",
    "prod.dual.text": "Elegant sanitary ware sets for full bathroom displays and premium project supply packages.",
    "prod.ball.title": "Ball Valves",
    "prod.ball.text": "Reliable shutoff valves for water control, service points, and practical installation work.",
    "prod.concealed.title": "Concealed Valves",
    "prod.concealed.text": "Clean wall-mounted control options for bathrooms, hidden plumbing points, and modern interiors.",
    "prod.tech.title": "Technical Valves and Filters",
    "prod.tech.text": "Network control products for regulating service points, filtration, and technical plumbing lines.",
    "prod.adhesives.title": "Adhesives and Solvent Cement Support",
    "prod.adhesives.text": "Installation support materials for secure joints, reliable maintenance, and professional finishing.",
    "prod.clamps.title": "Clamps, Inserts, and Accessories",
    "prod.clamps.text": "Support products that help plumbers complete neat, stable, and compatible installations.",
    "prod.flange.title": "Flange Adaptors and Manifolds",
    "prod.flange.text": "Connection products for linking pipe systems to valves, pumps, and larger project infrastructure.",
    "spec.material": "Material",
    "spec.protection": "Protection",
    "spec.types": "Types",
    "spec.finish": "Finish",
    "spec.range": "Range",
    "spec.ready": "Ready for",
    "spec.use": "Use",
    "spec.use1": "Hot and cold water",
    "spec.use2": "Main water networks",
    "spec.use3": "Outdoor water lines",
    "spec.use4": "Branching and routing",
    "spec.uv": "UV resistant",
    "spec.types1": "Tee, elbow, socket",
    "spec.f1": "Matte black",
    "spec.f2": "Dual glaze",
    "spec.f3": "Chrome",
    "spec.u1": "Modern bathrooms",
    "spec.u2": "Bathroom packages",
    "spec.u3": "Water control",
    "spec.u4": "Bathroom control",
    "spec.u5": "Network control",
    "spec.u6": "Joint support",
    "spec.u7": "Project completion",
    "spec.u8": "System connection",
    "spec.m1": "Brass, chrome",
    "spec.r1": "Y filter, seated valve",
    "spec.r2": "Clamps, inserts",
    "spec.re1": "Site installation",
    "spec.re2": "Project orders",
    "smart.eyebrow": "Manufacturing partner",
    "smart.heroTitle": "Smart Home PVC-U drainage systems built for reliable indoor and outdoor performance.",
    "smart.heroText": "Smart Home is presented as a dedicated factory partner for non-pressure wastewater and rainwater drainage systems. The range supports contractors, plumbers, and homeowners with lightweight PVC-U components, strong chemical resistance, smooth internal flow, inspection access, and practical sizes from 32mm to 160mm.",
    "smart.btn1": "View Smart Home Products",
    "smart.btn2": "Request Factory Range Quote",
    "smart.introEyebrow": "Factory quality",
    "smart.introTitle": "Designed for high-flow capacity, installation speed, and long-term building protection.",
    "smart.introText": "Smart Home drainage products are organized for professional site work: pipes for main wastewater runs, fittings for clean direction changes and branches, floor drains for wet areas, and outdoor solutions for rainwater management, inspection, and backflow protection.",
    "smart.qualEyebrow": "Standards and confidence",
    "smart.qualTitle": "Factory-made drainage solutions for demanding projects.",
    "smart.qualText": "The Smart Home range is selected for practical installation, consistent component compatibility, smooth water flow, chemical resistance, and inspection-friendly maintenance. It gives Yemeni contractors and plumbers a complete drainage family from one recognizable manufacturing partner.",
    "smart.list1Title": "Complete PVC-U system",
    "smart.list1Text": "Pipes, fittings, drains, channels, chambers, and protection products work together across project sizes.",
    "smart.list2Title": "Installer-friendly parts",
    "smart.list2Text": "Lightweight components and clear product families support faster handling and cleaner installation on site.",
    "smart.list3Title": "Indoor and outdoor coverage",
    "smart.list3Text": "Use the range for wastewater lines, rainwater drainage, inspection points, and outdoor water management.",
    "smart.gridEyebrow": "Smart Home product range",
    "smart.gridTitle": "A complete, high-performance PVC-U drainage family.",
    "smart.gridText": "Browse Smart Home products by practical site category. Every product shown here belongs to the Smart Home factory range and is focused exclusively on drainage, wastewater, rainwater, and inspection solutions.",
    "smart.tab.pipes": "PVC-U Pipes",
    "smart.tab.fittings": "Fittings",
    "smart.tab.drains": "Floor Drains",
    "smart.tab.outdoor": "Outdoor Solutions",
    "smart.p1": "PVC-U Pipes",
    "smart.p2": "Multi-Layer Pipes",
    "smart.p3": "Ring Socket Pipes",
    "smart.p4": "Solvent Cement Pipes",
    "smart.p5": "PVC Drain Upper Section",
    "smart.p6": "Pipe Plug",
    "smart.f1": "Elbow 87.5°",
    "smart.f2": "Elbow 45°",
    "smart.f3": "Elbow with Access Door",
    "smart.f4": "Tee 87.5°",
    "smart.f5": "Tee 45°",
    "smart.f6": "Tee with Access Door",
    "smart.f7": "Cross 45°",
    "smart.f8": "Short Cross 87.5°",
    "smart.f9": "Socket",
    "smart.f10": "Socket with Inner Thread",
    "smart.f11": "Eccentric Reducer",
    "smart.f12": "Expansion Joint",
    "smart.d1": "Small Drain",
    "smart.d2": "Drain 8.8 cm",
    "smart.d3": "Drain 7 cm",
    "smart.d4": "Drain with Odor Trap",
    "smart.d5": "Floor Drain with Odor Trap",
    "smart.d6": "Floor Drain Cover",
    "smart.d7": "Floor Drain Plug",
    "smart.d8": "Rain Drain with Cover",
    "smart.d9": "Siphon",
    "smart.o1": "Outdoor Solutions",
    "smart.o2": "Inspection Chamber 500mm",
    "smart.o3": "Inspection Chamber Ø600mm",
    "smart.o4": "Inspection Point Drain",
    "smart.o5": "Water Channel with Cast Iron Cover",
    "smart.o6": "Drainage Collector",
    "smart.o7": "Drainage Lifting Station",
    "smart.o8": "Gully Trap",
    "smart.o9": "Backwater Valves",
    "smart.o10": "Air Vent",
    "smart.note.title": "Applications and features",
    "smart.note.text": "Use Smart Home products for wastewater, rainwater, air-conditioning drainage, and main drainage lines. The range supports smooth internal surfaces, easy handling, high flow, inspection access, and long-term durability.",
    "card.viewDetails": "View details",
    "card.hint": "Specs and quote options",
    "card.quote": "Request quote",
    "modal.close": "Close",
    "modal.kicker": "Selected product",
    "modal.specs": "Quick specs",
    "modal.loc": "Catalog location",
    "modal.type": "Product type",
    "modal.avail": "Availability",
    "modal.availText": "Yemen supply / request quote",
    "modal.cont": "Continue browsing"
  },
  ar: {
    "brand.name": "نشوان الفقيه",
    "brand.subtitle": "لحلول البناء - اليمن",
    "brand.catalog": "الكتالوج العام للمنتجات",
    "brand.factory": "شريك مصنع سمارت هوم",
    "nav.home": "الرئيسية",
    "nav.solutions": "الحلول",
    "nav.products": "الكتالوج العام",
    "nav.smartHome": "مصنع سمارت هوم",
    "nav.quote": "طلب تسعيرة",
    "language.btn": "English",
    "hero.eyebrow": "حلول السباكة والبناء الممتازة في اليمن",
    "hero.title": "حلول متكاملة لإمدادات المياه والصرف الصحي للمشاريع الحديثة.",
    "hero.text": "يوفر نشوان الفقيه للمقاولين والسباكين وتجار التجزئة وأصحاب المنازل في جميع أنحاء اليمن أنابيب، وتجهيزات، وأدوات صحية، وصمامات، وإكسسوارات متينة ومختارة لتناسب ظروف المواقع المحلية.",
    "hero.catalogCta": "تصفح الكتالوج العام",
    "hero.factoryCta": "استكشف مصنع سمارت هوم",
    "hero.cardValue": "اليمن",
    "hero.cardLabel": "توريد جاهز للمشاريع",
    "hero.stat1Value": "6",
    "hero.stat1Label": "خطوط إنتاج أساسية",
    "hero.stat2Value": "+100",
    "hero.stat2Label": "عنصر في الكتالوج",
    "hero.stat3Value": "اليمن",
    "hero.stat3Label": "التركيز في السوق",
    "intro.eyebrow": "توريد متكامل للمشاريع",
    "intro.title": "شريك عملي للمقاولين، السباكين، المتاجر، وأصحاب المنازل.",
    "intro.text": "اعثر على ما يتطلبه مشروعك بالضبط. من شبكات إمدادات المياه والصرف الصحي القوية إلى الأدوات الصحية الأنيقة والإكسسوارات الموثوقة، نوفر مواد عالية الجودة مصممة للسوق اليمني.",
    "products.eyebrow": "اختر الكتالوج الخاص بك",
    "products.title": "مساران مخصصان لاتخاذ قرارات شراء أسرع.",
    "products.lede": "الآن يوجد كتالوج السباكة العام ومنتجات الصرف الصحي لمصنع سمارت هوم في صفحات مخصصة، مما يسهل على المشترين المقارنة والفلترة وطلب الحزمة المناسبة.",
    "products.promise1": "مطابقة سريعة للمنتجات",
    "products.promise2": "خيارات جاهزة للتسعير",
    "products.promise3": "دعم حزم المشاريع",
    "teaser1.tag": "الكتالوج العام",
    "teaser1.title": "إمدادات المياه، الأدوات الصحية، الصمامات، المواد اللاصقة، والإكسسوارات.",
    "teaser1.text": "تصفح مخزوناً مخصصاً للفلل، المباني، المتاجر، أعمال الصيانة، وحزم توريد المقاولين.",
    "teaser1.cta": "تصفح الكتالوج العام",
    "teaser2.tag": "شريك التصنيع",
    "teaser2.title": "أنظمة الصرف الصحي PVC-U من سمارت هوم للتطبيقات الداخلية والخارجية.",
    "teaser2.text": "استكشف الأنابيب، التوصيلات، المصارف، القنوات الخارجية، غرف التفتيش، وحماية الارتداد من مجموعة سمارت هوم.",
    "teaser2.cta": "استكشف مصنع سمارت هوم",
    "quality.eyebrow": "ضمان الجودة",
    "quality.title": "جودة معتمدة وثقة في المشاريع",
    "quality.text": "نحن نوفر منتجات تلبي معايير الاختبار والإنتاج الصارمة. من المواد عالية الجودة إلى الشهادات المعتمدة، نقدم إمدادات توفر أداءً طويل الأمد وراحة بال للمشاريع المهمة.",
    "quality.item1Title": "أنظمة منتجات مختبرة",
    "quality.item1Text": "تركز المنتجات على المتانة، أداء الضغط، موثوقية التركيب، وعمر الخدمة الطويل.",
    "quality.item2Title": "معايير معترف بها",
    "quality.item2Text": "تساعد برامج الجودة وموافقات المنتجات المشترين على تحديد المواد بثقة.",
    "quality.item3Title": "دعم المشاريع في اليمن",
    "quality.item3Text": "نحن نساعد العملاء على اختيار الأنابيب والتوصيلات والصرف والصمامات والإكسسوارات المتوافقة لكل مشروع.",
    "services.eyebrow": "الخدمات",
    "services.title": "أكثر من مجرد قائمة منتجات.",
    "services.item1Title": "حزم مشاريع متكاملة",
    "services.item1Text": "نسق إمدادات المياه، الصرف الصحي، الإكسسوارات، والأدوات الصحية في تسعيرة واحدة واضحة.",
    "services.item2Title": "توجيه فني",
    "services.item2Text": "دعم السباكين والمقاولين في مطابقة المنتجات وخيارات التركيب.",
    "services.item3Title": "توريد بالجملة",
    "services.item3Text": "تجهيز طلبات منظمة للفلل، المباني، المتاجر، والمشاريع الصناعية.",
    "services.item4Title": "دعم المشترين",
    "services.item4Text": "مساعدة أصحاب المنازل وتجار التجزئة على اختيار مواد عملية ومتوافقة قبل الشراء.",
    "quote.eyebrow": "استفسارات اليمن",
    "quote.title": "اطلب منتجات، كميات، أو حزمة مشروع.",
    "quote.text": "تواصل مع فريقنا اليوم للحصول على تسعيرة مخصصة. قدم تفاصيل مشروعك، الكميات المطلوبة، والموقع، وسنقوم بإعداد حزمة شاملة لك.",
    "quote.phone": "الهاتف: 000 000 000 967+",
    "quote.whatsapp": "واتساب: 000 000 000 967+",
    "quote.address": "العنوان: اليمن - أضف عنوان فرعك هنا",
    "form.name": "الاسم",
    "form.product": "المنتج المطلوب",
    "form.message": "الرسالة",
    "form.submit": "إرسال الطلب",
    "form.option1": "أنظمة إمداد المياه",
    "form.option2": "حلول الصرف الصحي",
    "form.option3": "الأدوات الصحية",
    "form.option4": "الصمامات والإكسسوارات",
    "form.option5": "حزمة مشروع كاملة",
    "footer.name": "نشوان الفقيه",
    "footer.text": "كتالوج اليمن لإمدادات المياه، الصرف الصحي، الأدوات الصحية، الصمامات، التوصيلات، المواد اللاصقة، والإكسسوارات.",
    "footer.quote": "طلب تسعيرة",
    "footer.smartQuote": "طلب تسعيرة لمنتجات مصنع سمارت هوم",
    "catalog.eyebrow": "المخزون العام",
    "catalog.heroTitle": "مواد سباكة وبناء موثوقة للمشاريع في جميع أنحاء اليمن.",
    "catalog.heroText": "قم بتصفية إمدادات المياه، والأدوات الصحية، والصمامات، والمواد اللاصقة، والإكسسوارات للعثور على المواد المناسبة للفلل، والمباني، والمتاجر، وأعمال الصيانة، وطلبات توريد المقاولين.",
    "catalog.browseBtn": "تصفح المنتجات",
    "catalog.quoteBtn": "طلب تسعيرة حزمة",
    "catalog.eyebrow2": "تصفح حسب الحاجة",
    "catalog.title2": "كتالوج عام لاختيار المنتجات بسرعة.",
    "catalog.lede2": "تمت كتابة كل عنصر أدناه بوضوح للمشتري: ما هو، وأين يتم تركيبه، ولماذا يجب إدراجه في حزمة مشروع قوية ومتينة.",
    "catalog.promise1": "مخزون جاهز للمقاولين",
    "catalog.promise2": "فئات مناسبة لتجار التجزئة",
    "catalog.promise3": "بطاقات منتجات جاهزة للتسعير",
    "tools.step1": "1. اختر الفئة",
    "tools.step2": "2. ابحث عن المنتجات",
    "tools.step3": "3. تصفية حسب النوع",
    "tools.searchHolder": "ابحث عن المنتجات",
    "tools.reset": "إعادة ضبط الفلاتر",
    "filter.all": "الكل",
    "filter.water": "إمدادات المياه",
    "filter.sanitary": "الأدوات الصحية",
    "filter.valves": "الصمامات",
    "filter.adhesives": "المواد اللاصقة",
    "filter.accessories": "الإكسسوارات",
    "type.pipes": "أنابيب",
    "type.fittings": "توصيلات",
    "empty.title": "لا توجد منتجات تطابق هذا العرض.",
    "empty.text": "حاول مسح البحث أو اختيار فئة منتجات أوسع.",
    "prod.ppr.title": "أنظمة أنابيب الضغط PP-R",
    "prod.ppr.text": "أنظمة أنابيب متينة للمياه الساخنة والباردة للمنازل، والمباني، والمتاجر، والمشاريع التجارية الخفيفة.",
    "prod.pprct.title": "أنابيب PP-RCT للخدمة الشاقة",
    "prod.pprct.text": "خيارات أنابيب عالية الأداء للشبكات الكبيرة، والتركيبات الفنية، ومواصفات المشاريع المتطلبة.",
    "prod.uv.title": "أنابيب متعددة الطبقات مقاومة للأشعة UV",
    "prod.uv.text": "أنابيب جاهزة للاستخدام الخارجي مصممة للتعرض لأشعة الشمس، واستقرار الضغط، وعمر خدمة طويل في المناخات القاسية.",
    "prod.fittings.title": "توصيلات (Tee، كوع، وصلة، ومخفض)",
    "prod.fittings.text": "توصيلات أساسية لتخطيطات توزيع نظيفة، وسهولة الوصول للصيانة، وأعمال تركيب موثوقة.",
    "prod.wash.title": "مغاسل توضع على سطح (مطفي)",
    "prod.wash.text": "تشكيلة مغاسل فاخرة للفلل، والشقق، ومعارض العرض، والفنادق، والتجديدات الحديثة.",
    "prod.dual.title": "أطقم صحية بطلاء مزدوج",
    "prod.dual.text": "أطقم أدوات صحية أنيقة لعروض الحمامات الكاملة وحزم توريد المشاريع المتميزة.",
    "prod.ball.title": "صمامات كروية (محابس كرة)",
    "prod.ball.text": "صمامات إغلاق موثوقة للتحكم في المياه، ونقاط الخدمة، وأعمال التركيب العملية.",
    "prod.concealed.title": "صمامات مخفية (محابس دفن)",
    "prod.concealed.text": "خيارات تحكم نظيفة مثبتة على الحائط للحمامات، ونقاط السباكة المخفية، والديكورات الحديثة.",
    "prod.tech.title": "صمامات فنية وفلاتر",
    "prod.tech.text": "منتجات التحكم في الشبكة لتنظيم نقاط الخدمة، والفلترة، وخطوط السباكة الفنية.",
    "prod.adhesives.title": "مواد لاصقة وغراء داعم",
    "prod.adhesives.text": "مواد دعم التركيب لمفاصل آمنة، وصيانة موثوقة، وتشطيب احترافي.",
    "prod.clamps.title": "مرابط (أقفال) ومستلزمات التركيب",
    "prod.clamps.text": "منتجات داعمة تساعد السباكين على إكمال تركيبات أنيقة، ومستقرة، ومتوافقة.",
    "prod.flange.title": "محولات فلنجة ومجمعات",
    "prod.flange.text": "منتجات ربط لتوصيل أنظمة الأنابيب بالصمامات، والمضخات، والبنية التحتية الكبيرة للمشاريع.",
    "spec.material": "المواد",
    "spec.protection": "الحماية",
    "spec.types": "الأنواع",
    "spec.finish": "الطلاء",
    "spec.range": "المدى",
    "spec.ready": "جاهز لـ",
    "spec.use": "الاستخدام",
    "spec.use1": "مياه ساخنة وباردة",
    "spec.use2": "الشبكات الرئيسية",
    "spec.use3": "خطوط المياه الخارجية",
    "spec.use4": "التفريعات والتوجيه",
    "spec.uv": "مقاوم للأشعة فوق البنفسجية",
    "spec.types1": "تي (Tee)، كوع، وصلة",
    "spec.f1": "أسود مطفي",
    "spec.f2": "طلاء مزدوج",
    "spec.f3": "كروم",
    "spec.u1": "حمامات حديثة",
    "spec.u2": "حزم حمامات",
    "spec.u3": "التحكم في المياه",
    "spec.u4": "التحكم في الحمام",
    "spec.u5": "التحكم في الشبكة",
    "spec.u6": "دعم المفاصل",
    "spec.u7": "إكمال المشروع",
    "spec.u8": "توصيل النظام",
    "spec.m1": "نحاس، كروم",
    "spec.r1": "فلتر Y، صمام مقعد",
    "spec.r2": "مرابط، إدخالات",
    "spec.re1": "تركيب الموقع",
    "spec.re2": "طلبات المشاريع",
    "smart.eyebrow": "شريك التصنيع",
    "smart.heroTitle": "أنظمة الصرف الصحي PVC-U من سمارت هوم مصممة لأداء موثوق داخليًا وخارجيًا.",
    "smart.heroText": "يُقدم سمارت هوم كشريك مصنع مخصص لأنظمة تصريف مياه الصرف الصحي ومياه الأمطار بدون ضغط. تدعم هذه المجموعة المقاولين، والسباكين، وأصحاب المنازل بمكونات PVC-U خفيفة الوزن، ومقاومة قوية للمواد الكيميائية، وتدفق داخلي سلس، وسهولة الفحص، وأحجام عملية من 32 مم إلى 160 مم.",
    "smart.btn1": "عرض منتجات سمارت هوم",
    "smart.btn2": "طلب تسعيرة لمنتجات المصنع",
    "smart.introEyebrow": "جودة المصنع",
    "smart.introTitle": "مصممة لسعة تدفق عالية، وسرعة في التركيب، وحماية طويلة الأمد للمباني.",
    "smart.introText": "تم تنظيم منتجات الصرف الصحي من سمارت هوم لأعمال المواقع الاحترافية: أنابيب لخطوط الصرف الصحي الرئيسية، وتوصيلات لتغيير الاتجاهات والتفريعات النظيفة، ومصارف أرضية للمناطق الرطبة، وحلول خارجية لإدارة مياه الأمطار، وغرف التفتيش، وحماية الارتداد (الرداد).",
    "smart.qualEyebrow": "المعايير والثقة",
    "smart.qualTitle": "حلول صرف صحي مصنوعة في المصنع للمشاريع المتطلبة.",
    "smart.qualText": "تم اختيار مجموعة سمارت هوم لعملية التركيب السهلة، والتوافق المستمر بين المكونات، وتدفق المياه السلس، والمقاومة الكيميائية، والصيانة الصديقة للفحص. يمنح هذا المقاولين والسباكين في اليمن عائلة صرف صحي كاملة من شريك تصنيع واحد معترف به.",
    "smart.list1Title": "نظام PVC-U متكامل",
    "smart.list1Text": "تعمل الأنابيب، والتوصيلات، والمصارف، والقنوات، وغرف التفتيش، ومنتجات الحماية معًا عبر أحجام المشاريع المختلفة.",
    "smart.list2Title": "أجزاء سهلة التركيب",
    "smart.list2Text": "المكونات خفيفة الوزن وعائلات المنتجات الواضحة تدعم المناولة السريعة والتركيب النظيف في الموقع.",
    "smart.list3Title": "تغطية داخلية وخارجية",
    "smart.list3Text": "استخدم المجموعة لخطوط الصرف الصحي، وتصريف مياه الأمطار، ونقاط الفحص، وإدارة المياه الخارجية.",
    "smart.gridEyebrow": "مجموعة منتجات سمارت هوم",
    "smart.gridTitle": "عائلة صرف صحي PVC-U كاملة وعالية الأداء.",
    "smart.gridText": "تصفح منتجات سمارت هوم حسب الفئة العملية للموقع. كل منتج معروض هنا ينتمي إلى مصنع سمارت هوم ويركز حصريًا على حلول الصرف الصحي، ومياه الأمطار، والتفتيش.",
    "smart.tab.pipes": "أنابيب PVC-U",
    "smart.tab.fittings": "توصيلات",
    "smart.tab.drains": "مصارف أرضية (صفايات)",
    "smart.tab.outdoor": "حلول خارجية",
    "smart.p1": "أنابيب PVC-U",
    "smart.p2": "أنابيب متعددة الطبقات",
    "smart.p3": "أنابيب بجوان",
    "smart.p4": "أنابيب لحام غراء",
    "smart.p5": "الجزء العلوي لمصرف PVC",
    "smart.p6": "سدادة أنبوب",
    "smart.f1": "كوع 87.5°",
    "smart.f2": "كوع 45°",
    "smart.f3": "كوع بباب كشف",
    "smart.f4": "تي (Tee) 87.5°",
    "smart.f5": "تي (Tee) 45°",
    "smart.f6": "تي بباب كشف",
    "smart.f7": "صليب (كروس) 45°",
    "smart.f8": "صليب قصير 87.5°",
    "smart.f9": "وصلة (جلبة)",
    "smart.f10": "وصلة بسن داخلي",
    "smart.f11": "مخفض لا مركزي (نقاص)",
    "smart.f12": "وصلة تمدد",
    "smart.d1": "مصرف صغير",
    "smart.d2": "مصرف 8.8 سم",
    "smart.d3": "مصرف 7 سم",
    "smart.d4": "مصرف بمانع روائح",
    "smart.d5": "مصرف أرضي بمانع روائح",
    "smart.d6": "غطاء مصرف أرضي",
    "smart.d7": "سدادة مصرف أرضي",
    "smart.d8": "مصرف أمطار بغطاء",
    "smart.d9": "سيفون",
    "smart.o1": "حلول خارجية",
    "smart.o2": "غرفة تفتيش 500 مم",
    "smart.o3": "غرفة تفتيش Ø600 مم",
    "smart.o4": "مصرف نقطة تفتيش",
    "smart.o5": "قناة مياه بغطاء زهر",
    "smart.o6": "مجمع تصريف",
    "smart.o7": "محطة رفع الصرف",
    "smart.o8": "مصيدة (Gully Trap)",
    "smart.o9": "صمامات ارتداد (رداد)",
    "smart.o10": "هواية",
    "smart.note.title": "التطبيقات والميزات",
    "smart.note.text": "استخدم منتجات سمارت هوم لمياه الصرف الصحي، ومياه الأمطار، وتصريف المكيفات، وخطوط الصرف الرئيسية. تدعم المجموعة الأسطح الداخلية الملساء، والمناولة السهلة، والتدفق العالي، وسهولة الوصول للفحص، والمتانة طويلة الأمد.",
    "card.viewDetails": "عرض التفاصيل",
    "card.hint": "المواصفات وخيارات التسعير",
    "card.quote": "طلب تسعيرة",
    "modal.close": "إغلاق",
    "modal.kicker": "المنتج المحدد",
    "modal.specs": "مواصفات سريعة",
    "modal.loc": "موقع الكتالوج",
    "modal.type": "نوع المنتج",
    "modal.avail": "التوافر",
    "modal.availText": "توريد اليمن / طلب تسعيرة",
    "modal.cont": "مواصلة التصفح"
  }
};

// ==========================================
// ROBUST TRANSLATION LOGIC (Handles URL parameters & Local Storage)
// ==========================================

let currentLang = 'en';

// Safely get language (Checks URL first, then localStorage)
try {
  const params = new URLSearchParams(window.location.search);
  if (params.has('lang')) {
    currentLang = params.get('lang');
    localStorage.setItem('siteLang', currentLang);
  } else {
    currentLang = localStorage.getItem('siteLang') || 'en';
  }
} catch (e) {
  // Ignore error if running strictly locally
}

function applyTranslation(lang) {
  // 1. Change direction
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // 2. Change Text Content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // 3. Change Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // 4. Update the toggle button itself
  const toggleBtn = document.querySelector('[data-language-toggle]');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'ar' ? translations.ar["language.btn"] : translations.en["language.btn"];
  }

  // 5. Append language to all internal links (Fixes issue where changing page resets to English)
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes('.html')) {
      try {
        const url = new URL(link.href);
        url.searchParams.set('lang', lang);
        link.href = url.href;
      } catch (e) {
        // Ignore parsing errors
      }
    }
  });

  // 6. Save preference
  try {
    localStorage.setItem('siteLang', lang);
  } catch (e) {}
}

// Attach event listener to button
const langButton = document.querySelector('[data-language-toggle]');
if (langButton) {
  langButton.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    applyTranslation(currentLang);
  });
}

// Run immediately on page load
applyTranslation(currentLang);