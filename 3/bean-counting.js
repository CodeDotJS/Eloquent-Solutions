function countBs(string, ch) {
  var newCount = string.split('');
  var count = 0;
  for(var i = 0; i < newCount.length; i++) {
    if(string.charAt(i) == ch)
    count+=1;
  }
  return count;
}

function countUpper(string) {
  return countBs(string, "B");
}
console.log(countUpper("BBC"));

console.log(countBs("WWWWWhat", "W"));
