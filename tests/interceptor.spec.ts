import { test } from "@playwright/test";

test("should not load request i decide abort", async ({ page }) => {
  await page.on("request", (req) => {
    console.log(req.url());
  });
  //   await page.route("https://www.demoblaze.com/node_modules/bootstrap/dist/css/bootstrap.min.css", (route) => route.abort()
  //   );
  await page.route("**/*.{png,jpg,jpeg,svg,css}", (route) => route.abort()
  );
  await page.goto("https://www.demoblaze.com");
  await page.screenshot({path:'screenshots/interceptor.png', fullPage:true})
    await page.waitForTimeout(10000);
});
