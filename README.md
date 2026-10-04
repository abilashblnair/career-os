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

## Q&A and repeatable assessments
Open **Q&A + assessments** from the dashboard or visit `#learning`. The library contains 400 Q&As in eight 50-question platform/area banks across iOS, Android, React Native, mobile architecture/security, AWS/cloud, AI, Staff leadership, and DSA. Search and filter by track and latest recall rating.

Start a full-platform/full-library quiz, a shuffled ten-question refresh, or a previously missed set. Select one of three answers and check it: correct = 1 mark, wrong or skipped = 0, with no negative marking. Every one of the 400 questions has authored choices and an automatic answer key. Feedback explains the model answer; completed attempts retain selected answers. Older self-scored attempts remain on their original 0/1/2 scale. Unfinished quizzes are discarded on reload or navigation away. Retake any set without limits.

Assessment history and latest ratings are stored locally and included in Export/Import. Source links provide further reading; review SDK-specific details against current official docs. Study content is authored guidance, not copied certification questions. Deploy `learning-bank.js`, `learning-expanded.js`, `learning.js`, and `learning-platforms.js`, `quiz-bank.js`, `learning-quiz.js`, and `visual-guides.js` alongside the original files.


## Dedicated platform lists
The learning catalog has **50 Q&As each** for iOS, Android, React Native, mobile architecture/security, AWS/cloud, AI engineering, Staff leadership, and DSA. Platform cards open each full list. Topic groups narrow both lists and assessment scope; search and recall-rating filters affect library display only. Use Show full platform list to clear filters. Expand/collapse controls apply to displayed answers.

Direct routes: `#learning/ios`, `#learning/android`, `#learning/rn`, `#learning/architecture`, `#learning/cloud`, `#learning/ai`, `#learning/staff`, and `#learning/dsa`. The default is iOS; All tracks offers a mixed 400-question view.

Older interview collections informed topic selection. Answers were rewritten to distinguish configuration changes from process death, storage from encryption, framework contracts from performance guarantees, and installed native code from OTA bundles. Personal messages and job descriptions are excluded. Existing question IDs remain unchanged, preserving previous ratings and history.

Browser validation covered all eight lists and 50-question assessment scopes, topic/search filters, expand/collapse, missed-question retakes, saved history, export/import normalization, deep-link restoration, and a 390px mobile layout.


## Visual learning and platform updates
- `#visuals`: eight SVG architecture/branching diagrams for offline-first, iOS, Android, Fabric, token refresh, backend/cloud, RAG, and release safety.
- DSA: 56 selectable guides covering all 50 library topics plus six sorting algorithms. Each guide includes an explicit learning sequence, complexity, worked example, and pseudocode. Learning-sequence arrows show stages; loop and branch logic is explained in the pseudocode.
- Ten interactive worked traces cover binary search, Two Sum, distinct windows, bubble sort, prefix sums, coin change, BFS, bracket stacks, merging, and Dijkstra. Use Next/Back to see values change.
- `#updates`: official-source release snapshot checked 4 October 2026: iOS 27.0.1, Android 17/API 37 (stable major; device build varies), and React Native 0.87.1. Cards separate stable from preview status and link to release notes, changes, and study checklists. This snapshot does not automatically refresh.

Browser verification covered all 400 quiz keys, correct/wrong/skipped scoring, mistaken-question retakes, mixed legacy/new history, malformed backup rejection, all eight diagrams, all 56 guides, all ten traces, and mobile/light-theme layout. SVGs and guides are native site code and require no external visualization library.
