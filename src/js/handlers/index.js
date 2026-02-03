import { initTaskModalHandlers } from './task-modal.js'
import { initTaskCardHandlers } from './task-card.js'
import { initColumnsHandlers } from './columns.js'

function initHandlers() {
    initTaskModalHandlers()
    initTaskCardHandlers()
    initColumnsHandlers()
}

export { initHandlers }
