# Career OS — Abilash Balasubramanian

A static career-growth dashboard for moving from Senior Mobile Engineer toward Staff Mobile Engineer / Mobile Platform Engineer / Mobile Architect.

## Features
- 6–9 month roadmap with persistent checkboxes
- Weekly execution scorecard
- Mobile system design / DSA / leadership interview checklists
- AWS SAA certification progress
- Job application tracker
- Searchable resource library with official learning links
- Work-log notes
- JSON export/import backups
- Dark/light theme
- No backend or database required

## Run locally
Open `index.html` directly, or run a static server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy free
### GitHub Pages
1. Create a repository such as `career-os`.
2. Upload `index.html`, `styles.css`, `app.js`, and `v2.js` to the repository root.
3. In GitHub: Settings → Pages → Deploy from branch → `main` / root.

### Netlify
Drag the folder into Netlify's deploy area, or connect the GitHub repository. No build command is required.

## Progress storage
Progress is stored in browser `localStorage`. Use **Export** regularly to save a JSON backup. Use **Import** to restore it on another browser/device.

## Customize
Most roadmap content, resources, skill tracks, interview topics, and default weekly tasks are near the top of `app.js`, so they are easy to edit.


## V2 additions
- Daily study calendar, study sessions by track, and current streak (today or yesterday must have study).
- Weekly study hours and editable hours goal.
- Seven-stage application kanban with accessible move selectors synchronized with the table.
- Target role, annual salary/currency, location, and AWS exam date/countdown.
- Weekly and monthly reviews, study totals, and application counts.
- Monday-based weekly task reset; previous weeks retained in exported weekHistory.
- Existing V1 storage key and backups retained. V2 import validates before replacing stored data.

Run from the same localhost URL each time to retain browser progress. A new host/origin needs an exported backup from the old site. Import the V1 backup through the Import control. All V2 data is included in Export. No account or cross-device sync is provided.

Application review counts use creation dates added by V2; V1 applications remain available but are excluded from period counts. The exam date is a target, and passing certification is not inferred from the countdown.

## Verification
Browser verification covered session logging/deletion support, reload persistence, kanban-to-table updates, saved reviews, V1 backup migration, rejection of malformed imports, unsafe URL filtering, week boundaries, and a 390px mobile viewport. Run `node verify.cjs` if the bundled Playwright runtime and Microsoft Edge are available.
