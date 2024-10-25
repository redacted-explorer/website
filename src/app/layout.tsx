import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { TimeProvider } from "@/components/ui/TimeAgo";

export const metadata: Metadata = {
  title: "[Redacted] Explorer",
  description: "Your navigation through NEAR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TimeProvider>
        <body className="flex flex-col min-h-screen dark text-foreground bg-background">
          <Header />
            {children}
          <Footer />
        </body>
      </TimeProvider>
    </html>
  );
}
