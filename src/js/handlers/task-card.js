import { deleteTask, moveTask } from '../features/tasks-actions.js'
import { openForEdit } from './task-modal.js'

let currentOpenMovePopover = null

// Move popover
function syncMoveCheck(taskEl) {
    const taskLocation = taskEl.dataset.location

    const moveItemsEl = taskEl.querySelectorAll('.task__move-item')
    moveItemsEl.forEach(itemEl => {
        const moveBtnEl = itemEl.querySelector('.task__move-name-btn')
        const moveIconEl = itemEl.querySelector('.task__move-select-icon')

        moveIconEl.classList.add('task__move-select-icon--hidden') // скрываем все иконки

        if (moveBtnEl.dataset.location === taskLocation) {
            moveIconEl.classList.remove('task__move-select-icon--hidden') // показываем иконку текущего местоположения
        }
    })
}

function handleClickMovePopover(event) {
    // Клик на кнопку открытия popover
    const moveBtnEl = event.target.closest('.task__move-popover-btn')
    if (moveBtnEl) {
        event.preventDefault()
        event.stopPropagation()

        const taskEl = moveBtnEl.closest('.task')
        const popoverContentEl = taskEl.querySelector('.task__move-popover-content')

        syncMoveCheck(taskEl)

        // Закрываем предыдущий открытый popover если есть
        if (currentOpenMovePopover && currentOpenMovePopover !== popoverContentEl) {
            currentOpenMovePopover.classList.add('task__move-popover-content--hidden')
        }

        const isHidden = popoverContentEl.classList.contains('task__move-popover-content--hidden')

        if (isHidden) {
            popoverContentEl.classList.remove('task__move-popover-content--hidden')
            currentOpenMovePopover = popoverContentEl
        } else {
            popoverContentEl.classList.add('task__move-popover-content--hidden')
            currentOpenMovePopover = null
        }
        return
    }

    // Клик на кнопку выбора локации
    const locationBtnEl = event.target.closest('.task__move-name-btn')
    if (locationBtnEl) {
        handleSelectLocation(locationBtnEl)
        return
    }

    // Клик вне popover — закрываем
    if (currentOpenMovePopover) {
        const isClickInside = currentOpenMovePopover.contains(event.target)
        if (!isClickInside) {
            currentOpenMovePopover.classList.add('task__move-popover-content--hidden')
            currentOpenMovePopover = null
        }
    }
}

// Move selection
function handleSelectLocation(locationBtnEl) {
    const taskEl = locationBtnEl.closest('.task')
    const taskId = taskEl.dataset.id
    const newLocation = locationBtnEl.dataset.location

    if (!taskId || !newLocation) return

    // Если кликнули на текущую локацию — ничего не делаем
    if (taskEl.dataset.location === newLocation) {
        currentOpenMovePopover.classList.add('task__move-popover-content--hidden')
        currentOpenMovePopover = null
        return
    }

    // Перемещаем задачу
    moveTask(taskId, newLocation)

    // Закрываем popover
    currentOpenMovePopover = null
}

// Delete task
function handleDeleteTask(event) {
    const deleteBtnEl = event.target.closest('.task__delete-btn')
    if (!deleteBtnEl) return

    event.preventDefault()

    const taskEl = deleteBtnEl.closest('.task')
    if (!taskEl) return

    const taskId = taskEl.dataset.id
    if (!taskId) return

    deleteTask(taskId)
}

// Edit task
function handleClickEditTask(event) {
    const editBtnEl = event.target.closest('.task__edit-btn')
    if (!editBtnEl) return

    event.preventDefault()

    const taskEl = editBtnEl.closest('.task')
    if (!taskEl) return

    const taskId = taskEl.dataset.id
    if (!taskId) return

    openForEdit(taskId)
}

function initTaskCardHandlers() {
    document.addEventListener('click', handleClickMovePopover)
    document.addEventListener('click', handleDeleteTask)
    document.addEventListener('click', handleClickEditTask)
}

export { initTaskCardHandlers }
