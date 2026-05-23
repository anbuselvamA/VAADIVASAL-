import type { Metadata } from "next";
import { Inter, Bebas_Neue, Geist } from "next/font/google";
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaadivaasal Turf | Premium Cinematic Sports Booking",
  description: "Book your premium turf experience at Vaadivaasal. World-class synthetic grass, high-mast LED lights, and flexible 24/7 booking plans in Virudhachalam.",
  keywords: ["Turf booking", "Football Turf", "Cricket Turf", "Virudhachalam Turf", "Premium Sports", "FIFA Certified Grass", "Vaadivaasal", "Night Matches"],
  authors: [{ name: "Vaadivaasal Turf" }],
  openGraph: {
    title: "Vaadivaasal Turf | Premium Sports Arena",
    description: "Experience the perfect pitch. Floodlights. Premium Grass. Instant Booking.",
    url: "https://vaadivasal.vercel.app",
    siteName: "Vaadivaasal Turf",
    images: [
      {
        url: "/turf_night_view.png",
        width: 1200,
        height: 630,
        alt: "Vaadivaasal Turf Night View",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaadivaasal Turf | Dominate The Pitch",
    description: "Book your premium turf experience instantly. 24/7 Action in Virudhachalam.",
    images: ["/turf_night_view.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "dark", bebasNeue.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
