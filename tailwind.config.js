/** @type {import('tailwindcss').Config} */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#ec7f13",
                "background-light": "#f8f7f6",
                "background-dark": "#221910",
            },
            fontFamily: {
                display: ["Epilogue"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                lg: "1rem",
                xl: "1.5rem",
                full: "9999px",
            },
        },
    },
};