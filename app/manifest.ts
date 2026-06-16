import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orixen Digital — Designing Solutions. Creating Impact.",
    short_name: "Orixen Digital",
    description:
      "World-class websites, study materials, digital menu cards, portfolios, video edits, school projects and tech support. Futuristic digital experiences engineered to impress.",
    start_url: "/",
    display: "standalone",
    background_color: "#030308",
    theme_color: "#030308",
    orientation: "portrait-primary",
    categories: ["business", "productivity", "design", "developer"],
    lang: "en-US",
    dir: "ltr",
    scope: "/",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Services",
        short_name: "Services",
        description: "View all services offered by Orixen Digital",
        url: "/#services",
        icons: [{ src: "/icon.png", sizes: "any" }],
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Get in touch with Orixen Digital",
        url: "/#contact",
        icons: [{ src: "/icon.png", sizes: "any" }],
      },
      {
        name: "FAQ",
        short_name: "FAQ",
        description: "Frequently asked questions",
        url: "/#faq",
        icons: [{ src: "/icon.png", sizes: "any" }],
      },
    ],
  };
}
