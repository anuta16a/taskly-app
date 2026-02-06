const localStorageKey = 'taskly-tasks'

function getDataFromStorage() {
    const value = localStorage.getItem(localStorageKey) //returns string [...]
    if (!value) {
        return []
    }
    return JSON.parse(value) //turns string value into array
}

function setDataToStorage(tasks) {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks)) //turns array tasks into string [...]
}

export {
    getDataFromStorage,
    setDataToStorage,
}