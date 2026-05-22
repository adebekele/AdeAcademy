# Algebra Review Studio

Local interactive review labs for Algebra.

## GitHub Pages

This folder is ready to publish as a static GitHub Pages site. The homepage is:

```text
index.html
```

After uploading the files to a GitHub repository, enable Pages from the repository settings and choose the main branch as the source.

## Open Locally

Open this file in a browser:

```text
index.html
```

The homepage links to each chapter using local relative paths, so no internet connection or hosting is required.

## Chapters

- `Algebra/CH2-Function-Review/index.html`
- `Algebra/CH3-Complex-Numbers/index.html`
- `Algebra/CH4-Quadratics/index.html`

## Optional Local Server

Opening `index.html` directly is enough. If a browser ever blocks local file behavior, run:

```powershell
node serve-static.mjs
```

Then open:

```text
http://127.0.0.1:8765/index.html
```
