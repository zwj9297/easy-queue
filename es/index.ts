type Task = () => Promise<any>

const EasyQueue = () => {
  const list: Task[] = []
  let current: Promise<any>|null = null
  const run = (): Promise<any> => {
    const next = list.shift()
    if (next) return Promise.resolve().then(next).then(run)
    return Promise.resolve()
  }
  const push = (task: Task): void => {
    list.push(task)
    if (!current) {
      current = run().then(() => {
        current = null
      })
    }
  }
  return { push }
}

export default EasyQueue