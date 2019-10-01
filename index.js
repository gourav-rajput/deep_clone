const isString = ele => {
  return ele === "" || typeof ele === "string";
}

const isNumber = ele => {
  return ele === 0 || typeof ele === "number"
}

const isFunction = ele => {
  return ele && typeof ele === "function"
}

const isArray = ele => {
  return ele && Array.isArray(ele) && ele instanceof Array
}

const isObject = ele => {
  return ele && typeof ele === 'object' && Array.isArray(ele) === false;
}