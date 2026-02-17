import { initHandlers } from './handlers/index.js'
import { initClock } from './core/clock.js'
import { remoteConfig } from './firebase'
import { fetchAndActivate, getValue } from 'firebase/remote-config'

async function applyCtaText() {
    await fetchAndActivate(remoteConfig)

    const text = getValue(remoteConfig, 'add_task_cta_text').asString() || 'Add task'
    const btn = document.querySelector(".upcoming__add-btn")

    if (btn) btn.textContent = text
    console.log("CTA text of button:", text)
}

applyCtaText()

initHandlers()
initClock()