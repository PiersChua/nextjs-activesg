import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getSessionUser } from "@/utils/getSessionUser";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fit SG",
  description: "Fit SG",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = !!(await getSessionUser());
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar isLoggedIn={isLoggedIn} />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
