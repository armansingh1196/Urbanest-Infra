export default function ServicesPage() {
  return (
    <div className="pt-32 min-h-screen px-4 md:px-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light tracking-wide mb-8">Our Services</h1>
      <p className="text-muted-foreground font-light text-lg mb-12">
        We provide end-to-end premium real estate advisory services, helping you navigate the Dhanbad property market with absolute clarity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card p-8 border border-border">
          <h3 className="text-xl font-medium mb-4 text-primary">Property Consultation</h3>
          <p className="text-sm text-muted-foreground font-light">Expert advice on selecting the right property based on your budget, location preferences, and investment goals.</p>
        </div>
        <div className="bg-card p-8 border border-border">
          <h3 className="text-xl font-medium mb-4 text-primary">Home Loan Assistance</h3>
          <p className="text-sm text-muted-foreground font-light">Hassle-free home loan processing with our partnered financial institutions at competitive interest rates.</p>
        </div>
        <div className="bg-card p-8 border border-border">
          <h3 className="text-xl font-medium mb-4 text-primary">Legal & Documentation</h3>
          <p className="text-sm text-muted-foreground font-light">Complete support for title search, sale agreement drafting, and property registration.</p>
        </div>
      </div>
    </div>
  );
}
