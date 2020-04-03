// Write your solution in this file!

function updateDriverWithKeyAndValue(d, k, v){
  const dc = Object.assign({}, d);
  dc[k]=v;
  debugger
  return dc;
}


function destructivelyUpdateDriverWithKeyAndValue(d, k, v){
  d[k]=v;
  return d;
}


function deleteFromDriverByKey(d, k, v){
  const dc = Object.assign({}, d);
  delete dc[k];
  return dc;
}


function destructivelyDeleteFromDriverByKey(){
  delete d[k];
  return d;
}
