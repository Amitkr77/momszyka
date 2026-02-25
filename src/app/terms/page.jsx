export const metadata = {
  title: "Terms of Service – Momszyka",
  description: "Read our terms and conditions before using Momszyka.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using Momszyka's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to update these terms at any time, and continued use of the platform constitutes acceptance of the revised terms.",
  },
  {
    title: "2. Use of Services",
    content:
      "Momszyka provides a platform connecting customers with home chefs and food delivery services. You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others. You must be at least 18 years of age to place orders or register an account.",
  },
  {
    title: "3. Account Registration",
    content:
      "To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Please notify us immediately of any unauthorized use of your account.",
  },
  {
    title: "4. Orders & Payments",
    content:
      "All orders placed through Momszyka are subject to availability and confirmation. Prices listed are inclusive of applicable taxes unless stated otherwise. We reserve the right to cancel or refuse any order at our discretion. Payment must be completed at the time of placing an order.",
  },
  {
    title: "5. Cancellations & Refunds",
    content:
      "Orders may be cancelled up to 2 hours before the selected delivery slot. Refunds, if applicable, will be processed within 5–7 business days to the original payment method. Momszyka is not liable for delays caused by circumstances beyond our control.",
  },
  {
    title: "6. Food Allergies & Dietary Requirements",
    content:
      "While we take every precaution, Momszyka cannot guarantee that meals are free from allergens. Customers with food allergies or dietary restrictions must clearly state them in the order notes. Momszyka is not liable for allergic reactions resulting from failure to disclose such requirements.",
  },
  {
    title: "7. Intellectual Property",
    content:
      "All content on the Momszyka platform, including text, images, logos, and branding, is the intellectual property of Momszyka or its licensors. You may not reproduce, distribute, or use any content without prior written consent.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "Momszyka shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability to you for any claim shall not exceed the amount paid by you for the order in question.",
  },
  {
    title: "9. Governing Law",
    content:
      "These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Bihar, India.",
  },
  {
    title: "10. Contact",
    content:
      "If you have any questions about these Terms of Service, please contact us at momszyka@gmail.com or call us at +91 9304531876.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 py-16 sm:py-24">
      <article className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-900 dark:text-amber-50 mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: January 1, 2025 • Effective immediately
          </p>
        </header>

        {/* Intro */}
        <p className="text-base text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
          Please read these terms carefully before using Momszyka. These terms
          apply to all users of our platform, including customers, home chefs,
          and visitors.
        </p>

        {/* Content Sections */}
        <div className="space-y-10">
          {sections.map(({ title, content }) => (
            <section key={title}>
              <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3">
                {title}
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {content}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
