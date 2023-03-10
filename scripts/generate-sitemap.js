const sitemap = require('nextjs-sitemap-generator')
const path = require('path')

sitemap({
    baseUrl: 'https://barrsoft.com',
    pagesDirectory: path.resolve(__dirname, '../out/'),
    targetDirectory: path.resolve(__dirname, '../out/'),
    ignoredExtensions: ["js", "map", "json", "xml", "png", "css", "jpeg", "jpg", "icon", "txt"],
    ignoredPaths: [
        "404",
        "favicon",
        "index",
    ],
    extraPaths: [
        "/"
    ]
});