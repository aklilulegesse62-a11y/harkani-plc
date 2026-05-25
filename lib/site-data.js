const clientImages = {
  after: "/images/client/after.jpg",
  apartment: "/images/client/apartment.jpg",
  apartmentTwo: "/images/client/apartment-two.jpg",
  bedroom: "/images/client/bedroom.jpg",
  before: "/images/client/before.jpg",
  inProgress: "/images/client/in-progress.jpg",
  office: "/images/client/office.jpg",
  portfolio: "/images/client/portfolio.jpg",
  portfolio2: "/images/client/portfolio2.jpg"
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
    title: "Interiors Division",
    number: "01",
    description:
      "Luxury interiors for restaurants, cafes, offices, and residences shaped around experience, brand atmosphere, and modern living."
  },
  {
    title: "Finishing & Construction",
    number: "02",
    description:
      "Premium finishing execution, site coordination, joinery, ceilings, lighting, flooring, and technical delivery under one standard."
  },
  {
    title: "Furniture & Full Setup",
    number: "03",
    description:
      "Furniture, electronics, decor, styling, and move-in readiness handled as one complete setup solution."
  },
  {
    title: "Commercial Fit-Outs",
    number: "04",
    description:
      "Customer-facing environments for hospitality, corporate, retail, and mixed-use spaces with operational polish."
  },
  {
    title: "Remote Project Management",
    number: "05",
    description:
      "Approvals, BOQ reviews, procurement tracking, and visual reporting built for local stakeholders and diaspora clients abroad."
  }
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
    description:
      "Harkani.Plc unites interior storytelling, finishing execution, and full setup delivery so ambitious clients can launch spaces with confidence from anywhere."
  },
  interiors: {
    label: "Interiors Division",
    title:
      "Luxury modern interiors that turn restaurants, cafes, offices, and private homes into memorable environments.",
    description:
      "This division focuses on mood, guest experience, traffic flow, executive presence, and the small material decisions that make premium spaces feel intentional.",
    image: clientImages.portfolio,
    audiences: ["Hospitality brands", "Modern offices", "Luxury residences"],
    highlights: [
      "Atmosphere-led design for restaurants and cafes",
      "Modern office interiors with executive calm",
      "Material palettes that photograph beautifully and age well"
    ],
    floatingCards: [
      {
        title: "Guest journey mapped",
        detail: "Arrival moments, seating rhythm, and lighting transitions curated to shape the experience."
      },
      {
        title: "Brand-ready styling",
        detail: "Color stories and hero details designed to look refined in person and on camera."
      }
    ],
    gallery: [
      {
        tag: "Reception Interior",
        title: "Branded welcome desks",
        detail: "Clean material contrasts, statement signage, and lighting that builds trust on arrival.",
        image: clientImages.portfolio
      },
      {
        tag: "Retail Showroom",
        title: "Customer-facing display environments",
        detail: "Shelving rhythm, spotlighting, and circulation laid out for a polished premium experience.",
        image: clientImages.portfolio2
      },
      {
        tag: "Office Interior",
        title: "Executive office entries",
        detail: "Warm welcome zones with clean surfaces, soft lighting, and a stronger first impression.",
        image: clientImages.office
      }
    ]
  },
  construction: {
    label: "Finishing & Construction Division",
    title: "Architectural execution that carries design intent all the way to handover.",
    description:
      "This division delivers premium finishing, construction coordination, joinery, lighting, ceiling systems, and commercial fit-outs with a disciplined reporting rhythm.",
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
        detail: "Existing conditions, constraints, and finishing priorities clarified before procurement."
      },
      {
        stage: "02",
        title: "BOQ, sequencing, and procurement",
        detail: "Materials, shop drawings, and delivery sequencing coordinated to reduce costly gaps."
      },
      {
        stage: "03",
        title: "Execution and quality tracking",
        detail: "Trade supervision, mockups, on-site reviews, and progress documentation maintain precision."
      },
      {
        stage: "04",
        title: "Snagging and polished handover",
        detail: "Final checks, corrections, and readiness walkthroughs close the project with confidence."
      }
    ],
    showcases: [
      {
        title: "Restaurant and cafe finishing",
        detail: "Ambient lighting, acoustic surfaces, service counters, and front-of-house detailing."
      },
      {
        title: "Office and commercial build-outs",
        detail: "Reception areas, boardrooms, executive suites, and branded client-facing environments."
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
    title: "Everything in one place, from hero furniture to the final appliance plug-in.",
    description:
      "This division turns handover-ready spaces into complete living, hospitality, and working environments through furniture, electronics, decor, and final styling.",
    image: clientImages.apartment,
    setupCategories: [
      {
        title: "Furniture and joinery",
        detail: "Loose pieces, custom millwork, banquettes, wardrobes, desks, and lounge systems."
      },
      {
        title: "Electronics and appliances",
        detail: "Kitchen appliances, office tech, AV systems, climate units, and lighting accessories."
      },
      {
        title: "Decor and lifestyle styling",
        detail: "Art, rugs, greenery, mirrors, tableware, soft goods, and premium finishing touches."
      },
      {
        title: "Ready-to-use setup",
        detail: "Every last cable, lamp, surface accessory, and guest-facing detail aligned before launch."
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
          "Living, kitchen, and dining zones styled as one complete experience",
          "Lighting rhythm and decor placement aligned with the interior shell",
          "Ready-to-use apartment handover without fragmented sourcing"
        ]
      },
      {
        id: "lounge-setup",
        title: "Lifestyle lounge styling",
        subtitle: "Curtains, wall treatments, furniture composition, and soft finishes balanced into one polished room.",
        image: clientImages.apartmentTwo,
        tags: ["Seating", "Styling", "Soft Goods"],
        highlights: [
          "A stronger sense of warmth through curtains, lighting, and texture",
          "Furniture placement coordinated with sightlines and circulation",
          "A premium catalog feel without overfilling the room"
        ]
      },
      {
        id: "bedroom-package",
        title: "Bedroom styling package",
        subtitle: "Warm bedside lighting, integrated paneling, and hotel-like comfort delivered in one clean finish.",
        image: clientImages.bedroom,
        tags: ["Bedroom", "Lighting", "Decor"],
        highlights: [
          "Headboard feature walls and bedside styling handled together",
          "Soft lighting and finish tones tuned for a calm nightly experience",
          "A turnkey bedroom setup that feels complete from day one"
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
    title: "Signature Cafe Lounge",
    location: "Addis Ababa",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1500&q=80",
    summary: "A cafe atmosphere built around linger time, visibility, and premium customer experience.",
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
    title: "Government Boardroom Upgrade",
    location: "Bahir Dar",
    category: "Government",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
    summary: "A public-sector meeting environment upgraded for clarity, authority, and polished delivery.",
    size: "tall"
  }
];

export const filters = [
  "All",
  "Residential",
  "Diaspora Delivery",
  "Commercial",
  "Hospitality",
  "Government"
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
    quote:
      "We approved everything from Canada and landed in Addis to a fully styled home. The process felt calm, transparent, and premium.",
    name: "Meron A.",
    location: "Toronto"
  },
  {
    quote:
      "The team handled finishes, sourcing, and all site coordination while we stayed abroad. Weekly updates built real confidence.",
    name: "Kaleb G.",
    location: "Washington, DC"
  },
  {
    quote:
      "Harkani.Plc combined design discipline with execution quality for our commercial space. The result felt far more tailored than hiring separate vendors.",
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
