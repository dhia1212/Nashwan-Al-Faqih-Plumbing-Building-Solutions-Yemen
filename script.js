/* =========================================
   NASHWAN AL-FAQIH — MAIN SCRIPT
   ========================================= */

'use strict';

/* ---- i18n Translations ---- */
const translations = {
  en: {
    'brand.name': 'Nashwan Al-Faqih',
    'brand.subtitle': 'Plumbing & Building Solutions',
    'brand.aria': 'Nashwan Al-Faqih home',
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.products': 'Products',
    'nav.smart': 'Smart Home',
    'nav.banninger': 'Bänninger',
    'nav.kessel': 'Kessel',
    'nav.brands': 'Brands',
    'nav.about': 'About Us',
    'nav.quote': 'Request Quote',

    'hero.badge': "Yemen's Trusted Building Partner",
    'hero.title': 'Complete Plumbing &\nBuilding Solutions',
    'hero.desc': 'From robust water supply systems to elegant sanitary ware — we supply high-quality materials engineered for Yemen\'s most demanding projects.',
    'hero.cta1': 'Browse Our Products',
    'hero.cta2': 'Smart Home Factory',
    'hero.stat1': 'Product Lines',
    'hero.stat2': 'Core Categories',
    'hero.stat3': 'Wide Coverage',
    'hero.card1': 'Sanitary Ware',
    'hero.card2': 'Valves',
    'hero.card3': 'PP-R Pipes',
    'hero.card4': 'Smart Home',

    'solutions.eyebrow': 'What We Offer',
    'solutions.title': 'Comprehensive Building & Plumbing Solutions',
    'solutions.desc': 'We supply everything your project needs, from initial planning through to final installation. Serving contractors, plumbers, retailers, and homeowners across Yemen.',

    'sol1.title': 'Water Supply Systems',
    'sol1.desc': 'Complete PP-R and multilayer pipe systems for hot and cold water supply in residential and commercial buildings.',
    'sol1.link': 'Explore Products →',
    'sol2.title': 'Drainage Solutions',
    'sol2.desc': 'Smart Home factory PVC-U drainage systems for indoor and outdoor applications, including channels and inspection chambers.',
    'sol2.link': 'View Smart Home →',
    'sol3.title': 'Sanitary Ware',
    'sol3.desc': 'Premium quality washbasins, toilets, and bathroom accessories from leading manufacturers, suited for modern Yemeni homes.',
    'sol3.link': 'Browse Catalog →',
    'sol4.title': 'Valves & Fittings',
    'sol4.desc': 'Ball valves, check valves, reducers, elbows, tees, and all fittings required for complete plumbing installations.',
    'sol4.link': 'View All Fittings →',
    'sol5.title': 'Adhesives & Accessories',
    'sol5.desc': 'PVC solvent cement, CPVC adhesives, pipe clamps, and all accessories for secure, long-lasting plumbing connections.',
    'sol5.link': 'Shop Accessories →',
    'sol6.title': 'Project Packages',
    'sol6.desc': 'Complete supply coordination for villas, residential buildings, and commercial projects. One quote, everything included.',
    'sol6.link': 'Request Package →',

    'catalog.eyebrow': 'Product Catalogs',
    'catalog.title': 'Two Specialized Catalogs for Your Needs',
    'cat.badge1': 'General Catalog',
    'cat.title1': 'Water Supply, Sanitary Ware & Accessories',
    'cat.desc1': 'Browse our comprehensive inventory of pipes, fittings, valves, sanitary ware, and accessories — everything for plumbing projects across Yemen.',
    'cat.f1a': 'PP-R & Multilayer Pipes',
    'cat.f1b': 'Ball Valves & Check Valves',
    'cat.f1c': 'Sanitary Ware & Fixtures',
    'cat.f1d': 'Adhesives & Accessories',
    'cat.cta1': 'Browse General Catalog',
    'cat.badge2': 'Factory Partner',
    'cat.title2': 'Smart Home PVC-U Drainage Systems',
    'cat.desc2': "Explore Smart Home factory's complete drainage solution — pipes, fittings, drains, outdoor channels, inspection chambers and backwater protection.",
    'cat.f2a': 'Indoor Drainage Systems',
    'cat.f2b': 'Outdoor Channel Solutions',
    'cat.f2c': 'Inspection Chambers',
    'cat.f2d': 'Backwater Valves',
    'cat.cta2': 'Explore Smart Home Factory',

    'why.eyebrow': 'Why Choose Us',
    'why.title': 'Your Reliable Partner for Quality Building Materials',
    'why.desc': "Nashwan Al-Faqih is committed to supplying only tested, certified materials that meet rigorous standards for Yemen's diverse project requirements.",
    'why.item1title': 'Certified Product Quality',
    'why.item1desc': 'All products are sourced from manufacturers with recognized quality programs and international product approvals.',
    'why.item2title': 'Technical Expertise',
    'why.item2desc': 'Our team provides expert guidance for product selection and project-specific material matching.',
    'why.item3title': 'Yemen-Wide Supply',
    'why.item3desc': 'We serve contractors, plumbers, retailers, and homeowners across Yemen with organized bulk supply and project packages.',
    'why.badge': 'Project-Ready',

    'feat.eyebrow': 'Top Products',
    'feat.title': 'Popular Across Yemen Projects',
    'feat.cta': 'View All Products',
    'fp.cat1': 'Valves', 'fp.name1': 'Ball Valve',
    'fp.cat2': 'Fittings', 'fp.name2': 'Elbow 90°',
    'fp.cat3': 'Pipes', 'fp.name3': 'PP-R Pipe PN20',
    'fp.cat4': 'Fittings', 'fp.name4': 'Tee 90°',
    'fp.cat5': 'Fittings', 'fp.name5': 'Union Female Thread',
    'fp.cat6': 'Valves', 'fp.name6': 'Check Valve – PPR',

    'quote.eyebrow': 'Get In Touch',
    'quote.title': 'Request a Quote for Your Project',
    'quote.desc': 'Whether you\'re a contractor, retailer, or homeowner — we\'ll prepare a comprehensive package tailored to your specific project needs.',
    'contact.phoneLabel': 'Phone',
    'contact.waLabel': 'WhatsApp',
    'contact.addrLabel': 'Address',
    'contact.addr': "Yemen, Sana'a — Add Branch Address",

    'form.nameLabel': 'Full Name',
    'form.namePh': 'Your name',
    'form.phoneLabel': 'Phone Number',
    'form.phonePh': '+967 000 000 000',
    'form.productLabel': 'Product Category',
    'form.selectDefault': 'Select a category',
    'form.opt1': 'Water Supply Systems',
    'form.opt2': 'Drainage Solutions',
    'form.opt3': 'Sanitary Ware',
    'form.opt4': 'Valves & Fittings',
    'form.opt5': 'Smart Home Factory',
    'form.opt6': 'Complete Project Package',
    'form.messageLabel': 'Project Details',
    'form.messagePh': 'Describe your project: location, quantities, sizes, or any specific requirements',
    'form.submit': 'Send Request',
    'form.note': "We'll respond within 24 hours with a detailed quote.",

    'footer.tagline': "Yemen's trusted supplier of premium plumbing, drainage, and building materials.",
    'footer.productsTitle': 'Products',
    'footer.waterSupply': 'Water Supply Systems',
    'footer.drainage': 'Drainage Solutions',
    'footer.sanitary': 'Sanitary Ware',
    'footer.valves': 'Valves & Fittings',
    'footer.adhesives': 'Adhesives',
    'footer.servicesTitle': 'Services',
    'footer.quoteLink': 'Request a Quote',
    'footer.packages': 'Project Packages',
    'footer.technical': 'Technical Guidance',
    'footer.smartHome': 'Smart Home Factory',
    'footer.contactTitle': 'Contact',
    'footer.addr': "📍 Yemen, Sana'a",
    'footer.copy': '© 2025 Nashwan Al-Faqih. All Rights Reserved. Plumbing & Building Solutions — Yemen.',
    'footer.catalog': 'Products Catalog',
    'footer.smLink': 'Smart Home',
    'brand.banninger': 'Bänninger (Germany)',
    'brand.smarthome': 'Smart Home Factory',
    'brand.kessel': 'Kessel (Germany)',
    'brand.ece': 'ECE Sanitary Ware',
    'tools.brandLabel': 'Brand',
    'prod.kessel.drainTitle': 'Kessel EasyDrain Floor Drains',
    'prod.kessel.drainDesc': 'Premium stainless steel shower channels and floor drains with high flow rates and reliable odor trap systems.',
    'prod.kessel.valveTitle': 'Kessel Staufix Backwater Valves',
    'prod.kessel.valveDesc': 'Automatic backwater protection valves designed to prevent sewer reflux and backup flooding in modern buildings.',
    'prod.kessel.stationTitle': 'Kessel Drainage Lifting Stations',
    'prod.kessel.stationDesc': 'Reliable lifting stations for wastewater drainage below the backwater level, suitable for heavy-duty applications.',

    /* Fitting Splits translations */
    'prod.tee90.title': 'Bänninger PP-R Equal Tee 90°',
    'prod.tee90.text': 'Equal tee fittings for branching PP-R pipe networks.',
    'prod.elbow90.title': 'Bänninger PP-R Elbow 90°',
    'prod.elbow90.text': 'Standard 90 degree elbows for pipe direction changes.',
    'prod.elbow45.title': 'Bänninger PP-R Elbow 45°',
    'prod.elbow45.text': 'Standard 45 degree elbows for gentle pipe turns.',
    'prod.socket.title': 'Bänninger PP-R Socket',
    'prod.socket.text': 'Standard socket couplings for joining PP-R pipes.',
    'prod.reducer.title': 'Bänninger PP-R Reducer',
    'prod.reducer.text': 'Reducing sockets for transitioning between pipe sizes.',
    'prod.unionfemale.title': 'Bänninger PP-R Union Female Thread',
    'prod.unionfemale.text': 'Threaded union with female brass insert for equipment connection.',
    'prod.unionmale.title': 'Bänninger PP-R Union Male Thread',
    'prod.unionmale.text': 'Threaded union with male brass insert for equipment connection.',
    'prod.unionfemaleblack.title': 'Bänninger PP-R Union Female Black (UV)',
    'prod.unionfemaleblack.text': 'UV-resistant black union with female brass insert for outdoor lines.',
    'prod.unionmaleblack.title': 'Bänninger PP-R Union Male Black (UV)',
    'prod.unionmaleblack.text': 'UV-resistant black union with male brass insert for outdoor lines.',
    'prod.checkppr.title': 'Bänninger PP-R Check Valve (Double Ends)',
    'prod.checkppr.text': 'Backflow prevention check valve with double PP-R socket ends.',
    'prod.checkfemale.title': 'Bänninger PP-R Check Valve (PPR & Female)',
    'prod.checkfemale.text': 'Backflow prevention check valve with PPR × female brass thread.',
    'prod.checkmale.title': 'Bänninger PP-R Check Valve (PPR & Male)',
    'prod.checkmale.text': 'Backflow prevention check valve with PPR × male brass thread.',
    'prod.checkblack.title': 'Bänninger PP-R Check Valve Black (UV)',
    'prod.checkblack.text': 'UV-resistant black check valve with double PPR ends for outdoor protection.',
    'prod.manifold4.title': 'Bänninger PP-R Manifold (4 Outlets)',
    'prod.manifold4.text': 'Welded distribution manifold with 4 outlets for compact setups.',
    'prod.manifoldend.title': 'Bänninger PP-R Manifold End Socket',
    'prod.manifoldend.text': 'Manifold termination end socket with welding connection.',
    'prod.flange.title': 'Bänninger PP-RCT Flange Adaptor (Grooved)',
    'prod.flange.text': 'Flange adaptors for joining PP-RCT pipes to pumps or valves.',
    'prod.flangering.title': 'Bänninger PP Flange Backing Ring',
    'prod.flangering.text': 'Metal reinforced backing ring for flange connection support.',
    'prod.manifoldnoend.title': 'Bänninger PP-R Manifold (Open Ends)',
    'prod.manifoldnoend.text': 'Distribution manifold without end socket for custom extensions.',
    'prod.bracketfemale.title': 'Bänninger PP-R Bracket Elbow Female',
    'prod.bracketfemale.text': 'Wall bracket elbows for tap and fixture connections.',
    'prod.doublebracket.title': 'Bänninger PP-R Double Bracket Elbow',
    'prod.doublebracket.text': 'Double wall bracket elbows for shower mixer connections.',

    /* Smart Home page translations */
    'smart.factoryLabel': 'Factory Partner',
    'smart.heroTitle': 'Smart Home PVC-U Drainage Systems for Yemen',
    'smart.heroText': 'Smart Home is a dedicated factory partner for non-pressure wastewater and rainwater drainage systems. The range supports contractors, plumbers, and homeowners with lightweight PVC-U components, strong chemical resistance, smooth internal flow, and practical sizes from 32mm to 160mm.',
    'smart.btn1': 'View Products',
    'smart.btn2': 'Request Factory Quote',
    'smart.list1Title': 'Complete PVC-U System',
    'smart.list1Text': 'Pipes, fittings, drains, channels, chambers, and protection products work together across project sizes.',
    'smart.list2Title': 'Installer-Friendly Parts',
    'smart.list2Text': 'Lightweight components and clear product families support faster handling and cleaner installation on site.',
    'smart.list3Title': 'Indoor & Outdoor Coverage',
    'smart.list3Text': 'Use the range for wastewater lines, rainwater drainage, inspection points, and outdoor water management.',
    'smart.introEyebrow': 'Factory Quality',
    'smart.introTitle': 'Designed for High-Flow Capacity, Installation Speed & Long-Term Protection',
    'smart.introText': 'Smart Home drainage products are organized for professional site work: pipes for main wastewater runs, fittings for clean direction changes and branches, floor drains for wet areas, and outdoor solutions for rainwater management, inspection, and backflow protection.',
    'si.b1': 'Wastewater & rainwater drainage',
    'si.b2': 'Sizes 32mm to 160mm',
    'si.b3': 'Chemical resistance & smooth internal flow',
    'si.b4': 'Inspection access built in',
    'smart.gridEyebrow': 'Smart Home Product Range',
    'smart.gridTitle': 'A Complete, High-Performance PVC-U Drainage Family',
    'smart.gridText': 'Browse Smart Home products by practical site category. Every product shown belongs to the Smart Home factory range — focused exclusively on drainage, wastewater, rainwater, and inspection solutions.',
    'smart.tab.pipes': 'PVC-U Pipes',
    'smart.tab.fittings': 'Fittings',
    'smart.tab.drains': 'Floor Drains',
    'smart.tab.outdoor': 'Outdoor Solutions',

    /* Smart Home Pipe Cards */
    'smart.p1': 'PVC-U Pipes',
    'smart.p2': 'Multi-Layer Pipes',
    'smart.p3': 'Ring Socket Pipes',
    'smart.p4': 'Solvent Cement Pipes',
    'smart.p5': 'PVC Drain Upper Section',
    'smart.p6': 'Pipe Plug',

    /* Smart Home Fitting Cards */
    'smart.f1': 'Elbow 87.5°',
    'smart.f2': 'Elbow 45°',
    'smart.f3': 'Elbow with Access Door',
    'smart.f4': 'Tee 87.5°',
    'smart.f5': 'Tee 45°',
    'smart.f6': 'Tee with Access Door',
    'smart.f7': 'Cross 45°',
    'smart.f8': 'Short Cross 87.5°',
    'smart.f9': 'Socket',
    'smart.f10': 'Socket with Inner Thread',
    'smart.f11': 'Eccentric Reducer',
    'smart.f12': 'Expansion Joint',
    'smart.f13': 'Short Elbow 87.5°',
    'smart.f14': 'Repairing Socket',
    'smart.f15': 'Reducing Bush',

    /* Smart Home Floor Drain Cards */
    'smart.d1': 'Small Drain',
    'smart.d2': 'Drain 8.8 cm',
    'smart.d3': 'Drain 7 cm',
    'smart.d4': 'Drain with Odor Trap',
    'smart.d5': 'Floor Drain with Odor Trap',
    'smart.d6': 'Floor Drain Cover',
    'smart.d7': 'Floor Drain Plug',
    'smart.d8': 'Rain Drain with Cover',
    'smart.d9': 'Siphon',

    /* Smart Home Outdoor Cards */
    'smart.o1': 'Outdoor Solutions Overview',
    'smart.o2': 'Inspection Chamber 500mm',
    'smart.o3': 'Inspection Chamber Ø600mm',
    'smart.o4': 'Inspection Point Drain',
    'smart.o5': 'Water Channel with Cast Iron Cover',
    'smart.o6': 'Drainage Collector',
    'smart.o7': 'Drainage Lifting Station',
    'smart.o8': 'Gully Trap',
    'smart.o9': 'Backwater Valves',
    'smart.o10': 'Air Vent',

    'smart.note.title': 'Applications & Features',
    'smart.note.text': 'Use Smart Home products for wastewater, rainwater, air-conditioning drainage, and main drainage lines. The range supports smooth internal surfaces, easy handling, high flow, inspection access, and long-term durability.',
    'cta.smartTitle': 'Request the Smart Home Factory Range',
    'cta.smartDesc': 'Get a comprehensive quote for all Smart Home drainage products you need for your project.',
  },

  ar: {
    'brand.name': 'نشوان الفقيه',
    'brand.subtitle': 'حلول السباكة والبناء',
    'brand.aria': 'الصفحة الرئيسية - نشوان الفقيه',
    'nav.home': 'الرئيسية',
    'nav.solutions': 'الحلول',
    'nav.products': 'المنتجات',
    'nav.smart': 'سمارت هوم',
    'nav.banninger': 'بيننجر',
    'nav.kessel': 'كيسيل',
    'nav.brands': 'الشركات',
    'nav.about': 'من نحن',
    'nav.quote': 'طلب عرض سعر',

    'hero.badge': 'شريكك الموثوق في البناء باليمن',
    'hero.title': 'حلول كاملة للسباكة\nوالبناء',
    'hero.desc': 'من أنظمة إمداد المياه القوية إلى الأدوات الصحية الفاخرة — نوفر مواد عالية الجودة مصممة لمتطلبات مشاريع اليمن.',
    'hero.cta1': 'تصفح منتجاتنا',
    'hero.cta2': 'مصنع سمارت هوم',
    'hero.stat1': 'خط منتجات',
    'hero.stat2': 'فئات رئيسية',
    'hero.stat3': 'تغطية شاملة',
    'hero.card1': 'الأدوات الصحية',
    'hero.card2': 'الصمامات',
    'hero.card3': 'مواسير PP-R',
    'hero.card4': 'سمارت هوم',

    'solutions.eyebrow': 'ما نقدمه',
    'solutions.title': 'حلول بناء وسباكة شاملة',
    'solutions.desc': 'نوفر كل ما يحتاجه مشروعك، من التخطيط الأولي حتى التركيب النهائي. نخدم المقاولين والسباكين وتجار التجزئة وأصحاب المنازل في جميع أنحاء اليمن.',

    'sol1.title': 'أنظمة إمداد المياه',
    'sol1.desc': 'أنظمة مواسير PP-R ومتعددة الطبقات لتوريد المياه الساخنة والباردة في المباني السكنية والتجارية.',
    'sol1.link': 'استعرض المنتجات →',
    'sol2.title': 'حلول الصرف الصحي',
    'sol2.desc': 'أنظمة صرف PVC-U من مصنع سمارت هوم للتطبيقات الداخلية والخارجية، بما في ذلك القنوات وغرف التفتيش.',
    'sol2.link': 'عرض سمارت هوم →',
    'sol3.title': 'الأدوات الصحية',
    'sol3.desc': 'أحواض غسيل وأطقم حمام وملحقات عالية الجودة من كبار الشركات المصنعة، مناسبة للمنازل اليمنية الحديثة.',
    'sol3.link': 'تصفح الكتالوج →',
    'sol4.title': 'الصمامات والتوصيلات',
    'sol4.desc': 'صمامات كرة وصمامات عدم رجوع ومخفضات وكوع ووصلات T وجميع التوصيلات اللازمة لتركيبات السباكة الكاملة.',
    'sol4.link': 'عرض جميع التوصيلات →',
    'sol5.title': 'المواد اللاصقة والملحقات',
    'sol5.desc': 'اسمنت مذيب PVC ومواد لاصقة CPVC ومشابك مواسير وجميع الملحقات للحصول على توصيلات سباكة آمنة وطويلة الأمد.',
    'sol5.link': 'تسوق الملحقات →',
    'sol6.title': 'حزم المشاريع',
    'sol6.desc': 'تنسيق توريد متكامل للفيلات والمباني السكنية والمشاريع التجارية. عرض واحد يشمل كل شيء.',
    'sol6.link': 'طلب حزمة →',

    'catalog.eyebrow': 'كتالوجات المنتجات',
    'catalog.title': 'كتالوجان متخصصان لاحتياجاتك',
    'cat.badge1': 'الكتالوج العام',
    'cat.title1': 'إمداد المياه والأدوات الصحية والملحقات',
    'cat.desc1': 'تصفح مخزوننا الشامل من المواسير والتوصيلات والصمامات والأدوات الصحية والملحقات — كل شيء لمشاريع السباكة في جميع أنحاء اليمن.',
    'cat.f1a': 'مواسير PP-R ومتعددة الطبقات',
    'cat.f1b': 'صمامات الكرة وعدم الرجوع',
    'cat.f1c': 'الأدوات الصحية والتجهيزات',
    'cat.f1d': 'المواد اللاصقة والملحقات',
    'cat.cta1': 'تصفح الكتالوج العام',
    'cat.badge2': 'شريك المصنع',
    'cat.title2': 'أنظمة صرف PVC-U من سمارت هوم',
    'cat.desc2': 'استكشف الحل المتكامل للصرف الصحي من مصنع سمارت هوم — مواسير وتوصيلات ومصارف وقنوات خارجية وغرف تفتيش وحماية من الرجوع.',
    'cat.f2a': 'أنظمة الصرف الداخلي',
    'cat.f2b': 'حلول القنوات الخارجية',
    'cat.f2c': 'غرف التفتيش',
    'cat.f2d': 'صمامات الحماية من الرجوع',
    'cat.cta2': 'استكشف مصنع سمارت هوم',

    'why.eyebrow': 'لماذا تختارنا',
    'why.title': 'شريكك الموثوق لمواد البناء عالية الجودة',
    'why.desc': 'نشوان الفقيه ملتزم بتوريد مواد مختبرة ومعتمدة فقط تلبي المعايير الصارمة لمتطلبات المشاريع المتنوعة في اليمن.',
    'why.item1title': 'جودة منتجات معتمدة',
    'why.item1desc': 'يتم الحصول على جميع المنتجات من الشركات المصنعة ذات برامج الجودة المعترف بها والموافقات الدولية على المنتجات.',
    'why.item2title': 'الخبرة التقنية',
    'why.item2desc': 'يقدم فريقنا إرشادات متخصصة لاختيار المنتجات ومطابقة المواد الخاصة بكل مشروع.',
    'why.item3title': 'توريد شامل في اليمن',
    'why.item3desc': 'نخدم المقاولين والسباكين وتجار التجزئة وأصحاب المنازل في جميع أنحاء اليمن بتوريد منظم بالجملة وحزم مشاريع.',
    'why.badge': 'جاهز للمشاريع',

    'feat.eyebrow': 'أبرز المنتجات',
    'feat.title': 'الأكثر طلباً في مشاريع اليمن',
    'feat.cta': 'عرض جميع المنتجات',
    'fp.cat1': 'صمامات', 'fp.name1': 'صمام كرة',
    'fp.cat2': 'توصيلات', 'fp.name2': 'كوع 90°',
    'fp.cat3': 'مواسير', 'fp.name3': 'ماسورة PP-R PN20',
    'fp.cat4': 'توصيلات', 'fp.name4': 'وصلة T 90°',
    'fp.cat5': 'توصيلات', 'fp.name5': 'وصلة أنثى',
    'fp.cat6': 'صمامات', 'fp.name6': 'صمام عدم رجوع PPR',

    'quote.eyebrow': 'تواصل معنا',
    'quote.title': 'طلب عرض سعر لمشروعك',
    'quote.desc': 'سواء كنت مقاولاً أو تاجراً أو صاحب منزل — سنعد حزمة شاملة مصممة لاحتياجات مشروعك المحدد.',
    'contact.phoneLabel': 'الهاتف',
    'contact.waLabel': 'واتساب',
    'contact.addrLabel': 'العنوان',
    'contact.addr': 'اليمن، صنعاء —جولة بيت بوس',

    'form.nameLabel': 'الاسم الكامل',
    'form.namePh': 'اسمك',
    'form.phoneLabel': 'رقم الهاتف',
    'form.phonePh': '+967 737002000',
    'form.productLabel': 'فئة المنتج',
    'form.selectDefault': 'اختر فئة',
    'form.opt1': 'أنظمة إمداد المياه',
    'form.opt2': 'حلول الصرف الصحي',
    'form.opt3': 'الأدوات الصحية',
    'form.opt4': 'الصمامات والتوصيلات',
    'form.opt5': 'مصنع سمارت هوم',
    'form.opt6': 'حزمة مشروع متكاملة',
    'form.messageLabel': 'تفاصيل المشروع',
    'form.messagePh': 'صف مشروعك: الموقع، الكميات، المقاسات، أو أي متطلبات محددة',
    'form.submit': 'إرسال الطلب',
    'form.note': 'سنرد خلال 24 ساعة بعرض سعر مفصل.',

    'footer.tagline': 'المورد الموثوق لليمن لمواد السباكة والصرف والبناء الفاخرة.',
    'footer.productsTitle': 'المنتجات',
    'footer.waterSupply': 'أنظمة إمداد المياه',
    'footer.drainage': 'حلول الصرف الصحي',
    'footer.sanitary': 'الأدوات الصحية',
    'footer.valves': 'الصمامات والتوصيلات',
    'footer.adhesives': 'المواد اللاصقة',
    'footer.servicesTitle': 'الخدمات',
    'footer.quoteLink': 'طلب عرض سعر',
    'footer.packages': 'حزم المشاريع',
    'footer.technical': 'الإرشاد الفني',
    'footer.smartHome': 'مصنع سمارت هوم',
    'footer.contactTitle': 'اتصل بنا',
    'footer.addr': '📍 اليمن، ',
    'footer.copy': '© 2025 نشوان الفقيه. جميع الحقوق محفوظة. حلول السباكة والبناء — اليمن.',
    'footer.catalog': 'كتالوج المنتجات',
    'footer.smLink': 'سمارت هوم',
    'brand.banninger': 'بيننجر (ألمانيا)',
    'brand.smarthome': 'مصنع سمارت هوم',
    'brand.kessel': 'كيسيل (ألمانيا)',
    'brand.ece': 'إي سي إي للأدوات الصحية',
    'tools.brandLabel': 'الشركة',
    'prod.kessel.drainTitle': 'مصارف وقنوات كيسيل الأرضية',
    'prod.kessel.drainDesc': 'قنوات تصريف ومصارف أرضية فاخرة مصنوعة من الفولاذ المقاوم للصدأ مع معدلات تدفق عالية وأنظمة مصيدة روائح موثوقة.',
    'prod.kessel.valveTitle': 'صمامات كيسيل لمنع الارتداد',
    'prod.kessel.valveDesc': 'صمامات حماية تلقائية من الارتداد مصممة لمنع ارتجاع مياه الصرف الصحي وفيضانات النسخ الاحتياطي في المباني الحديثة.',
    'prod.kessel.stationTitle': 'محطات رفع الصرف الصحي كيسيل',
    'prod.kessel.stationDesc': 'محطات رفع موثوقة لتصريف مياه الصرف الصحي تحت مستوى الارتداد، وهي مناسبة للتطبيقات الشاقة.',

    /* Fitting Splits translations Ar */
    'prod.tee90.title': 'كوع تي متساوي 90° بيننجر PP-R',
    'prod.tee90.text': 'توصيلات تي متساوية لتفريغ وتوزيع شبكات مواسير PP-R.',
    'prod.elbow90.title': 'كوع 90° بيننجر PP-R',
    'prod.elbow90.text': 'أكواع قياسية 90 درجة لتغيير اتجاه مواسير المياه.',
    'prod.elbow45.title': 'كوع 45° بيننجر PP-R',
    'prod.elbow45.text': 'أكواع قياسية 45 درجة للانعطافات الخفيفة للمواسير.',
    'prod.socket.title': 'سوكيت بيننجر PP-R',
    'prod.socket.text': 'سوكيت قياسي ذو جودة عالية لوصل مواسير PP-R.',
    'prod.reducer.title': 'مخفض بيننجر PP-R',
    'prod.reducer.text': 'سوكيت مخفض للانتقال بين مقاسات المواسير المختلفة.',
    'prod.unionfemale.title': 'وصلة لاكور بسن أنثى بيننجر PP-R',
    'prod.unionfemale.text': 'وصلة لاكور مسننة بقلب نحاسي داخلي لتركيب الأجهزة والمحابس.',
    'prod.unionmale.title': 'وصلة لاكور بسن ذكر بيننجر PP-R',
    'prod.unionmale.text': 'وصلة لاكور مسننة بقلب نحاسي خارجي لتركيب الأجهزة والمحابس.',
    'prod.unionfemaleblack.title': 'وصلة لاكور بسن أنثى أسود بيننجر (UV)',
    'prod.unionfemaleblack.text': 'وصلة لاكور سوداء مقاومة للأشعة بسن نحاسي أنثى للخطوط الخارجية.',
    'prod.unionmaleblack.title': 'وصلة لاكور بسن ذكر أسود بيننجر (UV)',
    'prod.unionmaleblack.text': 'وصلة لاكور سوداء مقاومة للأشعة بسن نحاسي ذكر للخطوط الخارجية.',
    'prod.checkppr.title': 'صمام عدم رجوع بيننجر PP-R (نهايتين لحام)',
    'prod.checkppr.text': 'صمام عدم رجوع لمنع الارتداد بنهايتين لحام مواسير PP-R.',
    'prod.checkfemale.title': 'صمام عدم رجوع بسن أنثى بيننجر PP-R',
    'prod.checkfemale.text': 'صمام عدم رجوع لمنع الارتداد بنهاية لحام ونهاية سن نحاسي أنثى.',
    'prod.checkmale.title': 'صمام عدم رجوع بسن ذكر بيننجر PP-R',
    'prod.checkmale.text': 'صمام عدم رجوع لمنع الارتداد بنهاية لحام ونهاية سن نحاسي ذكر.',
    'prod.checkblack.title': 'صمام عدم رجوع أسود بيننجر PPR (UV)',
    'prod.checkblack.text': 'صمام عدم رجوع أسود مقاوم للأشعة فوق البنفسجية للتركيبات الخارجية.',
    'prod.manifold4.title': 'مشعب لحام 4 مخارج بيننجر PP-R',
    'prod.manifold4.text': 'مشعب توزيع ملحوم ذو 4 مخارج لتوزيع المياه بكفاءة.',
    'prod.manifoldend.title': 'سدادة مشعب لحام بيننجر PP-R',
    'prod.manifoldend.text': 'نهاية مغلقة ملحومة لإنهاء خطوط مشعبات التوزيع.',
    'prod.flange.title': 'محول فلانشة مجوف بيننجر PP-RCT',
    'prod.flange.text': 'محول فلانشة لربط مواسير PP-RCT مع المحابس الكبيرة أو المضخات.',
    'prod.flangering.title': 'حلقة فلانشة تدعيم بيننجر PP',
    'prod.flangering.text': 'حلقة فلانشة خلفية مدعمة بالمعدن لتأمين ربط الفلانشات.',
    'prod.manifoldnoend.title': 'مشعب لحام مفتوح النهايات بيننجر PP-R',
    'prod.manifoldnoend.text': 'مشعب توزيع بدون سدادة طرفية للتوصيلات المخصصة.',
    'prod.bracketfemale.title': 'كوع حائطي بسن أنثى بيننجر PP-R',
    'prod.bracketfemale.text': 'أكواع حائطية مثبتة بسن نحاسي أنثى لتوصيل الحنفيات مباشرة.',
    'prod.doublebracket.title': 'كوع حائطي مزدوج بسن أنثى بيننجر PP-R',
    'prod.doublebracket.text': 'كوع حائطي مزدوج لتوصيل خلاطات المياه والرشاشات بشكل نظيف.',

    /* Smart Home page translations Ar */
    'smart.factoryLabel': 'شريك المصنع',
    'smart.heroTitle': 'أنظمة صرف PVC-U سمارت هوم لليمن',
    'smart.heroText': 'تعتبر سمارت هوم شريكاً مخصصاً للمصانع لأنظمة الصرف الصحي ومياه الأمطار غير المضغوطة. تدعم هذه المجموعة المقاولين والسباكين وأصحاب المنازل بمكونات PVC-U خفيفة الوزن، ومقاومة كيميائية قوية، وتدفق داخلي سلس، ومقاسات عملية من 32 ملم إلى 160 ملم.',
    'smart.btn1': 'عرض المنتجات',
    'smart.btn2': 'طلب عرض سعر المصنع',
    'smart.list1Title': 'نظام صرف PVC-U متكامل',
    'smart.list1Text': 'تعمل المواسير والتوصيلات والمصارف والقنوات والغرف وحلول الحماية معاً لتغطية جميع أحجام المشاريع.',
    'smart.list2Title': 'مكونات سهلة التركيب',
    'smart.list2Text': 'تتميز المكونات بخفة وزنها وتصنيفاتها الواضحة لتسهيل عملية التداول والتثبيت السريع والنظيف في الموقع.',
    'smart.list3Title': 'تغطية داخلية وخارجية',
    'smart.list3Text': 'تُستخدم المجموعة لخطوط الصرف الصحي وتصريف مياه الأمطار ونقاط التفتيش وإدارة المياه الخارجية.',
    'smart.introEyebrow': 'جودة المصنع الفائقة',
    'smart.introTitle': 'مصمم لسعة تدفق عالية وسرعة تركيب وحماية طويلة الأمد',
    'smart.introText': 'تم تنظيم منتجات الصرف الصحي من سمارت هوم لتناسب أعمال الموقع الاحترافية: مواسير لشبكات الصرف الرئيسية، وتوصيلات لتغيير الاتجاهات والتفريعات بشكل نظيف، ومصارف أرضية للمناطق الرطبة، وحلول خارجية لإدارة مياه الأمطار والتفتيش ومنع الارتداد.',
    'si.b1': 'صرف المياه العادمة ومياه الأمطار',
    'si.b2': 'مقاسات من 32 ملم إلى 160 ملم',
    'si.b3': 'مقاومة كيميائية وتدفق داخلي سلس',
    'si.b4': 'نقاط وصول مدمجة لسهولة الكشف والتفتيش',
    'smart.gridEyebrow': 'مجموعة منتجات سمارت هوم',
    'smart.gridTitle': 'عائلة صرف متكاملة وعالية الأداء من الـ PVC-U',
    'smart.gridText': 'تصفح منتجات سمارت هوم حسب فئة الموقع العملية. كل منتج معروض ينتمي إلى عائلة مصنع سمارت هوم — المتخصصة حصرياً في حلول الصرف ومياه الأمطار والتفتيش.',
    'smart.tab.pipes': 'مواسير PVC-U',
    'smart.tab.fittings': 'التوصيلات والقطع',
    'smart.tab.drains': 'المصارف الأرضية',
    'smart.tab.outdoor': 'الحلول الخارجية',

    /* Smart Home Pipe Cards */
    'smart.p1': 'مواسير صرف PVC-U',
    'smart.p2': 'مواسير متعددة الطبقات',
    'smart.p3': 'مواسير بنهاية سوكيت وحلقة مطاطية',
    'smart.p4': 'مواسير بنهاية لحام إسمنتي (غراء)',
    'smart.p5': 'الجزء العلوي لبالوعة الصرف PVC',
    'smart.p6': 'سدادة ماسورة الصرف',

    /* Smart Home Fitting Cards */
    'smart.f1': 'كوع 87.5°',
    'smart.f2': 'كوع 45°',
    'smart.f3': 'كوع بباب كشف وتفتيش',
    'smart.f4': 'مشترك 87.5° (Tee)',
    'smart.f5': 'مشترك 45°',
    'smart.f6': 'مشترك 87.5° بباب كشف وتفتيش',
    'smart.f7': 'مشترك رباعي (كروس) 45°',
    'smart.f8': 'مشترك رباعي قصير 87.5°',
    'smart.f9': 'سوكيت وصل (جلبة)',
    'smart.f10': 'سوكيت بسن داخلي نحاسي',
    'smart.f11': 'مخفض لا مركزي (مسلوب)',
    'smart.f12': 'وصلة تمدد (لاكور تمدد)',
    'smart.f13': 'كوع قصير 87.5°',
    'smart.f14': 'سوكيت تصليح (جلبة تصليح)',
    'smart.f15': 'بوش تخفيض (جلبة تخفيض)',

    /* Smart Home Floor Drain Cards */
    'smart.d1': 'بالوعة صرف صغيرة',
    'smart.d2': 'بالوعة صرف 8.8 سم',
    'smart.d3': 'بالوعة صرف 7 سم',
    'smart.d4': 'بالوعة صرف مع مصيدة روائح',
    'smart.d5': 'بالوعة صرف أرضية 110-125 مع مصيدة روائح',
    'smart.d6': 'غطاء بالوعة صرف أرضية',
    'smart.d7': 'سدادة بالوعة صرف أرضية',
    'smart.d8': 'بالوعة صرف مياه الأمطار مع غطاء',
    'smart.d9': 'سيفون صرف',

    /* Smart Home Outdoor Cards */
    'smart.o1': 'نظرة عامة على الحلول الخارجية',
    'smart.o2': 'غرفة تفتيش مقاس 500 مم',
    'smart.o3': 'غرفة تفتيش دائرية مقاس 600 مم',
    'smart.o4': 'بالوعة تفتيش بدون مصيدة روائح',
    'smart.o5': 'قناة تصريف مياه مع غطاء حديد زهر',
    'smart.o6': 'جامع مياه صرف (مجمع تصريف)',
    'smart.o7': 'محطة رفع الصرف الصحي المدمجة',
    'smart.o8': 'بالوعة صرف جانبية (جولي تراب)',
    'smart.o9': 'صمامات الحماية من الارتداد الخلفي',
    'smart.o10': 'منفذ تهوية الهواء (هواية)',

    'smart.note.title': 'التطبيقات والميزات',
    'smart.note.text': 'تُستخدم منتجات سمارت هوم لشبكات الصرف الصحي، وتصريف الأمطار، وصرف تكييف الهواء، وخطوط الصرف الرئيسية. تدعم المجموعة الأسطح الداخلية فائقة النعومة، وسهولة المناولة، والتدفق العالي، والوصول السهل للتفتيش، والمتانة طويلة الأمد.',
    'cta.smartTitle': 'طلب مجموعة منتجات مصنع سمارت هوم',
    'cta.smartDesc': 'احصل على عرض أسعار شامل لجميع منتجات صرف سمارت هوم التي تحتاجها لمشروعك.',
  }
};

/* ---- State ---- */
let currentLang = 'en';

/* ---- Language Toggle ---- */
function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Aria labels
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (t[key] !== undefined) {
      el.setAttribute('aria-label', t[key]);
    }
  });

  // Update lang button label
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    const btnSvg = langBtn.querySelector('svg');
    langBtn.textContent = lang === 'ar' ? 'English' : 'العربية';
    if (btnSvg) langBtn.prepend(btnSvg);
  }

  // Store preference
  try { localStorage.setItem('naf-lang', lang); } catch (e) { }
}

function initLang() {
  const storedLang = (() => {
    try { return localStorage.getItem('naf-lang'); } catch (e) { return null; }
  })();
  const lang = storedLang || (navigator.language && navigator.language.startsWith('ar') ? 'ar' : 'en');
  applyTranslations(lang);
}

/* ---- Sticky Header ---- */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---- Mobile Hamburger ---- */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  function closeMobileMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
    }
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

/* ---- Scroll Animations ---- */
function initScrollAnimations() {
  const els = document.querySelectorAll('[data-animate]');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(() => {
          el.classList.add('is-visible');
        }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ---- Scroll To Top ---- */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---- Quote Form ---- */
function initForm() {
  const form = document.getElementById('quote-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('#form-submit-btn');
    const btnText = submitBtn?.querySelector('.btn-text');

    // Simple validation
    const name = form.querySelector('#f-name');
    if (name && !name.value.trim()) {
      name.focus();
      name.style.borderColor = 'var(--error)';
      setTimeout(() => { name.style.borderColor = ''; }, 2000);
      return;
    }

    // Simulate submission
    if (submitBtn) {
      submitBtn.disabled = true;
      if (btnText) btnText.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.style.background = 'var(--success)';
        if (btnText) btnText.textContent = currentLang === 'ar' ? '✓ تم الإرسال بنجاح!' : '✓ Request Sent!';
      }

      setTimeout(() => {
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          if (btnText) btnText.textContent = translations[currentLang]['form.submit'] || 'Send Request';
        }
      }, 3000);
    }, 1200);
  });

  // Clear error styling on input
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('focus', () => {
      field.style.borderColor = '';
    });
  });
}

/* ---- Active Nav Link on Scroll ---- */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href')?.includes(`#${id}`) ||
            (id === 'hero' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(section => observer.observe(section));
}

/* ---- Topbar scroll behavior ---- */
function initTopbar() {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;
  // Topbar stays visible — no scroll-hide needed for now
}

/* ---- Counter Animation ---- */
function animateCounter(el, target, suffix = '') {
  const duration = 1500;
  const start = performance.now();
  const startVal = 0;

  const isNumeric = !isNaN(parseFloat(target));
  if (!isNumeric) {
    el.textContent = target;
    return;
  }

  const targetNum = parseFloat(target);

  function update(time) {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startVal + (targetNum - startVal) * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const statEls = document.querySelectorAll('.stat-item strong');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const raw = el.textContent.trim();
        if (raw === '100+') animateCounter(el, 100, '+');
        else if (raw === '6') animateCounter(el, 6);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.8 });

  statEls.forEach(el => observer.observe(el));
}

/* ---- Initialize All ---- */
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initHeader();
  initHamburger();
  initScrollAnimations();
  initScrollTop();
  initForm();
  initActiveNav();
  initTopbar();
  initCounters();

  // Language toggle
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyTranslations(currentLang === 'en' ? 'ar' : 'en');
    });
  }
});