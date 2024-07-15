/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#c30970",
                secondary: "#c3096f36",
                hover: "#c3096f80",
            },
        },
    },
    plugins: [],
};
