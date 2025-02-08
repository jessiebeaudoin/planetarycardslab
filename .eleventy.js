module.exports = function(eleventyConfig) {
  // Pass through static assets like CSS
  eleventyConfig.addPassthroughCopy("src/styles");

  // Create a collection for planets
  eleventyConfig.addCollection("planets", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/planets/*.liquid");
  });

  return {
      dir: {
          input: "src",
          includes: "_includes",
          layouts: "_includes/layouts",
          output: "_site"
      },
      markdownTemplateEngine: "liquid",
      htmlTemplateEngine: "liquid"
  };
};
