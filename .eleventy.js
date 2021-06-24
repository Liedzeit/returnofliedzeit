const { config } = require("dotenv");
const { DateTime } = require("luxon");
const fs = require("fs");

const pluginRss = require("@11ty/eleventy-plugin-rss");

const pluginNavigation = require("@11ty/eleventy-navigation");

const searchFilter = require("./src/filters/searchFilter");

console.log("eleventy----")


module.exports = function (eleventyConfig) {
  let markdownIt = require("markdown-it");
  let markdownfootnote = require("markdown-it-footnote");
  let options = {
    html: true
  };
  let markdownLib = markdownIt(options).use(markdownfootnote);
  
  eleventyConfig.setLibrary("md", markdownLib);
  
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginNavigation);

    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addLayoutAlias("post", "layouts/simple.njk");



    eleventyConfig.setBrowserSyncConfig({
        https: {
            key: '/etc/localhost.key',
            cert: '/etc/localhost.crt'
        }
    });

    ////////////////////////////////////////////////////////////////
    // Comments
    ////////////////////////////////////////////////////////////////

    eleventyConfig.addFilter("readableDate", dateObj => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });
  
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });


    eleventyConfig.addCollection("postsWithComments", function(collection) {
      const postsWithComments = new Set();
  
      collection.getFilteredByTag("levity").forEach(function(item) {
        const comments = Object.values(item.data.comments)
          .filter(comment => comment.post === item.fileSlug)
          .map(comment => ({...comment, date: comment.date && new Date(comment.date)}));
  
        item.data.staticmanEntries = comments;
  
        postsWithComments.add(item);
      });
  
      return [...postsWithComments];
    });  

  


    eleventyConfig.addFilter('absoluteUrl', (url) => 
    `https://liedzeit.com${url}`
    );










    
    eleventyConfig.addCollection("levity2", function(collection) {
      const coll = collection.getFilteredByTag("levity");
    
      for(let i = 0; i < coll.length ; i++) {
        const prevPost = coll[i-1];
        const nextPost = coll[i + 1];
    
        coll[i].data["prevPost"] = prevPost;
        coll[i].data["nextPost"] = nextPost;
      }
      return coll;
    });

    eleventyConfig.addFilter("search", searchFilter);

    eleventyConfig.addCollection("levity", collection => {
      return [...collection.getFilteredByGlob("./src/levities/**/*.md")];
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
       templateFormats: ["html", "njk", "md", "liquid"],
      
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