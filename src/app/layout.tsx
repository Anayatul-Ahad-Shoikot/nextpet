import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/munna/Footer";
import Navigation from "../components/Navigation";

const nunitoSans = Nunito_Sans({
    variable: "--font-nunitoSans",
});

export const metadata: Metadata = {
    title: "Pets - food&accessories",
    description: "Accessory shop for your day to day pets life.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en"  data-arp="" className={`${nunitoSans.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <main>
                    <Navigation />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
