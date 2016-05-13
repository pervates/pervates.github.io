


console.log("Hello World!");


var count = 1;

count = count + 1;
console.log(count);

count += 1 ;
console.log(count);


var a,b,c ;

a = 3;
a = a++;
a = 3;
b = a++;
a = 3
c = ++a;

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);


var r;
var pi = 3.14;
var cirArea = function(r,pi)
{
	return r * r * pi;
};

console.log("cirArea = " + cirArea(3,pi));
