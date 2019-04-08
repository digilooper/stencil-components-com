yaml = require("js-yaml");
fs = require("fs");

const blog = function() {
  const file = fs.readFileSync("./src/content/components.yml", "utf8");
  const data = yaml.safeLoad(file);

  let items = [];
  for (var key in data) {
    items.push(data);
  }

  fs.writeFile("./src/data/components.json", JSON.stringify(items), err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

  return {};
};

module.exports = blog;
