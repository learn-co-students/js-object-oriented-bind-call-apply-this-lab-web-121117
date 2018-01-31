
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  let characteristics = Array.prototype.slice.call(args)
  return fn.apply(thisValue, characteristics)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue)
}
