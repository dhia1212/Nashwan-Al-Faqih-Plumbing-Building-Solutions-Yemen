/* =========================================
   PAGES.JS — Products & Smart Home Interactions
   ========================================= */

'use strict';

/* =========================================
   PRODUCT DATA — Full catalog with specs
   ========================================= */
const PRODUCTS = [
  {
    id: 'ppr-pipe-pn20',
    category: 'water',
    type: 'pipes',
    brand: 'banninger',
    search: 'pp-r pipe pn20 hot cold water yemeni project banninger germany',
    title: 'PP-R Pressure Pipe Systems',
    titleAr: 'أنظمة مواسير PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/PP-R Pipe PN20 – SDR 7.4.webp', 'img/Banninger/PP-R Pipe PN20 – SDR 6.webp'],
    specsTableHeaders: ['Nominal Size (mm)', 'PN Rating', 'SDR', 'Wall Thickness (mm)', 'Weight (kg/m)'],
    specsTableRows: [
      ['20', 'PN20', 'SDR 6', '3.4', '0.18'],
      ['25', 'PN20', 'SDR 6', '4.2', '0.28'],
      ['32', 'PN20', 'SDR 6', '5.4', '0.45'],
      ['40', 'PN20', 'SDR 6', '6.7', '0.70'],
      ['50', 'PN20', 'SDR 6', '8.3', '1.10'],
      ['63', 'PN20', 'SDR 6', '10.5', '1.75'],
      ['75', 'PN20', 'SDR 7.4', '10.3', '1.95'],
      ['90', 'PN20', 'SDR 7.4', '12.3', '2.75'],
      ['110', 'PN20', 'SDR 7.4', '15.1', '4.15'],
    ],
    highlightCol: 4,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger Kunststoff-Produkte GmbH (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R (Polypropylene Random Copolymer)' },
      { label: 'Standard', labelAr: 'المعيار', value: 'DIN 8077 / DIN 8078, DIN EN ISO 15874' },
      { label: 'Color', labelAr: 'اللون', value: 'Green with laser labeling system' },
      { label: 'Form Supplied', labelAr: 'شكل التوريد', value: '4 meter straight lengths' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Hot and cold potable water systems, heating systems, industrial pipelines' },
      { label: 'Temperature Range', labelAr: 'نطاق درجة الحرارة', value: 'Up to 70°C continuous, 95°C peak' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'Heat fusion (socket welding)' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'pprct-pipe-pn16',
    category: 'water',
    type: 'pipes',
    brand: 'banninger',
    search: 'pp-rct pipe heavy duty main networks banninger germany',
    title: 'PP-RCT Heavy Duty Lines',
    titleAr: 'مواسير PP-RCT للخطوط الثقيلة',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/PP-RCT Pipe PN16 – SDR 11.webp'],
    specsTableHeaders: ['Nominal Size (mm)', 'PN Rating', 'SDR', 'Wall Thickness (mm)', 'Weight (kg/m)'],
    specsTableRows: [
      ['63', 'PN16', 'SDR 11', '5.8', '0.92'],
      ['75', 'PN16', 'SDR 11', '6.8', '1.28'],
      ['90', 'PN16', 'SDR 11', '8.2', '1.84'],
      ['110', 'PN16', 'SDR 11', '10.0', '2.74'],
      ['125', 'PN16', 'SDR 11', '11.4', '3.55'],
      ['160', 'PN16', 'SDR 11', '14.6', '5.75'],
      ['200', 'PN16', 'SDR 11', '18.2', '8.97'],
    ],
    highlightCol: 4,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger Kunststoff-Produkte GmbH (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-RCT (Polypropylene with Random Crystallinity and Temperature resistance)' },
      { label: 'Standard', labelAr: 'المعيار', value: 'DIN 8077 / DIN 8078, DIN EN ISO 15874' },
      { label: 'Product Series', labelAr: 'سلسلة المنتج', value: 'SDR 11/S 5' },
      { label: 'Color', labelAr: 'اللون', value: 'Green with laser labeling system' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Main water distribution networks, heavy-duty installations, large buildings' },
      { label: 'Advantage', labelAr: 'الميزة', value: 'Higher temperature and pressure resistance compared to standard PP-R' },
    ],
    catalogPdf: null,
  },
  {
    id: 'uv-multilayer-pipe',
    category: 'water',
    type: 'pipes',
    brand: 'banninger',
    search: 'uv resistant multilayer pipe outdoor water banninger germany',
    title: 'UV-Resistant Multilayer Pipes',
    titleAr: 'مواسير متعددة الطبقات مقاومة للأشعة فوق البنفسجية',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: [
      'img/Banninger/Multilayer pipes with fiber Reinforced UV in Black PN 20 SDR 6.webp',
      'img/Banninger/Multilayer pipes with Aluminum Reinforced UV in Black PN 16 SDR 7.4.webp',
    ],
    specsTableHeaders: ['Size (mm)', 'Reinforcement', 'PN Rating', 'SDR', 'Color'],
    specsTableRows: [
      ['20–110', 'Fiber Reinforced', 'PN20', 'SDR 6', 'Black'],
      ['20–110', 'Fiber Reinforced', 'PN20', 'SDR 7.4', 'Black'],
      ['20–110', 'Fiber Reinforced', 'PN16', 'SDR 7.4', 'Black'],
      ['20–110', 'Aluminum Reinforced', 'PN16', 'SDR 7.4', 'Black'],
      ['20–110', 'Aluminum Reinforced', 'PN20', 'SDR 6s 2.5', 'Black'],
    ],
    highlightCol: 1,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger Kunststoff-Produkte GmbH (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R with Fiber or Aluminum Reinforcement Layer' },
      { label: 'UV Protection', labelAr: 'حماية الأشعة فوق البنفسجية', value: 'Full UV-resistant black outer layer' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Outdoor water supply, exposed installations, harsh climate conditions' },
      { label: 'Advantage', labelAr: 'الميزة', value: 'Significantly reduced thermal expansion vs. standard PP-R pipes' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'Heat fusion welding' },
    ],
    catalogPdf: null,
  },
  {
    id: 'ppr-tee-90',
    category: 'water',
    type: 'fittings',
    brand: 'banninger',
    search: 'pp-r equal tee 90 fittings branching banninger germany',
    title: 'PP-R Equal Tee 90°',
    titleAr: 'كوع تي متساوي 90° PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Tee 90°.webp'],
    specsTableHeaders: ['Size (mm)', 'Length L (mm)', 'Z-dimension (mm)', 'Weight (g)'],
    specsTableRows: [
      ['20', '52', '12.5', '24'],
      ['25', '59', '14.5', '36'],
      ['32', '70', '18.0', '63'],
      ['40', '84', '21.5', '110'],
      ['50', '101', '27.0', '185'],
      ['63', '124', '35.0', '350'],
      ['75', '143', '41.5', '530'],
      ['90', '166', '49.0', '890'],
      ['110', '198', '62.0', '1520'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger Kunststoff-Produkte GmbH (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R (Polypropylene Random Copolymer)' },
      { label: 'Standard', labelAr: 'المعيار', value: 'DIN 16962, DIN EN ISO 15874-3' },
      { label: 'Angle', labelAr: 'الزاوية', value: '90° Equal Branching' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'Heat fusion (socket welding)' },
    ],
    catalogPdf: null,
  },
  {
    id: 'ppr-elbow-90',
    category: 'water',
    type: 'fittings',
    brand: 'banninger',
    search: 'pp-r elbow 90 fittings direction changes banninger germany',
    title: 'PP-R Elbow 90°',
    titleAr: 'كوع 90° PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Elbow 90°.webp'],
    specsTableHeaders: ['Size (mm)', 'Length L (mm)', 'Z-dimension (mm)', 'Weight (g)'],
    specsTableRows: [
      ['20', '26', '12.5', '18'],
      ['25', '29', '14.5', '26'],
      ['32', '35', '18.0', '46'],
      ['40', '42', '21.5', '78'],
      ['50', '51', '27.0', '135'],
      ['63', '62', '35.0', '255'],
      ['75', '71', '41.5', '390'],
      ['90', '83', '49.0', '650'],
      ['110', '99', '62.0', '1120'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger Kunststoff-Produkte GmbH (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R (Polypropylene Random Copolymer)' },
      { label: 'Standard', labelAr: 'المعيار', value: 'DIN 16962, DIN EN ISO 15874-3' },
      { label: 'Angle', labelAr: 'الزاوية', value: '90° Direction change' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'Heat fusion (socket welding)' },
    ],
    catalogPdf: null,
  },
  {
    id: 'ppr-elbow-45',
    category: 'water',
    type: 'fittings',
    brand: 'banninger',
    search: 'pp-r elbow 45 fittings direction changes banninger germany',
    title: 'PP-R Elbow 45°',
    titleAr: 'كوع 45° PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/ELbow 45.webp'],
    specsTableHeaders: ['Size (mm)', 'Length L (mm)', 'Z-dimension (mm)', 'Weight (g)'],
    specsTableRows: [
      ['20', '21', '6.0', '15'],
      ['25', '23', '7.5', '20'],
      ['32', '27', '9.0', '35'],
      ['40', '31', '11.0', '58'],
      ['50', '37', '13.5', '98'],
      ['63', '44', '16.5', '185'],
      ['75', '49', '19.5', '270'],
      ['90', '56', '23.0', '450'],
      ['110', '67', '29.5', '780'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger Kunststoff-Produkte GmbH (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R (Polypropylene Random Copolymer)' },
      { label: 'Standard', labelAr: 'المعيار', value: 'DIN 16962, DIN EN ISO 15874-3' },
      { label: 'Angle', labelAr: 'الزاوية', value: '45° Direction change' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'Heat fusion (socket welding)' },
    ],
    catalogPdf: null,
  },
  {
    id: 'ppr-socket',
    category: 'water',
    type: 'fittings',
    brand: 'banninger',
    search: 'pp-r socket fittings couplings joining banninger germany',
    title: 'PP-R Socket',
    titleAr: 'سوكيت PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Socket.webp'],
    specsTableHeaders: ['Size (mm)', 'Length L (mm)', 'Insertion Depth (mm)', 'Weight (g)'],
    specsTableRows: [
      ['20', '38', '14.5', '11'],
      ['25', '42', '16.0', '16'],
      ['32', '48', '18.0', '26'],
      ['40', '53', '20.5', '42'],
      ['50', '60', '23.5', '72'],
      ['63', '70', '27.5', '135'],
      ['75', '78', '30.0', '210'],
      ['90', '90', '33.0', '340'],
      ['110', '104', '37.0', '580'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger Kunststoff-Produkte GmbH (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R (Polypropylene Random Copolymer)' },
      { label: 'Standard', labelAr: 'المعيار', value: 'DIN 16962, DIN EN ISO 15874-3' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'Straight coupling to join two pipe lengths of the same size' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'Heat fusion (socket welding)' },
    ],
    catalogPdf: null,
  },
  {
    id: 'ppr-reducer',
    category: 'water',
    type: 'fittings',
    brand: 'banninger',
    search: 'pp-r reducer fittings couplings transitioning sizes banninger germany',
    title: 'PP-R Reducer',
    titleAr: 'مخفض PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Reducer.webp'],
    specsTableHeaders: ['Reducing Sizes (mm)', 'Length L (mm)', 'Z-dimension (mm)', 'Weight (g)'],
    specsTableRows: [
      ['25 × 20', '40', '9.5', '12'],
      ['32 × 20', '45', '12.5', '18'],
      ['32 × 25', '45', '11.0', '20'],
      ['40 × 25', '50', '13.5', '32'],
      ['40 × 32', '50', '11.5', '35'],
      ['50 × 32', '56', '14.5', '52'],
      ['50 × 40', '56', '12.0', '58'],
      ['63 × 40', '65', '17.0', '98'],
      ['63 × 50', '65', '14.0', '108'],
      ['90 × 63', '85', '24.5', '240'],
      ['110 × 90', '98', '28.0', '480'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger Kunststoff-Produkte GmbH (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R (Polypropylene Random Copolymer)' },
      { label: 'Standard', labelAr: 'المعيار', value: 'DIN 16962, DIN EN ISO 15874-3' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'Concentric reduction to transition between larger and smaller pipe runs' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'Heat fusion (socket welding)' },
    ],
    catalogPdf: null,
  },
  {
    id: 'matte-washbasin',
    category: 'sanitary',
    type: 'sanitary',
    brand: 'sanitary',
    search: 'washbasin sanitary ware bathroom villa hotel ece tabletop',
    title: 'Matte Tabletop Washbasins',
    titleAr: 'أحواض غسيل مطفي فوق الطاولة',
    subtitle: 'ECE Sanitary Ware',
    subtitleAr: 'إي سي إي للأدوات الصحية',
    images: ['img/Banninger/Ece A107 Tabletop Washbasin Matte Black.jpg'],
    isPhoto: true,
    specsTableHeaders: ['Model', 'Finish', 'Mount Type', 'Material'],
    specsTableRows: [
      ['ECE A107', 'Matte Black', 'Tabletop', 'Vitreous China'],
      ['ECE A107', 'Matte White', 'Tabletop', 'Vitreous China'],
      ['Dual Glaze', 'Double Finish', 'Countertop / Wall', 'Vitreous China'],
    ],
    highlightCol: 1,
    details: [
      { label: 'Material', labelAr: 'المادة', value: 'High-quality vitreous china' },
      { label: 'Finish', labelAr: 'التشطيب', value: 'Matte black / Matte white / Dual glaze' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Villas, apartments, hotels, showrooms, modern renovations' },
      { label: 'Standards', labelAr: 'المعايير', value: 'EN 31 / EN 32 sanitary ware standards' },
      { label: 'Availability', labelAr: 'التوفر', value: 'Available for project quotation in Yemen' },
    ],
    catalogPdf: null,
  },
  {
    id: 'dual-sanitary-set',
    category: 'sanitary',
    type: 'sanitary',
    brand: 'sanitary',
    search: 'dual glaze sanitary set bathroom package ece dual glaze',
    title: 'Dual Finish Sanitary Sets',
    titleAr: 'أطقم صحية ذات تشطيب مزدوج',
    subtitle: 'ECE Sanitary Ware',
    subtitleAr: 'إي سي إي للأدوات الصحية',
    images: ['img/Banninger/Dual Glaze Double finish sanitary ware.jpg'],
    isPhoto: true,
    specsTableHeaders: ['Item', 'Description', 'Finish'],
    specsTableRows: [
      ['Washbasin', 'Countertop basin', 'Dual glaze'],
      ['WC Pan', 'Floor-standing / Wall-hung', 'Dual glaze'],
      ['Cistern', 'Concealed / Exposed', 'White'],
      ['Accessories', 'Soap dish, towel bar, hooks', 'Matching'],
    ],
    highlightCol: 2,
    details: [
      { label: 'Material', labelAr: 'المادة', value: 'Vitreous china with dual glaze finish' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Premium bathroom packages, villa projects, hotel fit-outs' },
      { label: 'Availability', labelAr: 'التوفر', value: 'Request package quote — sizes and combinations available' },
    ],
    catalogPdf: null,
  },
  {
    id: 'ball-valve',
    category: 'valves',
    type: 'valves',
    brand: 'banninger',
    search: 'ball valve water control shutoff banninger germany',
    title: 'Ball Valves',
    titleAr: 'صمامات الكرة',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Ball Valve.webp', 'img/Banninger/Ball Valve With UV Resistance.webp'],
    specsTableHeaders: ['Size (DN)', 'Thread', 'Body Material', 'Pressure (PN)', 'Temperature'],
    specsTableRows: [
      ['15 (½")', 'Female × Female', 'Brass / Chrome', 'PN25', 'Up to 90°C'],
      ['20 (¾")', 'Female × Female', 'Brass / Chrome', 'PN25', 'Up to 90°C'],
      ['25 (1")', 'Female × Female', 'Brass / Chrome', 'PN25', 'Up to 90°C'],
      ['32 (1¼")', 'Female × Female', 'Brass', 'PN25', 'Up to 90°C'],
      ['40 (1½")', 'Female × Female', 'Brass', 'PN25', 'Up to 90°C'],
      ['50 (2")', 'Female × Female', 'Brass', 'PN25', 'Up to 90°C'],
    ],
    highlightCol: 3,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'Brass body, chrome-plated finish; PTFE seats' },
      { label: 'Standard', labelAr: 'المعيار', value: 'EN ISO 228-1 (thread standard)' },
      { label: 'Operation', labelAr: 'التشغيل', value: 'Quarter-turn lever handle' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Water supply shutoff points, service connections, isolation valves' },
    ],
    catalogPdf: null,
  },
  {
    id: 'concealed-valve',
    category: 'valves',
    type: 'valves',
    brand: 'banninger',
    search: 'concealed valve bathroom control wall banninger germany',
    title: 'Concealed Valves',
    titleAr: 'الصمامات المخفية',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Concealed Valve.webp', 'img/Banninger/Elite Concealed Valve.webp'],
    specsTableHeaders: ['Model', 'Size (DN)', 'Finish', 'Mount Type'],
    specsTableRows: [
      ['Standard Concealed', '½" – ¾"', 'Chrome', 'In-wall'],
      ['Elite Concealed', '½" – ¾"', 'Chrome', 'In-wall'],
    ],
    highlightCol: 2,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'Brass body with chrome finish' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Hidden bathroom control points, clean modern interior installations' },
      { label: 'Installation', labelAr: 'التركيب', value: 'Wall-mounted concealed; access via decorative cover plate' },
    ],
    catalogPdf: null,
  },
  {
    id: 'technical-valves',
    category: 'valves',
    type: 'valves',
    brand: 'banninger',
    search: 'check valve y filter seated valve network banninger germany',
    title: 'Technical Valves & Filters',
    titleAr: 'الصمامات الفنية والمرشحات',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Y Seated Valve.jpg', 'img/Banninger/Y Filter Female Thread.webp'],
    specsTableHeaders: ['Product', 'Size Range', 'Material', 'Application'],
    specsTableRows: [
      ['Y-Filter Female Thread', 'DN15–DN50', 'Brass', 'Particle filtration'],
      ['Y Seated Valve', 'DN15–DN50', 'Brass', 'Flow regulation'],
      ['Straight Seated Valve', 'DN15–DN50', 'Brass', 'Fine flow control'],
    ],
    highlightCol: 3,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'Brass body with chrome or nickel finish' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Network filtration, flow regulation, service point control' },
      { label: 'Standards', labelAr: 'المعايير', value: 'EN standard threaded connections' },
    ],
    catalogPdf: null,
  },
  {
    id: 'check-valve-ppr-ends',
    category: 'valves',
    type: 'valves',
    brand: 'banninger',
    search: 'check valve ppr ends backflow protection double ppr banninger germany',
    title: 'PP-R Check Valve (Double Ends)',
    titleAr: 'صمام عدم رجوع بيننجر PP-R (نهايتين لحام)',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Check Valve-PPR Ends.webp'],
    specsTableHeaders: ['PPR Ends Size (mm)', 'Length L (mm)', 'Opening Pressure (bar)', 'PN Rating'],
    specsTableRows: [
      ['20', '74', '0.05 bar', 'PN20'],
      ['25', '83', '0.05 bar', 'PN20'],
      ['32', '95', '0.05 bar', 'PN20'],
      ['40', '110', '0.05 bar', 'PN20'],
      ['50', '126', '0.05 bar', 'PN20'],
      ['63', '148', '0.05 bar', 'PN20'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R body with spring-loaded check disc' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'Prevents backflow in water supply and heating networks' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'PPR heat fusion socket welding ends' },
    ],
    catalogPdf: null,
  },
  {
    id: 'check-valve-ppr-female',
    category: 'valves',
    type: 'valves',
    brand: 'banninger',
    search: 'check valve ppr female brass thread backflow protection banninger germany',
    title: 'PP-R Check Valve (PPR & Female)',
    titleAr: 'صمام عدم رجوع بسن أنثى بيننجر PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Check Valve – PPR & Female.webp'],
    specsTableHeaders: ['Size PPR (mm)', 'Female Thread', 'Length L (mm)', 'Material'],
    specsTableRows: [
      ['20', 'Rp ½"', '68', 'PPR + Brass'],
      ['25', 'Rp ¾"', '76', 'PPR + Brass'],
      ['32', 'Rp 1"', '88', 'PPR + Brass'],
    ],
    highlightCol: 1,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R body with high-grade brass female threaded insert' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'Prevents water reflux, connects directly to metal threads / pumps' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'PPR socket welding × Rp female thread' },
    ],
    catalogPdf: null,
  },
  {
    id: 'check-valve-ppr-male',
    category: 'valves',
    type: 'valves',
    brand: 'banninger',
    search: 'check valve ppr male brass thread backflow protection banninger germany',
    title: 'PP-R Check Valve (PPR & Male)',
    titleAr: 'صمام عدم رجوع بسن ذكر بيننجر PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Check Valve – PPR & Male Thread.webp'],
    specsTableHeaders: ['Size PPR (mm)', 'Male Thread', 'Length L (mm)', 'Material'],
    specsTableRows: [
      ['20', 'R ½"', '78', 'PPR + Brass'],
      ['25', 'R ¾"', '86', 'PPR + Brass'],
      ['32', 'R 1"', '98', 'PPR + Brass'],
    ],
    highlightCol: 1,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R body with high-grade brass male threaded insert' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'PPR socket welding × R male thread' },
    ],
    catalogPdf: null,
  },
  {
    id: 'check-valve-ppr-black',
    category: 'valves',
    type: 'valves',
    brand: 'banninger',
    search: 'check valve ppr black outdoor uv protection banninger germany',
    title: 'PP-R Check Valve Black (UV)',
    titleAr: 'صمام عدم رجوع أسود بيننجر PPR (UV)',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Check Valve-PPR Ends black.webp'],
    specsTableHeaders: ['Size (mm)', 'UV Protection', 'PN Rating', 'Material'],
    specsTableRows: [
      ['20', 'Yes (Full UV)', 'PN20', 'PP-R Black'],
      ['25', 'Yes (Full UV)', 'PN20', 'PP-R Black'],
      ['32', 'Yes (Full UV)', 'PN20', 'PP-R Black'],
      ['40', 'Yes (Full UV)', 'PN20', 'PP-R Black'],
      ['50', 'Yes (Full UV)', 'PN20', 'PP-R Black'],
      ['63', 'Yes (Full UV)', 'PN20', 'PP-R Black'],
    ],
    highlightCol: 1,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'UV Resistance', labelAr: 'مقاومة الأشعة', value: 'UV-resistant black outer shell' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Exposed plumbing lines, rooftops, solar system supply' },
    ],
    catalogPdf: null,
  },
  {
    id: 'union-female-thread',
    category: 'valves',
    type: 'fittings',
    brand: 'banninger',
    search: 'union female brass thread connection ppr banninger germany',
    title: 'PP-R Union Female Thread',
    titleAr: 'وصلة لاكور بسن أنثى بيننجر PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Union Female Thread.webp'],
    specsTableHeaders: ['Size (mm)', 'Female Thread', 'Length L (mm)', 'Weight (g)'],
    specsTableRows: [
      ['20', 'Rp ½"', '48', '85'],
      ['25', 'Rp ¾"', '54', '120'],
      ['32', 'Rp 1"', '60', '190'],
      ['40', 'Rp 1¼"', '68', '310'],
      ['50', 'Rp 1½"', '75', '450'],
      ['63', 'Rp 2"', '88', '750'],
    ],
    highlightCol: 1,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R body, high-grade brass female thread, EPDM gasket' },
      { label: 'Purpose', labelAr: 'الغرض', value: 'Demountable threaded connection to simplify equipment installation and pump servicing' },
    ],
    catalogPdf: null,
  },
  {
    id: 'union-male-thread',
    category: 'valves',
    type: 'fittings',
    brand: 'banninger',
    search: 'union male brass thread connection ppr banninger germany',
    title: 'PP-R Union Male Thread',
    titleAr: 'وصلة لاكور بسن ذكر بيننجر PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Union Male Thread.webp'],
    specsTableHeaders: ['Size (mm)', 'Male Thread', 'Length L (mm)', 'Weight (g)'],
    specsTableRows: [
      ['20', 'R ½"', '56', '95'],
      ['25', 'R ¾"', '63', '140'],
      ['32', 'R 1"', '71', '215'],
      ['40', 'R 1¼"', '80', '360'],
      ['50', 'R 1½"', '88', '510'],
      ['63', 'R 2"', '104', '870'],
    ],
    highlightCol: 1,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R body, high-grade brass male thread, EPDM gasket' },
    ],
    catalogPdf: null,
  },
  {
    id: 'union-female-black',
    category: 'valves',
    type: 'fittings',
    brand: 'banninger',
    search: 'union female black outdoor uv protection banninger germany',
    title: 'PP-R Union Female Black (UV)',
    titleAr: 'وصلة لاكور بسن أنثى أسود بيننجر (UV)',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Union Female Thread black.webp'],
    specsTableHeaders: ['Size (mm)', 'Thread', 'UV protection', 'Color'],
    specsTableRows: [
      ['20', 'Rp ½"', 'Yes (Full UV)', 'Black'],
      ['25', 'Rp ¾"', 'Yes (Full UV)', 'Black'],
      ['32', 'Rp 1"', 'Yes (Full UV)', 'Black'],
      ['40', 'Rp 1¼"', 'Yes (Full UV)', 'Black'],
      ['50', 'Rp 1½"', 'Yes (Full UV)', 'Black'],
      ['63', 'Rp 2"', 'Yes (Full UV)', 'Black'],
    ],
    highlightCol: 2,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'UV-resistant PP-R black, brass insert' },
    ],
    catalogPdf: null,
  },
  {
    id: 'union-male-black',
    category: 'valves',
    type: 'fittings',
    brand: 'banninger',
    search: 'union male black outdoor uv protection banninger germany',
    title: 'PP-R Union Male Black (UV)',
    titleAr: 'وصلة لاكور بسن ذكر أسود بيننجر (UV)',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Union Male Thread black.webp'],
    specsTableHeaders: ['Size (mm)', 'Thread', 'UV protection', 'Color'],
    specsTableRows: [
      ['20', 'R ½"', 'Yes (Full UV)', 'Black'],
      ['25', 'R ¾"', 'Yes (Full UV)', 'Black'],
      ['32', 'R 1"', 'Yes (Full UV)', 'Black'],
      ['40', 'R 1¼"', 'Yes (Full UV)', 'Black'],
      ['50', 'R 1½"', 'Yes (Full UV)', 'Black'],
      ['63', 'R 2"', 'Yes (Full UV)', 'Black'],
    ],
    highlightCol: 2,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'UV-resistant PP-R black, brass insert' },
    ],
    catalogPdf: null,
  },
  {
    id: 'adhesives',
    category: 'adhesives',
    type: 'adhesives',
    brand: 'smarthome',
    search: 'adhesive solvent cement installation smart home factory yemen',
    title: 'Adhesives & Solvent Cement',
    titleAr: 'المواد اللاصقة وإسمنت المذيبات',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Repairing Socket.webp', 'img/Smart Home/Socket.webp'],
    specsTableHeaders: ['Product Type', 'Application', 'Curing Time', 'Temperature Range'],
    specsTableRows: [
      ['PVC Solvent Cement', 'PVC pipe joints', '24–48 hrs', '-10°C to +60°C'],
      ['CPVC Solvent Cement', 'CPVC pipe joints', '24–48 hrs', 'Up to 93°C'],
      ['PP-R Pipe Cleaner', 'Surface prep for PPR', 'Immediate', 'Ambient'],
    ],
    highlightCol: 1,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory Partner' },
      { label: 'Usage', labelAr: 'الاستخدام', value: 'Apply to clean, dry pipe ends before joining' },
      { label: 'Safety', labelAr: 'السلامة', value: 'Use in ventilated areas; keep away from open flame' },
      { label: 'Packaging', labelAr: 'التعبئة', value: 'Available in 250ml, 500ml, and 1L containers' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Water supply and drainage PVC/CPVC pipe systems' },
    ],
    catalogPdf: null,
  },
  {
    id: 'pipe-clamps',
    category: 'accessories',
    type: 'accessories',
    brand: 'banninger',
    search: 'pipe clamps pipe support fixing banninger germany',
    title: 'Pipe Clamps',
    titleAr: 'المشابك ومثبتات المواسير',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Pipes Clamps.webp'],
    specsTableHeaders: ['Size (mm)', 'Clamp Type', 'Material', 'Usage'],
    specsTableRows: [
      ['16–20', 'Single PP support', 'Polypropylene', 'Wall fixing'],
      ['25–32', 'Single PP support', 'Polypropylene', 'Wall fixing'],
      ['40–50', 'Heavy PP support', 'Polypropylene', 'Wall fixing'],
      ['63–110', 'Metal clamp with rubber', 'Steel + EPDM', 'Heavy support'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'High grade polypropylene / galvanised steel' },
      { label: 'Purpose', labelAr: 'الغرض', value: 'Securing horizontal and vertical pipe runs cleanly on walls or ceilings' },
    ],
    catalogPdf: null,
  },
  {
    id: 'ppr-manifold-4',
    category: 'accessories',
    type: 'accessories',
    brand: 'banninger',
    search: 'manifold 4 outlets distribution ppr banninger germany',
    title: 'PP-R Manifold (4 Outlets)',
    titleAr: 'مشعب لحام 4 مخارج بيننجر PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Manifold Welding 4 outlets.webp'],
    specsTableHeaders: ['Main Size (mm)', 'Outlets Size (mm)', 'Outlets Count', 'Material'],
    specsTableRows: [
      ['32', '20 mm', '4 outlets', 'PP-R'],
      ['40', '20 mm', '4 outlets', 'PP-R'],
      ['40', '25 mm', '4 outlets', 'PP-R'],
    ],
    highlightCol: 2,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Water supply distribution zones, plumbing manifolds for sanitary blocks' },
      { label: 'Advantage', labelAr: 'الميزة', value: 'Pre-welded compact manifold to reduce connection joints on-site' },
    ],
    catalogPdf: null,
  },
  {
    id: 'ppr-manifold-end',
    category: 'accessories',
    type: 'accessories',
    brand: 'banninger',
    search: 'manifold end socket termination ppr banninger germany',
    title: 'PP-R Manifold End Socket',
    titleAr: 'سدادة مشعب لحام بيننجر PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Manifold welding – End socket.webp'],
    specsTableHeaders: ['Size (mm)', 'End Connection', 'Material', 'Color'],
    specsTableRows: [
      ['32', 'Welding Socket', 'PP-R', 'Green'],
      ['40', 'Welding Socket', 'PP-R', 'Green'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'Ends and closes the flow at the terminal end of a PP-R welded manifold' },
    ],
    catalogPdf: null,
  },
  {
    id: 'pprct-flange-adaptor',
    category: 'accessories',
    type: 'accessories',
    brand: 'banninger',
    search: 'pp-rct flange adaptor spigot grooved long butt connection banninger germany',
    title: 'PP-RCT Flange Adaptor (Grooved)',
    titleAr: 'محول فلانشة مجوف بيننجر PP-RCT',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/PP-RCT Flange adaptor spigot grooved long but.webp'],
    specsTableHeaders: ['Nominal Size d (mm)', 'SDR Rating', 'Flange DN support', 'Material'],
    specsTableRows: [
      ['50', 'SDR 11', 'DN40', 'PP-RCT'],
      ['63', 'SDR 11', 'DN50', 'PP-RCT'],
      ['75', 'SDR 11', 'DN65', 'PP-RCT'],
      ['90', 'SDR 11', 'DN80', 'PP-RCT'],
      ['110', 'SDR 11', 'DN100', 'PP-RCT'],
      ['125', 'SDR 11', 'DN100', 'PP-RCT'],
      ['160', 'SDR 11', 'DN150', 'PP-RCT'],
      ['200', 'SDR 11', 'DN200', 'PP-RCT'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-RCT with high crystalline structure' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'Butt welding or spigot socket fusion, used with flange backing rings' },
    ],
    catalogPdf: null,
  },
  {
    id: 'pp-flange-ring',
    category: 'accessories',
    type: 'accessories',
    brand: 'banninger',
    search: 'pp flange ring metal backing connection banninger germany',
    title: 'PP Flange Backing Ring',
    titleAr: 'حلقة فلانشة تدعيم بيننجر PP',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Flange.jpg'],
    specsTableHeaders: ['Size (mm)', 'Flange DN', 'Bolt Holes Count', 'Material'],
    specsTableRows: [
      ['50', 'DN40', '4 holes', 'PP with Steel Core'],
      ['63', 'DN50', '4 holes', 'PP with Steel Core'],
      ['75', 'DN65', '4 holes', 'PP with Steel Core'],
      ['90', 'DN80', '8 holes', 'PP with Steel Core'],
      ['110', 'DN100', '8 holes', 'PP with Steel Core'],
      ['160', 'DN150', '8 holes', 'PP with Steel Core'],
      ['200', 'DN200', '8 holes', 'PP with Steel Core'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'Polypropylene reinforced with a zinc-plated steel ring insert' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Backing ring to secure grooved flange adaptors onto pumps/metal valves' },
    ],
    catalogPdf: null,
  },
  {
    id: 'ppr-manifold-no-end',
    category: 'accessories',
    type: 'accessories',
    brand: 'banninger',
    search: 'manifold no end socket ppr distribution banninger germany',
    title: 'PP-R Manifold (Open Ends)',
    titleAr: 'مشعب لحام مفتوح النهايات بيننجر PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Manifold welding without end socket.webp'],
    specsTableHeaders: ['Main Size (mm)', 'Outlets Size (mm)', 'Outlets Count', 'Material'],
    specsTableRows: [
      ['32', '20 mm', '4 outlets (open)', 'PP-R'],
      ['40', '20 mm', '4 outlets (open)', 'PP-R'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'Allows joining multiple manifolds together sequentially for custom multi-zone lines' },
    ],
    catalogPdf: null,
  },
  {
    id: 'bracket-elbow-female',
    category: 'accessories',
    type: 'fittings',
    brand: 'banninger',
    search: 'bracket elbow female thread wall connection banninger germany',
    title: 'PP-R Bracket Elbow Female',
    titleAr: 'كوع حائطي بسن أنثى بيننجر PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Bracket ELbow Female Thread.webp'],
    specsTableHeaders: ['Size (mm)', 'Female Thread', 'Angle', 'Material'],
    specsTableRows: [
      ['20', 'Rp ½"', '90°', 'PPR + Brass'],
      ['25', 'Rp ½"', '90°', 'PPR + Brass'],
      ['25', 'Rp ¾"', '90°', 'PPR + Brass'],
    ],
    highlightCol: 1,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R body, high-grade brass Rp female thread insert, wall mounting wings' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Wall-mounted connections for sanitary fittings, bibcocks, and shower valves' },
    ],
    catalogPdf: null,
  },
  {
    id: 'double-bracket-elbow',
    category: 'accessories',
    type: 'fittings',
    brand: 'banninger',
    search: 'double bracket elbow female thread wall connection banninger germany',
    title: 'PP-R Double Bracket Elbow',
    titleAr: 'كوع حائطي مزدوج بسن أنثى بيننجر PP-R',
    subtitle: 'Bänninger (Germany)',
    subtitleAr: 'بيننجر (ألمانيا)',
    images: ['img/Banninger/Double Elbow with female thread.webp'],
    specsTableHeaders: ['Size (mm)', 'Thread Outlets', 'Center-to-Center (mm)', 'Angle'],
    specsTableRows: [
      ['20', 'Rp ½" × ½"', '150 mm', '90°'],
    ],
    highlightCol: 2,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Bänninger (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'PP-R body with pre-aligned brass female inserts on a mounting bracket' },
      { label: 'Advantage', labelAr: 'الميزة', value: 'Guarantees perfect center-to-center alignment for bathroom shower mixers' },
    ],
    catalogPdf: null,
  },
  {
    id: 'kessel-floor-drain',
    category: 'accessories',
    type: 'sanitary',
    brand: 'kessel',
    search: 'kessel easydrain floor drain shower channel german drainage premium',
    title: 'Kessel EasyDrain Floor Drains',
    titleAr: 'مصارف وقنوات كيسيل الأرضية',
    subtitle: 'Kessel (Germany)',
    subtitleAr: 'كيسيل (ألمانيا)',
    images: ['img/Smart Home/floor drain 110 125 with odor trap.jpg', 'img/Smart Home/Floor Drain Cover.webp', 'img/Smart Home/Floor Drain Plug.webp'],
    isPhoto: true,
    specsTableHeaders: ['Model / Type', 'Frame Size (mm)', 'Flow Rate (l/s)', 'Odor Trap', 'Material'],
    specsTableRows: [
      ['EasyDrain Channel', '700–1200 mm', '0.8 l/s', 'Standard (50mm)', 'Stainless Steel / ABS'],
      ['Standard Floor Drain', '100 × 100 mm', '0.6 l/s', 'Removable Siphon', 'ABS / Stainless Grid'],
      ['Floor Drain 110', '150 × 150 mm', '0.9 l/s', 'Integrated Trap', 'High-Grade ABS'],
    ],
    highlightCol: 4,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Kessel AG (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'High-grade AISI 304 Stainless Steel, Premium ABS Housing' },
      { label: 'Flow Performance', labelAr: 'أداء التدفق', value: 'Up to 0.9 liters per second' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Modern bathrooms, walk-in showers, commercial sanitary rooms' },
      { label: 'Features', labelAr: 'المميزات', value: 'Removable odor trap for easy cleaning, height-adjustable frame' },
      { label: 'Approvals', labelAr: 'الشهادات', value: 'EN 1253 drainage standard certified' },
    ],
    catalogPdf: null,
  },
  {
    id: 'kessel-backwater-valve',
    category: 'valves',
    type: 'valves',
    brand: 'kessel',
    search: 'kessel staufix backwater valve flood protection sewer control reflux german',
    title: 'Kessel Staufix Backwater Valves',
    titleAr: 'صمامات كيسيل لمنع الارتداد',
    subtitle: 'Kessel (Germany)',
    subtitleAr: 'كيسيل (ألمانيا)',
    images: ['img/Smart Home/Backwater Valves.webp'],
    specsTableHeaders: ['Model', 'Pipe Size (DN)', 'Flaps Count', 'Emergency Lock', 'Type'],
    specsTableRows: [
      ['Staufix DN50', '50 mm', '2 Flaps', 'Manual Handle', 'Type 1 (Wastewater without sewage)'],
      ['Staufix DN70', '75 mm', '2 Flaps', 'Manual Handle', 'Type 2 (Wastewater without sewage)'],
      ['Staufix DN100', '110 mm', '2 Flaps', 'Manual Handle', 'Type 2 (Wastewater without sewage)'],
      ['Staufix DN150', '160 mm', '2 Flaps', 'Manual Handle', 'Type 2 (Wastewater without sewage)'],
    ],
    highlightCol: 1,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Kessel AG (Germany)' },
      { label: 'Material', labelAr: 'المادة', value: 'Impact-resistant premium ABS, stainless steel reflux flaps' },
      { label: 'Standards', labelAr: 'المعايير', value: 'EN 13564 certified backwater valves' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'Prevents wastewater backflow from municipal sewers into low-level outlets' },
      { label: 'Features', labelAr: 'المميزات', value: 'Tool-free access cover for fast maintenance, manual emergency closure lever' },
    ],
    catalogPdf: null,
  },
  {
    id: 'kessel-lifting-station',
    category: 'accessories',
    type: 'accessories',
    brand: 'kessel',
    search: 'kessel drainage lifting station pump wastewater german lifting station',
    title: 'Kessel Drainage Lifting Stations',
    titleAr: 'محطات رفع الصرف الصحي كيسيل',
    subtitle: 'Kessel (Germany)',
    subtitleAr: 'كيسيل (ألمانيا)',
    images: ['img/Smart Home/Drainage Lifting Station.webp'],
    specsTableHeaders: ['Model', 'Tank Volume (L)', 'Flow Rate (m³/h)', 'Max Head (m)', 'Power Input (kW)'],
    specsTableRows: [
      ['Aqualift S Compact', '40 L', '11.0 m³/h', '8.0 m', '0.5 kW'],
      ['Aqualift S XL', '120 L', '21.0 m³/h', '11.5 m', '1.1 kW'],
    ],
    highlightCol: 2,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Kessel AG (Germany)' },
      { label: 'Wastewater Type', labelAr: 'نوع مياه الصرف', value: 'Gray wastewater (free of fecal matter)' },
      { label: 'Control', labelAr: 'نظام التحكم', value: 'Pneumatic level measurement, automatic sensor start' },
      { label: 'Installation', labelAr: 'التركيب', value: 'Floor slab installation or exposed placement' },
      { label: 'Features', labelAr: 'المميزات', value: 'Integrated non-return valve, activated carbon filter odor protection' },
    ],
    catalogPdf: null,
  },
];

/* =========================================
   SMART HOME PRODUCTS DATABASE
   ========================================= */
const SMART_HOME_PRODUCTS = [
  {
    id: 'sh-pipes',
    category: 'drainage',
    type: 'pipes',
    brand: 'smarthome',
    search: 'pvc-u pipes drainage waste water main lines smart home factory',
    title: 'PVC-U Pipes',
    titleAr: 'مواسير صرف PVC-U',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Pipes.webp'],
    specsTableHeaders: ['Size (OD mm)', 'Wall Thickness (mm)', 'Length (m)', 'Standard'],
    specsTableRows: [
      ['50', '2.0', '6.0', 'EN 1329'],
      ['75', '2.3', '6.0', 'EN 1329'],
      ['110', '3.2', '6.0', 'EN 1329'],
      ['160', '4.0', '6.0', 'EN 1329'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Material', labelAr: 'المادة', value: 'PVC-U (Unplasticized Polyvinyl Chloride)' },
      { label: 'Color', labelAr: 'اللون', value: 'Gray' },
      { label: 'Standard', labelAr: 'المعيار', value: 'EN 1329 / EN 1401' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Non-pressure wastewater drainage' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-multilayer',
    category: 'drainage',
    type: 'pipes',
    brand: 'smarthome',
    search: 'multi-layer pipes sandwich structure acoustic sound smart home factory',
    title: 'Multi-Layer Pipes',
    titleAr: 'مواسير متعددة الطبقات',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Multi-Layer Pipes.webp'],
    specsTableHeaders: ['Size (mm)', 'Outer Layer', 'Core Layer', 'Standard'],
    specsTableRows: [
      ['50', 'PVC-U Solid', 'PVC Foam (Acoustic)', 'EN 1451'],
      ['75', 'PVC-U Solid', 'PVC Foam (Acoustic)', 'EN 1451'],
      ['110', 'PVC-U Solid', 'PVC Foam (Acoustic)', 'EN 1451'],
      ['160', 'PVC-U Solid', 'PVC Foam (Acoustic)', 'EN 1451'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Structure', labelAr: 'البنية', value: '3-layer sandwich core structure for sound absorption' },
      { label: 'Standard', labelAr: 'المعيار', value: 'EN 1451 / EN 1329' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Sound-dampening wastewater systems' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-ring-socket',
    category: 'drainage',
    type: 'pipes',
    brand: 'smarthome',
    search: 'ring socket pipes rubber ring joint epdm smart home factory',
    title: 'Ring Socket Pipes',
    titleAr: 'مواسير بنهاية سوكيت وحلقة مطاطية',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Multi Layer pipes with ring socket.webp'],
    specsTableHeaders: ['Size (mm)', 'Joint Type', 'Sealing', 'Thickness (mm)'],
    specsTableRows: [
      ['50', 'Rubber Ring Joint', 'EPDM pre-fitted ring', '2.0'],
      ['75', 'Rubber Ring Joint', 'EPDM pre-fitted ring', '2.3'],
      ['110', 'Rubber Ring Joint', 'EPDM pre-fitted ring', '3.2'],
      ['160', 'Rubber Ring Joint', 'EPDM pre-fitted ring', '4.0'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Joint Type', labelAr: 'نوع الوصلة', value: 'Rubber ring jointing (easy push-fit installation)' },
      { label: 'Gasket Material', labelAr: 'مادة الجوان', value: 'High-grade EPDM rubber seal ring' },
      { label: 'Benefit', labelAr: 'الفائدة', value: 'Compensates for thermal expansion automatically' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-solvent-cement-pipe',
    category: 'drainage',
    type: 'pipes',
    brand: 'smarthome',
    search: 'solvent cement socket pipes chemical weld glue smart home factory',
    title: 'Solvent Cement Pipes',
    titleAr: 'مواسير بنهاية لحام إسمنتي (غراء)',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Multi Layer pipes with solvent cement socket.webp'],
    specsTableHeaders: ['Size (mm)', 'Joint Type', 'Thickness (mm)', 'Application'],
    specsTableRows: [
      ['32', 'Solvent Cement Weld', '1.8', 'AC drainage lines'],
      ['40', 'Solvent Cement Weld', '1.8', 'Kitchen waste lines'],
      ['50', 'Solvent Cement Weld', '2.0', 'Bathroom waste lines'],
      ['110', 'Solvent Cement Weld', '3.2', 'Main soil stacks'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Joint Type', labelAr: 'نوع الوصلة', value: 'Solvent cement welding (chemical weld for leakproof seal)' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Internal wastewater plumbing systems' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-drain-upper',
    category: 'drainage',
    type: 'pipes',
    brand: 'smarthome',
    search: 'pvc drain upper section floor drain base smart home factory',
    title: 'PVC Drain Upper Section',
    titleAr: 'الجزء العلوي لبالوعة الصرف PVC',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Drain Upper Section made of PVC.webp'],
    specsTableHeaders: ['Frame (mm)', 'Grate (mm)', 'Height Adjustment', 'Material'],
    specsTableRows: [
      ['100 × 100', '95 × 95', 'Adjustable range 30-70mm', 'PVC-U'],
      ['150 × 150', '140 × 140', 'Adjustable range 30-80mm', 'PVC-U'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'Telescopic upper section to adjust floor drain height to tiles' },
      { label: 'Material', labelAr: 'المادة', value: 'Premium impact-resistant PVC-U' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-pipe-plug',
    category: 'drainage',
    type: 'pipes',
    brand: 'smarthome',
    search: 'pipe plug cap end cap pvc smart home factory',
    title: 'Pipe Plug',
    titleAr: 'سدادة ماسورة الصرف',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Pipe Plug.webp'],
    specsTableHeaders: ['Size (mm)', 'Joint Type', 'Gasket', 'Material'],
    specsTableRows: [
      ['50', 'Push-fit', 'Self-sealing', 'PVC-U Gray'],
      ['75', 'Push-fit', 'Self-sealing', 'PVC-U Gray'],
      ['110', 'Push-fit', 'Self-sealing', 'PVC-U Gray'],
      ['160', 'Push-fit', 'Self-sealing', 'PVC-U Gray'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'For sealing pipe ends and future extension points in drainage lines' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-elbow-87',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'elbow 87.5 90 degree direction changes pvc-u smart home factory',
    title: 'Elbow 87.5°',
    titleAr: 'كوع 87.5°',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Elbow 87.5°.webp'],
    specsTableHeaders: ['Size (mm)', 'Angle', 'Thickness (mm)', 'Joint Type'],
    specsTableRows: [
      ['50', '87.5°', '2.0', 'Solvent Socket'],
      ['75', '87.5°', '2.3', 'Solvent Socket'],
      ['110', '87.5°', '3.2', 'Solvent Socket'],
      ['160', '87.5°', '4.0', 'Solvent Socket'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Angle', labelAr: 'الزاوية', value: '87.5° (provides slope for gravity flow in vertical-horizontal transitions)' },
      { label: 'Standard', labelAr: 'المعيار', value: 'EN 1329 / EN 1401' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-elbow-45',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'elbow 45 degree gentle turns pvc-u smart home factory',
    title: 'Elbow 45°',
    titleAr: 'كوع 45°',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Elbow 45°.webp'],
    specsTableHeaders: ['Size (mm)', 'Angle', 'Thickness (mm)', 'Joint Type'],
    specsTableRows: [
      ['50', '45°', '2.0', 'Solvent Socket'],
      ['75', '45°', '2.3', 'Solvent Socket'],
      ['110', '45°', '3.2', 'Solvent Socket'],
      ['160', '45°', '4.0', 'Solvent Socket'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Angle', labelAr: 'الزاوية', value: '45° (gentle angle changes to minimize flow clogging risks)' },
      { label: 'Standard', labelAr: 'المعيار', value: 'EN 1329' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-elbow-door',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'elbow access door cleanout inspection cap pvc-u smart home factory',
    title: 'Elbow with Access Door',
    titleAr: 'كوع بباب كشف وتفتيش',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Elbow 87.5° with Access Door.jpg'],
    specsTableHeaders: ['Size (mm)', 'Angle', 'Cleanout Cover', 'O-ring Seal'],
    specsTableRows: [
      ['75', '87.5°', 'Threaded Cap', 'EPDM rubber ring'],
      ['110', '87.5°', 'Threaded Cap', 'EPDM rubber ring'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Access Door', labelAr: 'باب التفتيش', value: 'Fitted with a threaded cap allowing fast cleanout access' },
      { label: 'Seal Protection', labelAr: 'الحماية من التسرب', value: 'Built-in EPDM seal prevents any wastewater or odor leakage' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-tee-87',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'tee 87.5 equal branching pvc-u smart home factory',
    title: 'Tee 87.5°',
    titleAr: 'مشترك 87.5° (Tee)',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Tee 87.5°.webp'],
    specsTableHeaders: ['Size (mm)', 'Angle', 'Thickness (mm)', 'Connection'],
    specsTableRows: [
      ['50 × 50', '87.5°', '2.0', 'Solvent cement socket'],
      ['75 × 75', '87.5°', '2.3', 'Solvent cement socket'],
      ['110 × 110', '87.5°', '3.2', 'Solvent cement socket'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Angle', labelAr: 'الزاوية', value: '87.5° equal branch for vertical soil/waste stack systems' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-tee-45',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'tee 45 branching oblique tee pvc-u smart home factory',
    title: 'Tee 45°',
    titleAr: 'مشترك 45°',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Tee 45°.jpg'],
    specsTableHeaders: ['Size (mm)', 'Angle', 'Thickness (mm)', 'Connection'],
    specsTableRows: [
      ['50 × 50', '45°', '2.0', 'Solvent cement socket'],
      ['75 × 75', '45°', '2.3', 'Solvent cement socket'],
      ['110 × 110', '45°', '3.2', 'Solvent cement socket'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Angle', labelAr: 'الزاوية', value: '45° Y-branch for streamlined branching flow in drain lines' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-tee-door',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'tee access door cleanout tee 87.5 egic reference inspection cap smart home factory',
    title: 'Tee 87.5° with Access Door',
    titleAr: 'مشترك 87.5° بباب كشف وتفتيش',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Tee 87.5° with Access Door.webp'],
    specsTableHeaders: ['Size DN (mm)', 'Angle', 'Access Door Thread', 'Thickness (mm)', 'Standard'],
    specsTableRows: [
      ['50', '87.5°', 'G 1½"', '2.0', 'EN 1329'],
      ['75', '87.5°', 'G 2"', '2.3', 'EN 1329'],
      ['110', '87.5°', 'G 3"', '3.2', 'EN 1329'],
      ['160', '87.5°', 'G 4"', '4.0', 'EN 1329'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory Partner' },
      { label: 'Material', labelAr: 'المادة', value: 'PVC-U (Unplasticized Polyvinyl Chloride)' },
      { label: 'Access Cap', labelAr: 'غطاء الكشف', value: 'Threaded screw cap with tight o-ring seal for leak-proof protection' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Wastewater systems, rainwater stack visual inspection points' },
      { label: 'Connection', labelAr: 'طريقة الوصل', value: 'Solvent cement jointing' },
      { label: 'Color', labelAr: 'اللون', value: 'Drainage Gray' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-cross-45',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'cross 45 double branch cross pvc-u smart home factory',
    title: 'Cross 45°',
    titleAr: 'مشترك رباعي (كروس) 45°',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Cross 45°.webp'],
    specsTableHeaders: ['Size (mm)', 'Angle', 'Outlets Count', 'Material'],
    specsTableRows: [
      ['110', '45°', 'Double branching', 'PVC-U Gray'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Double Outlets', labelAr: 'مخارج مزدوجة', value: 'Splits water flow in 45 degree channels from left and right lines' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-short-cross',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'short cross 87.5 double branch pvc-u smart home factory',
    title: 'Short Cross 87.5°',
    titleAr: 'مشترك رباعي قصير 87.5°',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Short Cross 87.5°.webp'],
    specsTableHeaders: ['Size (mm)', 'Angle', 'Outlets Count', 'Thickness (mm)'],
    specsTableRows: [
      ['110', '87.5°', 'Double branching (short)', '3.2 mm'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Compact Space', labelAr: 'المساحة الضيقة', value: 'Short double tee configuration designed for small shaft spaces' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-socket-coupling',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'socket coupling sleeve joint double socket plain smart home factory',
    title: 'Socket',
    titleAr: 'سوكيت وصل (جلبة)',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Socket.webp'],
    specsTableHeaders: ['Size (mm)', 'Length (mm)', 'Thickness (mm)', 'Type'],
    specsTableRows: [
      ['50', '68', '2.0', 'Double Socket (Plain)'],
      ['75', '82', '2.3', 'Double Socket (Plain)'],
      ['110', '98', '3.2', 'Double Socket (Plain)'],
      ['160', '125', '4.0', 'Double Socket (Plain)'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'For connecting two pipe lengths of the same diameter with solvent cement' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-socket-thread',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'socket inner brass thread transitional smart home factory',
    title: 'Socket with Inner Thread',
    titleAr: 'سوكيت بسن داخلي نحاسي',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Socket with Inner Thread.webp'],
    specsTableHeaders: ['Size PPR (mm)', 'Brass Inner Thread', 'Thickness (mm)', 'Standard'],
    specsTableRows: [
      ['50', 'Rp 1½"', '3.5', 'EN ISO 15874'],
      ['63', 'Rp 2"', '4.2', 'EN ISO 15874'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Thread Material', labelAr: 'مادة السن', value: 'High grade brass threaded insert for secure mechanical connection' },
      { label: 'Note', labelAr: 'ملاحظة', value: 'Transitions from plastic socket line to metal pipes/threaded accessories' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-reducer-eccentric',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'eccentric reducer مسلوب pvc-u smart home factory',
    title: 'Eccentric Reducer',
    titleAr: 'مخفض لا مركزي (مسلوب)',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Eccentric Reducer.webp'],
    specsTableHeaders: ['Sizes (mm)', 'Transition Type', 'Length (mm)', 'Standard'],
    specsTableRows: [
      ['75 × 50', 'Eccentric (مسلوب)', '60', 'EN 1329'],
      ['110 × 50', 'Eccentric (مسلوب)', '75', 'EN 1329'],
      ['110 × 75', 'Eccentric (مسلوب)', '75', 'EN 1329'],
      ['160 × 110', 'Eccentric (مسلوب)', '95', 'EN 1329'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Eccentric Design', labelAr: 'التصميم اللامركزي', value: 'Maintains flat flow line at bottom of horizontal pipe runs to prevent sediment collection' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-expansion-joint-fitting',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'expansion joint slip coupling pvc-u smart home factory',
    title: 'Expansion Joint',
    titleAr: 'وصلة تمدد (لاكور تمدد)',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Expansion Joint.webp'],
    specsTableHeaders: ['Size (mm)', 'Expansion allowance', 'O-ring seal', 'Standard'],
    specsTableRows: [
      ['50', '+20 / -10 mm', 'EPDM double sealing', 'EN 1329'],
      ['75', '+25 / -10 mm', 'EPDM double sealing', 'EN 1329'],
      ['110', '+30 / -10 mm', 'EPDM double sealing', 'EN 1329'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Purpose', labelAr: 'الغرض', value: 'Compensates for thermal expansion and contraction in vertical soil pipes' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-short-elbow-fitting',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'short elbow 87.5 space saving smart home factory',
    title: 'Short Elbow 87.5°',
    titleAr: 'كوع قصير 87.5°',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Short Elbow 87.5°.webp'],
    specsTableHeaders: ['Size (mm)', 'Angle', 'Compact design', 'Material'],
    specsTableRows: [
      ['50', '87.5°', 'Yes (Short radius)', 'PVC-U Gray'],
      ['75', '87.5°', 'Yes (Short radius)', 'PVC-U Gray'],
      ['110', '87.5°', 'Yes (Short radius)', 'PVC-U Gray'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Space Saving', labelAr: 'توفير المساحة', value: 'Extremely compact design for installation behind toilet washbasins' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-repairing-socket-fitting',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'repairing socket slip socket sleeve pipe repair smart home factory',
    title: 'Repairing Socket',
    titleAr: 'سوكيت تصليح (جلبة تصليح)',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Repairing Socket.webp'],
    specsTableHeaders: ['Size (mm)', 'Slip Socket Type', 'Length (mm)', 'Material'],
    specsTableRows: [
      ['50', 'Full Slip-on', '85', 'PVC-U'],
      ['75', 'Full Slip-on', '100', 'PVC-U'],
      ['110', 'Full Slip-on', '120', 'PVC-U'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Slip Design', labelAr: 'تصميم جلبة الإنزلاق', value: 'Slides completely onto pipes to easily repair leaks without cutting large segments' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-reducing-bush-fitting',
    category: 'drainage',
    type: 'fittings',
    brand: 'smarthome',
    search: 'reducing bush transitional bush space saving smart home factory',
    title: 'Reducing Bush',
    titleAr: 'بوش تخفيض (جلبة تخفيض)',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Reducing Bush.webp'],
    specsTableHeaders: ['Sizes (mm)', 'Type', 'Joint', 'Material'],
    specsTableRows: [
      ['50 × 32', 'Concentric', 'Solvent cement socket', 'PVC-U'],
      ['75 × 50', 'Concentric', 'Solvent cement socket', 'PVC-U'],
      ['110 × 75', 'Concentric', 'Solvent cement socket', 'PVC-U'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Compact reduction', labelAr: 'مسلوب ضيق', value: 'Transitions size directly inside fitting socket, saving space' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-small-drain-fitting',
    category: 'drainage',
    type: 'drains',
    brand: 'smarthome',
    search: 'small drain floor outlet compact drain smart home factory',
    title: 'Small Drain',
    titleAr: 'بالوعة صرف صغيرة',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Small Drain.webp'],
    specsTableHeaders: ['Frame (mm)', 'Outlet (mm)', 'Grate', 'Odor trap'],
    specsTableRows: [
      ['100 × 100', '50 (2")', 'ABS Plastic Grate', 'Integrated membrane'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Use case', labelAr: 'الاستخدام', value: 'Compact shower, bathroom, or balcony point floor drainage' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-drain-88-fitting',
    category: 'drainage',
    type: 'drains',
    brand: 'smarthome',
    search: 'drain 8.8 cm circular grate waste trap smart home factory',
    title: 'Drain 8.8 cm',
    titleAr: 'بالوعة صرف 8.8 سم',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Drain 8.8 Cm.webp'],
    specsTableHeaders: ['Diameter (mm)', 'Grate design', 'Finish', 'Material'],
    specsTableRows: [
      ['88', 'Perforated holes pattern', 'Drainage Gray', 'PVC-U'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Use', labelAr: 'الاستخدام', value: 'Medium flow floor drain top grate' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-drain-7-fitting',
    category: 'drainage',
    type: 'drains',
    brand: 'smarthome',
    search: 'drain 7 cm circular grate small smart home factory',
    title: 'Drain 7 cm',
    titleAr: 'بالوعة صرف 7 سم',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Drain 7 cm.jpg'],
    specsTableHeaders: ['Diameter (mm)', 'Grate design', 'Finish', 'Material'],
    specsTableRows: [
      ['70', 'Radial slits design', 'Drainage Gray', 'PVC-U'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Small basin or utility balcony drainage outlet top cover' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-drain-odor-trap',
    category: 'drainage',
    type: 'drains',
    brand: 'smarthome',
    search: 'drain 125 odor trap high flow anti smell smart home factory',
    title: 'Drain with Odor Trap',
    titleAr: 'بالوعة صرف مع مصيدة روائح',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/drain 125 with odor trap.webp'],
    specsTableHeaders: ['Upper Size (mm)', 'Outlet size (mm)', 'Odor Trap system', 'Flow Rate'],
    specsTableRows: [
      ['125 × 125', '75 (3")', 'Removable water-seal siphon', '0.7 l/s'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Anti Odor', labelAr: 'منع الروائح', value: 'Removable water trap keeps municipal sewer smells out of the house' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-floor-drain-110',
    category: 'drainage',
    type: 'drains',
    brand: 'smarthome',
    search: 'floor drain 110 125 odor trap heavy flow smart home factory',
    title: 'Floor Drain with Odor Trap',
    titleAr: 'بالوعة صرف أرضية 110-125 مع مصيدة روائح',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/floor drain 110 125 with odor trap.jpg'],
    specsTableHeaders: ['Upper Size (mm)', 'Outlet size (mm)', 'Water Seal Depth', 'Standard'],
    specsTableRows: [
      ['110 / 125', '75 / 110', '50 mm standard', 'EN 1253'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Standard', labelAr: 'المعيار', value: 'Certified to EN 1253 bathroom drainage standard' },
      { label: 'Advantage', labelAr: 'الميزة', value: 'Large flow capacity, ideal for master bathrooms and public blocks' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-drain-cover-fitting',
    category: 'drainage',
    type: 'drains',
    brand: 'smarthome',
    search: 'floor drain cover grid plate smart home factory',
    title: 'Floor Drain Cover',
    titleAr: 'غطاء بالوعة صرف أرضية',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Floor Drain Cover.webp'],
    specsTableHeaders: ['Size (mm)', 'Grid Style', 'Material', 'Usage'],
    specsTableRows: [
      ['100 × 100', 'Square slots pattern', 'High impact PVC-U', 'Floor drain top grate'],
      ['150 × 150', 'Square slots pattern', 'High impact PVC-U', 'Floor drain top grate'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Feature', labelAr: 'الميزة', value: 'Stops hair and particles while ensuring maximum drainage velocity' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-drain-plug-fitting',
    category: 'drainage',
    type: 'drains',
    brand: 'smarthome',
    search: 'floor drain plug threaded cap smart home factory',
    title: 'Floor Drain Plug',
    titleAr: 'سدادة بالوعة صرف أرضية',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Floor Drain Plug.webp'],
    specsTableHeaders: ['Size (mm)', 'Plug Thread', 'Seal type', 'Material'],
    specsTableRows: [
      ['50', 'Threaded male', 'EPDM washer seal', 'Premium ABS'],
      ['75', 'Threaded male', 'EPDM washer seal', 'Premium ABS'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Leakproof', labelAr: 'منع التسرب', value: 'Threaded plug used inside drain bodies for cleaning line access blockages' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-rain-drain-cover',
    category: 'drainage',
    type: 'drains',
    brand: 'smarthome',
    search: 'rain drain cover outdoor heavy duty smart home factory',
    title: 'Rain Drain with Cover',
    titleAr: 'بالوعة صرف مياه الأمطار مع غطاء',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Rain drain with cover.webp'],
    specsTableHeaders: ['Size (mm)', 'Outlet (mm)', 'Grate load class', 'Standard'],
    specsTableRows: [
      ['200 × 200', '110 (4")', 'Class A15 (1.5 tons)', 'EN 124'],
      ['250 × 250', '110 / 160', 'Class A15 (1.5 tons)', 'EN 124'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Load Rating', labelAr: 'قوة التحمل', value: 'A15 rating (safely handles pedestrian and light bicycle loads)' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Patios, gardens, courtyards, rain collection grids' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-siphon-trap',
    category: 'drainage',
    type: 'drains',
    brand: 'smarthome',
    search: 'siphon p-trap kitchen bathroom basin smart home factory',
    title: 'Siphon',
    titleAr: 'سيفون صرف',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Siphon.webp'],
    specsTableHeaders: ['Size (mm)', 'Trap type', 'Water seal height', 'Application'],
    specsTableRows: [
      ['50', 'P-Trap model', '50 mm', 'Basin / kitchen / shower waste'],
      ['75', 'P-Trap model', '50 mm', 'Heavy duty utility trap'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Siphon function', labelAr: 'وظيفة السيفون', value: 'Self-cleaning liquid barrier prevents sewer gas and insects from exiting waste lines' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-outdoor-solutions-overview',
    category: 'drainage',
    type: 'outdoor',
    brand: 'smarthome',
    search: 'outdoor solutions overview drainage channels chambers smart home factory',
    title: 'Outdoor Solutions Overview',
    titleAr: 'نظرة عامة على الحلول الخارجية',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Smart Home Outdoor Solutions.png'],
    specsTableHeaders: ['Product Family', 'Applicable Sizes', 'Certification', 'Primary Purpose'],
    specsTableRows: [
      ['Inspection Chambers', 'Ø500mm / Ø600mm', 'EN 13598', 'Main junction networks'],
      ['Drainage Channels', '130mm / 200mm width', 'EN 1433', 'Outdoor surface run-off'],
      ['Backwater protection', 'DN50 / DN110 / DN160', 'EN 13564', 'Flooding prevention'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Product Range', labelAr: 'نطاق المنتجات', value: 'Complete yard, road, and main building sewer infrastructure parts' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-chamber-500-fitting',
    category: 'drainage',
    type: 'outdoor',
    brand: 'smarthome',
    search: 'inspection chamber 500mm shaft smart home factory',
    title: 'Inspection Chamber 500mm',
    titleAr: 'غرفة تفتيش مقاس 500 مم',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Inspection Chamber 500mm.webp'],
    specsTableHeaders: ['Shaft Diameter (mm)', 'Inlets / Outlets', 'Depth range', 'Material'],
    specsTableRows: [
      ['Ø500', '3 inlets × 110mm / 1 outlet', '500–1500 mm depth adjustment', 'Premium PP-R / ABS'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Structure', labelAr: 'البنية', value: 'Ribbed shaft structure for high soil pressure resistance' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Private villas, housing complexes connection nodes' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-chamber-600-fitting',
    category: 'drainage',
    type: 'outdoor',
    brand: 'smarthome',
    search: 'inspection chamber 600mm heavy duty shaft smart home factory',
    title: 'Inspection Chamber Ø600mm',
    titleAr: 'غرفة تفتيش دائرية مقاس 600 مم',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Inspection Chamber Ø600mm.webp'],
    specsTableHeaders: ['Shaft Diameter (mm)', 'Inlets / Outlets', 'Load capacity class', 'Standard'],
    specsTableRows: [
      ['Ø600', 'Custom configured (110/160mm)', 'Class B125 (12.5 tons)', 'EN 13598-2'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Load capacity', labelAr: 'سعة الحمل', value: 'Class B125 (safe for driveways, parking zones, small roads)' },
      { label: 'Standard', labelAr: 'المعيار', value: 'Fully certified under EN 13598-2 underground drainage standards' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-point-drain-fitting',
    category: 'drainage',
    type: 'outdoor',
    brand: 'smarthome',
    search: 'inspection point drain no trap cleanout inspection box smart home factory',
    title: 'Inspection Point Drain',
    titleAr: 'بالوعة تفتيش بدون مصيدة روائح',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Inspection Point Drain without odor trap 160-200-250.jpg'],
    specsTableHeaders: ['Upper Frame (mm)', 'Outlets size (mm)', 'Cleanout access', 'Material'],
    specsTableRows: [
      ['160 × 160', '110 (4")', 'Direct access without siphon', 'High-Grade PVC-U'],
      ['200 × 200', '110 / 160', 'Direct access without siphon', 'High-Grade PVC-U'],
      ['250 × 250', '160 (6")', 'Direct access without siphon', 'High-Grade PVC-U'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Trapless design', labelAr: 'بدون سيفون', value: 'Straight direct flow to permit sewer testing and high speed cleanouts' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-water-channel-grate',
    category: 'drainage',
    type: 'outdoor',
    brand: 'smarthome',
    search: 'drainage water channel cast iron cover surface drain smart home factory',
    title: 'Water Channel with Cast Iron Cover',
    titleAr: 'قناة تصريف مياه مع غطاء حديد زهر',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Drainage Water Channel with Cast Iron Cover.webp'],
    specsTableHeaders: ['Channel Width (mm)', 'Height (mm)', 'Cover Grate', 'Load Class'],
    specsTableRows: [
      ['130', '95', 'Ductile Cast Iron grid', 'Class C250 (25 tons)'],
      ['200', '150', 'Ductile Cast Iron grid', 'Class C250 (25 tons)'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Heavy Load Grate', labelAr: 'غطاء قوي', value: 'Class C250 ductile cast iron grid holds heavy delivery vans and car parking traffic' },
      { label: 'Standard', labelAr: 'المعيار', value: 'EN 1433 drainage channels certified' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-collector-fitting',
    category: 'drainage',
    type: 'outdoor',
    brand: 'smarthome',
    search: 'drainage collector sediment bucket yard drain smart home factory',
    title: 'Drainage Collector',
    titleAr: 'جامع مياه صرف (مجمع تصريف)',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Drainage collector.webp'],
    specsTableHeaders: ['Collector size (mm)', 'Inlets count', 'Sediment bucket', 'Material'],
    specsTableRows: [
      ['300 × 300', '4-way custom inlets', 'PP debris bucket included', 'PVC-U / ABS'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Sediment catcher', labelAr: 'مصيدة الطمي', value: 'Includes inside plastic bucket to trap leaves and sand before they block underground pipes' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-lifting-station-pump',
    category: 'drainage',
    type: 'outdoor',
    brand: 'smarthome',
    search: 'drainage lifting station compact pump waste tank smart home factory',
    title: 'Drainage Lifting Station',
    titleAr: 'محطة رفع الصرف الصحي المدمجة',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Drainage Lifting Station.webp'],
    specsTableHeaders: ['Tank Capacity (L)', 'Pump Max Flow', 'Max Lift Head', 'Power input'],
    specsTableRows: [
      ['40', '10.5 m³/hour', '7.5 meters max', '0.45 kW pump motor'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'Pumps basement wastewater up to main municipal sewer line level' },
      { label: 'Level Control', labelAr: 'التحكم بالمنسوب', value: 'Automatic float switch starts pump on waste accumulation' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-gully-trap-fitting',
    category: 'drainage',
    type: 'outdoor',
    brand: 'smarthome',
    search: 'gully trap anti odor yard basin smart home factory',
    title: 'Gully Trap',
    titleAr: 'بالوعة صرف جانبية (جولي تراب)',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Gully trap with Lateral 1.webp'],
    specsTableHeaders: ['Inlet / Outlet (mm)', 'Lateral branches', 'Water seal barrier', 'Standard'],
    specsTableRows: [
      ['110 / 110', '1 × 50mm branch', 'Removable trap baffle', 'EN 1253'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Application', labelAr: 'التطبيق', value: 'Traps yard water and basin waste, stopping outdoor bad odors from returning' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-backwater-valve-drain',
    category: 'drainage',
    type: 'outdoor',
    brand: 'smarthome',
    search: 'backwater valve anti reflux check valve pvc-u smart home factory',
    title: 'Backwater Valves',
    titleAr: 'صمامات الحماية من الارتداد الخلفي',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Backwater Valves.webp'],
    specsTableHeaders: ['Size DN (mm)', 'Emergency locking', 'Flaps mechanism', 'Standard'],
    specsTableRows: [
      ['50', 'Manual safety lock', 'Single swing flap', 'EN 13564'],
      ['110', 'Manual safety lock', 'Double swing flaps', 'EN 13564'],
      ['160', 'Manual safety lock', 'Double swing flaps', 'EN 13564'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Standard', labelAr: 'المعيار', value: 'EN 13564 certified reflux prevention valve' },
      { label: 'Emergency Lock', labelAr: 'قفل الطوارئ', value: 'Manual override lever locks flaps closed during flooding or vacations' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
  {
    id: 'sh-air-vent-cap',
    category: 'drainage',
    type: 'outdoor',
    brand: 'smarthome',
    search: 'air vent roof cap ventilation stack smart home factory',
    title: 'Air Vent',
    titleAr: 'منفذ تهوية الهواء (هواية)',
    subtitle: 'Smart Home Factory',
    subtitleAr: 'مصنع سمارت هوم',
    images: ['img/Smart Home/Air Vent.jpg'],
    specsTableHeaders: ['Size (mm)', 'Venting capacity', 'Grid protector', 'Material'],
    specsTableRows: [
      ['75', 'High vacuum relief rate', 'Fine mesh grid', 'PVC-U Gray'],
      ['110', 'High vacuum relief rate', 'Fine mesh grid', 'PVC-U Gray'],
    ],
    highlightCol: 0,
    details: [
      { label: 'Manufacturer', labelAr: 'الشركة المصنعة', value: 'Smart Home Factory' },
      { label: 'Function', labelAr: 'الوظيفة', value: 'Provides ventilation for plumbing drainage stacks, preventing siphon siphonage of traps' },
      { label: 'Insects shield', labelAr: 'الحماية من الحشرات', value: 'Built-in fine mesh stops flies, mosquitoes and rain debris' },
    ],
    catalogPdf: 'img/Smart Home/SMARTHome 2024 Final.pdf',
  },
];

/* =========================================
   PRODUCT DETAIL DRAWER
   ========================================= */

let drawerOpen = false;

function createDrawerHTML() {
  const backdrop = document.createElement('div');
  backdrop.className = 'pd-backdrop';
  backdrop.id = 'pd-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');

  const drawer = document.createElement('div');
  drawer.className = 'pd-drawer';
  drawer.id = 'pd-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('aria-labelledby', 'pd-title');

  drawer.innerHTML = `
    <div class="pd-header">
      <button class="pd-back-btn" id="pd-back" type="button">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        <span id="pd-back-text">Go back</span>
      </button>
      <div class="pd-header-title">
        <div class="pd-header-cat" id="pd-header-cat"></div>
        <h2 id="pd-title"></h2>
      </div>
      <button class="pd-close-btn" id="pd-close" type="button" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="pd-body" id="pd-body">
      <div class="pd-gallery" id="pd-gallery">
        <div class="pd-thumbs" id="pd-thumbs"></div>
        <div class="pd-main-img-wrap" id="pd-main-img-wrap">
          <img id="pd-main-img" src="" alt="">
        </div>
      </div>

      <div class="pd-content">
        <div id="pd-specs-block">
          <div class="pd-section-label">
            <span id="pd-specs-label">Specifications</span>
            <button class="pd-share-btn" type="button" id="pd-share-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              Share
            </button>
          </div>
          <div style="overflow-x:auto">
            <table class="pd-specs-table" id="pd-specs-table"></table>
          </div>
        </div>

        <div id="pd-info-block">
          <div class="pd-section-label">
            <span id="pd-info-label">Product Details</span>
          </div>
          <div class="pd-info-list" id="pd-info-list"></div>
        </div>
      </div>
    </div>

    <div class="pd-actions" id="pd-actions">
      <button class="pd-download-btn" id="pd-download-btn" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        <span id="pd-download-text">Download Catalog</span>
      </button>
      <a href="index.html#quote" class="btn btn-primary" id="pd-quote-btn">Request Quote for This Product</a>
    </div>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);

  // Events
  backdrop.addEventListener('click', closeDrawer);
  document.getElementById('pd-back').addEventListener('click', closeDrawer);
  document.getElementById('pd-close').addEventListener('click', closeDrawer);

  document.getElementById('pd-share-btn').addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({ title: document.title, url: location.href });
    } else {
      navigator.clipboard?.writeText(location.href);
      const btn = document.getElementById('pd-share-btn');
      const oldText = btn.querySelector('span')?.textContent || '';
      btn.innerHTML = btn.innerHTML.replace(oldText, 'Copied!');
      setTimeout(() => btn.innerHTML = btn.innerHTML.replace('Copied!', 'Share'), 2000);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerOpen) closeDrawer();
  });
}

function openDrawer(product) {
  const isAr = document.documentElement.lang === 'ar';
  const drawer = document.getElementById('pd-drawer');
  const backdrop = document.getElementById('pd-backdrop');
  if (!drawer || !backdrop) return;

  // Header
  document.getElementById('pd-title').textContent = isAr ? product.titleAr : product.title;
  document.getElementById('pd-header-cat').textContent = isAr ? product.subtitleAr : product.subtitle;
  document.getElementById('pd-back-text').textContent = isAr ? 'رجوع' : 'Go back';
  document.getElementById('pd-specs-label').textContent = isAr ? 'المواصفات' : 'Specifications';
  document.getElementById('pd-info-label').textContent = isAr ? 'تفاصيل المنتج' : 'Product Details';
  document.getElementById('pd-download-text').textContent = isAr ? 'تحميل الكتالوج' : 'Download Catalog';
  document.getElementById('pd-quote-btn').textContent = isAr ? 'طلب عرض سعر لهذا المنتج' : 'Request Quote for This Product';

  // Thumbnail gallery
  const thumbsEl = document.getElementById('pd-thumbs');
  const mainImgEl = document.getElementById('pd-main-img');
  const mainWrapEl = document.getElementById('pd-main-img-wrap');

  thumbsEl.innerHTML = '';
  const imgs = product.images || [];
  const isPhoto = product.isPhoto || false;

  if (isPhoto) mainWrapEl.classList.add('photo-main');
  else mainWrapEl.classList.remove('photo-main');

  imgs.forEach((src, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'pd-thumb' + (i === 0 ? ' active' : '') + (isPhoto ? ' photo-thumb' : '');
    thumb.innerHTML = `<img src="${src}" alt="">`;
    thumb.addEventListener('click', () => {
      thumbsEl.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImgEl.style.opacity = '0';
      setTimeout(() => {
        mainImgEl.src = src;
        mainImgEl.style.opacity = '1';
      }, 150);
    });
    thumbsEl.appendChild(thumb);
  });

  // Set main image
  if (imgs.length > 0) mainImgEl.src = imgs[0];
  mainImgEl.alt = product.title;
  mainImgEl.style.opacity = '1';

  // Hide thumbs column if only 1 image
  const galleryEl = document.getElementById('pd-gallery');
  if (imgs.length <= 1) {
    thumbsEl.style.display = 'none';
    galleryEl.style.gridTemplateColumns = '1fr';
  } else {
    thumbsEl.style.display = '';
    galleryEl.style.gridTemplateColumns = '';
  }

  // Specs table
  const table = document.getElementById('pd-specs-table');
  const headers = product.specsTableHeaders || [];
  const rows = product.specsTableRows || [];
  const hlCol = product.highlightCol ?? -1;

  let tableHtml = '<thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>';
  rows.forEach(row => {
    tableHtml += '<tr>' + row.map((cell, ci) =>
      `<td${ci === hlCol ? ' class="highlight"' : ''}>${cell}</td>`
    ).join('') + '</tr>';
  });
  tableHtml += '</tbody>';
  table.innerHTML = tableHtml;

  // Info list
  const infoList = document.getElementById('pd-info-list');
  const details = product.details || [];
  infoList.innerHTML = details.map(d => `
    <div class="pd-info-row">
      <span class="pd-info-label">${isAr ? d.labelAr : d.label}:</span>
      <span class="pd-info-value">${d.value}</span>
    </div>
  `).join('');

  // Download button
  const downloadBtn = document.getElementById('pd-download-btn');
  if (product.catalogPdf) {
    downloadBtn.style.display = '';
    downloadBtn.onclick = () => window.open(product.catalogPdf, '_blank');
  } else {
    downloadBtn.style.display = 'none';
  }

  // Open
  document.body.classList.add('drawer-open');
  backdrop.classList.add('open');
  requestAnimationFrame(() => {
    drawer.classList.add('open');
  });
  drawerOpen = true;

  // Scroll body to top
  document.getElementById('pd-body').scrollTop = 0;

  // Focus management
  setTimeout(() => document.getElementById('pd-close').focus(), 400);
}

function closeDrawer() {
  const drawer = document.getElementById('pd-drawer');
  const backdrop = document.getElementById('pd-backdrop');
  if (!drawer || !backdrop) return;

  drawer.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.classList.remove('drawer-open');
  drawerOpen = false;
}

function initProductDrawer() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  createDrawerHTML();

  const cards = grid.querySelectorAll('.pcard');
  cards.forEach((card, i) => {
    const product = PRODUCTS[i];
    if (!product) return;

    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details: ${product.title}`);

    card.addEventListener('click', (e) => {
      // Don't open drawer if clicking quote link
      if (e.target.closest('.pcard-btn')) return;
      openDrawer(product);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDrawer(product);
      }
    });
  });
}

/* =========================================
   PRODUCT FILTER & SEARCH
   ========================================= */
function initProductFilter() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.pcard'));
  const catPills = document.querySelectorAll('[data-filter]');
  const typePills = document.querySelectorAll('[data-type]');
  const brandPills = document.querySelectorAll('[data-brand-filter]');
  const searchInput = document.querySelector('[data-product-search]');
  const resultBadge = document.querySelector('[data-result-count]');
  const resetBtns = document.querySelectorAll('[data-reset-filters]');
  const emptyState = document.getElementById('empty-state');

  let activeCat = 'all';
  let activeType = 'all';
  let activeBrand = 'all';
  let searchVal = '';

  function updateCards() {
    let visible = 0;
    cards.forEach(card => {
      const cat = card.dataset.category || '';
      const type = card.dataset.productType || '';
      const brand = card.dataset.brand || '';
      const search = card.dataset.search || '';
      const title = card.querySelector('.pcard-title')?.textContent.toLowerCase() || '';

      const catMatch = activeCat === 'all' || cat === activeCat;
      const typeMatch = activeType === 'all' || type === activeType;
      const brandMatch = activeBrand === 'all' || brand === activeBrand;
      const searchMatch = !searchVal || search.includes(searchVal) || title.includes(searchVal);

      if (catMatch && typeMatch && brandMatch && searchMatch) {
        card.classList.remove('is-hidden');
        visible++;
      } else {
        card.classList.add('is-hidden');
      }
    });

    if (resultBadge) {
      resultBadge.textContent = visible + ' product' + (visible !== 1 ? 's' : '');
    }
    if (emptyState) emptyState.hidden = visible > 0;
  }

  function setActivePill(group, value) {
    group.forEach(pill => {
      const key = Object.keys(pill.dataset)[0];
      pill.classList.toggle('active', pill.dataset[key] === value);
    });
  }

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      activeCat = pill.dataset.filter;
      setActivePill(catPills, activeCat);
      updateCards();
    });
  });

  typePills.forEach(pill => {
    pill.addEventListener('click', () => {
      activeType = pill.dataset.type;
      setActivePill(typePills, activeType);
      updateCards();
    });
  });

  brandPills.forEach(pill => {
    pill.addEventListener('click', () => {
      activeBrand = pill.dataset.brandFilter;
      setActivePill(brandPills, activeBrand);
      updateCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchVal = searchInput.value.toLowerCase().trim();
      updateCards();
    });
  }

  resetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCat = 'all';
      activeType = 'all';
      activeBrand = 'all';
      searchVal = '';
      if (searchInput) searchInput.value = '';
      setActivePill(catPills, 'all');
      setActivePill(typePills, 'all');
      setActivePill(brandPills, 'all');
      updateCards();
    });
  });

  updateCards();
}

/* =========================================
   SMART HOME TABS
   ========================================= */
function initSmartTabs() {
  const tabs = document.querySelectorAll('[data-smart]');
  const panels = document.querySelectorAll('[data-smart-panel]');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.smart;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      panels.forEach(panel => {
        panel.classList.toggle('active', panel.dataset.smartPanel === target);
      });
    });
  });
}

/* =========================================
   SMART HOME DYNAMIC SPECIFICATIONS DRAWER
   ========================================= */
function initSmartHomeDrawer() {
  const tabs = document.querySelector('[data-smart]');
  if (!tabs) return;

  if (!document.getElementById('pd-drawer')) {
    createDrawerHTML();
  }

  const cards = document.querySelectorAll('.scard');
  cards.forEach((card, i) => {
    const product = SMART_HOME_PRODUCTS[i];
    if (!product) return;

    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details: ${product.title}`);

    card.addEventListener('click', () => {
      openDrawer(product);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDrawer(product);
      }
    });
  });
}

/* =========================================
   BANNINGER DYNAMIC DRAWER
   ========================================= */
function initBanningerDrawer() {
  const cards = document.querySelectorAll('.bcard');
  if (!cards.length) return;

  if (!document.getElementById('pd-drawer')) {
    createDrawerHTML();
  }

  cards.forEach((card) => {
    const productId = card.getAttribute('data-product-id');
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details: ${product.title}`);

    card.addEventListener('click', () => {
      openDrawer(product);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDrawer(product);
      }
    });
  });
}

/* =========================================
   KESSEL DYNAMIC DRAWER
   ========================================= */
function initKesselDrawer() {
  const cards = document.querySelectorAll('.kcard');
  if (!cards.length) return;

  if (!document.getElementById('pd-drawer')) {
    createDrawerHTML();
  }

  cards.forEach((card) => {
    const productId = card.getAttribute('data-product-id');
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details: ${product.title}`);

    card.addEventListener('click', () => {
      openDrawer(product);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDrawer(product);
      }
    });
  });
}

/* =========================================
   INIT
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
  initProductFilter();
  initProductDrawer();
  initSmartTabs();
  initSmartHomeDrawer();
  initBanningerDrawer();
  initKesselDrawer();
});

