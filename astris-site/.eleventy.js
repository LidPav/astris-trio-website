module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  return {
    dir: { input: "src", output: "_site" },
    pathPrefix: "/astris-trio-website/"
  };
};

// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Deutsches Datumsformat, Zeitzone München/Berlin
  eleventyConfig.addFilter("deDate", (dateObj, fmt = "d. LLLL yyyy", zone = "Europe/Berlin") => {
    if(!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .setZone(zone)
      .setLocale("de")
      .toFormat(fmt);
  });

  return {
    // optional: falls du UTC beibehalten willst, nichts ändern
  };
};
