const { config } = require("dotenv");

module.exports = function (eleventyConfig) {
    
    eleventyConfig.setBrowserSyncConfig({
        https: {
            key: '/etc/localhost.key',
            cert: '/etc/localhost.crt'
        }
    });
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("services");
    eleventyConfig.addPassthroughCopy("testimonials");
    eleventyConfig.addPassthroughCopy("src/js");

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    
      return {
        passthroughFileCopy: true,
       markdownTemplateEngine: "njk",
       templateFormats: ["html", "njk", "md"],
      
        dir: {
            input: "src",
            output: "_site",
            data: "_data",
            include: "includes"
        }
    }
}