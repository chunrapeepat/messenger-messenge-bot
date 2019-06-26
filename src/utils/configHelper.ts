import * as fs from "fs";
import * as path from "path";

import IConfig from "../domains/IConfig";

class ConfigHelper {
    private path: string;

    constructor(pathname?: string) {
        this.path = pathname || "";
    }

    public isConfigExist(filename: string): boolean {
       return fs.existsSync(path.join(this.path, "config", filename));
    }

    public loadConfig(filename: string): IConfig {
        return JSON.parse(fs.readFileSync(path.join(this.path, "config", filename)).toString());
    }
}

export default ConfigHelper;
