module.exports = function (eleventyConfig) {
  // Statische Dateien durchreichen
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  // ISO-Date filter (für presse.njk)
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
    // wichtig für GitHub Pages unter /astris-trio-website/
    pathPrefix: "/astris-trio-website/",
  };
};
