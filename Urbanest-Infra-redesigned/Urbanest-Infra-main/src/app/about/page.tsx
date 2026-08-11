import { ScaleDivider } from "@/components/layout/ScaleDivider";
import { Building2, Handshake, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-16 text-center mb-20">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">About Urbanest</span>
        <h1 className="text-4xl md:text-6xl font-serif tracking-wide mt-4 mb-8 leading-tight">
          We read the ground before you buy the plot.
        </h1>
        <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-3xl mx-auto">
          Urbanest Infra is Dhanbad&apos;s channel partner for premium real estate — the desk
          between discerning buyers and the developers who actually deliver. We bring
          transparency, paperwork discipline, and a plain-spoken read on value to every deal.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-16 mb-20">
        <div className="relative aspect-[16/7] overflow-hidden border border-border plan-corners">
          <img src="/images/about-01.jpeg" alt="Urbanest Infra project elevation" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 mb-24">
        <ScaleDivider label="Since 2019" className="text-muted-foreground" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div className="plan-corners bg-card border border-border p-8">
          <ShieldCheck className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-serif text-xl mb-3">Verified developers</h3>
          <p className="text-muted-foreground font-light text-sm leading-relaxed">
            Every project on our list is checked against RERA registration and the
            developer&apos;s actual delivery history — not just their brochure.
          </p>
        </div>
        <div className="plan-corners bg-card border border-border p-8">
          <Handshake className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-serif text-xl mb-3">No hidden margins</h3>
          <p className="text-muted-foreground font-light text-sm leading-relaxed">
            We work on a transparent advisory fee, so the price you&apos;re quoted is the
            price the developer is quoting — nothing padded in between.
          </p>
        </div>
        <div className="plan-corners bg-card border border-border p-8">
          <Building2 className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-serif text-xl mb-3">Local, not remote</h3>
          <p className="text-muted-foreground font-light text-sm leading-relaxed">
            Our team walks every site in Dhanbad ourselves — Saraidhela to Bank More —
            before it goes on the platform.
          </p>
        </div>
      </div>

      <section className="site-stone blueprint-grid py-24 px-4 md:px-16 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Our mission</span>
          <p className="text-2xl md:text-3xl font-serif tracking-wide mt-4 leading-relaxed">
            &quot;Bring the clarity of a proper land survey to a market that usually runs on
            word of mouth — so every investment is built on solid ground.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}
