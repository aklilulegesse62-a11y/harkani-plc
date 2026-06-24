const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const clientAsset = (path) => `${assetBasePath}${path}`;

const clientImages = {
  after: clientAsset("/images/client/after.jpg"),
  afterOne: clientAsset("/images/client/after1.jpg"),
  apartment: clientAsset("/images/client/furniture/apartment1.jpg"),
  apartmentTwoFurniture: clientAsset("/images/client/furniture/apartment2.jpg"),
  apartmentThree: clientAsset("/images/client/furniture/apartment3.jpg"),
  apartmentFour: clientAsset("/images/client/furniture/apartment4.jpg"),
  apartmentTwo: clientAsset("/images/client/construction/apartment-two.jpg"),
  bedroom: clientAsset("/images/client/furniture/bedroom.jpg"),
  before: clientAsset("/images/client/before.jpg"),
  beforeOne: clientAsset("/images/client/before1.PNG"),
  cafeCounter: clientAsset("/images/client/interior/cafe-counter.jpg"),
  cafeLounge: clientAsset("/images/client/interior/cafe-counter.jpg"),
  cafeSeating: clientAsset("/images/client/interior/cafe-counter.jpg"),
  constructionExterior: clientAsset("/images/client/construction/construction-exterior.jpg"),
  constructionSite: clientAsset("/images/client/construction/construction-site1.jpg"),
  constructionSiteTwo: clientAsset("/images/client/construction/construction-site2.jpg"),
  constructionSiteThree: clientAsset("/images/client/construction/construction-site3.jpg"),
  furnitureKitchen: clientAsset("/images/client/interior/furniture-showroom.jpg"),
  inProgress: clientAsset("/images/client/construction/construction-site1.jpg"),
  interiorDesignThree: clientAsset("/images/client/interior/interior-lounge.jpg"),
  interiorDesignTwo: clientAsset("/images/client/interior/interior-lounge.jpg"),
  interiorLiving: clientAsset("/images/client/interior/interior-warm.jpg"),
  interiorLounge: clientAsset("/images/client/interior/interior-lounge.jpg"),
  interiorWarm: clientAsset("/images/client/interior/interior-warm.jpg"),
  minimalFurniture: clientAsset("/images/client/furniture/apartment1.jpg"),
  minimalFurnitureWide: clientAsset("/images/client/furniture/apartment2.jpg"),
  office: clientAsset("/images/client/office.jpg"),
  officeExecutive: clientAsset("/images/client/interior/office-executive1.jpg"),
  officeExecutiveTwo: clientAsset("/images/client/interior/office-executive2.jpg"),
  officeExecutiveThree: clientAsset("/images/client/interior/office-executive3.jpg"),
  officeExecutiveFour: clientAsset("/images/client/interior/office-executive4.jpg"),
  officeGlassPartition: clientAsset("/images/client/interior/office-executive4.jpg"),
  officeOpenPlan: clientAsset("/images/client/interior/office-workstations.jpg"),
  officeRenderDetail: clientAsset("/images/client/interior/office-render-detail.jpg"),
  officeRenderReception: clientAsset("/images/client/interior/office-executive1.jpg"),
  officeRenderSuite: clientAsset("/images/client/interior/office-render-detail.jpg"),
  officeRenderWindow: clientAsset("/images/client/interior/office-render-window.jpg"),
  officeWorkstations: clientAsset("/images/client/interior/office-workstations.jpg"),
  aboutHarkaniOffice: clientAsset("/images/client/about-harkani-office.png"),
  portfolio: clientAsset("/images/client/construction/20250903_174213.jpg"),
  portfolio2: clientAsset("/images/client/construction/20250903_174213.jpg"),
  restaurantInterior: clientAsset("/images/client/interior/restaurant-interior.jpg")
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
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
  { value: 80, suffix: "+", label: "Interior Projects Completed" },
  { value: 5, suffix: "+", label: "Construction Projects Completed" },
  { value: 50, suffix: "+", label: "Furniture Units Produced" },
  { value: 10, suffix: "+", label: "Branding Projects Completed" }
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
    title: "Interior Design",
    label: "Interior Design Division",
    href: "#interior-design-division",
    image: clientImages.officeExecutive,
    items: [
      "Interior Design",
      "Interior Consultation | Supervision",
      "Interior full construction, furnishing, and decoration"
    ]
  },
  {
    title: "Furniture",
    label: "Furniture Division",
    href: "#furniture-division",
    image: clientImages.apartment,
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
    title: "Finishing & Construction",
    label: "Finishing & Construction Division",
    href: "#finishing-construction-division",
    image: clientImages.inProgress,
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

export const aboutSection = {
  image: clientImages.aboutHarkaniOffice,
  paragraphs: [
    "Harkani PLC is a multidisciplinary company specializing in interior design, construction and finishing works, furniture manufacturing, and branding solutions."
  ]
};

export const homeDivisionSections = [
  {
    id: "interior-design-division",
    eyebrow: "Interior Design Division",
    title: "Interior Design Division",
    image: clientImages.officeExecutive,
    images: [
      clientImages.officeExecutive,
      clientImages.officeExecutiveTwo,
      clientImages.officeExecutiveThree,
      clientImages.officeExecutiveFour
    ],
    layout: "interior",
    theme: "interior",
    intro:
      "Our Interior Design Division transforms ideas into functional and inspiring environments. We balance aesthetics, functionality, comfort, and purpose.",
    body:
      "Our team develops customized design and build solutions that reflect client goals while maximizing user experience and spatial efficiency.",
    features: [
      {
        title: "Interior Design",
        detail: "Transforming ideas into functional, beautiful, and well-planned interior spaces."
      },
      {
        title: "Interior Consultation & Supervision",
        detail: "Providing expert guidance and oversight to ensure quality execution and design integrity."
      },
      {
        title: "Interior Build & Construction",
        detail: "Delivering complete interior projects from concept development to final handover."
      }
    ]
  },
  {
    id: "furniture-division",
    eyebrow: "Furniture Division",
    title: "Furniture Manufacturing Division",
    image: clientImages.apartment,
    images: [
      clientImages.apartment,
      clientImages.apartmentTwoFurniture,
      clientImages.apartmentThree,
      clientImages.apartmentFour
    ],
    layout: "split",
    theme: "furniture",
    intro:
      "We design and manufacture custom furniture solutions that combine functionality, durability, and modern aesthetics.",
    body:
      "Our manufacturing process emphasizes quality materials, precision craftsmanship, and client-specific customization.",
    columns: [
      {
        title: "Residential Furniture",
        items: ["Kitchen Cabinets", "TV Units", "Bedroom Closets"]
      },
      {
        title: "Office Furniture",
        items: ["Office Tables", "Reception Desks", "Built-In Shelves"]
      }
    ]
  },
  {
    id: "finishing-construction-division",
    eyebrow: "Finishing & Construction Division",
    title: "Finishing & Construction Division",
    image: clientImages.inProgress,
    images: [
      clientImages.inProgress,
      clientImages.constructionSiteTwo,
      clientImages.constructionSiteThree
    ],
    layout: "interior",
    theme: "construction",
    intro:
      "Our Finishing & Construction Division handles the technical work that turns raw spaces into clean, ready environments.",
    body:
      "From gypsum ceiling and partition work to tile, paint, wiring, aluminum, sanitary fittings, and epoxy flooring, we coordinate each trade with clear supervision and quality control.",
    features: [
      {
        title: "Core Finishing",
        detail: "Gypsum board ceilings, partitions, ceramic, skirting, wall chalk, and painting work."
      },
      {
        title: "Technical Works",
        detail: "Electric wiring, aluminum works, sanitary fittings, and epoxy flooring coordinated cleanly."
      },
      {
        title: "Site Supervision",
        detail: "Sequencing, vendor follow-up, progress control, and quality checks through handover."
      }
    ]
  }
];

const titleFromFile = (file) => {
  const name = file.replace(/.[^.]+$/, "");

  if (name === "20250903_174213") {
    return "Construction Progress";
  }

  if (name === "20250818_124758") {
    return "Apartment Furniture Detail";
  }

  if (name.startsWith("ChatGPT Image")) {
    return "Construction Concept";
  }

  return name
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const portfolioItem = (division, folder, file) => ({
  id: folder + "-" + file.replace(/.[^.]+$/, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase(),
  title: titleFromFile(file),
  location: division + " folder",
  division,
  image: clientAsset("/images/client/" + folder + "/" + file),
  summary: titleFromFile(file) + " from the " + division + " image folder."
});

const interiorPortfolioImages = [
  portfolioItem("Interior Design Division", "interior", "office-executive1.jpg"),
  portfolioItem("Interior Design Division", "interior", "office-executive2.jpg"),
  portfolioItem("Interior Design Division", "interior", "office-executive3.jpg"),
  portfolioItem("Interior Design Division", "interior", "office-executive4.jpg"),
  portfolioItem("Interior Design Division", "interior", "office-render-detail.jpg"),
  portfolioItem("Interior Design Division", "interior", "office-render-window.jpg"),
  portfolioItem("Interior Design Division", "interior", "office-workstations.jpg"),
  portfolioItem("Interior Design Division", "interior", "interior-warm.jpg"),
  portfolioItem("Interior Design Division", "interior", "interior-lounge.jpg"),
  portfolioItem("Interior Design Division", "interior", "restaurant-interior.jpg"),
  portfolioItem("Interior Design Division", "interior", "cafe-counter.jpg"),
  portfolioItem("Interior Design Division", "interior", "furniture-showroom.jpg")
];

const furniturePortfolioImages = [
  portfolioItem("Furniture Division", "furniture", "apartment1.jpg"),
  portfolioItem("Furniture Division", "furniture", "apartment2.jpg"),
  portfolioItem("Furniture Division", "furniture", "apartment3.jpg"),
  portfolioItem("Furniture Division", "furniture", "apartment4.jpg"),
  portfolioItem("Furniture Division", "furniture", "bedroom.jpg"),
  portfolioItem("Furniture Division", "furniture", "20250818_124758.jpg")
];

const constructionPortfolioImages = [
  portfolioItem("Finishing & Construction Division", "construction", "construction-site1.jpg"),
  portfolioItem("Finishing & Construction Division", "construction", "construction-site2.jpg"),
  portfolioItem("Finishing & Construction Division", "construction", "construction-site3.jpg"),
  portfolioItem("Finishing & Construction Division", "construction", "construction-exterior.jpg"),
  portfolioItem("Finishing & Construction Division", "construction", "20250903_174213.jpg"),
  portfolioItem("Finishing & Construction Division", "construction", "apartment-two.jpg"),
  portfolioItem("Finishing & Construction Division", "construction", "before.jpg")
];

export const portfolioDivisions = [
  {
    filter: "Interior Design Division",
    title: "Interior Design Division",
    description:
      "Interior design, consultation, supervision, full interior construction, furnishing, and decoration.",
    image: interiorPortfolioImages[0]?.image || clientImages.interiorDesignTwo,
    folder: "public/images/client/interior",
    highlights: ["Concepts", "Supervision", "Full interiors"],
    gallery: interiorPortfolioImages
  },
  {
    filter: "Furniture Division",
    title: "Furniture Division",
    description:
      "Custom home and office furniture including cabinets, TV units, closets, tables, reception desks, and shelves.",
    image: furniturePortfolioImages[0]?.image || clientImages.furnitureKitchen,
    folder: "public/images/client/furniture",
    highlights: ["Home furniture", "Office furniture", "Built-ins"],
    gallery: furniturePortfolioImages
  },
  {
    filter: "Finishing & Construction Division",
    title: "Finishing & Construction Division",
    description:
      "Gypsum, ceramic, painting, wiring, aluminum, sanitary fittings, epoxy flooring, and site execution.",
    image: constructionPortfolioImages[0]?.image || clientImages.inProgress,
    folder: "public/images/client/construction",
    highlights: ["Gypsum", "Installations", "Site execution"],
    gallery: constructionPortfolioImages
  }
];

export const visualProof = [
  { title: "Apartment living", image: clientImages.apartment },
  { title: "Apartment setup", image: clientImages.apartmentTwoFurniture },
  { title: "Apartment detail", image: clientImages.apartmentThree },
  { title: "Apartment finish", image: clientImages.apartmentFour },
  { title: "Apartment living", image: clientImages.apartment },
  { title: "Office reception", image: clientImages.officeExecutive },
  { title: "Executive office", image: clientImages.officeExecutiveTwo },
  { title: "Office interior", image: clientImages.officeExecutiveThree },
  { title: "Office detail", image: clientImages.officeExecutiveFour },
  { title: "Office workstations", image: clientImages.officeExecutiveThree },
  { title: "Glass partitions", image: clientImages.officeExecutiveFour },
  { title: "Executive office", image: clientImages.officeExecutive },
  { title: "Bedroom setup", image: clientImages.apartmentThree },
  { title: "Retail showroom", image: clientImages.apartmentFour },
  { title: "Finishing site", image: clientImages.constructionSite },
  { title: "Construction progress", image: clientImages.constructionExterior }
];

export const trustVisuals = [
  clientImages.apartmentTwoFurniture,
  clientImages.officeExecutiveTwo,
  clientImages.officeExecutiveThree,
  clientImages.officeExecutiveFour
];

export const finalCtaImage = clientImages.apartment;

export const testimonialComparison = {
  beforeImage: clientImages.beforeOne,
  afterImage: clientImages.afterOne
};

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
    image: clientImages.officeExecutive,
    showcaseImage: clientImages.officeExecutiveTwo,
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
        image: clientImages.officeExecutive
      },
      {
        tag: "Cafe",
        title: "Modern cafe seating",
        detail: "Guest flow and camera-ready corners.",
        image: clientImages.officeExecutiveTwo
      },
      {
        tag: "Office Interior",
        title: "Polished office environments",
        detail: "Reception, partitions, and focused work zones.",
        image: clientImages.officeExecutiveThree
      },
      {
        tag: "Residential Interior",
        title: "Warm living concepts",
        detail: "Furniture, lighting, and calm material tones.",
        image: clientImages.officeExecutiveFour
      }
    ]
  },
  construction: {
    label: "Finishing & Construction Division",
    title: "Premium finishing construction for clean, ready spaces.",
    description: "Gypsum, tiles, paint, wiring, aluminum, sanitary, and epoxy work.",
    image: clientImages.constructionSite,
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
    image: clientImages.apartment,
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
        image: clientImages.apartment,
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
        image: clientImages.apartmentTwoFurniture,
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
        image: clientImages.apartmentThree,
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
        image: clientImages.apartmentFour,
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
        image: clientImages.apartment,
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
        image: clientImages.apartmentTwoFurniture,
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
        image: clientImages.apartmentThree,
        tags: ["Bedroom", "Lighting", "Decor"],
        highlights: [
          "Headboard and bedside styling together",
          "Soft lighting and calm finish tones",
          "Turnkey bedroom setup from day one"
        ]
      }
    ],
    moodboard: [
      { title: "Living room", image: clientImages.apartment },
      { title: "Kitchen cabinet", image: clientImages.apartmentTwoFurniture },
      { title: "Warm lounge", image: clientImages.apartmentThree },
      { title: "Interior concept", image: clientImages.apartmentFour },
      { title: "Reception desk", image: clientImages.apartmentTwoFurniture },
      { title: "Bedroom setup", image: clientImages.apartmentThree }
    ]
  }
};

export const projects = [
  {
    id: "bole-penthouse",
    title: "Bole Penthouse Residence",
    location: "Addis Ababa",
    division: "Interior Design Division",
    category: "Residential",
    image: clientImages.officeExecutive,
    summary: "Layered stone, bronze accents, and custom joinery for a quiet luxury penthouse.",
    size: "tall"
  },
  {
    id: "minimal-living",
    title: "Minimal Furniture Residence",
    location: "Addis Ababa",
    division: "Furniture Division",
    category: "Residential",
    image: clientImages.apartment,
    summary: "Minimal furniture, soft materials, and warm daylight shaped into a calm home setup.",
    size: "medium"
  },
  {
    id: "kitchen-furniture",
    title: "Kitchen Cabinet Setup",
    location: "Addis Ababa",
    division: "Furniture Division",
    category: "Residential",
    image: clientImages.apartmentTwoFurniture,
    summary: "Kitchen cabinets, appliances, lighting, and counters coordinated as one complete setup.",
    size: "medium"
  },
  {
    id: "diaspora-villa",
    title: "Remote Villa Delivery",
    location: "CMC, Addis Ababa",
    division: "Furniture Division",
    category: "Diaspora Delivery",
    image: clientImages.apartment,
    summary: "A full furnishing and finishing package delivered for an owner based in Toronto.",
    size: "wide"
  },
  {
    id: "restaurant-interior",
    title: "Restaurant Interior Concept",
    location: "Addis Ababa",
    division: "Interior Design Division",
    category: "Hospitality",
    image: clientImages.officeExecutiveTwo,
    summary: "Restaurant seating, ceiling rhythm, and lighting shaped for a premium guest mood.",
    size: "wide"
  },
  {
    id: "cafe-seating",
    title: "Cafe Seating Layout",
    location: "Addis Ababa",
    division: "Interior Design Division",
    category: "Hospitality",
    image: clientImages.officeExecutiveThree,
    summary: "Cafe furniture, display, and circulation composed for a bright customer experience.",
    size: "medium"
  },
  {
    id: "executive-office",
    title: "Executive Office Suite",
    location: "Kazanchis",
    division: "Interior Design Division",
    category: "Commercial",
    image: clientImages.officeExecutiveFour,
    summary: "Refined boardroom and reception environments with warm timber and acoustic detailing.",
    size: "medium"
  },
  {
    id: "office-reception-render",
    title: "Office Reception Setup",
    location: "Addis Ababa",
    division: "Interior Design Division",
    category: "Commercial",
    image: clientImages.officeExecutive,
    summary: "Reception desk, lounge seating, lighting, and wall feature planned as one arrival moment.",
    size: "wide"
  },
  {
    id: "signature-cafe",
    title: "Retail Showroom Fit-Out",
    location: "Addis Ababa",
    division: "Furniture Division",
    category: "Commercial",
    image: clientImages.apartmentThree,
    summary: "Display shelving, lighting, and customer-facing circulation for a premium showroom.",
    size: "medium"
  },
  {
    id: "master-bedroom-retreat",
    title: "Master Bedroom Retreat",
    location: "Summit",
    division: "Furniture Division",
    category: "Residential",
    image: clientImages.apartmentFour,
    summary: "Soft lighting, integrated paneling, and quiet luxury details composed for restful daily living.",
    size: "wide"
  },
  {
    id: "government-boardroom",
    title: "Finishing Work in Progress",
    location: "Addis Ababa",
    division: "Finishing & Construction Division",
    category: "Finishing",
    image: clientImages.constructionSiteTwo,
    summary: "Ceiling, partitions, wiring, and site execution during a premium finishing phase.",
    size: "tall"
  },
  {
    id: "construction-exterior",
    title: "Construction Site Progress",
    location: "Addis Ababa",
    division: "Finishing & Construction Division",
    category: "Finishing",
    image: clientImages.constructionSiteThree,
    summary: "Exterior site progress and construction coordination before interior finishing starts.",
    size: "medium"
  }
];

export const featuredProjects = [
  projects.find((project) => project.id === "restaurant-interior"),
  projects.find((project) => project.id === "office-reception-render"),
  projects.find((project) => project.id === "minimal-living")
].filter(Boolean);

export const filters = [
  "All",
  "Interior Design Division",
  "Furniture Division",
  "Finishing & Construction Division"
];

export const logos = [
  { name: "Trusted partner 1", image: clientAsset("/logo/logo-1.png") },
  { name: "Trusted partner 2", image: clientAsset("/logo/logo-2.png") },
  { name: "Trusted partner 3", image: clientAsset("/logo/logo-3.png") },
  { name: "Trusted partner 4", image: clientAsset("/logo/logo-4.png") },
  { name: "Trusted partner 5", image: clientAsset("/logo/logo-5.png") },
  { name: "Trusted partner 6", image: clientAsset("/logo/logo-6.png") },
  { name: "Trusted partner 7", image: clientAsset("/logo/logo-7.png") },
  { name: "Trusted partner 8", image: clientAsset("/logo/logo-8.png") },
  { name: "Trusted partner 9", image: clientAsset("/logo/logo-9.png") },
  { name: "Trusted partner 10", image: clientAsset("/logo/logo-10.png") }
];

export const testimonials = [
  {
    quote:
      "Harkani PLC transformed our large office space into a functional and well-organized working environment that effectively accommodates our team and supports our day-to-day operations",
    name: "Mr Kaleb Getaneh",
    location: "Project manager (HFHE)"
  },
  {
    quote:
      "Harkani understood the importance of working within our budget and successfully delivered a professional office space without compromising quality or exceeding our financial plan.",
    name: "Mr Yabowerk Haile",
    location: "General Manager (Gasha Micro Finance Institute)"
  },
  {
    quote:
      "What impressed me most was their communication and attention to detail. They listened carefully to my vision, reflected my brand perfectly, and delivered a retail space exactly as I imagined.",
    name: "Mrs Martha H/Michael",
    location: "Owner (Leoul Men's Clothing and Angel's Choice)"
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
