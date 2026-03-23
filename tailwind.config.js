export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#ffffff',
                accent: '#10b981'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif']
            },
            backdropBlur: {
                glass: '10px'
            }
        }
    },
    plugins: []
}
