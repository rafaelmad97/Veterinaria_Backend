import path from "path";
import fs from "fs";

const basename = path.basename(__filename);
const folder = "/Entities";

const getEntities = () => {
  console.log(__dirname);
  return fs
    .readdirSync(path.join(__dirname, folder))
    .filter(
      (file) =>
        file.indexOf(".") !== 0 ||
        (file !== basename && file.split(".")[1] === ".js")
    )
    .map((file) => require(path.join(__dirname, folder, file)));
};

export default { getEntities };
