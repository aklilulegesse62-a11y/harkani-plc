const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const clientAsset = (path) => `${assetBasePath}${path}`;

const clientImages = {
  after: clientAsset("/images/client/after.jpg"),
  apartment: clientAsset("/images/client/apartment.jpg"),
  apartmentTwo: clientAsset("/images/client/apartment-two.jpg"),
  bedroom: clientAsset("/images/client/bedroom.jpg"),
  before: clientAsset("/images/client/before.jpg"),
  inProgress: clientAsset("/images/client/in-progress.jpg"),
  office: clientAsset("/images/client/office.jpg"),
  portfolio: clientAsset("/images/client/portfolio.jpg"),
  portfolio2: clientAsset("/images/client/portfolio2.jpg")
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
    title: "Premium interiors, finishing, and full setup for luxury homes and commercial spaces.",
    image: clientImages.apartmentTwo,
    label: "Luxury homes"
  },
  {
    title: "Customer-facing stores, showrooms, and branded interiors shaped with atmosphere, identity, and precision.",
    image: clientImages.portfolio2,
    label: "Customer-facing spaces"
  },
  {
    title: "Offices, government projects, and diaspora properties executed by one accountable team.",
    image: clientImages.portfolio,
    label: "Commercial execution"
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
    image: clientImages.apartmentTwo,
    items: [
      "Interior Design",
      "Interior Consultation | Supervision",
      "Interior full construction, furnishing, and decoration"
    ]
  },
  {
    title: "Harkani Furniture",
    image: clientImages.bedroom,
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

export const visualProof = [
  { title: "Apartment living", image: clientImages.apartment },
  { title: "Office reception", image: clientImages.office },
  { title: "Retail showroom", image: clientImages.portfolio2 },
  { title: "Bedroom setup", image: clientImages.bedroom },
  { title: "Work in progress", image: clientImages.inProgress },
  { title: "Finished retail", image: clientImages.after }
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
    image: clientImages.portfolio,
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
        tag: "Reception Interior",
        title: "Branded welcome desks",
        detail: "Reception, signage, and lighting.",
        image: clientImages.portfolio
      },
      {
        tag: "Retail Showroom",
        title: "Customer-facing display environments",
        detail: "Display, circulation, and spotlighting.",
        image: clientImages.portfolio2
      },
      {
        tag: "Office Interior",
        title: "Executive office entries",
        detail: "Clean surfaces and warm lighting.",
        image: clientImages.office
      }
    ]
  },
  construction: {
    label: "Finishing & Construction Division",
    title: "Premium finishing construction for clean, ready spaces.",
    description: "Gypsum, tiles, paint, wiring, aluminum, sanitary, and epoxy work.",
    image: clientImages.inProgress,
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
        id: "lounge-setup",
        title: "Lifestyle lounge styling",
        subtitle: "Curtains, wall treatments, furniture composition, and soft finishes balanced into one polished room.",
        image: clientImages.apartmentTwo,
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
    ]
  }
};

export const projects = [
  {
    id: "bole-penthouse",
    title: "Bole Penthouse Residence",
    location: "Addis Ababa",
    category: "Residential",
    image: clientImages.apartmentTwo,
    summary: "Layered stone, bronze accents, and custom joinery for a quiet luxury penthouse.",
    size: "tall"
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
    id: "executive-office",
    title: "Executive Office Suite",
    location: "Kazanchis",
    category: "Commercial",
    image: clientImages.portfolio,
    summary: "Refined boardroom and reception environments with warm timber and acoustic detailing.",
    size: "medium"
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
    image: clientImages.inProgress,
    summary: "Ceiling, partitions, wiring, and site execution during a premium finishing phase.",
    size: "tall"
  }
];

export const filters = [
  "All",
  "Residential",
  "Diaspora Delivery",
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
