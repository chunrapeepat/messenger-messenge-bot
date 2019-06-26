import IConfig from "./domains/IConfig";
import Helper from "./utils/helper";

let config: IConfig = Helper.loadConfig("default.json");

if (Helper.isConfigExist("production.json")) {
    config = Helper.loadConfig("production.json");
}
