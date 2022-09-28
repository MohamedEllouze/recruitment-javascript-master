const findAnimals = require("./controllers/find-animals/findAnimals");
const countChildren = require("./controllers/count-children/countChildren");
const { data } = require("./data");
const util = require("util");
const args = process.argv;
if (args.includes("--count")) {
  console.log(
    util.inspect(countChildren(data), {
      showHidden: false,
      depth: null,
      colors: true,
    })
  );
}
if (args.some((value) => value.includes("--filter"))) {
  const filterArg = args.slice(2)[0]
    ? process.argv.slice(2)[0].split("=")[1]
    : "";
  console.log(
    util.inspect(findAnimals(data, filterArg), {
      showHidden: false,
      depth: null,
      colors: true,
    })
  );
}
if (args.length === 2) console.log("there is no chosen function");
