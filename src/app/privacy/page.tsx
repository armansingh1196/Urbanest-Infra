export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-16 max-w-4xl mx-auto w-full min-h-[60vh]">
      <h1 className="text-3xl md:text-5xl font-serif mb-8 text-foreground">Privacy Policy</h1>
      <div className="prose prose-sm md:prose-base dark:prose-invert text-muted-foreground font-light leading-relaxed">
        <p>Effective Date: {new Date().getFullYear()}</p>
        <p className="mt-4">
          At Urbanest Infra, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
        <h2 className="text-xl font-medium text-foreground mt-8 mb-4 font-serif">1. Information We Collect</h2>
        <p>
          We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, phone number.
        </p>
        <h2 className="text-xl font-medium text-foreground mt-8 mb-4 font-serif">2. How We Use Collected Information</h2>
        <p>
          Urbanest Infra may collect and use Users personal information for the following purposes:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
          <li>To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
          <li>To send periodic emails or messages: We may use the email address or phone number to respond to inquiries, questions, and/or other requests.</li>
        </ul>
        <h2 className="text-xl font-medium text-foreground mt-8 mb-4 font-serif">3. How We Protect Your Information</h2>
        <p>
          We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
        </p>
        <h2 className="text-xl font-medium text-foreground mt-8 mb-4 font-serif">4. Sharing Your Personal Information</h2>
        <p>
          We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
        </p>
      </div>
    </div>
  );
}
