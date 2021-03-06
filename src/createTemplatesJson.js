const fs = require("node-fs");
const path = require("path");

const createTemplatesJson = ({ existingTemplateFiles, templatesPath }) => {
  return new Promise((resolve, reject) => {
    const trimmedPaths = existingTemplateFiles.map(fullPath =>
      fullPath.replace(templatesPath + "/", "").replace(/\.js|\.jsx/gi, "")
    );

    const templateJsonString = JSON.stringify(trimmedPaths);
    const filepath = path.resolve(`./wordsby/data/templates.json`);
    const dir = path.resolve("./wordsby/data");

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Save templates array to the public folder. to be consumed by WP for template switching and preview urls
    fs.writeFile(filepath, new Buffer.from(templateJsonString, "utf8"), err => {
      if (err) reject(err);
      resolve();
    });
  });
};

module.exports = createTemplatesJson;
