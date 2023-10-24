/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                input: "inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            },
        },
        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
        },
        colors: {
            accent: "#00F5FC",
            secondary: "#C0C0C0",
            linear1: "linear-gradient(30deg, #00F5FC 100%, #155A5C 100%)",
            linear2: "linear-gradient(30%, #0074FC 100%, #155A5C 100%)",
            linear3: "linear-gradient(10%, #BB9696 100%, #000000 100%)",
            linear4: "linear-gradient(50%, #33323B 100%, #767676 100%)",
            linear5: "linear-gradient(100%, #070A15 100%, #2B3042 100%)",
        },
    },
    plugins: [],
};
