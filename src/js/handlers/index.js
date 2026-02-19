import { initTaskModalHandlers } from './task-modal.js'
import { initTaskCardHandlers } from './task-card.js'
import { initColumnsHandlers } from './columns.js'
import { initDragDropHandlers } from './drag-drop.js'

function initHandlers() {
    initTaskModalHandlers()
    initTaskCardHandlers()
    initColumnsHandlers()
    initDragDropHandlers()
}

export { initHandlers }
