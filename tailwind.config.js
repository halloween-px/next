const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                'btn': '0 0.5em 0.5em -0.4em',
            }
        },
        colors: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            "main": "#05FFFA",
            "dark": "#141C24",
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '12px',
            }
        },

    },
    plugins: [],
}
