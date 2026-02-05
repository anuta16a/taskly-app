class Task {
  constructor({
    id = crypto.randomUUID(),
    title = '',
    description = '',
    topic = 'bug',
    location = 'upcoming',
    user = '',
    timeMinutes = 0,
  }) {
    this.id = id
    this.title = title.trim()
    this.description = description.trim()
    this.topic = topic
    this.location = location
    this.user = user

    this.createdAt = Date.now()
    this.updatedAt = Date.now()
  }
}

export { Task }
