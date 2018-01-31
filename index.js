const justInvoke = function(fn) {
  return fn.call(this);
};

const setThisWithCall = function(fn, person, age) {
  return fn.call(person, age);
};

const setThisWithApply = function(fn, person, [age, hair]) {
  return fn.apply(person, [age, hair]);
};

const returnNewFunctionOf = function(fn, person) {
  const func = fn.bind(person);
  return func;
};
