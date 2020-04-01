// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  // shouldn't manipulate the driver and return a new driver that has an updated value for the key passed in. 
  const newObj = { ...driver }
  newObj[key] = value
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  //  same as above but should mutate the driver params passed in
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  // delete key/value pair for key passed 
  // should not mutate the the driver passed 
  const newObj = Object.assign({}, driver)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  // same as deleteFromDriverByKey
  // but should mutate the the driver passed 
  // Be sure and consider whether dot-notation or bracket-notation might affect your solution.
  delete driver[key]
  return driver
}