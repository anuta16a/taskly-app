# Taskly

Kanban-style task management app built with vanilla JavaScript. Organize tasks across three workflow stages — Upcoming, In Progress, and Done — with full CRUD operations and local persistence.

## Features

- **Kanban board** with three columns: Upcoming, In Progress, Done
- **Task CRUD:** create, edit, delete, move between columns
- **Task properties:** title, description, topic (Bug / Feature / Design / Improvement / Research / Docs), assigned user
- **Bulk delete** completed tasks with confirmation dialog
- **Popover menus** for moving tasks and selecting topic/user
- **LocalStorage persistence** — data survives page reloads
- **Live clock** in the header
- **Glassmorphism UI** with backdrop blur and gradient effects

## Tech Stack

- **HTML** — single-page application
- **SCSS**
- **JavaScript** (ES6 modules, no frameworks)
- **Parcel** (bundler)

## Project Structure

```
src/
├── index.html
├── js/
│   ├── app.js                  # Entry point
│   ├── core/
│   │   ├── state.js            # Centralized state management
│   │   ├── storage.js          # LocalStorage interface
│   │   ├── task-model.js       # Task class (id, title, topic, location, etc.)
│   │   ├── clock.js            # Header time display
│   │   └── dom/                # Cached DOM selectors
│   ├── features/
│   │   ├── tasks-render.js     # Rendering logic
│   │   └── tasks-actions.js    # CRUD operations
│   └── handlers/               # Event listeners
├── scss/
│   ├── app.scss
│   └── _fonts.scss
├── images/
└── fonts/
```

## Getting Started

```bash
npm install
npm start       # Dev server (localhost:1234)
npm run build   # Production build → dist/
```

## Design

UI designed from scratch in Figma.

[Figma mockup](https://www.figma.com/design/FrM9XRxOpX3Ox5Dj98kF57/Untitled?node-id=0-1&t=HWSjuc0IxKa77NOK-1)
