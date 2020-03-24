//Define driver as an empty object

const driver = {};

//updateDriverWithKeyAndValue(driver, key, value)
//"before each" hook for "returns a driver with the original key value pairs and
//the new key value pair":

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value});
}

//destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
//Updates `driver` with the given `key` and `value`(it is destructive)
    driver[key] = value;
//returns the entire updated driver   
    return driver;
}

//deleteFromDriverByKey(driver, key)
function deleteFromDriverByKey(driver, key){
//does not modify the original driver(it is non - destructive)
    let newDriver = Object.assign({}, driver);
//deletes `key` from a clone of driver
    delete newDriver[key];
//returns the new driver(it is non - destructive)
    return newDriver;
}    
 
//destructivelyDeleteFromDriverByKey(driver, key)
function destructivelyDeleteFromDriverByKey(driver, key) {
//modifies the original driver
    delete driver[key];
//returns driver without the delete key / value pair
    return driver;
}
