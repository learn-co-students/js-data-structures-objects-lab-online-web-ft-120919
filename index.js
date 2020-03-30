let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}//updateDriverWithKeyAndValue

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver; 
}//destructivelyUpdateDriverWithKeyAndValue

function deleteFromDriverByKey(driver, key) {
  let newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}//deleteFromDriverByKey

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}//destructivelyDeleteFromDriverByKey
