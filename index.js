let driver = {};
function updateDriverWithKeyAndValue(driver, k, v){
  let dc = Object.assign({}, driver);
  dc[k]=v;
  return dc;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, k, v){
  driver[k]=v;
  return driver;
}
function deleteFromDriverByKey(driver, k, v){
  let dc = Object.assign({}, driver);
  delete dc[k];
  return dc;
}
function destructivelyDeleteFromDriverByKey(driver, k, v){
  delete driver[k];
  return driver;
}
