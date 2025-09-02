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

    // Build a list of unique tags by slug (case-insensitive), return objects { name, slug }
    eleventyConfig.addCollection("tagList", function(collection) {
      function toSlug(value) {
        return String(value || "")
          .normalize("NFKD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
      }

      const slugToName = new Map();
      collection.getAll().forEach(item => {
        const itemTags = (item.data && item.data.tags) ? item.data.tags : [];
        itemTags.forEach(tag => {
          if (tag === "all" || tag === "nav") return;
          const slug = toSlug(tag);
          if (!slugToName.has(slug)) {
            slugToName.set(slug, String(tag));
          }
        });
      });
      return Array.from(slugToName.entries()).map(([slug, name]) => ({ name, slug }));
    });

    // Build paginated pages per tag with sorted posts
    eleventyConfig.addCollection("tagPages", function(collection) {
      const siteSettings = collection.getAll()[0]?.data?.settings || {};
      const pageSize = Number(siteSettings.tagPageSize) || 20;
      const sortOrder = (siteSettings.tagSortOrder || "desc").toLowerCase();

      function byDate(a, b) {
        const da = new Date(a.date).getTime();
        const db = new Date(b.date).getTime();
        return sortOrder === "asc" ? da - db : db - da;
      }

      function chunk(array, size) {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
          chunks.push(array.slice(i, i + size));
        }
        return chunks;
      }

      // Map of tagSlug -> { name, slug }
      const tagList = collection.getCollection("tagList");
      const levityPosts = collection.getCollection("levity");

      const pages = [];
      tagList.forEach(tagObj => {
        const postsForTag = levityPosts.filter(post => {
          const postTags = post.data?.tags || [];
          return postTags.some(t => String(t).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") === tagObj.slug);
        }).sort(byDate);

        const chunks = chunk(postsForTag, pageSize);
        const totalPages = chunks.length || 1;
        if (chunks.length === 0) {
          // Still create an empty first page so the tag exists
          pages.push({
            tag: tagObj.name,
            slug: tagObj.slug,
            pageNumber: 1,
            totalPages,
            posts: [],
            permalink: `/tags/${tagObj.slug}/`
          });
        } else {
          chunks.forEach((posts, index) => {
            const pageNumber = index + 1;
            pages.push({
              tag: tagObj.name,
              slug: tagObj.slug,
              pageNumber,
              totalPages,
              posts,
              permalink: pageNumber === 1 ? `/tags/${tagObj.slug}/` : `/tags/${tagObj.slug}/page/${pageNumber}/`
            });
          });
        }
      });

      return pages;
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