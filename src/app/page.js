"use client";
import Head from "next/head";
import { Navbar, Header, Sidebar } from "../Components";

export default function Home() {
    return (
        <>
            <Head>
                <title>DEEPEDU | deepedu.uz - onlayn ta'lim platformasi</title>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <Navbar />
            <Sidebar />
            <main>
                <Header />
            </main>
        </>
    );
}
