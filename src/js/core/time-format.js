function formatCurrentTime() {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

function initClock() {
  const headerTimeEl = document.querySelector('.header__current-time')
  if (!headerTimeEl) return

  const update = () => {
    headerTimeEl.textContent = formatCurrentTime()
  }

  update()
  setInterval(update, 60000)
}

export {
  initClock
}
