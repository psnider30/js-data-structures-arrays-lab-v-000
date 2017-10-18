const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const new_drivers = [...drivers, name];
  return new_drivers;
}

function prependDriver(name) {
  const new_drivers = [name, ...drivers];
  return new_drivers;
}

function removeLastDriver() {
  const new_drivers = drivers.slice(0, drivers.length - 1)
  return new_drivers;
}

function removeFirstDriver() {
  const new_drivers = drivers.slice(1, drivers.length)
  return new_drivers;
}
