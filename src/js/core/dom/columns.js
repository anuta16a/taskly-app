import { $, $$ } from './helpers.js'

const columnsEl = $$('[data-column]')

function getColumnEl(location) {
    return $(`[data-column="${location}"]`)
}

function getCounterEl(location) {
    const counterMap = {
        'upcomming': $('.upcomming__counter'),
        'inProgress': $('.in-progress__counter'),
        'done': $('.done__counter')
    }
    return counterMap[location]
}

const upcommingCounterEl = $('.upcomming__counter')
const inProgressCounterEl = $('.in-progress__counter')
const doneCounterEl = $('.done__counter')

const taskCardTemplateEl = $('.card-template')

const addTaskBtnEl = $('.upcomming__add-btn')
const deleteAllDoneBtnEl = $('.done__delete-btn')

export {
    columnsEl,
    getColumnEl,
    getCounterEl,
    upcommingCounterEl,
    inProgressCounterEl,
    doneCounterEl,
    taskCardTemplateEl,
    addTaskBtnEl,
    deleteAllDoneBtnEl,
}
