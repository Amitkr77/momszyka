import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Move themeColor here
export const viewport = {
  themeColor: "#FF8F00",
};

export const metadata = {
  title: "Momszyka - Homemade Food Delivery Platform in India",
  description:
    "Momszyka is an online platform to order homemade meals prepared by local moms. Fresh, hygienic, and delivered to your doorstep.",
  keywords: [
    "Momszyka",
    "homemade food delivery",
    "home cooked meals",
    "food delivery India",
    "online food ordering",
    "ghar ka khana delivery",
  ],
  metadataBase: new URL("https://momszyka.in"),
  openGraph: {
    title: "Momszyka - Homemade Meals Delivered",
    description:
      "Order fresh homemade meals from local moms with Momszyka. Hygienic, tasty, and made with love.",
    url: "https://momszyka.in",
    siteName: "Momszyka",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Momszyka Food Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Momszyka - Homemade Meals Delivered",
    description:
      "Fresh homemade food delivered to your doorstep from local moms.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
  // themeColor removed from here
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="6k3dvZ9SiVeJSJDHxy83Hf-79OuT43BJ3nezowqZ3cw"
        />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Momszyka",
              description:
                "Momszyka delivers fresh, home-cooked meals made by moms in your city.",
              url: "https://momszyka.in",
              telephone: "+919304531876",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                "https://instagram.com/momszyka",
                "https://wa.me/919304531876",
              ],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
