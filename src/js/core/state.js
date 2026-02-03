import { getDataFromStorage, setDataToStorage } from './storage.js'
import { renderTasks } from '../features/tasks-render.js'

let tasks = getDataFromStorage()

function setTasks(actualTasks) {
    tasks = actualTasks
    setDataToStorage(tasks)
    renderTasks(tasks)
}

function getTasks() {  //- чтобы actions могли брать актуальные tasks
   return tasks;
}
renderTasks(getTasks())

export {
    getTasks,
    setTasks,
}
