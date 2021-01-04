module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.tsx', './public/index.html'],
            defaultExtrator: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }),
    ]
}