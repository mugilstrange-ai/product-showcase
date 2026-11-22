from html import escape
from pathlib import Path

output = Path("proof")
output.mkdir(exist_ok=True)
items = (
    ("02-ProductCard-code", "app/components/ProductCard.tsx", "ProductCard.tsx — typed props"),
    ("03-page-code", "app/page.tsx", "app/page.tsx — reused typed components"),
)
style = """body{margin:0;background:#101812;color:#e2f4dc;font:18px/1.6 Consolas,Monaco,monospace}
main{margin:50px auto;width:1150px;padding:40px;border:1px solid #4c674e;border-radius:16px;background:#172218}
h1{font:700 28px system-ui;color:#d9f68c;margin:0 0 25px}pre{white-space:pre-wrap;line-height:1.55;margin:0;font-size:19px}"""
for name, source, title in items:
    code = escape(Path(source).read_text())
    html = f"<!DOCTYPE html><html><head><meta charset='utf-8'><style>{style}</style></head><body><main><h1>{escape(title)}</h1><pre>{code}</pre></main></body></html>"
    (output / f"{name}.html").write_text(html)
