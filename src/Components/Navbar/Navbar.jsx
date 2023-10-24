import Image from "next/image";
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <header className="w-full left-0 top-0 h-[70px] flex justify-between fixed z-[9999] bg-[#00000050]">
            <div></div>
            <nav className="flex justify-center items-center gap-5 mr-10">
                <div className="flex justify-center items-center relative w-[250px]">
                    <input
                        type="text"
                        placeholder="Kurslarni qidhiring. . ."
                        className="w-[250px] rounded-[25px] bg-[#A6A6A680] placeholder:text-[#1A1A1A] placeholder:text-[12px] placeholder:font-[400] p-2.5 flex items-center justify-center shadow-input outline-none focus:ring"
                    />
                    <button className="cursor-pointer absolute right-3 focus:outline-none focus:ring">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                id="Vector"
                                d="M17.5261 15.9101C17.1847 15.6141 16.7523 15.5459 16.3653 15.7053L15.6142 14.9542C17.0482 13.3609 17.9359 11.2669 17.9359 8.96794C17.8903 4.00598 13.8842 0 8.94518 0C4.00598 0 0 4.00606 0 8.94518C0 13.8843 4.00594 17.8904 8.94518 17.8904C11.244 17.8904 13.3609 17.0254 14.9314 15.5687L15.6825 16.3198C15.5231 16.7523 15.6142 17.253 15.9785 17.5717L18.1181 19.4836C18.3457 19.6884 18.5961 19.7795 18.8692 19.7795C19.1878 19.7795 19.4838 19.643 19.7113 19.3926C20.1209 18.9146 20.0982 18.209 19.6203 17.7765L17.5261 15.9101ZM8.9451 15.6141C5.28053 15.6141 2.27605 12.6325 2.27605 8.94509C2.27605 5.28053 5.28045 2.27604 8.9451 2.27604C12.6324 2.27604 15.6141 5.28061 15.6141 8.94509C15.6143 12.6325 12.6325 15.6141 8.9451 15.6141Z"
                                fill="black"
                                fillOpacity="0.8"
                            />
                        </svg>
                    </button>
                </div>
                <div className="w-[40px] h-[20px]">
                    <input
                        type="checkbox"
                        className="appearance-none relative w-[40px] h-[20px] bg-[#C0C0C0] rounded-[10px] cursor-pointer custom-checkbox flex items-center justify-start outline-none focus:ring"
                    />
                </div>
                <div>
                    <Link
                        href="/logout"
                        className="rounded-full hover:opacity-90 transition-all duration-300 cursor-pointer outline-none focus:ring"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 35 35"
                            fill="none"
                        >
                            <circle
                                cx="17.5"
                                cy="17.5"
                                r="17.5"
                                fill="url(#paint0_linear_302_171)"
                                fillOpacity="0.3"
                            />
                            <g filter="url(#filter0_d_302_171)">
                                <path
                                    d="M17.5 10C13.3661 10 10 13.3663 10 17.5C10 21.6337 13.3663 25 17.5 25C21.6337 25 25 21.6337 25 17.5C25 13.3663 21.6337 10 17.5 10ZM16.9767 13.1396C16.9767 12.843 17.2035 12.6163 17.5 12.6163C17.7965 12.6163 18.0233 12.843 18.0233 13.1396V16.2791C18.0233 16.5582 17.7965 16.8024 17.5 16.8024C17.2035 16.8024 16.9767 16.5757 16.9767 16.2791V13.1396ZM20.5523 20.1514C19.7849 21.0409 18.6686 21.5467 17.5 21.5467C15.2675 21.5467 13.4534 19.7327 13.4534 17.5C13.4534 16.3314 13.9592 15.2152 14.8487 14.4478C15.0755 14.2559 15.3894 14.2734 15.5813 14.5001C15.7732 14.7269 15.7557 15.0408 15.529 15.2327C14.2731 16.3141 14.1336 18.2153 15.2324 19.4709C16.3138 20.7268 18.215 20.8662 19.4706 19.7674C20.7265 18.6686 20.866 16.7848 19.7672 15.5292C19.68 15.4246 19.5752 15.32 19.4706 15.2327C19.2439 15.0407 19.2264 14.7094 19.4183 14.5001C19.6102 14.2908 19.9416 14.2559 20.1509 14.4478C21.8428 15.9128 22.0172 18.4769 20.5521 20.1514L20.5523 20.1514Z"
                                    fill="#00F5FC"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_302_171"
                                    x="8.5"
                                    y="8.5"
                                    width="19"
                                    height="19"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dx="0.5" dy="0.5" />
                                    <feGaussianBlur stdDeviation="1" />
                                    <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                    />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0.960784 0 0 0 0 0.988235 0 0 0 0.3 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_302_171"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_302_171"
                                        result="shape"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_302_171"
                                    x1="17.5"
                                    y1="0"
                                    x2="17.5"
                                    y2="35"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00F5FC" />
                                    <stop offset="1" stopColor="#155A5C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
