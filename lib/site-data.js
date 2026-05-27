const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const clientAsset = (path) => `${assetBasePath}${path}`;

const clientImages = {
  after: clientAsset("/images/client/after.jpg"),
  apartment: clientAsset("/images/client/apartment.jpg"),
  apartmentTwo: clientAsset("/images/client/apartment-two.jpg"),
  bedroom: clientAsset("/images/client/bedroom.jpg"),
  before: clientAsset("/images/client/before.jpg"),
  cafeCounter: clientAsset("/images/client/cafe-counter.jpg"),
  cafeLounge: clientAsset("/images/client/cafe-lounge.jpg"),
  cafeSeating: clientAsset("/images/client/cafe-seating.jpg"),
  constructionExterior: clientAsset("/images/client/construction-exterior.jpg"),
  constructionSite: clientAsset("/images/client/construction-site.jpg"),
  furnitureKitchen: clientAsset("/images/client/furniture-showroom.jpg"),
  inProgress: clientAsset("/images/client/in-progress.jpg"),
  interiorDesignThree: clientAsset("/images/client/interior-design-3.jpg"),
  interiorDesignTwo: clientAsset("/images/client/interior-design-2.jpg"),
  interiorLiving: clientAsset("/images/client/interior-living.jpg"),
  interiorLounge: clientAsset("/images/client/interior-lounge.jpg"),
  interiorWarm: clientAsset("/images/client/interior-warm.jpg"),
  minimalFurniture: clientAsset("/images/client/minimal-furniture.jpg"),
  minimalFurnitureWide: clientAsset("/images/client/minimal-furniture-wide.jpg"),
  office: clientAsset("/images/client/office.jpg"),
  officeExecutive: clientAsset("/images/client/office-executive.jpg"),
  officeGlassPartition: clientAsset("/images/client/office-glass-partition.jpg"),
  officeOpenPlan: clientAsset("/images/client/office-open-plan.jpg"),
  officeRenderDetail: clientAsset("/images/client/office-render-detail.jpg"),
  officeRenderReception: clientAsset("/images/client/office-render-reception.jpg"),
  officeRenderSuite: clientAsset("/images/client/office-render-suite.jpg"),
  officeRenderWindow: clientAsset("/images/client/office-render-window.jpg"),
  officeWorkstations: clientAsset("/images/client/office-workstations.jpg"),
  portfolio: clientAsset("/images/client/portfolio.jpg"),
  portfolio2: clientAsset("/images/client/portfolio2.jpg"),
  restaurantInterior: clientAsset("/images/client/restaurant-interior.jpg")
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Divisions", href: "#divisions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const heroSlides = [
  {
    title: "Restaurant, cafe, and commercial interiors shaped with atmosphere.",
    image: clientImages.restaurantInterior,
    label: "Hospitality interiors"
  },
  {
    title: "Modern offices, reception desks, and polished working environments.",
    image: clientImages.officeOpenPlan,
    label: "Office interiors"
  },
  {
    title: "Homes, furniture, finishing, and full setup delivered by one team.",
    image: clientImages.apartmentTwo,
    label: "Full home setup"
  }
];

export const stats = [
  { value: 70, suffix: "+", label: "Spaces Delivered" },
  { value: 3, suffix: "", label: "Dedicated Premium Divisions" },
  { value: "Gov + Diaspora", label: "Government, Business, and Diaspora Clients" }
];

export const services = [
  {
    title: "Interior Design",
    number: "01",
    description: "Concept, layout, mood, materials, and visual direction."
  },
  {
    title: "Consultation & Supervision",
    number: "02",
    description: "Site guidance, technical follow-up, and quality control."
  },
  {
    title: "Full Construction & Furnishing",
    number: "03",
    description: "Interior construction, furnishing, and decoration."
  },
  {
    title: "Custom Furniture",
    number: "04",
    description: "Cabinets, TV units, closets, tables, reception desks, and shelves."
  },
  {
    title: "Finishing Construction",
    number: "05",
    description: "Ceilings, partitions, tile, paint, wiring, aluminum, sanitary, and epoxy."
  }
];

export const serviceGroups = [
  {
    title: "Harkani Interior",
    image: clientImages.restaurantInterior,
    items: [
      "Interior Design",
      "Interior Consultation | Supervision",
      "Interior full construction, furnishing, and decoration"
    ]
  },
  {
    title: "Harkani Furniture",
    image: clientImages.furnitureKitchen,
    groups: [
      {
        title: "Home",
        items: ["Kitchen Cabinets", "TV unit", "Bed Room Closet"]
      },
      {
        title: "Office",
        items: ["Tables", "Reception Desks", "Built in Shelves"]
      }
    ]
  },
  {
    title: "Harkani Finishing Construction",
    image: clientImages.constructionExterior,
    items: [
      "Gypsum board ceiling & partition",
      "Ceramic & skirting works",
      "Wall chalk & painting work",
      "Electric wiring & installations",
      "Aluminum works",
      "Sanitary fittings",
      "Epoxy flooring"
    ]
  }
];

export const visualProof = [
  { title: "Minimal living", image: clientImages.minimalFurniture },
  { title: "Warm lounge", image: clientImages.interiorLiving },
  { title: "Kitchen setup", image: clientImages.furnitureKitchen },
  { title: "Interior styling", image: clientImages.interiorDesignTwo },
  { title: "Apartment living", image: clientImages.apartment },
  { title: "Office reception", image: clientImages.officeOpenPlan },
  { title: "Restaurant interior", image: clientImages.restaurantInterior },
  { title: "Cafe seating", image: clientImages.cafeSeating },
  { title: "Cafe counter", image: clientImages.cafeCounter },
  { title: "Office workstations", image: clientImages.officeWorkstations },
  { title: "Glass partitions", image: clientImages.officeGlassPartition },
  { title: "Executive office", image: clientImages.officeExecutive },
  { title: "Bedroom setup", image: clientImages.bedroom },
  { title: "Retail showroom", image: clientImages.portfolio2 },
  { title: "Finishing site", image: clientImages.constructionSite },
  { title: "Construction progress", image: clientImages.constructionExterior }
];

export const trustVisuals = [
  clientImages.minimalFurnitureWide,
  clientImages.interiorWarm,
  clientImages.officeRenderReception,
  clientImages.restaurantInterior
];

export const processSteps = [
  {
    step: "Discovery",
    title: "Brief, business goals, lifestyle needs, and budget alignment",
    detail:
      "We map scope, target mood, delivery dates, procurement priorities, and operational needs before design begins."
  },
  {
    step: "Strategy",
    title: "Division planning, BOQ, and approvals",
    detail:
      "You receive concepts, finish directions, timelines, shopping plans, and execution paths tailored to your project type."
  },
  {
    step: "Build",
    title: "Execution, procurement, and reporting",
    detail:
      "Our team manages site coordination, contractor supervision, sourcing, quality checks, and progress documentation."
  },
  {
    step: "Handover",
    title: "Styling, QA, and ready-to-operate delivery",
    detail:
      "We complete snagging, furniture installation, systems setup, final dressing, and polished handover ready for use."
  }
];

export const clientSegments = [
  "Businesses",
  "Restaurants",
  "Cafes",
  "Offices",
  "Commercial Spaces",
  "Luxury Homes",
  "Government Projects",
  "Diaspora Clients"
];

export const premiumDivisions = {
  intro: {
    title: "Three dedicated divisions. One premium ecosystem.",
    description: "Interior, furniture, and finishing work handled by one accountable team."
  },
  interiors: {
    label: "Interiors Division",
    title: "Interior design, consultation, supervision, and full setup.",
    description: "For homes, offices, restaurants, cafes, and commercial spaces.",
    image: clientImages.interiorLounge,
    showcaseImage: clientImages.interiorDesignTwo,
    audiences: ["Hospitality brands", "Modern offices", "Luxury residences"],
    highlights: [
      "Interior Design",
      "Interior Consultation | Supervision",
      "Full construction, furnishing, and decoration"
    ],
    floatingCards: [
      {
        title: "Guest journey mapped",
        detail: "Arrival, seating, and lighting planned together."
      },
      {
        title: "Brand-ready styling",
        detail: "Color, materials, and hero details made camera-ready."
      }
    ],
    gallery: [
      {
        tag: "Restaurant",
        title: "Hospitality atmosphere",
        detail: "Lighting, seating, and material rhythm.",
        image: clientImages.restaurantInterior
      },
      {
        tag: "Cafe",
        title: "Modern cafe seating",
        detail: "Guest flow and camera-ready corners.",
        image: clientImages.cafeSeating
      },
      {
        tag: "Office Interior",
        title: "Polished office environments",
        detail: "Reception, partitions, and focused work zones.",
        image: clientImages.officeOpenPlan
      },
      {
        tag: "Residential Interior",
        title: "Warm living concepts",
        detail: "Furniture, lighting, and calm material tones.",
        image: clientImages.interiorDesignThree
      }
    ]
  },
  construction: {
    label: "Finishing & Construction Division",
    title: "Premium finishing construction for clean, ready spaces.",
    description: "Gypsum, tiles, paint, wiring, aluminum, sanitary, and epoxy work.",
    image: clientImages.constructionExterior,
    metrics: [
      { value: 92, suffix: "%", label: "Milestones cleared on first review" },
      { value: 14, suffix: "+", label: "Trades and vendors aligned per project" },
      { value: 24, suffix: "/7", label: "Visibility for remote stakeholders" }
    ],
    timeline: [
      {
        stage: "01",
        title: "Site audit and scope alignment",
        detail: "Site conditions and finish priorities clarified first."
      },
      {
        stage: "02",
        title: "BOQ, sequencing, and procurement",
        detail: "Materials and sequence organized before site work."
      },
      {
        stage: "03",
        title: "Execution and quality tracking",
        detail: "Trade supervision and progress checks keep quality visible."
      },
      {
        stage: "04",
        title: "Snagging and polished handover",
        detail: "Final checks and corrections before client handover."
      }
    ],
    showcases: [
      {
        title: "Ceiling, partition, and lighting",
        detail: "Gypsum, wiring, and installation work."
      },
      {
        title: "Tiles, paint, aluminum, and sanitary",
        detail: "Clean finishing for home and commercial spaces."
      }
    ],
    comparison: {
      beforeImage: clientImages.before,
      afterImage: clientImages.after,
      beforeLabel: "Raw Shell",
      afterLabel: "Premium Finish"
    }
  },
  furniture: {
    label: "Furniture & Full Setup Division",
    title: "Custom furniture for home and office spaces.",
    description: "Kitchen cabinets, TV units, closets, tables, reception desks, and built-in shelves.",
    image: clientImages.furnitureKitchen,
    setupCategories: [
      {
        title: "Furniture and joinery",
        detail: "Custom pieces, wardrobes, desks, and lounge systems."
      },
      {
        title: "Electronics and appliances",
        detail: "Appliances, office tech, AV, climate, and lighting."
      },
      {
        title: "Decor and lifestyle styling",
        detail: "Art, rugs, mirrors, soft goods, and finishing touches."
      },
      {
        title: "Ready-to-use setup",
        detail: "Cables, lamps, accessories, and final styling aligned."
      }
    ],
    carousel: [
      {
        id: "living-suite",
        title: "Complete apartment setup",
        subtitle: "Open-plan living, layered lighting, and calm materials arranged for immediate move-in comfort.",
        image: clientImages.minimalFurniture,
        tags: ["Furniture", "Lighting", "Decor"],
        highlights: [
          "Living, kitchen, and dining styled together",
          "Lighting and decor aligned with the shell",
          "Ready-to-use apartment handover"
        ]
      },
      {
        id: "soft-living",
        title: "Soft living room package",
        subtitle: "Warm neutral furniture, loose decor, greenery, and styling shaped into a calm home atmosphere.",
        image: clientImages.minimalFurnitureWide,
        tags: ["Living", "Decor", "Lifestyle"],
        highlights: [
          "Soft furniture and decor selected together",
          "Natural textures and warm material balance",
          "Comfortable living room ready for daily use"
        ]
      },
      {
        id: "office-reception",
        title: "Office reception setup",
        subtitle: "Reception desk, seating, wall feature, and lighting composed as one complete arrival zone.",
        image: clientImages.officeRenderReception,
        tags: ["Reception", "Office", "Setup"],
        highlights: [
          "Reception desk and waiting area aligned",
          "Feature wall and lighting planned together",
          "Professional first impression for visitors"
        ]
      },
      {
        id: "kitchen-cabinet",
        title: "Kitchen cabinet package",
        subtitle: "Cabinets, counters, appliances, lighting, and storage details arranged as one clean kitchen zone.",
        image: clientImages.furnitureKitchen,
        tags: ["Kitchen", "Cabinets", "Appliances"],
        highlights: [
          "Kitchen cabinets and storage planned together",
          "Appliances and lighting integrated cleanly",
          "Warm materials with a modern finish"
        ]
      },
      {
        id: "office-workstations",
        title: "Workstation furniture plan",
        subtitle: "Office desks, partitions, lighting, and circulation arranged for a clean working environment.",
        image: clientImages.officeWorkstations,
        tags: ["Tables", "Office", "Shelves"],
        highlights: [
          "Tables and workstations arranged clearly",
          "Built-in storage and shelving options",
          "Office setup ready for daily use"
        ]
      },
      {
        id: "lounge-setup",
        title: "Lifestyle lounge styling",
        subtitle: "Curtains, wall treatments, furniture composition, and soft finishes balanced into one polished room.",
        image: clientImages.interiorWarm,
        tags: ["Seating", "Styling", "Soft Goods"],
        highlights: [
          "Curtains, lighting, and texture balanced",
          "Furniture placed for easy circulation",
          "Premium catalog feel without clutter"
        ]
      },
      {
        id: "bedroom-package",
        title: "Bedroom styling package",
        subtitle: "Warm bedside lighting, integrated paneling, and hotel-like comfort delivered in one clean finish.",
        image: clientImages.bedroom,
        tags: ["Bedroom", "Lighting", "Decor"],
        highlights: [
          "Headboard and bedside styling together",
          "Soft lighting and calm finish tones",
          "Turnkey bedroom setup from day one"
        ]
      }
    ],
    moodboard: [
      { title: "Living room", image: clientImages.minimalFurnitureWide },
      { title: "Kitchen cabinet", image: clientImages.furnitureKitchen },
      { title: "Warm lounge", image: clientImages.interiorWarm },
      { title: "Interior concept", image: clientImages.interiorDesignThree },
      { title: "Reception desk", image: clientImages.officeRenderReception },
      { title: "Bedroom setup", image: clientImages.bedroom }
    ]
  }
};

export const projects = [
  {
    id: "bole-penthouse",
    title: "Bole Penthouse Residence",
    location: "Addis Ababa",
    category: "Residential",
    image: clientImages.interiorLiving,
    summary: "Layered stone, bronze accents, and custom joinery for a quiet luxury penthouse.",
    size: "tall"
  },
  {
    id: "minimal-living",
    title: "Minimal Furniture Residence",
    location: "Addis Ababa",
    category: "Residential",
    image: clientImages.minimalFurniture,
    summary: "Minimal furniture, soft materials, and warm daylight shaped into a calm home setup.",
    size: "medium"
  },
  {
    id: "kitchen-furniture",
    title: "Kitchen Cabinet Setup",
    location: "Addis Ababa",
    category: "Residential",
    image: clientImages.furnitureKitchen,
    summary: "Kitchen cabinets, appliances, lighting, and counters coordinated as one complete setup.",
    size: "medium"
  },
  {
    id: "diaspora-villa",
    title: "Remote Villa Delivery",
    location: "CMC, Addis Ababa",
    category: "Diaspora Delivery",
    image: clientImages.apartment,
    summary: "A full furnishing and finishing package delivered for an owner based in Toronto.",
    size: "wide"
  },
  {
    id: "restaurant-interior",
    title: "Restaurant Interior Concept",
    location: "Addis Ababa",
    category: "Hospitality",
    image: clientImages.restaurantInterior,
    summary: "Restaurant seating, ceiling rhythm, and lighting shaped for a premium guest mood.",
    size: "wide"
  },
  {
    id: "cafe-seating",
    title: "Cafe Seating Layout",
    location: "Addis Ababa",
    category: "Hospitality",
    image: clientImages.cafeLounge,
    summary: "Cafe furniture, display, and circulation composed for a bright customer experience.",
    size: "medium"
  },
  {
    id: "executive-office",
    title: "Executive Office Suite",
    location: "Kazanchis",
    category: "Commercial",
    image: clientImages.officeOpenPlan,
    summary: "Refined boardroom and reception environments with warm timber and acoustic detailing.",
    size: "medium"
  },
  {
    id: "office-reception-render",
    title: "Office Reception Setup",
    location: "Addis Ababa",
    category: "Commercial",
    image: clientImages.officeRenderReception,
    summary: "Reception desk, lounge seating, lighting, and wall feature planned as one arrival moment.",
    size: "wide"
  },
  {
    id: "signature-cafe",
    title: "Retail Showroom Fit-Out",
    location: "Addis Ababa",
    category: "Commercial",
    image: clientImages.portfolio2,
    summary: "Display shelving, lighting, and customer-facing circulation for a premium showroom.",
    size: "medium"
  },
  {
    id: "master-bedroom-retreat",
    title: "Master Bedroom Retreat",
    location: "Summit",
    category: "Residential",
    image: clientImages.bedroom,
    summary: "Soft lighting, integrated paneling, and quiet luxury details composed for restful daily living.",
    size: "wide"
  },
  {
    id: "government-boardroom",
    title: "Finishing Work in Progress",
    location: "Addis Ababa",
    category: "Finishing",
    image: clientImages.constructionSite,
    summary: "Ceiling, partitions, wiring, and site execution during a premium finishing phase.",
    size: "tall"
  },
  {
    id: "construction-exterior",
    title: "Construction Site Progress",
    location: "Addis Ababa",
    category: "Finishing",
    image: clientImages.constructionExterior,
    summary: "Exterior site progress and construction coordination before interior finishing starts.",
    size: "medium"
  }
];

export const filters = [
  "All",
  "Residential",
  "Diaspora Delivery",
  "Hospitality",
  "Commercial",
  "Finishing"
];

export const logos = [
  { short: "FDR", name: "Federal Delivery" },
  { short: "GOV", name: "Government Programs" },
  { short: "BUS", name: "Business Clients" },
  { short: "DST", name: "Diaspora Trust" },
  { short: "HSP", name: "Hospitality Spaces" }
];

export const testimonials = [
  {
    quote: "We approved from Canada and arrived to a finished home.",
    name: "Meron A.",
    location: "Toronto"
  },
  {
    quote: "The team handled sourcing, finishing, and site follow-up.",
    name: "Kaleb G.",
    location: "Washington, DC"
  },
  {
    quote: "The commercial space felt tailored and ready for use.",
    name: "Samrawit T.",
    location: "Dubai"
  }
];

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Harkani.Plc",
  description:
    "Premium interior design, finishing construction, furnishing, full setup, and remote project delivery for luxury homes and commercial spaces in Ethiopia.",
  areaServed: "Ethiopia",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Golagul Building",
    addressLocality: "Addis Ababa",
    addressCountry: "ET"
  },
  telephone: "+251951108127",
  email: "kena@harkani.com",
  url: "https://harkani-plc.vercel.app",
  sameAs: [
    "https://wa.me/251951108127",
    "https://maps.app.goo.gl/n7e8WQg4yPHS2rLs9?g_st=atm"
  ]
};
