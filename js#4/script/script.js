// // #1
for (var i = 1; i <= 50; i++)
console.log(i);
console.log("   ");
for (var x = 35; x >= 8 ; x--)

console.log(x);
// // #2
document.write('Задание 2' + "<br>");
var q = 89;
while (q >= 11) {
	document.write(q + "<br>");
	q--;
}

// // #3
var ravno = 0;
for (var w = 0; w <= 100; w++){
	ravno += w;}
	console.log(ravno);
// var 2
function sumTo(x){
	return x * ( x + 1 ) /2; 
}

alert(sumTo(1000));

// // #4
var sum = 0;
for (var e = 1; e <= 5;){
	sum += e;
	e++;
	console.log(sum);
}
// #5 

for (var r = 8; r <= 56; r++) {

  if (r % 2 == 0 ) {
    console.log( r );
  }

}

// #6
for (var i = 1; i <= 10; i++ ) {
for ( var j = 1; j <= 10; j++ ) {
console.log(i + " * " + j + " = " + (i * j) );
}}

// #7
var num = 0;
var t = 1000;
for (; t > 50; t /= 2, num++);
	console.log(t);
	console.log(num);

// #8
var f = 0;
for (var i = 0;; i++){
	var g =  + (prompt("введите число"));
		if(g){
			var f = f + g;
			continue;
			}else {
			alert("Ошибка")
			break;
}
}
var sredn = f/i;
document.write('Итерации: ' + i + "<br>"); 
document.write('сумма: ' + ' ' + f + "<br>");
document.write('среднее арифметическое: ' + ' ' + sredn);


// #9
var str =  [4, 98, 4, 6, 1, 32, 4, 65, 4, 3, 5, 7, 89, 7, 10, 1, 36,
8, 57];
var min = str[0];
var max = min;
	for (i = 0; i <= str.length; i++)  {
	// console.log(str[i])
      if (str[i] > max) {max = str[i]; console.log(max)} 
      if (str[i] < min) {min = str[i]; console.log(min)} 

  }


