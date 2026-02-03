// .eleventy.js (Projekt-Root)
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // 1) Assets durchreichen
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // 2) Deutscher Datumsfilter (UTC -> Europe/Berlin), für Liquid & Nunjucks
  function deDate(dateObj, fmt = "d. LLLL yyyy", zone = "Europe/Berlin") {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .setZone(zone)
      .setLocale("de")
      .toFormat(fmt);
  }
  eleventyConfig.addLiquidFilter("deDate", deDate);
  eleventyConfig.addNunjucksFilter("deDate", deDate);

  // 3) Verzeichnisse & Engines: wir bleiben bei Liquid
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes",
      data: "_data",
      output: "_site",
    },
    pathPrefix: "/astris-trio-website/",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
  };
};
