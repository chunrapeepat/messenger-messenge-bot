import IConfig from "./domains/IConfig";
import Utils from "./utils/Utils";

class Browser {
    private message: string;
    private urls: [string];

    constructor(config: IConfig) {
        this.message = config.message;
        this.urls = config.urls;
    }

    public async run() {
        const ids: string[] = this.urls.map(Utils.extractID);
        console.log(ids);
    }
}

export default Browser;
