import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aaditya Computer's & Digital Hub | Barabanki",
  description:
    "Aaditya Computer's & Digital Hub offers top-notch computer courses, digital services, and skill development in Barabanki. Join us to build your future with the best in education.",
  keywords: [
    "Aaditya Computer Barabanki",
    "Digital Hub Barabanki",
    "Computer Courses",
    "Skill Development",
    "Web Designing",
    "Tally",
    "CCC",
    "Barabanki Coaching"
  ],
  authors: [{ name: "Shahe Alam", url: "https://www.aadityaacomputer.com" }],
  creator: "Aaditya Computer's & Digital Hub",
  metadataBase: new URL("https://www.aadityaacomputer.com"),
  openGraph: {
    title: "Aaditya Computer's & Digital Hub | Barabanki",
    description:
      "Explore the best computer training institute in Barabanki. Courses include Web Development, Tally, CCC, and more.",
    url: "https://www.aadityaacomputer.com",
    siteName: "Aaditya Computer's & Digital Hub",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aaditya Computer's & Digital Hub Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaditya Computer's & Digital Hub | Barabanki",
    description:
      "Top training institute in Barabanki for digital skills, programming, and computer education.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
