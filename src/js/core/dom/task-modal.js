import { $, $$ } from './helpers.js'

const taskModalEl = $('.task-modal-overlay')
const taskModalTitleEl = $('.task-modal__title')
const taskModalDescriptionEl = $('.task-modal__description')
const taskModalUserEl = $('.task-modal__user')

const taskModalTopicPopoverContentEl = $('.task-modal__topic-popover-content')
const taskModalTopicPopoverBtnEl = $('.task-modal__topic-popover-btn')
const taskModalTopicItemsEl = $$('.task-modal__topic-item')

const taskModalTopicBtnDefaultEl = $('.task-modal__topic-popover-btn-content-default')
const taskModalTopicBtnBugEl = $('.task-modal__topic-popover-btn-content-bug')
const taskModalTopicBtnFeatureEl = $('.task-modal__topic-popover-btn-content-feature')
const taskModalTopicBtnDesignEl = $('.task-modal__topic-popover-btn-content-design')
const taskModalTopicBtnImprovementEl = $('.task-modal__topic-popover-btn-content-improvement')
const taskModalTopicBtnResearchEl = $('.task-modal__topic-popover-btn-content-research')
const taskModalTopicBtnDocsEl = $('.task-modal__topic-popover-btn-content-docs')

const taskModalTopicBtnContents = {
  default: taskModalTopicBtnDefaultEl,
  bug: taskModalTopicBtnBugEl,
  feature: taskModalTopicBtnFeatureEl,
  design: taskModalTopicBtnDesignEl,
  improvement: taskModalTopicBtnImprovementEl,
  research: taskModalTopicBtnResearchEl,
  docs: taskModalTopicBtnDocsEl,
}

const taskModalUserPopoverContentEl = $('.task-modal__user-popover-content')
const taskModalUserPopoverBtnEl = $('.task-modal__user-popover-btn')
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
    taskModalTopicBtnContents,
    taskModalUserPopoverContentEl,
    taskModalUserPopoverBtnEl,
    taskModalUserPopoverBtnTextEl,
    taskModalUsersEl,
    taskModalCancelBtnEl,
    taskModalConfirmBtnEl,
}
