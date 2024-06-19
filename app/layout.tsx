import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from '@/app/ui/navigation/navigation';
import Footer from '@/app/components/footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "Url Shortener",
  description: "Shorten your urls with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
