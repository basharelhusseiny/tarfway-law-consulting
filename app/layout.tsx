import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/providers/ScrollToTop";
import { Footer, Header } from "@/components/layout";

const cairo = Cairo({ subsets: ["arabic"], display: "swap" });

export const metadata: Metadata = {
  title:
    "مؤسسة الطرفاوي للمحاماة والاستشارات القانونية | خدمات قانونية متكاملة في مصر",
  description:
    "مؤسسة الطرفاوي للمحاماة والاستشارات القانونية تقدم خدمات قانونية متكاملة للشركات والأفراد تشمل الاستشارات القانونية، التقاضي، التحكيم، حل النزاعات، خدمات الشركات، الملكية الفكرية، والخدمات العقارية داخل مصر وخارجها.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"ar"} dir={"rtl"}>
      <body
        className={`${cairo.className} antialiased min-h-screen flex flex-col`}
      >
        <ScrollToTop />
        <Header />
        <main className="grow mt-[78px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
