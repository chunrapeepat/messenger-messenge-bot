class Utils {
   public static extractID(url: string): string {
      const regex: RegExp = new RegExp("(?:https?:\\/\\/)?(?:facebook|fb)\\.com\\/(.*)\\/?");
      const result = regex.exec(url);

      return result[1];
   }
}

export default Utils;
