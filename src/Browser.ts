import puppeteer from "puppeteer";

import IConfig from "./domains/IConfig";
import Utils from "./utils/Utils";

const sleep = async (ms: number) => {
    return new Promise((res, _) => {
        setTimeout(() => {
            res();
        }, ms);
    });
};

class Browser {
    private message: string;
    private urls: [string];

    constructor(config: IConfig) {
        this.message = config.message;
        this.urls = config.urls;
    }

    public async run() {
        const ids: string[] = this.urls.map(Utils.extractID);

        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();

        await this.login(page);
        await this.sendMessage(ids, 0, page);

        await browser.close();
        console.log("[Log] Done~");
    }

    private async login(page) {
        await page.goto(`https://www.facebook.com/`, {
            waitUntil: "networkidle2",
        });

        await page.waitForSelector("#email");
        await page.type("#email", process.env.EMAIL);
        await page.type("#pass", process.env.PASSWORD);

        await sleep(500);

        await page.click("#loginbutton");
    }

    private async sendMessage(ids: string[], index: number, page) {
        if (index >= ids.length) {
            return;
        }

        await page.goto(`https://www.facebook.com/messages/t/${ids[index]}`, {
            waitUntil: "networkidle2",
        });

        const element = await page.$("._3oh-");
        const fullName: string = await page.evaluate(elem => {
            return elem.textContent;
        }, element);

        await page.keyboard.type(this.message.replace("{NAME}", fullName));
        await sleep(100);
        page.keyboard.press(String.fromCharCode(13));

        console.log(`[Log] Send message to ${fullName} <${ids[index]}>`);

        await sleep(500);
        await this.sendMessage(ids, index + 1, page);
    }
}

export default Browser;
