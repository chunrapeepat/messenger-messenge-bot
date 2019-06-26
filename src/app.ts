import * as path from "path";

import IConfig from "./domains/IConfig";
import ConfigHelper from "./utils/configHelper";

const configHelper: ConfigHelper = new ConfigHelper(path.join(__dirname, ".."));

let config: IConfig = configHelper.loadConfig("default.json");

if (configHelper.isConfigExist("production.json")) {
    config = configHelper.loadConfig("production.json");
}

console.log(config);
