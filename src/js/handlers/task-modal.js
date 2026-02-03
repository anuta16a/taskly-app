import { getTasks } from '../core/state.js'
import { addTask, editTask } from '../features/tasks-actions.js'
import {
    taskModalEl, taskModalTitleEl, taskModalDescriptionEl,
    taskModalTopicPopoverContentEl, taskModalTopicPopoverBtnEl,
    taskModalTopicItemsEl, taskModalTopicBtnPathEl,
    taskModalUserPopoverContentEl, taskModalUserPopoverBtnEl, taskModalUserPopoverBtnTextEl,
    taskModalUsersEl,
    taskModalCancelBtnEl, taskModalConfirmBtnEl,
} from '../core/dom/index.js'

let editingTaskId = null
let selectedTopic = null
let selectedUser = null

const topicColors = {
    bug: '#8C2727',
    improvement: '#DBD751',
    feature: '#3C449D',
    research: '#709460',
    design: '#E3B778',
    docs: '#898989'
}

// Topic popover
function handleClickTopicPopover(event) {
    event.preventDefault()
    event.stopPropagation()
    const isHidden = taskModalTopicPopoverContentEl.classList.contains('task-modal__topic-popover-content--hidden')

    if (isHidden) {
        taskModalTopicPopoverContentEl.classList.remove('task-modal__topic-popover-content--hidden')
        document.addEventListener('click', handleClickOutsideTopicPopover)
    } else {
        closeTopicPopover()
    }
}

function handleClickOutsideTopicPopover(event) {
    const isClickInside = taskModalTopicPopoverContentEl.contains(event.target)

    if (!isClickInside) {
        closeTopicPopover()
    }
}

function closeTopicPopover() {
    taskModalTopicPopoverContentEl.classList.add('task-modal__topic-popover-content--hidden')
    document.removeEventListener('click', handleClickOutsideTopicPopover)
}

// Topic selection
function handleSelectTopic(event) {
    const topicItemEl = event.currentTarget

    const topicSelectEl = topicItemEl.querySelector('.task-modal__topic-select')
    const topicName = topicSelectEl.dataset.topic

    // Скрываем ВСЕ галочки (добавляем --hidden)
    const allTopicSelects = document.querySelectorAll('.task-modal__topic-select')
    allTopicSelects.forEach(el => el.classList.add('task-modal__topic-select--hidden'))

    // Показываем галочку выбранного топика (убираем --hidden)
    topicSelectEl.classList.remove('task-modal__topic-select--hidden')

    selectedTopic = topicName

    const color = topicColors[topicName]
    taskModalTopicBtnPathEl.setAttribute('fill', color)
}

// User popover
function handleClickUserPopover(event) {
    event.preventDefault()
    event.stopPropagation()
    const isHidden = taskModalUserPopoverContentEl.classList.contains('task-modal__user-popover-content--hidden')

    if (isHidden) {
        taskModalUserPopoverContentEl.classList.remove('task-modal__user-popover-content--hidden')
        document.addEventListener('click', handleClickOutsideUserPopover)
    } else {
        closeUserPopover()
    }
}

function handleClickOutsideUserPopover(event) {
    const clickInsidePopover = taskModalUserPopoverContentEl.contains(event.target)
    const clickOnButton = taskModalUserPopoverBtnEl.contains(event.target)

    if (clickInsidePopover || clickOnButton) return

    closeUserPopover()
}

function closeUserPopover() {
    taskModalUserPopoverContentEl.classList.add('task-modal__user-popover-content--hidden')
    document.removeEventListener('click', handleClickOutsideUserPopover)
}

// User selection
function handleSelectUser(event) {
    event.stopPropagation()

    const userItemEl = event.currentTarget

    const userSelectEl = userItemEl.querySelector('.task-modal__user-select')
    const userId = userItemEl.dataset.userId

    const allUserSelects = document.querySelectorAll('.task-modal__user-select')
    allUserSelects.forEach(el => el.classList.add('task-modal__user-select--hidden'))

    selectedUser = userId

    // Показываем галочку выбранного топика (убираем --hidden)
    userSelectEl.classList.remove('task-modal__user-select--hidden')

    const userNameEl = userItemEl.querySelector('.task-modal__user-name').innerText
    taskModalUserPopoverBtnTextEl.textContent = userNameEl
}

// Cancel button
function handleClickCancelBtn(event) {
    event.preventDefault()
    taskModalEl.classList.add('task-modal--hidden')
    // Сброс выбора темы и пользователя
    editingTaskId = null
    selectedTopic = null
    selectedUser = null
    taskModalTopicBtnPathEl.setAttribute('fill', 'none')
    const allTopicSelects = document.querySelectorAll('.task-modal__topic-select')
    allTopicSelects.forEach(element =>
        element.classList.add('task-modal__topic-select--hidden')
    )
    taskModalUserPopoverBtnTextEl.textContent = 'Select user'
    const allUserSelects = document.querySelectorAll('.task-modal__user-select')
    allUserSelects.forEach(element =>
        element.classList.add('task-modal__user-select--hidden')
    )
}

// Confirm button
function handleClickConfirmBtn(event) {
    event.preventDefault()

    const title = taskModalTitleEl.value.trim()
    const description = taskModalDescriptionEl.value.trim()

    // Валидация - минимум title должен быть заполнен
    if (!title) {
        return
    }

    const userText = taskModalUserPopoverBtnTextEl.textContent.trim()

    // Собираем payload для addTask
    const newTask = {
        title,
        description,
        topic: selectedTopic,
        user: userText !== 'Select user'
            ? userText
            : '',
    }
    if (editingTaskId) {         //edit task
        editTask(editingTaskId, newTask)
        editingTaskId = null
        handleClickCancelBtn(event)
        return
    } else {         //create new task
        addTask(newTask)
        handleClickCancelBtn(event)
    }
}

// Helpers for edit
function setTopic(topic) {
    document.querySelectorAll('.task-modal__topic-select').forEach(element => {
        element.classList.add('task-modal__topic-select--hidden')
    })
    const selectedTopicEl = document.querySelector(`[data-topic="${topic}"]`)
    if (selectedTopicEl) {
        selectedTopicEl.classList.remove('task-modal__topic-select--hidden')
    }

    taskModalTopicBtnPathEl.setAttribute('fill', topicColors[topic] ?? 'none')
}

function setUser(user) {
    document.querySelectorAll('.task-modal__user-select').forEach(element => {
        element.classList.add('task-modal__user-select--hidden')
    })

    if (!user) {
        taskModalUserPopoverBtnTextEl.textContent = 'Select user'
        return
    }

    // Ищем пользователя по имени
    const userButtons = document.querySelectorAll('.task-modal__user-name')
    userButtons.forEach(btn => {
        if (btn.textContent.trim() === user) {
            const userItemEl = btn.closest('.task-modal__user')
            const userSelectEl = userItemEl.querySelector('.task-modal__user-select')
            userSelectEl.classList.remove('task-modal__user-select--hidden')
        }
    })

    taskModalUserPopoverBtnTextEl.textContent = user
}

// Открытие модалки для редактирования (вызывается из task-card.js)
function openForEdit(taskId) {
    const task = getTasks().find(task => String(task.id) === String(taskId))
    if (!task) return

    taskModalEl.classList.remove('task-modal--hidden')

    editingTaskId = taskId

    taskModalTitleEl.value = task.title
    taskModalDescriptionEl.value = task.description
    selectedTopic = task.topic
    setTopic(task.topic)
    selectedUser = task.user ?? null
    setUser(task.user)
}

function initTaskModalHandlers() {
    taskModalTopicBtnPathEl.setAttribute('fill', 'none')

    taskModalTopicPopoverBtnEl.addEventListener('click', handleClickTopicPopover)
    taskModalTopicItemsEl.forEach(item => {
        item.addEventListener('click', handleSelectTopic)
    })
    taskModalUserPopoverBtnEl.addEventListener('click', handleClickUserPopover)
    taskModalUsersEl.forEach(item => {
        item.addEventListener('click', handleSelectUser)
    })
    taskModalCancelBtnEl.addEventListener('click', handleClickCancelBtn)
    taskModalConfirmBtnEl.addEventListener('click', handleClickConfirmBtn)
}

export { initTaskModalHandlers, openForEdit }
