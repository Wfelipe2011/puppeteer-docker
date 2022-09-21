const puppeteer = require("puppeteer");

(async () => {
  console.log("abriu navegador");
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  console.log("abriu uma nova pagina");
  const page = await browser.newPage();
  await page.goto("https://www.google.com/", { waitUntil: "networkidle2" });
  console.log("navegou até google");
  browser.close();
  console.log("fechou browser");
})();

