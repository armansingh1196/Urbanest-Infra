export interface ProjectConfiguration {
  unit?: string;
  config: string;
  area: string;
}

export interface FloorPlan {
  level: string;
  area?: string;
  features: string[];
}

export interface ProjectSpecification {
  category: string;
  details: string[];
}

export interface ProjectData {
  id: string;
  name: string;
  type: string;
  config: string;
  area: string;
  location: string;
  developer: string;
  positioning: string;
  shortDescription: string;
  status: string;
  price: string;
  images: string[];
  configurations?: ProjectConfiguration[];
  highlights: string[];
  amenities: string[];
  specifications: ProjectSpecification[];
  floorPlans?: FloorPlan[];
  floorPlanImages?: string[];
  // For PropertyMatcher mapping
  _matchStats: {
    priceValue: number;
    beds: number;
    baths: number;
    sqft: number;
    tag?: string;
  };
}

export const PROJECTS: ProjectData[] = [
  {
    id: "sunnys-86-east",
    name: "Sunny's 86° East",
    type: "Premium Residential Apartments",
    config: "2 BHK & 3 BHK",
    area: "1,050 – 1,535 sq.ft.",
    location: "Kailashpuram, near D.Y. Patel School, Dhanbad, Jharkhand – 826004",
    developer: "Sai Sumbridhi Construction Pvt. Ltd.",
    positioning: "Luxury residential apartments combining classic British Colonial architecture with modern amenities.",
    shortDescription: "Sunny's 86° East is a premium residential development in Kailashpuram, Dhanbad, offering thoughtfully designed 2 & 3 BHK apartments in a distinctive British Colonial architectural style. With spacious layouts, high ceilings, abundant natural light and world-class amenities, the project brings together classic elegance, modern comfort and sustainable living.",
    status: "New Launch",
    price: "Price on Request",
    images: [
      "/images/project-emerald-heights.jpeg", // Placeholder
      "/images/gallery-01.jpeg",
      "/images/gallery-02.jpeg",
    ],
    highlights: [
      "British Colonial-style architecture",
      "Spacious apartment layouts",
      "High ceilings",
      "Abundant natural light",
      "Two spacious balconies per flat",
      "Peaceful green surroundings",
      "Smart-home features",
      "Eco-friendly materials",
      "Rainwater harvesting",
      "Ample car parking",
      "24/7 CCTV surveillance",
      "Power backup",
      "Skywalk"
    ],
    amenities: [
      "Clubhouse",
      "Temperature-controlled swimming pool",
      "Gymnasium / Yoga Studio",
      "Rooftop restaurant-style seating area",
      "Children's Park",
      "Reception Area",
      "24/7 CCTV surveillance",
      "Power backup",
      "Skywalk",
      "Ample car parking"
    ],
    configurations: [
      { unit: "Flat A", config: "2 BHK", area: "1,050 sq.ft." },
      { unit: "Flat B", config: "3 BHK", area: "1,535 sq.ft." },
      { unit: "Flat C", config: "3 BHK", area: "1,410 sq.ft." },
      { unit: "Flat D", config: "3 BHK", area: "1,400 sq.ft." },
      { unit: "Flat E", config: "2 BHK", area: "1,130 sq.ft." },
      { unit: "Flat F", config: "2 BHK", area: "1,130 sq.ft." },
    ],
    specifications: [
      { category: "Structure", details: ["Earthquake-resistant RCC framed structure", "Deep pile foundation"] },
      { category: "Flooring", details: ["High-quality vitrified tiles", "Anti-skid flooring in rooms and bathrooms"] },
      { category: "Walls & Roofing", details: ["Brick masonry walls", "Weatherproof external plastering", "Heat-resistant terrace treatment"] },
      { category: "Electrical", details: ["Concealed wiring", "Modular switches"] },
      { category: "Plumbing", details: ["Branded Jaguar sanitary fittings", "Water-saving fixtures"] },
    ],
    _matchStats: {
      priceValue: 7500000,
      beds: 3,
      baths: 2,
      sqft: 1535,
      tag: "British Colonial"
    }
  },
  {
    id: "sunnys-one-address",
    name: "Sunny's One Address",
    type: "Luxury Villas",
    config: "4 BHK Triplex",
    area: "3,725 sq.ft.",
    location: "Near Balajee Petrol Pump, 4 Lane Main Road, Dhanbad, Jharkhand – 826007",
    developer: "Sai Sumbridhi Construction Pvt. Ltd.",
    positioning: "Luxury triplex villas in a prime Dhanbad location.",
    shortDescription: "Sunny's One Address is an exclusive collection of luxury 4 BHK triplex villas near Balajee Petrol Pump on Dhanbad's 4 Lane Main Road. Designed for expansive family living, each home combines multiple bedrooms and bathrooms with dedicated office and servant spaces, private gardens, terrace areas and premium specifications.",
    status: "Under Construction",
    price: "Price on Request",
    images: [
      "/images/project-imperial.jpeg", // Placeholder
      "/images/gallery-03.jpeg",
      "/images/about-01.jpeg",
    ],
    highlights: [
      "4 Bedrooms",
      "6 Washrooms",
      "2-Car Parking",
      "Lift Space",
      "Office Room",
      "Servant Room",
      "Terrace Garden",
      "Home Garden",
      "Children's Park",
      "Mandir",
      "Yoga Area"
    ],
    amenities: [
      "2-Car Parking",
      "Dress Room",
      "Children's Park",
      "Office Room",
      "Waiting Lobby",
      "Terrace Garden",
      "Mandir",
      "Yoga Area",
      "Servant Room",
      "Home Garden"
    ],
    floorPlans: [
      { level: "Ground Floor", area: "1,135 sq.ft.", features: ["Office", "Servant room", "Toilet", "Waiting lobby", "Lift", "Two-car parking", "Outdoor sitting", "Green space", "Utility area"] },
      { level: "First Floor", area: "1,135 sq.ft.", features: ["Bedroom", "Kitchen", "Toilet", "Dining", "Drawing room", "Balcony", "Green ledge"] },
      { level: "Second Floor", area: "1,125 sq.ft.", features: ["Multiple bedrooms", "Toilets", "Dress areas", "Lobby", "Balcony", "Green ledge"] },
      { level: "Mumty Floor", area: "330 sq.ft.", features: ["Open terrace"] },
    ],
    specifications: [
      { category: "Structure", details: ["Earthquake-resistant RCC framed structure", "10-inch exterior walls"] },
      { category: "Materials", details: ["ISI-branded reinforcement steel", "First-quality red bricks", "Ultratech cement", "Birla Putty", "High-quality exterior finish"] },
      { category: "Fittings", details: ["Jaguar / Kohler sanitary fittings", "Havells / Anchor / Kone electrical fittings"] },
      { category: "Security & Eco", details: ["24/7 CCTV surveillance", "Rainwater harvesting"] }
    ],
    _matchStats: {
      priceValue: 18500000,
      beds: 4,
      baths: 6,
      sqft: 3725,
      tag: "Triplex Villa"
    }
  },
  {
    id: "sunnys-urban-oasis",
    name: "Sunny's Urban Oasis",
    type: "Ultra-Premium Duplex",
    config: "4 BHK",
    area: "2,180 sq.ft.",
    location: "Kusum Vihar, near Utsav Resort, Dhanbad",
    developer: "Sai Sumbridhi Construction Pvt. Ltd.",
    positioning: "A world of luxury living / Where elegance meets comfort",
    shortDescription: "Sunny's Urban Oasis is an ultra-premium 4 BHK duplex development at Kusum Vihar, Dhanbad, designed around spacious family living and contemporary luxury. With generous floor plans, private terrace gardens, dedicated parking and a thoughtfully planned residential environment, the project brings elegance and comfort together in a premium community setting.",
    status: "Ready to Move",
    price: "Price on Request",
    images: [
      "/images/project-aura-commercial.jpeg", // Placeholder
      "/images/gallery-02.jpeg",
      "/images/about-02.jpeg",
    ],
    highlights: [
      "4 BHK",
      "Ultra-premium duplex configuration",
      "3-level planning including mumty/terrace",
      "Dedicated parking",
      "Multiple bedrooms",
      "Multiple bathrooms",
      "Sitout",
      "Wide balcony",
      "Open terrace garden",
      "Puja cabinet",
      "Green areas",
      "Utility space"
    ],
    amenities: [
      "Swimming Pool",
      "Exclusive Clubhouse",
      "Temple / Mandir",
      "Generator",
      "Guard Room",
      "Children's Park",
      "Fully Gated Society",
      "Green Park",
      "Transformer",
      "Society Bore",
      "24×7 CCTV Security",
      "Senior Citizen Sitting Area",
      "Gymnasium",
      "Gazebo",
      "Puja Cabinet"
    ],
    floorPlans: [
      { level: "Ground Floor", area: "970 sq.ft.", features: ["Bedroom", "Kitchen", "Toilet", "Drawing-cum-dining", "Parking", "Verandah", "Utility verandah", "Puja cabinet", "Green area"] },
      { level: "First Floor", area: "970 sq.ft.", features: ["3 Bedrooms", "2 Toilets", "Sitout", "Wide balcony"] },
      { level: "Mumty Floor", area: "240 sq.ft.", features: ["Open terrace garden"] },
    ],
    specifications: [
      { category: "Structure", details: ["Premium duplex construction", "3-level planning"] },
      { category: "Features", details: ["Dedicated parking", "Puja cabinet", "Utility space"] }
    ],
    _matchStats: {
      priceValue: 12500000,
      beds: 4,
      baths: 3,
      sqft: 2180,
      tag: "Premium Duplex"
    }
  },
  {
    id: "sumbridhi-green-park",
    name: "Sumbridhi Green Park",
    type: "Luxury Triplex Villas",
    config: "4.5 BHK",
    area: "Approx. 3,128 sq.ft. Super Built-up",
    location: "Memco More / Kailashpuram, near D.Y. Patel School, Dhanbad, Jharkhand – 826004",
    developer: "Sai Sumbridhi Construction Pvt. Ltd.",
    positioning: "Exclusive collection of luxury 4.5 BHK triplex villas.",
    shortDescription: "Sumbridhi Green Park is an exclusive residential community of luxury 4.5 BHK triplex villas, offering approximately 3,128 sq.ft. of super built-up space. Designed for spacious family living, each villa features 3-car parking, attached dress rooms, servant quarters, terrace gardens, a double-height drawing area and premium finishes, complemented by a gated community and extensive lifestyle amenities.",
    status: "Under Construction",
    price: "Price on Request",
    images: [
      "/images/project-green-valley.jpeg", // Placeholder
      "/images/gallery-01.jpeg",
      "/images/gallery-03.jpeg",
    ],
    highlights: [
      "4.5 BHK configuration",
      "Approx. 3,128 sq.ft. super built-up area",
      "3-car parking",
      "Attached dress rooms",
      "Walk-in closets",
      "Dedicated servant quarter",
      "Landscaped terrace garden",
      "Double-height ceiling in drawing area",
      "Dedicated puja cabinet"
    ],
    amenities: [
      "Clubhouse",
      "Gymnasium",
      "Children's Park",
      "Gated Community",
      "Terrace Cafeteria",
      "Garden with Sitting Area",
      "Swimming Pool",
      "Yoga Area",
      "Mandir",
      "Power Backup",
      "Puja Cabinet"
    ],
    specifications: [
      { category: "Structural & Construction Materials", details: ["ISI-branded reinforcement steel", "Red bricks / first-quality chimney bricks", "Ultratech cement", "Birla Putty", "Earthquake-resistant RCC framed structure"] },
      { category: "Walls & Finishing", details: ["10-inch exterior walls", "High-quality exterior elevation and painting"] },
      { category: "Sanitary & Plumbing", details: ["Jaguar / Kohler sanitary fittings"] },
      { category: "Flooring", details: ["4×2 vitrified tiles"] },
      { category: "Electrical", details: ["Havells / Anchor / Kone wiring and fittings"] },
      { category: "Security", details: ["24/7 CCTV surveillance"] },
      { category: "Sustainability", details: ["Rainwater harvesting system"] },
    ],
    _matchStats: {
      priceValue: 15500000,
      beds: 5,
      baths: 4,
      sqft: 3128,
      tag: "Luxury Triplex"
    }
  }
];
