module.exports = {
  siteUrl: "https://www.deepgoyal.com",
  generateRobotsTxt: true, // generates a robot.txt file
  outDir: "./public", // save the outputs in the public dir
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
