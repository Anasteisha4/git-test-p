 var arr =[-1, 0,1,2,3];

arr.forEach(function(num) {
    console.log(num);
});
var Arr = arr.map(function(num){return num**2;});
console.log(Arr);
var Arr2 =arr.filter(function(num){return num>1;});
console.log(Arr2);