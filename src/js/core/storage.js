const localStorageKey = 'taskly-tasks'

function getDataFromStorage() {
    const value = localStorage.getItem(localStorageKey)
    if (!value) {
        // localStorage.setItem(localStorageKey, JSON.stringify([]))
        return []
    }
    return JSON.parse(value) 
}

function setDataToStorage(tasks) {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks))
}

export {
    getDataFromStorage,
    setDataToStorage,
}