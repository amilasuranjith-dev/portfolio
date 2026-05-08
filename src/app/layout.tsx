import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: `${portfolioData.name} - ${portfolioData.title}`,
  description: portfolioData.description,
  keywords: ["Full Stack Developer", "Java", "Spring Boot", "Angular", "Portfolio", "Sri Lanka"],
  authors: [{ name: portfolioData.name }],
  openGraph: {
    title: `${portfolioData.name} - ${portfolioData.title}`,
    description: portfolioData.description,
    type: "website",
    locale: "en_US",
    url: "https://amilasuranjith.dev", // Replace with actual URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&family=Space+Grotesk:wght@300;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-space-900 text-white antialiased selection:bg-primary selection:text-white transition-colors duration-500">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
