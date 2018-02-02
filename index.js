function justInvoke(fn){
  return fn();
}
// The function simply invokes the function passed through to it. It also returns the return value of the passed through function.

// function setThisWithCall(fn, thisValue, arg){
//   return setThisWithCall.call(fn, thisValue, arg);
//
// }

function setThisWithCall(fn, thisValue, args) {
  return fn.call(thisValue, args);
}

// setThisWithCall.call(fn, thisValue, arg);

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
