import { ScaleDivider } from "@/components/layout/ScaleDivider";
import { Building2, Handshake, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full height to push collage below fold */}
      <div className="min-h-[90vh] flex flex-col items-center justify-center pt-20 px-4 md:px-16 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">About Urbanest</span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif tracking-wide mt-4 md:mt-6 mb-6 md:mb-10 leading-tight">
            We read the ground before you buy the plot.
          </h1>
          <p className="text-muted-foreground font-light text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            Urbanest Infra is India&apos;s channel partner for premium real estate — the desk
            between discerning buyers and the developers who actually deliver. We bring
            transparency, paperwork discipline, and a plain-spoken read on value to every deal.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12 md:mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 md:gap-4 h-[40vh] md:h-[600px]">
          <div className="col-span-2 row-span-2 relative overflow-hidden border border-border plan-corners group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img src="/images/sunnys-one-address/sunnys-one-address-1.png" alt="Luxury Villa" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="relative overflow-hidden border border-border plan-corners group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img src="/images/sunnys-urban-oasis/sunnys-urban-oasis-1.png" alt="Premium Duplex" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="relative overflow-hidden border border-border plan-corners group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img src="/images/sunnys-86-east/sunnys-86-east-1.jpeg" alt="Residential Apartments" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="col-span-2 relative overflow-hidden border border-border plan-corners group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img src="/images/sumbridhi-green-park/sumbridhi-green-park-1.PNG" alt="Triplex Villas" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 mb-12 md:mb-24">
        <ScaleDivider label="Since 2019" className="text-muted-foreground" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-32">
        <div className="plan-corners bg-card border border-border p-5 md:p-8">
          <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4" />
          <h3 className="font-serif text-base md:text-xl mb-2 md:mb-3">Verified developers</h3>
          <p className="text-muted-foreground font-light text-[11px] md:text-sm leading-relaxed">
            Every project on our list is checked against RERA registration and the
            developer&apos;s actual delivery history — not just their brochure.
          </p>
        </div>
        <div className="plan-corners bg-card border border-border p-5 md:p-8">
          <Handshake className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4" />
          <h3 className="font-serif text-base md:text-xl mb-2 md:mb-3">No hidden margins</h3>
          <p className="text-muted-foreground font-light text-[11px] md:text-sm leading-relaxed">
            We work on a transparent advisory fee, so the price you&apos;re quoted is the
            price the developer is quoting — nothing padded in between.
          </p>
        </div>
        <div className="plan-corners bg-card border border-border p-5 md:p-8">
          <Building2 className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4" />
          <h3 className="font-serif text-base md:text-xl mb-2 md:mb-3">Local, not remote</h3>
          <p className="text-muted-foreground font-light text-[11px] md:text-sm leading-relaxed">
            Our team walks every site ourselves — from the foundation up —
            before it goes on the platform.
          </p>
        </div>
      </div>

      <section className="site-stone blueprint-grid py-12 md:py-24 px-4 md:px-16 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">Our mission</span>
          <p className="text-lg sm:text-2xl md:text-3xl font-serif tracking-wide mt-3 md:mt-4 leading-relaxed">
            &quot;Bring the clarity of a proper land survey to a market that usually runs on
            word of mouth — so every investment is built on solid ground.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}
