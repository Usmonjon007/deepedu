import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
    return (
        <section
            className={`h-screen w-full bg-[url('/assets/wallpaper.png')] bg-cover bg-center bg-no-repeat flex justify-center`}
        >
            <div className="mt-[150px] text-center uppercase home-title">
                <div>
                    <motion.h1
                        animate={{ y: -700 }}
                        className="text-[60px] font-[600] relative top-[700px]"
                    >
                        Xush Kelibsiz Talaba!
                    </motion.h1>
                    <motion.h2
                        animate={{ y: -700 }}
                        className="text-[35px] font-[600] top-[700px] relative"
                    >
                        Bizning platformamizda
                        <br />
                        sifatli ta'lim oling
                    </motion.h2>
                </div>
                <br />
                <br />
                <motion.div
                    animate={{ y: -700 }}
                    className="relative top-[700px]"
                >
                    <Link
                        href="/courses"
                        className="capitalize home-link rounded-[50px]"
                    >
                        O'rganishni Boshlash
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Header;
