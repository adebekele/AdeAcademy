# AdeAcademy

AdeAcademy is a static GitHub Pages course portal for interactive classroom labs.

The current subjects are:

- Math: Algebra Review Studio
- Physics: College Physics Studio

Each subject lives under `subjects/`, and each chapter lab is self-contained with its own
`index.html`, `styles.css`, `app.js`, and optional `README.md`.

## Folder Structure

```text
AdeAcademy/
  index.html
  styles.css
  subjects/
    math/
      index.html
      Algebra/
        CH2-Function-Review/
        CH3-Complex-Numbers/
        CH4-Quadratics/
        CH5-Conics/
    physics/
      index.html
      Physics/
        CH1-Measurement-Math-Vectors/
        CH2-Kinematics/
        CH3-Forces/
        CH4-Energy/
        CH5-Momentum/
```

## Add a New Class

1. Create a folder under `subjects/`, such as `subjects/chemistry/`.
2. Add a subject landing page at `subjects/chemistry/index.html`.
3. Add each chapter as a self-contained lab folder.
4. Link the subject from the main `index.html`.

## Publish with GitHub Pages

Upload the contents of this `AdeAcademy` folder to the repository used by:

```text
https://adebekele.github.io/AdeAcademy/
```

Then enable GitHub Pages from the repository settings and use the main branch as the source.

## Open Locally

Open this file in a browser:

```text
index.html
```

If a browser blocks local file behavior, run:

```powershell
node serve-static.mjs
```

Then open:

```text
http://127.0.0.1:8770/index.html
```
