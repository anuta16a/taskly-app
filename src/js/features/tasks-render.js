import { getColumnEl, columnsEl, upcommingCounterEl, inProgressCounterEl, doneCounterEl, taskCardTemplateEl, } from '../core/dom/index.js'
import { getTasks } from '../core/state.js'

function formatTime(timestamp) {
  const date = new Date(timestamp)

  return date.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function buildTaskEl(task) {
    const cloneTask = taskCardTemplateEl.content.cloneNode(true)
    const taskEl = cloneTask.querySelector('.task')

    taskEl.dataset.id = task.id  // установка data-id для идентификации задачи
    taskEl.dataset.location = task.location // установка data-location для идентификации колонки

    taskEl.querySelector('.task__title').textContent = task.title
    taskEl.querySelector('.task__description').textContent = task.description
    taskEl.querySelector('.task__user').textContent = task.user

    const topic = task.topic
    taskEl.classList.add(`task--${topic}`) // добавление класса темы для стилизации

     const timeEl = taskEl.querySelector('.task__time')
     if (task.updatedAt !== task.createdAt) {
         timeEl.textContent = `Edited: ${formatTime(task.updatedAt)}`
     } else {
         timeEl.textContent = `Created: ${formatTime(task.createdAt)}`
     }

    return taskEl
}

function renderTasks(tasks) {
    tasks = getTasks()
    columnsEl.forEach(column => column.innerHTML = '')

    let upcommingCount = 0
    let inProgressCount = 0
    let doneCount = 0

    tasks.forEach(task => {
        const column = getColumnEl(task.location)
        if (!column) return // защита от неправильного location
        // Обновление счетчиков
        if (task.location === 'upcomming') upcommingCount = upcommingCount + 1
        else if (task.location === 'inProgress') inProgressCount = inProgressCount + 1
        else if (task.location === 'done') doneCount = doneCount + 1
        const taskEl = buildTaskEl(task)
        column.appendChild(taskEl)

    })
    // Обновление отображения счетчиков
    upcommingCounterEl.textContent = upcommingCount
    inProgressCounterEl.textContent = inProgressCount
    doneCounterEl.textContent = doneCount
}

export {
    renderTasks,
}
