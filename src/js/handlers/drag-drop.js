import { moveTask } from '../features/tasks-actions.js'

const DRAG_THRESHOLD = 5

let dragState = null

function handleMouseDown(event) {
    const taskEl = event.target.closest('.task')
    if (!taskEl) return

    // Don't start drag from interactive elements
    if (event.target.closest('button, input, textarea, a')) return

    // Prevent text selection from starting on mousedown
    event.preventDefault()

    dragState = {
        taskEl,
        taskId: taskEl.dataset.id,
        startX: event.clientX,
        startY: event.clientY,
        clone: null,
        isDragging: false,
    }
}

function handleMouseMove(event) {
    if (!dragState) return

    const dx = event.clientX - dragState.startX
    const dy = event.clientY - dragState.startY

    // Wait until the cursor moves enough to distinguish drag from click
    if (!dragState.isDragging) {
        if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return
        startDrag(event)
    }

    dragState.clone.style.left = event.clientX - dragState.offsetX + 'px'
    dragState.clone.style.top = event.clientY - dragState.offsetY + 'px'

    highlightColumn(event)
}

function startDrag(event) {
    dragState.isDragging = true

    const rect = dragState.taskEl.getBoundingClientRect()
    dragState.offsetX = event.clientX - rect.left
    dragState.offsetY = event.clientY - rect.top

    // Create a visual clone that follows the cursor
    const clone = dragState.taskEl.cloneNode(true)
    clone.classList.add('is-drag-clone')
    clone.style.width = rect.width + 'px'
    clone.style.left = rect.left + 'px'
    clone.style.top = rect.top + 'px'
    document.body.appendChild(clone)
    dragState.clone = clone

    // Hide the original card
    dragState.taskEl.classList.add('is-dragging')
}

function highlightColumn(event) {
    document.querySelectorAll('.is-drag-over').forEach(el => {
        el.classList.remove('is-drag-over')
    })

    // Find column under cursor (clone blocks pointer, so temporarily hide it)
    dragState.clone.style.pointerEvents = 'none'
    const elementBelow = document.elementFromPoint(event.clientX, event.clientY)
    dragState.clone.style.pointerEvents = ''

    const columnEl = elementBelow?.closest('[data-column]')
    if (columnEl) {
        columnEl.classList.add('is-drag-over')
    }
}

function handleMouseUp(event) {
    if (!dragState || !dragState.isDragging) {
        dragState = null
        return
    }

    // Find target column under cursor
    dragState.clone.style.pointerEvents = 'none'
    const elementBelow = document.elementFromPoint(event.clientX, event.clientY)
    dragState.clone.style.pointerEvents = ''

    const columnEl = elementBelow?.closest('[data-column]')
    if (columnEl) {
        const newLocation = columnEl.dataset.column
        if (newLocation) {
            moveTask(dragState.taskId, newLocation)
        }
    }

    cleanup()
}

function cleanup() {
    if (dragState?.clone) {
        dragState.clone.remove()
    }
    if (dragState?.taskEl) {
        dragState.taskEl.classList.remove('is-dragging')
    }

    document.querySelectorAll('.is-drag-over').forEach(el => {
        el.classList.remove('is-drag-over')
    })

    dragState = null
}

function initDragDropHandlers() {
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
}

export { initDragDropHandlers }
