/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                earth: {
                    DEFAULT: '#A0522D',
                    50: '#F4E5D9',
                    100: '#EDD7C4',
                    200: '#DFBB9A',
                    300: '#D19E70',
                    400: '#C38246',
                    500: '#A0522D',
                    600: '#7B3F23',
                    700: '#562C19',
                    800: '#31190E',
                    900: '#0C0604',
                },
                nature: {
                    DEFAULT: '#2E8B57',
                    50: '#A3E4C4',
                    100: '#92DFB8',
                    200: '#70D5A1',
                    300: '#4FCA89',
                    400: '#35B370',
                    500: '#2E8B57',
                    600: '#236A42',
                    700: '#18482D',
                    800: '#0D2718',
                    900: '#020603',
                },
                cream: '#F5F5DC',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
