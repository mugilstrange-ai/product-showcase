import { chromium } from "playwright-core";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

mkdirSync("evidence", { recursive: true });
const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
let passed = 0;
function check(result, name) {
  if (!result) throw new Error("FAILED: " + name);
  passed++;
  console.log("PASS: " + name);
}
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 1 });
try {
  let response = await page.goto("http://127.0.0.1:3000/posts/1", { waitUntil: "networkidle" });
  check(response?.status() === 200, "/posts/1 responds HTTP 200");
  check(page.url().endsWith("/posts/1"), "Browser is at /posts/1");
  const title1 = (await page.locator("article h1").innerText()).trim();
  const body1 = (await page.locator("article .article-body").innerText()).trim();
  check(title1.includes("sunt aut facere repellat"), "Post 1 title fetched correctly");
  check(body1.includes("quia et suscipit"), "Post 1 body fetched correctly");
  check(!(await page.locator("nextjs-portal").count()), "No Next.js error overlay");
  await page.screenshot({ path: "evidence/01-running-post-1-page-only.png", fullPage: true });

  response = await page.goto("http://127.0.0.1:3000/posts/5", { waitUntil: "networkidle" });
  check(response?.status() === 200, "/posts/5 responds HTTP 200");
  check((await page.locator("article h1").innerText()).includes("nesciunt quas odio"), "Post 5 title is different");
  check((await page.locator("article .article-body").innerText()).length > 35, "Post 5 has its own body");
  check((await page.locator("article h1").innerText()) !== title1, "Single route serves different posts");

  response = await page.goto("http://127.0.0.1:3000/posts/999", { waitUntil: "networkidle" });
  check(response?.status() === 404, "Unrecognized post returns 404");
  check(await page.getByText("That story doesn’t exist.").isVisible(), "Friendly 404 state shown");

  const source = readFileSync("app/posts/[id]/page.tsx", "utf8");
  const esc = (s) => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const html = '<html><head><meta charset="utf-8"><style>*{box-sizing:border-box}body{background:#101c17;color:#dce9df;margin:0;font:17px/1.55 Consolas,monospace}main{width:1530px;margin:22px auto;padding:30px 39px;background:#17291e;border:1px solid #3e6346;border-radius:14px}h1{font:700 28px Arial;color:#d2edab;margin:0 0 7px}p{font:14px Arial;color:#9db9a5;margin:0 0 20px}pre{white-space:pre-wrap;margin:0;tab-size:2;font-size:16px;line-height:1.6}</style></head><body><main><h1>app/posts/[id]/page.tsx — Dynamic route source</h1><p>Actual committed TypeScript • params.id • typed Post • await fetch() • await res.json() • JSX output</p><pre>' + esc(source) + '</pre></main></body></html>';
  writeFileSync("evidence/code-view.html", html);
  await page.setViewportSize({ width: 1630, height: 1420 });
  await page.goto("file://" + resolve("evidence/code-view.html"));
  await page.screenshot({ path: "evidence/02-route-code.png", fullPage: true });
  writeFileSync("evidence/browser-test-results.txt", passed + "/11 real browser checks passed\n");
  console.log(passed + "/11 real browser checks passed");
} finally {
  await browser.close();
}
