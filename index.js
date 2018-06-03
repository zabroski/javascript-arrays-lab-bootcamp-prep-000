const app = "I don't do much."

function destructivelyAppendKitten(kitten){
  kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function prependKitten(kitten){
  kittens.shift()
  return kittens
}

function appendKitten(kitten){
  return [ kitten, ...kittens]
}