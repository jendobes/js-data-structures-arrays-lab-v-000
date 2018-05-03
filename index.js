// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  return newArray = [...drivers, name]
}

function prependDriver(name) {
  return newArray = [name, ...drivers]
}

function removeLastDriver() {
  drivers.slice(0, days.length - 1);
}
