// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  let address = {
    [`${key}`]: `${value}`
  };
  let new_driver = Object.assign({}, driver, address);
  return new_driver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[`${key}`] = `${value}`;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let new_driver = Object.assign({}, driver);
  delete new_driver[`${key}`];
  return new_driver;
}

function  destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[`${key}`]
    return driver
}



