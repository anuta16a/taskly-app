// tasks-actions.js - изменения данных массива tasks

import { getTasks, setTasks } from '../core/state.js'
import { Task } from '../core/task-model.js'

function addTask(payload) {
    const tasks = getTasks()
    const newTask = new Task({
        title: payload.title,
        description: payload.description,
        topic: payload.topic,
        location: 'upcomming',
        user: payload.user,
        // timeMinutes: payload.timeMinutes,
    })
    const actualTasks = [newTask, ...tasks]
    setTasks(actualTasks)
}

function editTask(taskId, payload) {
    const tasks = getTasks()
    const taskIndex = tasks.findIndex(task => task.id === taskId)

    if (taskIndex === -1) {    // findIndex вернет -1, если элемент не найдет
        console.error(`Task with id ${taskId} not found`)
        return
    }

    const updatedTask = {
        ...tasks[taskIndex],
        ...payload,
        id: taskId,
        updatedAt: Date.now()
    }
    const actualTasks = [...tasks] // array copy for immutable update
    actualTasks[taskIndex] = updatedTask
    setTasks(actualTasks)
}

function deleteTask(taskId) {
    const tasks = getTasks()
    const actualTasks = tasks.filter(task => task.id !== taskId) // создаем новый массив без удаляемого таска
    setTasks(actualTasks)
}

function moveTask(taskId, newLocation) {
    const tasks = getTasks()
    const taskIndex = tasks.findIndex(task => task.id === taskId)

    if (taskIndex === -1) {
        console.error(`Task with id ${taskId} not found`)
        return
    }

    const validLocations = ['upcomming', 'inProgress', 'done']
    if (!validLocations.includes(newLocation)) {
        console.error(`Invalid location: ${newLocation}`)
        return
    }

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        location: newLocation,
        updatedAt: Date.now()
    }

    setTasks(tasks)
}

function deleteAllDone() {
    const tasks = getTasks()
    const actualTasks = tasks.filter(task => task.location !== 'done')
    setTasks(actualTasks)
}

export { 
    addTask, 
    editTask, 
    deleteTask, 
    moveTask, 
    deleteAllDone 
}
