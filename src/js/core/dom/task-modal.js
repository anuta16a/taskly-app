import { $, $$ } from './helpers.js'

const taskModalEl = $('.task-modal--hidden')
const taskModalTitleEl = $('.task-modal__title')
const taskModalDescriptionEl = $('.task-modal__description')
const taskModalUserEl = $('.task-modal__user')

const taskModalTopicPopoverContentEl = $('.task-modal__topic-popover-content')
const taskModalTopicPopoverBtnEl = $('.task-modal__topic-popover-btn')
const taskModalTopicItemsEl = $$('.task-modal__topic-item')
const taskModalTopicBtnPathEl = $('.task-modal__topic-popover-btn svg path')

const taskModalUserPopoverContentEl = $('.task-modal__user-popover-content')
const taskModalUserPopoverBtnEl = $('.task-modal__user-btn')
const taskModalUserPopoverBtnTextEl = $('.task-modal__user-popover-btn-text')
const taskModalUsersEl = $$('.task-modal__user')

const taskModalCancelBtnEl = $('.task-modal__control-btn--cancel')
const taskModalConfirmBtnEl = $('.task-modal__control-btn--confirm')

export {
    taskModalEl,
    taskModalTitleEl,
    taskModalDescriptionEl,
    taskModalUserEl,
    taskModalTopicPopoverContentEl,
    taskModalTopicPopoverBtnEl,
    taskModalTopicItemsEl,
    taskModalTopicBtnPathEl,
    taskModalUserPopoverContentEl,
    taskModalUserPopoverBtnEl,
    taskModalUserPopoverBtnTextEl,
    taskModalUsersEl,
    taskModalCancelBtnEl,
    taskModalConfirmBtnEl,
}
