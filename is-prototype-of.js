function isPrototypeOf(prototype, prototypedObject) {
  var retrieved = Object.getPrototypeOf(prototypedObject);

  if(typeof prototype === 'undefined' || prototype === null) {
    throw new TypeError('First argument cannot be null or undefined.');
  }

  if(retrieved === prototype) {
    return true;
  } else {
    if(retrieved === null) {
      return false;
    } else {
      return isPrototypeOf(prototype, retrieved);
    }
  }
}