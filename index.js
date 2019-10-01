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

const handleArray = data => {
  return data.map(ele => {
    return cloneDeep(ele);
  });
}

const handleObject = data => {
  let newObject = {};
  for(let key in data) {
    newObject = {
      ...newObject,
      [key]: cloneDeep(data[key]),
    };
  }
  return newObject
};

cloneDeep = data => {
  if(isString(data)) return String(data);
  
  if(isNumber(data)) return Number(data);
  
  if(isFunction(data)) return data.bind({});
  
  if(isArray(data)){
    return handleArray(data);
  }
  
  if(isObject(data)){
    return handleObject(data);
  }
};


const clonedData = cloneDeep("wd");

let obj = {
  "someKey": "someValue",
  "someOtherKey": "someOtherValue",
  "someArrayValue": [12,34,56,78],
  "someDeepArray": [
    {"someKeyInDeepArray": "try to change this"},
    {"someOtherKeyInDeepArray": "...rest"}
  ]
};


const clonedObject = cloneDeep(obj)

console.log("clonedObject----->", clonedObject);
clonedObject.someDeepArray[0].someKeyInDeepArray = "changed value";

console.log("modified clonedObject----->", clonedObject);

console.log("Origional Object------>", obj);
