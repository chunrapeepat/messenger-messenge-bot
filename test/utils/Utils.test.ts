import Utils from "../../src/utils/Utils";

describe("Utils.extractID", () => {
   test("should be return username from facebook url with https", () => {
      const url: string = "https://facebook.com/chun42";
      expect(Utils.extractID(url)).toBe("chun42");
   });

   test("should be return username from facebook url with http", () => {
      const url: string = "http://facebook.com/chun42";
      expect(Utils.extractID(url)).toBe("chun42");
   });

   test("should be return username from facebook url with no https", () => {
      const url: string = "facebook.com/chun42";
      expect(Utils.extractID(url)).toBe("chun42");
   });

   test("should be return username from facebook url with fb.com", () => {
      const url: string = "fb.com/chun42";
      expect(Utils.extractID(url)).toBe("chun42");
   });
});
