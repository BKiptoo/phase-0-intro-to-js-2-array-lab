// Initial array
const cats = ["Milo", "Otis", "Garfield"];

// Destructively append a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Destructively prepend a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Destructively remove the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Destructively remove the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructively append a cat to the end of the array
function appendCat(name) {
  return [...cats, name];
}

// Non-destructively prepend a cat to the beginning of the array
function prependCat(name) {
  return [name, ...cats];
}

// Non-destructively remove the last cat from the array
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Non-destructively remove the first cat from the array
function removeFirstCat() {
  return cats.slice(1);
}
