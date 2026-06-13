#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
UI/UX Pro Max Search CLI
Usage: python3 search.py "<query>" [--domain <domain>] [--stack <stack>] [--design-system] [-n <max>] [-f ascii|markdown] [--persist] [-p "Project"] [--page "page-name"]
"""

import sys
import json
import argparse
import textwrap
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from core import search, search_stack, detect_domain, CSV_CONFIG, AVAILABLE_STACKS, DATA_DIR


# ── ANSI colours (gracefully no-op on Windows) ──
try:
    import os
    _colors = os.name != 'nt'
except Exception:
    _colors = False

def _c(code, text): return f"\033[{code}m{text}\033[0m" if _colors else text
def bold(t): return _c("1", t)
def blue(t): return _c("34", t)
def cyan(t): return _c("36", t)
def green(t): return _c("32", t)
def yellow(t): return _c("33", t)
def dim(t): return _c("2", t)


# ── Pretty-print helpers ──
def _wrap(text, width=80, indent=4):
    prefix = " " * indent
    return "\n".join(textwrap.fill(str(line), width, initial_indent=prefix, subsequent_indent=prefix)
                     for line in str(text).splitlines() if line.strip())


def _print_result(result, idx, domain):
    """Pretty-print a single search result"""
    print(f"\n{bold(blue(f'  [{idx+1}]'))} {bold(result.get(list(result.keys())[0], ''))}")
    for k, v in list(result.items())[1:]:
        if v and str(v).strip():
            val = str(v)[:300] + "…" if len(str(v)) > 300 else str(v)
            print(f"  {cyan(k)}: {val}")


def _print_results(data):
    domain = data.get("domain", "")
    count = data.get("count", 0)
    results = data.get("results", [])

    if "error" in data:
        print(f"\n{yellow('⚠')}  {data['error']}")
        return

    header = f"\n{bold(f'  Domain: {domain.upper()}  |  Query: {data.get(\"query\",\"\")}  |  Results: {count}')}"
    print(header)
    print("  " + "─" * 72)

    if not results:
        print(f"\n  {dim('No results found. Try different keywords.')}\n")
        return

    for i, r in enumerate(results):
        _print_result(r, i, domain)

    print()


def _format_markdown(data):
    """Format results as markdown"""
    lines = [f"## Search: {data.get('query','')} ({data.get('domain','').upper()})\n"]
    for r in data.get("results", []):
        keys = list(r.keys())
        if not keys:
            continue
        lines.append(f"### {r[keys[0]]}\n")
        for k, v in list(r.items())[1:]:
            if v and str(v).strip():
                lines.append(f"**{k}:** {str(v)[:300]}\n")
        lines.append("")
    return "\n".join(lines)


# ── Design System (inline generation without design_system.py) ──
def _generate_design_system(query, project_name=None, fmt="ascii", persist=False, page=None):
    """Generate a design system by aggregating searches across domains"""
    domains = ["product", "style", "color", "landing", "typography"]
    results = {}
    for d in domains:
        r = search(query, domain=d, max_results=2)
        results[d] = r.get("results", [])

    proj = project_name or "Project"

    lines = []
    if fmt == "markdown":
        lines.append(f"# Design System — {proj}\n")
        lines.append(f"> Query: `{query}`\n")
        for domain, items in results.items():
            if items:
                lines.append(f"## {domain.title()}\n")
                for item in items:
                    keys = list(item.keys())
                    if keys:
                        lines.append(f"### {item[keys[0]]}")
                    for k, v in list(item.items())[1:]:
                        if v and str(v).strip():
                            lines.append(f"**{k}:** {str(v)[:300]}")
                    lines.append("")
    else:
        border = "═" * 72
        lines.append(f"\n╔{border}╗")
        lines.append(f"║  DESIGN SYSTEM — {proj:<52} ║")
        lines.append(f"║  Query: {query:<60} ║")
        lines.append(f"╠{border}╣")
        for domain, items in results.items():
            if items:
                lines.append(f"║  {bold(domain.upper()):<12}                                                        ║")
                for item in items:
                    for k, v in item.items():
                        if v and str(v).strip():
                            val = str(v)[:60]
                            lines.append(f"║    {k}: {val:<60}  ║")
                lines.append(f"╠{'─'*72}╣")
        lines.append(f"╚{border}╝\n")

    output = "\n".join(lines)
    print(output)

    if persist:
        ds_dir = Path("design-system") / proj.lower().replace(" ", "-")
        ds_dir.mkdir(parents=True, exist_ok=True)
        master = ds_dir / "MASTER.md"
        master.write_text(output, encoding="utf-8")
        print(f"\n{green('✓')} Design system saved → {master}")

        if page:
            pages_dir = ds_dir / "pages"
            pages_dir.mkdir(exist_ok=True)
            page_file = pages_dir / f"{page.lower().replace(' ','-')}.md"
            page_file.write_text(f"# {page.title()} Page Overrides\n\n> Inherits from MASTER.md. Add page-specific deviations below.\n", encoding="utf-8")
            print(f"{green('✓')} Page override saved  → {page_file}")


# ── CLI ──
def main():
    parser = argparse.ArgumentParser(description="UI/UX Pro Max Search")
    parser.add_argument("query", help="Search query")
    parser.add_argument("--domain", "-d", choices=list(CSV_CONFIG.keys()), help="Search domain")
    parser.add_argument("--stack", "-s", choices=AVAILABLE_STACKS, help="Stack-specific guidelines")
    parser.add_argument("--design-system", action="store_true", help="Generate full design system")
    parser.add_argument("-n", "--max-results", type=int, default=3, help="Max results per domain")
    parser.add_argument("-f", "--format", choices=["ascii", "markdown", "json"], default="ascii")
    parser.add_argument("--persist", action="store_true", help="Save design system to files")
    parser.add_argument("-p", "--project", help="Project name for persistence")
    parser.add_argument("--page", help="Page name for override file")
    args = parser.parse_args()

    if args.design_system:
        _generate_design_system(args.query, project_name=args.project, fmt=args.format, persist=args.persist, page=args.page)
        return

    if args.stack:
        data = search_stack(args.query, args.stack, max_results=args.max_results)
    else:
        data = search(args.query, domain=args.domain, max_results=args.max_results)

    if args.format == "json":
        print(json.dumps(data, indent=2, ensure_ascii=False))
    elif args.format == "markdown":
        print(_format_markdown(data))
    else:
        _print_results(data)


if __name__ == "__main__":
    main()
