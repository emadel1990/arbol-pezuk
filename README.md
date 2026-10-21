# Árbol Genealógico Pezuk

A large-print, mobile-friendly family tree for the Pezuk family, descendants of Miguel Pezuk and Maria Zsavaga. It replaces the single giant PDF exported from Excel.

It is a plain static site. There is no build step, no framework, and no dependencies.

## Files

| File | What it is |
| --- | --- |
| `datos.js` | **All the family data.** This is the only file you edit to change people. |
| `index.html` | Page structure and fixed texts (instructions, headings, footer). |
| `estilos.css` | Look and print layout. |
| `app.js` | Rendering, search, text size, and the "Corregir" button. |
| `scripts/validar.mjs` | Checks `datos.js` for mistakes before you deploy. |

## Editing the family data

Open `datos.js`. Each person looks like this, and only `nombre` is required:

```js
{ "codigo": "3.1.5.3", "nombre": "Mauricio", "pareja": "Nombre Apellido",
  "nacio": "12/04/1990", "fallecio": "", "notas": "Any note",
  "hijos": [ /* children, same shape */ ] }
```

| Field | Meaning |
| --- | --- |
| `codigo` | The family code. A child's code starts with the parent's code: children of `3.1.5` are `3.1.5.1`, `3.1.5.2`, and so on. |
| `nombre` | Name of the descendant. |
| `pareja` | Spouse or partner. Use `"? (nombre desconocido)"` when unknown. |
| `nacio` / `fallecio` | Birth and death dates as free text, for example `"1904"` or `"23/07/2013"`. |
| `pareja_nacio` / `pareja_fallecio` | The spouse's dates. |
| `notas` | A note shown under the name. It can be a text or a list of texts. |
| `hijos` | A list of children. Leave it out if there are none. |

Some common edits:

- **Add a child.** Find the parent, add a `"hijos": [ ... ]` list if missing, and put the new person inside.
- **Fix a date or name.** Change the text between the quotes.
- **New release.** Update `"version"` at the top with today's date. It shows in the page header.

The search, the branch counts, and the kinship line ("hijo de Ruben, nieto de Juan...") all come from the data, so nothing else needs updating.

After editing, run the checker. It needs Node, which is already installed on this Mac:

```bash
node scripts/validar.mjs
```

It reports missing commas, repeated codes, and codes that don't match their parent.

## Previewing locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying

Any static host works. Publish the repository root as it is.

- **Vercel.** Import the repo, choose the "Other" framework preset, and leave the build command empty.
- **Netlify.** Use the same settings, with the publish directory set to `.`.
- **GitHub Pages.** Deploy from the `main` branch, root folder.

Keep the same address forever. The whole point is that relatives keep one link that always shows the latest version, instead of old forwarded PDFs.

## Printing

The page has a print layout. Open `https://<your-domain>/#imprimir` to expand every branch, then print or save as PDF from the browser.

## Who can edit

Visitors can only read. Corrections reach Mauricio through the "Corregir" button, which pre-fills a WhatsApp or email message with the person's code. Only people with push access to this repository can change the tree.

The WhatsApp link assumes an Argentine mobile number (`+54 9` plus the number in `datos.js`). If the number changes, edit `contacto` in `datos.js`. If it is not a mobile number, adjust the `wa` line in `app.js`.
