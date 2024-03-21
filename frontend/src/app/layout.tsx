import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lorem Ipsum",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium inventore et quibusdam ipsa natus veniam nisi, perspiciatis esse, facere quisquam maiores mollitia itaque ut fuga alias rem voluptate exercitationem nostrum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
