import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import { ArtistProvider } from "@/context/ArtistContext";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Artistly | Book Performing Artists",
  description: "Find and book performing artists for your events.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ArtistProvider>
          <Header />
          <main>{children}</main>
          <Toaster position="top-center" />
          <Footer />
        </ArtistProvider>
      </body>
    </html>
  );
}
