//state keeps current and actual array tasks
import { getDataFromStorage, setDataToStorage } from './storage.js'
import { renderTasks } from '../features/tasks-render.js'

let tasks = getDataFromStorage() 

function setTasks(actualTasks) { // updates tasks, loads to localStorage, shows
    tasks = actualTasks
    setDataToStorage(tasks)
    renderTasks(tasks)
}

function getTasks() {  // controls access to tasks
   return tasks;
}

renderTasks(getTasks()) // shows actual tasks UI

export {
    getTasks,
    setTasks,
}
