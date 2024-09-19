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
  const user = await getSessionUser();
  const isLoggedIn = !!user;
  const name = user?.name as string | undefined;
  const image = user?.image as string | undefined;
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar name={name} image={image} isLoggedIn={isLoggedIn} />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
