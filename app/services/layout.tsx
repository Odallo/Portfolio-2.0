import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Professional web development services by Odallo Eugine: starter websites, business websites, and e-commerce solutions with transparent pricing.",
  openGraph: {
    title: "Services & Pricing | Odallo Eugine",
    description: "Professional web development services by Odallo Eugine: starter websites, business websites, and e-commerce solutions.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
