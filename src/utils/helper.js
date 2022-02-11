export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function randomize(delay = 500) {
  return new Promise((res) => {
    setTimeout(() => {
      res(Math.random() > 0.5)
    }, delay)
  })
}
