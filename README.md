# Career Catalyst Club

Career Catalyst Club operates under Disha Placement Cell, which is under the Student Technical Council. The website subtitle is “Under Disha Placement Cell, Student Technical Council.” It is built with plain HTML, CSS, and JavaScript.

## Features

- Direct landing page with a Professor Messer beginner recommendation and an optional Computer Science Foundation prerequisite
- Four AICS and four CSDA career roadmaps, each with consolidated comparison information and matching PDF downloads
- Clean glassmorphism layout with responsive design for desktop and mobile
- No local storage, cookies, or external APIs for student data
- Consolidated CSDA and AICS career comparison tables followed by four specialization cards per domain
- Accessible labels, keyboard-friendly controls, and reduced-motion styles

## Local preview

1. Open a terminal in this folder.
2. Run:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

## Deployment for free

The existing GitHub Pages repository is `dheeraj-code77/pathfinder-career-roadmaps`. To publish an approved update:

1. Commit the intended website changes on the `main` branch and push them to `origin`.
2. In the existing GitHub repository, open **Settings → Pages** and keep its current publishing source (the `main` branch and repository root).
3. Wait for the Pages deployment to complete, then confirm the published site and PDF links.

## PDF notes

The nine PDFs are stored under `public/pdfs/`: eight specialization roadmaps and the separate optional Computer Science Foundation prerequisite. Each download uses its matching PDF. Comparison figures are research estimates; salary, employer-fit, and role-availability panels are reported separately from 0–10 scores.

## Important

The site does not collect student details or transmit personal data.
