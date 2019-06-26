import * as fs from "fs";
import * as path from "path";

import IConfig from "../domains/IConfig";

class Helper {
    public static isConfigExist(filename: string): boolean {
       return fs.existsSync(path.join(__dirname, "config", filename));
    }

    public static loadConfig(filename: string): IConfig {
        return JSON.parse(fs.readFileSync(path.join(__dirname, "config", filename)).toString());
    }
}

export default Helper;
