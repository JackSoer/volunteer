/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.php",
        "./resources/**/*.php",
        "./resources/**/*.html",
        "./resources/**/*.vue",
        "./resources/**/*.js",
        "./resources/**/*.tsx",
        "./node_modules/flowbite/**/*.js",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
