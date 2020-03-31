const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value });
};

const newDriver = updateDriverWithKeyAndValue(driver, 'key', 'value');
newDriver;
// console.log(newDriver)

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
driver[key] = value;
return driver; 
};

function deleteFromDriverByKey(driver, key) {
    let clone = Object.assign({}, driver)
delete clone[key]
return clone;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
delete driver[key]
return driver
};