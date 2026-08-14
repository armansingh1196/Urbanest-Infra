export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-16 max-w-4xl mx-auto w-full min-h-[60vh]">
      <h1 className="text-3xl md:text-5xl font-serif mb-8 text-foreground">Terms of Service</h1>
      <div className="prose prose-sm md:prose-base dark:prose-invert text-muted-foreground font-light leading-relaxed">
        <p>Effective Date: {new Date().getFullYear()}</p>
        <p className="mt-4">
          Welcome to Urbanest Infra. By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy.
        </p>
        <h2 className="text-xl font-medium text-foreground mt-8 mb-4 font-serif">1. Services</h2>
        <p>
          Urbanest Infra provides premium real estate advisory services. The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
        </p>
        <h2 className="text-xl font-medium text-foreground mt-8 mb-4 font-serif">2. Intellectual Property</h2>
        <p>
          The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws and are owned by Urbanest Infra. You may not reproduce, download, transmit or retransmit any part of this website without our prior written consent.
        </p>
        <h2 className="text-xl font-medium text-foreground mt-8 mb-4 font-serif">3. Limitation of Liability</h2>
        <p>
          In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
        </p>
        <h2 className="text-xl font-medium text-foreground mt-8 mb-4 font-serif">4. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </div>
    </div>
  );
}
