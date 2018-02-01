function justInvoke(fn) {
  return fn()
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue)
}