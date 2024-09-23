import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuda Yahya | Software Engineer",
  description: "Aziiza Yuda Yahya Personal Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
