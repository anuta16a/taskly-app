# Taskly

Kanban-style task management app built with vanilla JavaScript. Organize tasks across three workflow stages — Upcoming, In Progress, and Done — with full CRUD operations, local persistence, and responsive layout.

## Features

- **Kanban board** with three columns: Upcoming, In Progress, Done
- **Task CRUD:** create, edit, delete, move between columns
- **Task properties:** title, description, topic (Bug / Feature / Design / Improvement / Research / Docs), assigned user
- **Bulk delete** completed tasks with confirmation dialog
- **Popover menus** for moving tasks and selecting topic/user
- **LocalStorage persistence** — data survives page reloads
- **Live clock** in the header
- **Glassmorphism UI** with backdrop blur and gradient effects
- **Responsive layout** — adapts to desktop, tablet, and mobile viewports
- **GA4 analytics** — event tracking via Google Analytics 4
- **A/B testing** — CTA text controlled by Firebase Remote Config

## Tech Stack

- **HTML** — single-page application
- **SCSS**
- **JavaScript** (ES6 modules, no frameworks)
- **Parcel** (bundler)
- **Firebase** — Hosting, Analytics (GA4), Remote Config

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Desktop | > 992px | 3 columns in a row |
| Tablet | ≤ 992px | 3 columns, compact sizing |
| Small tablet | ≤ 768px | 2-column grid + Done spans full width |
| Mobile | ≤ 480px | Single column, stacked vertically |

## Project Structure

```
src/
├── index.html
├── js/
│   ├── app.js                  # Entry point + Remote Config init
│   ├── firebase.js             # Firebase SDK configuration
│   ├── core/
│   │   ├── state.js            # Centralized state management
│   │   ├── storage.js          # LocalStorage interface
│   │   ├── task-model.js       # Task class (id, title, topic, location, etc.)
│   │   ├── clock.js            # Header time display
│   │   └── dom/                # Cached DOM selectors
│   ├── features/
│   │   ├── tasks-render.js     # Rendering logic
│   │   └── tasks-actions.js    # CRUD operations
│   └── handlers/               # Event listeners + GA4 event tracking
├── scss/
│   ├── app.scss                # Styles + responsive media queries
│   └── _fonts.scss
├── images/
└── fonts/
firebase.json                   # Firebase Hosting config
.firebaserc                     # Firebase project reference
```

## Getting Started

```bash
npm install
npm start       # Dev server (localhost:1234)
npm run build   # Production build → dist/
```

## Deploy

The app is hosted on Firebase Hosting. After building:

```bash
firebase deploy
```

## Design

UI designed from scratch in Figma.

[Figma mockup](https://www.figma.com/design/FrM9XRxOpX3Ox5Dj98kF57/Untitled?node-id=0-1&t=HWSjuc0IxKa77NOK-1)
