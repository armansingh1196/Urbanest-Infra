import { ScaleDivider } from "@/components/layout/ScaleDivider";
import { Compass, Landmark, FileCheck2, Home, Users, KeyRound, Calculator } from "lucide-react";
import EMICalculator from "@/components/tools/EMICalculator";

const SERVICES = [
  {
    icon: Compass,
    title: "Property consultation",
    step: "01",
    desc: "Expert advice on selecting the right property based on your budget, location preferences, and investment goals.",
  },
  {
    icon: Landmark,
    title: "Home loan assistance",
    step: "02",
    desc: "Hassle-free home loan processing with our partnered financial institutions at competitive interest rates.",
  },
  {
    icon: FileCheck2,
    title: "Legal & documentation",
    step: "03",
    desc: "Complete support for title search, sale agreement drafting, and property registration.",
  },
  {
    icon: Home,
    title: "Site visits",
    step: "04",
    desc: "Guided, no-pressure tours of every shortlisted property, with an honest read on build quality.",
  },
  {
    icon: Users,
    title: "Developer vetting",
    step: "05",
    desc: "We check RERA status and delivery history before any project is added to our portfolio.",
  },
  {
    icon: KeyRound,
    title: "Post-sale support",
    step: "06",
    desc: "From possession to registry to move-in — we stay on the file until the keys are in your hand.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 min-h-screen px-4 md:px-16 max-w-7xl mx-auto pb-24">
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">What we do</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide mt-3 mb-4 md:mb-6">Our services</h1>
        <p className="text-muted-foreground font-light text-base md:text-lg leading-relaxed">
          End-to-end real estate advisory, so you navigate the property market
          with absolute clarity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map(({ icon: Icon, title, step, desc }) => (
          <div key={step} className="plan-corners bg-card border border-border p-6 md:p-8 flex flex-col gap-3 md:gap-4">
            <div className="flex items-center justify-between">
              <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              <span className="font-mono text-xs text-muted-foreground tracking-widest">{step}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-serif">{title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* EMI Calculator Section */}
      <div id="emi-calculator" className="mt-24 scroll-mt-32">
        <div className="mb-12">
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5" /> Financial Tools
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide mt-3 mb-4">EMI Calculator</h2>
          <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed max-w-xl">
            Estimate your monthly home loan payments. Adjust the sliders to match your budget and see the breakdown instantly.
          </p>
        </div>
        <div className="bg-card border border-border p-6 md:p-10 plan-corners shadow-lg">
          <EMICalculator compact={true} />
        </div>
      </div>

      <div className="mt-24">
        <ScaleDivider label="How it runs" className="text-muted-foreground" />
      </div>
    </div>
  );
}
