"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// framer motion
import { motion } from "framer-motion";

const Sidebar = () => {
    const [menu, setMenu] = useState(true);

    const [isHome, setIsHome] = useState(false);
    const [isCourses, setIsCourses] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [isNotes, setIsNotes] = useState(false);
    const [isVirtualClass, setIsVirtualClass] = useState(false);
    const [isRewards, setIsRewards] = useState(false);

    return (
        <div
            className={`sidebar w-[250px] left-0 top-0 h-screen fixed z-[99999] flex flex-col justify-between items-center transition-all duration-300 ease-in ${
                menu ? "" : "w-[80px]"
            }`}
        >
            <Link href="/" className="mt-[10px] focus:ring outline-none">
                {menu ? (
                    <Image
                        className={`w-[200px]`}
                        src={"/logo-dark.png"}
                        width={600}
                        height={152}
                        alt="LOGO"
                    />
                ) : (
                    <Image
                        className={`${menu ? "" : "w-[40px] mt-3 mr-1"}`}
                        src={"/android-chrome-192x192.png"}
                        width={192}
                        height={192}
                        alt={"LOGO"}
                    />
                )}
            </Link>
            <div className="flex flex-col items-center justify-between gap-[2rem]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: -100 }}
                    className={`flex flex-col items-center justify-between gap-2 relative top-[100px] ${
                        menu ? "" : "invisible"
                    }`}
                >
                    <Image
                        className={`rounded-[40px]`}
                        src={"/assets/sidebar-image.png"}
                        width={150}
                        height={150}
                        alt="sidebar image"
                    />
                    <span className="text-start text-secondary font-montserrat text-[14px] font-normal">
                        <span className="font-bold text-[#fff]">Ism: </span>
                        {`Usmonjon Hasanov`}
                        <br />
                        <span className="font-bold text-[#fff]">Turi: </span>
                        {`Admin`}
                    </span>
                </motion.div>
                <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="list-none flex flex-col items-start justify-between gap-3"
                >
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <button
                            className="p-[10px] w-full transition-all duration-300 ease-in-out hover:opacity-80 focus:ring"
                            onClick={() => {
                                setMenu(!menu);
                                localStorage.setItem("menu", !menu);
                            }}
                        >
                            <Image
                                src={"/assets/sidebar-list/menu.png"}
                                width={35}
                                height={35}
                                alt="menu btn"
                            />
                        </button>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link
                            href={"/"}
                            className={`flex items-center gap-[15px] p-[10px] rounded-[10px] menu-btn outline-none focus:ring ${() => {
                                if (pathname == "/") {
                                    return "selected-menu";
                                } else {
                                    return "";
                                }
                            }}`}
                        >
                            <Image
                                src={"/assets/sidebar-list/1.png"}
                                width={35}
                                height={35}
                                alt="home btn"
                            />
                            <span className={`${menu ? "" : "hidden"}`}>
                                Bosh Sahifa
                            </span>
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link
                            href={"/courses"}
                            className="flex items-center gap-[15px] p-[10px] rounded-[10px] menu-btn outline-none focus:ring"
                        >
                            <Image
                                src={"/assets/sidebar-list/2.png"}
                                width={35}
                                height={35}
                                alt="courses btn"
                            />
                            <span className={`${menu ? "" : "hidden"}`}>
                                Kurslarim
                            </span>
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link
                            href={"/profile"}
                            className="flex items-center gap-[15px] p-[10px] rounded-[10px] menu-btn outline-none focus:ring"
                        >
                            <Image
                                src={"/assets/sidebar-list/3.png"}
                                width={35}
                                height={35}
                                alt="profile btn"
                            />
                            <span className={`${menu ? "" : "hidden"}`}>
                                Profilim
                            </span>
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link
                            href={"/notes"}
                            className="flex items-center gap-[15px] p-[10px] rounded-[10px] menu-btn outline-none focus:ring"
                        >
                            <Image
                                src={"/assets/sidebar-list/4.png"}
                                width={35}
                                height={35}
                                alt="notes btn"
                            />
                            <span className={`${menu ? "" : "hidden"}`}>
                                Eslatmalarim
                            </span>
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link
                            href={"/virtual-class"}
                            className="flex items-center gap-[15px] p-[10px] rounded-[10px] menu-btn outline-none focus:ring"
                        >
                            <Image
                                src={"/assets/sidebar-list/5.png"}
                                width={35}
                                height={35}
                                alt="vr-class btn"
                            />
                            <span className={`${menu ? "" : "hidden"}`}>
                                Virtual Sinf
                            </span>
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link
                            href={"/rewards"}
                            className="flex items-center gap-[15px] p-[10px] rounded-[10px] menu-btn outline-none focus:ring"
                        >
                            <Image
                                src={"/assets/sidebar-list/6.png"}
                                width={35}
                                height={35}
                                alt="rewards btn"
                            />
                            <span className={`${menu ? "" : "hidden"}`}>
                                Yutuqlarim
                            </span>
                        </Link>
                    </motion.li>
                </motion.ul>
            </div>
            <Link href="/" className="mb-[10px]">
                <Image
                    className={`w-[200px] ${menu ? "visible" : "invisible"}`}
                    src={"/logo-dark.png"}
                    width={600}
                    height={152}
                    alt="LOGO"
                />
            </Link>
        </div>
    );
};

export default Sidebar;
// export const menu
