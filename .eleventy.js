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
    eleventyConfig.addShortcode('excerpt', levity => extractExcerpt(levity));
    
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


function extractExcerpt(levity) {
    if (!levity.hasOwnProperty('templateContent')) {
      console.warn('Failed to extract excerpt: Document has no property "templateContent".');
      return null;
    }
   
    let excerpt = null;
    const content = levity.templateContent;
   
    // The start and end separators to try and match to extract the excerpt
    const separatorsList = [
      { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
      { start: '<p>', end: '</p>' }
    ];
   
    separatorsList.some(separators => {
      const startPosition = content.indexOf(separators.start);
      const endPosition = content.indexOf(separators.end);
   
      if (startPosition !== -1 && endPosition !== -1) {
        excerpt = content.substring(startPosition + separators.start.length, endPosition).trim();
        return true; // Exit out of array loop on first match
      }
    });
   
    return excerpt;
  }