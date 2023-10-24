import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "DEEPEDU.UZ | deepedu.zu - sifatli onlayn ta'lim platformasi",
    description: "DEEPEDU.UZ | Sifatli onlayn ta&#39;lim platformasi",
};

export default function RootLayout({ children }) {
    return (
        <html lang="uz">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
