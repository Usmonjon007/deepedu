"use client";

import { Navbar, Sidebar } from "@/Components";

const Navigation = ({ params }) => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="flex justify-center items-center h-screen bg-[url('/404.jpg')] bg-cover bg-center">
                <div className="flex flex-col gap-[10px]">
                    <h1 className="text-2xl font-bold text-center">
                        404 | Xato -{" "}
                        <span className="italic">{params.name}</span>
                    </h1>
                    <p className="font-normal">
                        <span className="font-bold italic">{params.name}</span>{" "}
                        nomli sahifa mavjud emas yoki jarayonda
                    </p>
                </div>
            </div>
        </>
    );
};

export default Navigation;
