import * as path from "path";
import Browser from "./Browser";

import IConfig from "./domains/IConfig";
import ConfigHelper from "./utils/ConfigHelper";

const configHelper: ConfigHelper = new ConfigHelper(path.join(__dirname, ".."));

let config: IConfig = configHelper.loadConfig("default.json");

if (configHelper.isConfigExist("production.json")) {
    config = configHelper.loadConfig("production.json");
}

// Extract ID from url and apply to Puppeteer
new Browser(config).run();
