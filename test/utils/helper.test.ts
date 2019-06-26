jest.mock("fs");
import fs from "fs";

import IConfig from "../../src/domains/IConfig";
import Helper from "../../src/utils/helper";

const jsonConfig: string = `
    {
        "message": "this is example message.",
        "urls": [
            "https://facebook.com/chun42"
        ]
    }
`;

describe("Helper.loadConfig", () => {
    test("should be load json file into object correctly", () => {
        (fs.readFileSync as jest.Mock).mockReturnValue(new Buffer(jsonConfig));

        const config: IConfig = Helper.loadConfig("filename.json");

        expect(fs.readFileSync).toHaveBeenCalled();

        expect(config.message).toEqual("this is example message.");
        expect(config.urls).toEqual(expect.arrayContaining(["https://facebook.com/chun42"]));
    });
});
