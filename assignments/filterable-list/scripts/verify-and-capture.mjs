import { chromium } from "playwright-core";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
mkdirSync("evidence",{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||"/usr/bin/google-chrome",args:["--no-sandbox","--disable-dev-shm-usage"]});
const page=await browser.newPage({viewport:{width:1360,height:1040},deviceScaleFactor:1});
let passed=0;
function check(value,label){if(!value)throw new Error("FAILED: "+label);passed++;console.log("PASS "+label);}
try {
  await page.goto("http://localhost:3000",{waitUntil:"networkidle"});
  const search=page.getByRole("searchbox",{name:"Search by name"});
  check(await search.inputValue()==="","Controlled initial state");
  check(await page.locator('[data-testid="menu-item"]').count()===6,"All six menu items are visible");
  await search.fill("ma");
  check(await page.locator('[data-testid="menu-item"]').count()===2,"Search 'ma' filters to two");
  check(await page.getByText("Margherita Pizza").isVisible(),"Pizza matches 'ma'");
  check(await page.getByText("Masala Fries").isVisible(),"Fries matches 'ma'");
  await page.screenshot({path:"evidence/01-running-app-filtered.png",fullPage:true});
  await search.fill("ZZZ-NOMATCH");
  check(await page.locator('[data-testid="menu-item"]').count()===0,"No matching items");
  check(await page.getByText("No matching dishes").isVisible(),"Empty state appears");
  await page.screenshot({path:"evidence/bonus-empty-state.png",fullPage:true});
  await search.fill("PIZZA");
  check(await page.locator('[data-testid="menu-item"]').count()===1,"Case insensitive matching");
  await page.getByRole("button",{name:"Clear"}).click();
  check(await search.inputValue()==="","Clear resets controlled state");
  check(await page.locator('[data-testid="menu-item"]').count()===6,"All results restored");
  const code=readFileSync("app/components/FilterableList.tsx","utf8");
  const escape=(s)=>s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
  const html='<html><head><meta charset="utf-8"><style>body{margin:0;background:#111b16;color:#d9eadd;font:15px/1.48 Consolas,monospace}main{max-width:1250px;margin:35px auto;padding:30px;background:#1b2b22;border-radius:13px;border:1px solid #41664a}h1{font:700 27px Arial;color:#c9efac;margin:0 0 9px}p{font:14px Arial;color:#9bbba5;margin:0 0 24px}pre{white-space:pre-wrap;margin:0}</style></head><body><main><h1>FilterableList.tsx — Full Source</h1><p>Controlled search • .filter() • .map() • key={item.id} • empty state</p><pre>'+escape(code)+'</pre></main></body></html>';
  writeFileSync("evidence/code-source.html",html);
  await page.goto("file://"+resolve("evidence/code-source.html"));
  await page.screenshot({path:"evidence/02-FilterableList-code.png",fullPage:true});
  writeFileSync("evidence/test-results.txt",passed+"/10 interactive browser checks passed.");
  console.log(passed+"/10 interaction checks passed");
}finally {await browser.close();}
