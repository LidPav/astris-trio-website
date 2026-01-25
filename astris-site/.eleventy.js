module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/assets");

  // ISO-Date filter (used in presse.njk)
  eleventyConfig.addFilter("isoDate", (date) => {
    if (!date) return "";
    const d = date instanceof Date ? date : new Date(date);
    return isNaN(d) ? "" : d.toISOString();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],

    // GitHub Pages project URL prefix:
    // https://lidpav.github.io/astris-trio-website/
    pathPrefix: "/astris-trio-website/",
  };
};
