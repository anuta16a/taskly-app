import { deleteAllDone } from '../features/tasks-actions.js'
import {
    addTaskBtnEl,
    taskModalEl, taskModalTitleEl, taskModalDescriptionEl,
    warningModalEl,
    deleteAllDoneBtnEl, warningModalCancelBtnEl, warningModalConfirmBtnEl,
} from '../core/dom/index.js'

// Add task btn
function handleClickAddTask() {
    taskModalTitleEl.value = ''
    taskModalDescriptionEl.value = ''
    taskModalEl.classList.remove('task-modal--hidden')
}

// Delete all done tasks
function handleClickDeleteAllDone() {
    warningModalEl.classList.remove('warning-modal--hidden')
}

function handleCancelDeleteAllDone() {
    warningModalEl.classList.add('warning-modal--hidden')
}

function handleConfirmDeleteAllDone() {
    deleteAllDone()
    warningModalEl.classList.add('warning-modal--hidden')
}

function initColumnsHandlers() {
    addTaskBtnEl.addEventListener('click', handleClickAddTask)
    deleteAllDoneBtnEl.addEventListener('click', handleClickDeleteAllDone)
    warningModalCancelBtnEl.addEventListener('click', handleCancelDeleteAllDone)
    warningModalConfirmBtnEl.addEventListener('click', handleConfirmDeleteAllDone)
}

export { initColumnsHandlers }
