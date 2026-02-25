import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – Momszyka",
  description: "Learn how Momszyka collects, uses, and protects your data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly to us when you create an account, place an order, or contact us. This includes your name, email address, phone number, delivery address, and payment details. We also automatically collect certain usage data such as IP address, browser type, and pages visited.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use your information to process and deliver your orders, send order confirmations and updates, respond to your queries, improve our platform and services, send promotional emails and newsletters (only if you opt in), and comply with legal obligations.",
  },
  {
    title: "3. Sharing of Information",
    content:
      "We do not sell your personal information to third parties. We share your data only with delivery partners who fulfil your orders, and with trusted service providers who assist in operating our platform (such as payment processors). All third parties are bound by confidentiality agreements.",
  },
  {
    title: "4. Cookies & Tracking",
    content:
      "Momszyka uses cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and analyse site traffic. You can control cookie settings through your browser. Disabling cookies may affect some features of the platform.",
  },
  {
    title: "5. Data Security",
    content:
      "We implement industry-standard security measures including encryption and secure servers to protect your personal data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us. Certain data may be retained for legal or regulatory purposes.",
  },
  {
    title: "7. Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data at any time. You may also opt out of marketing communications at any time by clicking 'Unsubscribe' in any email or contacting us directly. We will respond to all requests within 30 days.",
  },
  {
    title: "8. Children's Privacy",
    content:
      "Momszyka does not knowingly collect personal information from children under the age of 13. If we become aware that a child has provided us with personal data, we will take steps to delete such information promptly.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by posting a notice on our website. Your continued use of Momszyka after changes are posted constitutes your acceptance of the updated policy.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at momszyka@gmail.com or call +91 9304531876. We are happy to help.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 py-16 sm:py-24">
      <article className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-900 dark:text-amber-50 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: January 1, 2025 • Effective immediately
          </p>
        </header>

        {/* Intro */}
        <p className="text-base text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
          Your privacy matters to us. This policy explains what data we collect,
          how we use it, and the choices you have. We are committed to keeping
          your information safe and transparent.
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
