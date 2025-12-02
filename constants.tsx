import { 
  Sun, ShieldCheck, Zap, TrendingUp, Wrench,  
  Clock, Award, BadgeCheck, Leaf, DollarSign,
  BarChart3, Settings, Users, Headphones, Factory, Building
} from 'lucide-react';
import { Benefit, FAQItem, NavItem, ROIItem, ServiceItem, Testimonial } from './types';

export const BRAND_NAME = "SolarWatt Energy";
export const PHONE_NUMBER = "+91 98765 43210";
export const EMAIL_ADDRESS = "hello@solarwattenergy.com";
export const ADDRESS = "123 Solar Park, Industrial Area, Mumbai, India";

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Calculator', path: '/calculator' },
  { label: 'Contact', path: '/contact' },
];

export const TRUST_BADGES = [
  "10+ Years Experience",
  "5000+ Homes Solarized",
  "ISO 9001:2015 Certified",
  "Govt. Subsidy Approved"
];

export const BENEFITS: Benefit[] = [
  {
    title: "Maximum Efficiency",
    description: "Our SWE-545+Wp modules offer >21% efficiency, ensuring maximum power generation even in low light.",
    icon: Zap
  },
  {
    title: "27-Year Performance",
    description: "Industry-leading linear power performance guarantee. We stand by our modules for nearly three decades.",
    icon: TrendingUp
  },
  {
    title: "Built to Last",
    description: "Anti-cyclone, waterproof, and rigorously tested with 100+ quality checks. Engineered for extreme weather.",
    icon: ShieldCheck
  },
  {
    title: "Expert Installation",
    description: "Our certified engineering team ensures safe, aesthetic, and optimal installation for your roof type.",
    icon: Wrench
  }
];

export const ROI_DATA: ROIItem[] = [
  {
    systemSize: "3 kW",
    annualGeneration: "4,300 Units",
    annualSavings: "₹30,000",
    lifetimeSavings: "₹7.5 Lakhs"
  },
  {
    systemSize: "5 kW",
    annualGeneration: "7,200 Units",
    annualSavings: "₹50,000",
    lifetimeSavings: "₹12.5 Lakhs"
  },
  {
    systemSize: "10 kW",
    annualGeneration: "14,400 Units",
    annualSavings: "₹1,00,000",
    lifetimeSavings: "₹25 Lakhs"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How much can I save with SolarWatt Energy?",
    answer: "Most homeowners save between 70-90% on their electricity bills immediately. With our high-efficiency SWE-545+Wp modules, typical ROI is achieved within 3-4 years, followed by decades of free electricity."
  },
  {
    question: "What is the warranty on your solar panels?",
    answer: "We offer a comprehensive warranty package: 12 years product warranty against manufacturing defects and a 27-year linear power performance guarantee."
  },
  {
    question: "Does the system work during power cuts?",
    answer: "Standard on-grid systems shut down during power cuts for safety. However, Hybrid systems with battery backup can provide power during outages. We can design both based on your needs."
  },
  {
    question: "What is the maintenance required?",
    answer: "Solar systems require very little maintenance. Periodic cleaning of the panels (once every 2 weeks) to remove dust is usually sufficient to maintain peak generation."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Residential Solar",
    slug: "residential-solar",
    description: "Tailored rooftop solar solutions designed specifically for your home's structure and consumption needs.",
    longDescription: "Transform your home into a power plant with SolarWatt's residential solar solutions. We understand that every home is unique, which is why we offer customized designs that blend aesthetics with performance. Our systems are designed to offset up to 90% of your electricity bill while increasing your property value. From 3kW systems for small families to 10kW+ systems for large villas, we handle everything from design to net-metering approvals.",
    icon: Sun,
    features: [
      "Customized rooftop design (RCC, Sheet, or Tiled)",
      "Zero-cost EMI options available",
      "Net-metering liaison with local discom",
      "25+ years of free electricity",
      "Remote monitoring app included"
    ]
  },
  {
    title: "Commercial Solutions",
    slug: "commercial-solutions",
    description: "High-yield solar systems for offices, schools, and hospitals to drastically reduce operational costs.",
    longDescription: "Electricity is often the second largest expense for commercial establishments after payroll. Our commercial solar solutions are engineered to provide the highest Return on Investment (ROI) with a payback period often less than 4 years. We offer accelerated depreciation benefits for businesses, allowing you to write off the asset value and save on tax immediately.",
    icon: Building,
    features: [
      "Accelerated depreciation tax benefits (40%)",
      "Payback period of 3-4 years",
      "OpEx reduction by up to 80%",
      "Seamless integration with DG sets",
      "Scalable system design"
    ]
  },
  {
    title: "Industrial Projects",
    slug: "industrial-projects",
    description: "Large-scale MW captive power plants for factories and industries with heavy energy consumption.",
    longDescription: "For industries with heavy loads and 24/7 operations, SolarWatt provides MW-scale solar power plants. We specialize in both rooftop and ground-mounted systems for factories, warehouses, and industrial parks. Our industrial solutions are built to withstand harsh industrial environments while delivering stable, high-voltage power to run heavy machinery.",
    icon: Factory,
    features: [
      "MW scale captive power plants",
      "High-voltage grid synchronization",
      "Heavy-duty mounting structures",
      "Comprehensive O&M support",
      "Carbon footprint reduction compliance"
    ]
  },
  {
    title: "Maintenance (AMC)",
    slug: "maintenance-amc",
    description: "Comprehensive Annual Maintenance Contracts including cleaning, health checks, and inverter servicing.",
    longDescription: "A well-maintained solar system generates up to 15% more power. Our Annual Maintenance Contracts (AMC) ensure your investment is protected and performing at its peak. We use specialized cleaning equipment to remove dust and bird droppings without damaging the anti-reflective coating on panels. Our engineers also perform quarterly electrical health checks to prevent any potential downtime.",
    icon: Settings,
    features: [
      "Bi-weekly professional panel cleaning",
      "Quarterly electrical health checkups",
      "Inverter firmware updates",
      "Priority breakdown support",
      "Generation report analysis"
    ]
  },
  {
    title: "Shadow Analysis",
    slug: "shadow-analysis",
    description: "Advanced 3D modeling to predict shadow patterns and optimize panel placement for maximum generation.",
    longDescription: "Shadows are the enemy of solar generation. Even a small shadow on one panel can drag down the performance of the entire string. We use industry-leading software like PVSyst and SketchUp to create a 3D model of your building. We simulate the sun's path throughout the year to identify shadow-free zones, ensuring your panels are placed in the absolute best position for maximum output.",
    icon: BarChart3,
    features: [
      "3D Structure Modeling",
      "Year-round sun path simulation",
      "Obstacle height analysis",
      "Optimized string layout design",
      "Detailed generation loss report"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner",
    location: "Pune",
    quote: "SolarWatt's team was incredibly professional. The installation of the 5kW system was done in 2 days. My bill dropped from ₹4000 to ₹150!",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Business Owner",
    location: "Ahmedabad",
    quote: "The ROI calculation they provided was spot on. The PPG guarantee gave me the confidence to invest in a 20kW system for my factory.",
    rating: 5
  },
  {
    name: "Sneha Reddy",
    role: "Architect",
    location: "Hyderabad",
    quote: "Aesthetically pleasing installation. They respected the structure of the roof and the wiring is completely hidden. Highly recommended.",
    rating: 5
  }
];