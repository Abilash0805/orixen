import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://orixendigital.vercel.app";
const SITE_NAME = "Orixen Digital";
const SITE_TITLE = "Orixen Digital — Designing Solutions. Creating Impact.";
const SITE_DESCRIPTION =
  "Orixen Digital crafts world-class websites, study materials, digital menu cards, portfolios, video edits, school projects and tech support. Futuristic digital experiences engineered to impress.";
const SITE_IMAGE = `${SITE_URL}/logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Orixen Digital",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Orixen Digital",
    "web design company",
    "website development",
    "websites",
    "digital menu cards",
    "QR menu",
    "study materials",
    "school projects",
    "academic projects",
    "portfolios",
    "digital products",
    "video editing",
    "motion graphics",
    "tech support",
    "freelance web developer India",
    "Next.js developer",
    "3D websites",
    "WebGL",
    "digital agency",
    "Chennai web design",
  ],
  authors: [{ name: "Abilash", url: SITE_URL }],
  creator: "Abilash",
  publisher: "Orixen Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Orixen Digital logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
    creator: "@orixendigital",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
  verification: {
    google: "",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030308" },
    { media: "(prefers-color-scheme: light)", color: "#030308" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

// JSON-LD structured data for rich Google results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: SITE_IMAGE,
      description: SITE_DESCRIPTION,
      founder: { "@type": "Person", name: "Abilash" },
      email: "abi.abilashv0805@gmail.com",
      sameAs: ["https://wa.me/919789010266"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      image: SITE_IMAGE,
      url: SITE_URL,
      telephone: "+91-97890-10266",
      email: "abi.abilashv0805@gmail.com",
      priceRange: "$$",
      areaServed: "Worldwide",
      founder: { "@type": "Person", name: "Abilash" },
      knowsAbout: [
        "Website Development",
        "Next.js",
        "React",
        "3D Web Experiences",
        "WebGL",
        "Digital Menu Cards",
        "Study Materials",
        "School Projects",
        "Video Editing",
        "Motion Graphics",
        "Tech Support",
        "UI/UX Design",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Website Creation",
          description:
            "Blazing-fast, futuristic websites engineered with modern stacks — from landing pages to full platforms.",
        },
        {
          "@type": "Offer",
          name: "Study Materials",
          description:
            "Crystal-clear notes, guides and learning kits designed for maximum retention and zero confusion.",
        },
        {
          "@type": "Offer",
          name: "Digital Menu Cards",
          description:
            "QR-powered interactive menus that make restaurants feel like the future — instant updates, zero reprints.",
        },
        {
          "@type": "Offer",
          name: "Portfolios & Digital Products",
          description:
            "Personal brands and digital products that look like they cost a fortune — designed to convert.",
        },
        {
          "@type": "Offer",
          name: "Video Edits",
          description:
            "Cinematic cuts, motion graphics and reels that stop the scroll and demand attention.",
        },
        {
          "@type": "Offer",
          name: "Tech Support & More",
          description:
            "Your on-call tech command center — setup, troubleshooting and digital solutions on demand.",
        },
        {
          "@type": "Offer",
          name: "School Projects",
          description:
            "Done-for-you academic projects — working models, presentations and reports that earn top marks.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Orixen Digital provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We create websites, study materials, digital menu cards, portfolios and digital products, video edits, school projects, and provide tech support. If it lives on a screen, we can probably build it, design it or fix it.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical website take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A polished landing page or portfolio usually ships in 1-2 weeks. Larger experiences with custom 3D, animation and multiple pages take 3-6 weeks depending on scope. You'll always get a clear timeline before we start.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with clients remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Our entire workflow is remote-first — briefs, previews, revisions and delivery all happen online, with quick responses over WhatsApp and email.",
          },
        },
        {
          "@type": "Question",
          name: "What do digital menu cards include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A branded, QR-code accessible menu your customers open instantly on their phones — with live price updates, categories, images and zero reprinting costs whenever your menu changes.",
          },
        },
        {
          "@type": "Question",
          name: "How do revisions work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every project includes revision rounds so we refine the result until it matches your vision. We share live previews early and often, so there are no surprises at delivery.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Message us on WhatsApp at +91 97890 10266 or email abi.abilashv0805@gmail.com with a short description of what you need. We'll reply with questions, a plan and a quote.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="lenis">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-void noise cursor-none-desktop`}
      >
        {children}
      </body>
    </html>
  );
}
