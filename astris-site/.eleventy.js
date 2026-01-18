module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("admin");

  // ISO-Date filter (used in presse.njk)
  eleventyConfig.addFilter("isoDate", (date) => {
    if (!date) return "";
    const d = date instanceof Date ? date : new Date(date);
    return isNaN(d) ? "" : d.toISOString();
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"]
  };
};
