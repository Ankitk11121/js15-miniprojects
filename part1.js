//...................................... project-1- hello world print 3 ways ->

// console.log("hello world");

// alert("hello world");

// document.write("<h1>hello world</h1>");

// document.write(`<h1>hello world</h1>`);









// ..........................................project-2- add two number ->
// static way---
// var a = 3;
// var b = 4;
// var c = a+b;
// document.write(`sum of a and b is ${c}`);

//dynamic way--- *** str ko number me convert karna hoga pehle many ways hote he-- unary+,flot,int,num etc
// let a = prompt("please enter 1st number","");
// let b = prompt("please enter 2nd number","");
// let c = parseInt (a) +  +(b);
// document.write(`sum of 1st and 2nd number is ${c}`);

// let a = prompt("please enter 1st number","");
// let b = prompt("please enter 2nd number","");
// let c = parseFloat (a) + Number (b);
// document.write(`sum of 1st and 2nd number is ${c}`);










// .............project-3- square root of number matlab 64 se 8  *** math.sqrt str ko number me badal deta he ->

// let a = prompt("enter a number");
// console.log(typeof a);                  //string dega
// let b = Math.sqrt(a);
// console.log(typeof b);                 // number ho gya
// document.write(b);









// ..................project-4- calculat area of triangle... ->
// .....GENERAL FORMULA - ( base * height) / 2

// let base = prompt("please enter the base");
// console.log(typeof base);
// let height = prompt("please enter the height")
// let area = (base * height)/2;
// console.log(`base is ${base}  and height is ${height} and area is = ${area}`);
// console.log(typeof area);

// ..REGULAR TIRANGLE...herons formula     \/- (see internet complex formula)
// let a = 10;
// let b = 10;
// let c = 10;
// let s = (a+b+c)/2;
// let temp = s*(s-a)*(s-b)*(s-c);
// let area = Math.sqrt(temp);
// console.log(area);









// .................project-5- swap two number using and without using temporary variable ->

// ...using temp variable
// var a = 5;
// console.log(`value of a is ${a}`);
// var b = 6;
// console.log(`value of b is ${b}`);
// var temp = a;
// console.log(`value of tamp is ${temp}`);
// a = b;
// b = temp;
// console.log(`value of b is ${b}`);
// console.log(`value of a is ${a}`);

// ....................without using temp
// var x = 5;
// console.log(`value of x is ${x}`);
// var y = 6;
// console.log(`value of y is ${y}`);
// x = x + y;
// console.log(`value of x is ${x} after---`);
// y = x-y;
// console.log(`value of y is ${y}`);
// x = x-y;
// console.log(`value of x is ${x}`);








// .........project-6-> convert kilometer to miles ->
//... (1 K.M./Factor = 0.621371 ) , (miles = kilometer * factor)

// function convert (){
//     let kms = document.getElementById("data").value;
//     const factor = 0.621371;
//     let miles = factor * kms;
//     document.getElementById("result").innerText= `${miles} miles`;
// }







// ..............project-7- convert celsius to fahrenhiet js function....(formula => F = celsius *1.8 +32 ).. ->

// function change() {
//     let celsius = document.querySelector('#data').value;
//     let f = (celsius * 1.8) + 32;
//     document.getElementById("result").innerText = `${f} farenhight`;
// }








//..........project- 8- check if number is positive or negative or zero ********* (Math.sign(x) se bhi hoga)=>

// (Math.sign(x) se bhi hoga) ===>>> way-1
// function check() {
//     let data = document.getElementById("input").value;
//     let res = Math.sign(data)
//     alert(res);
// }

//...OTHER WAY===>>> way-2
// function check() {
//     let value = document.getElementById("input").value;
//     var res;
//     if(value > 0) {
//         res = `${value} is positive number`;
//     }
//     else if(value < 0){
//         res = `${value} is negative number`;
//     }
//     else if (value == 0){
//         res = `${value} is zero`
//     }
//     else {
//         res = `${value} this is not a number`
//     }
//     document.getElementById("result").innerText = res;
// }









//...................project-9... GENERATE A RANDOM NUMBER (Math.random()) ->

// function generate() {
//      let x = Math.random();
//      let y = (x * 9000) + 1000;
//      let res = Math.floor(y);
//      document.getElementById("result").innerText = res;
// }










//......project-10.............. check if number is odd or even ->
//............ way -1 - using if-else->
// function check() {
//  let value = document.getElementById("data").value;
//  if(value%2 ==0){
//      value = "number is even";
//  }
//  else {
//     value = "number is odd";
// }
// document.getElementById("result").innerText = value;
// }

//...........way -2 - using ternary operator ->
// function check() {
//     let value = document.getElementById("data").value;
//     let res = value%2 ==0? "number is even": "number is odd";
//     document.getElementById("result").innerText = res;
// }









//** */...project--11 --check prime number (Prime number wo number hota hai jo sirf 1 aur khud ke alawa kisi aur se divide nahi hota)==>
//..NOTE- Else condition loop ke baad execute honi chahiye. ,,
//..NOTE- Loop ko i < num se i <= Math.sqrt(num) tak change karna zaruri hai kyunki kisi bhi non-prime number ka ek factor hamesha uske square root se chhota ya barabar hota hai. Isse aap unnecessary iterations se bach sakte hain aur code ko zyada efficient bana sakte hain.

// var num = Number(prompt("enter a number"));
// if (num === 1) {
//   console.log(`${num} is neither prime nor composite`);
// } else if (num < 1) {
//   console.log(`${num} this is not a prime number`);
// } else {
//   var isPrime = true;
//     // i < num  bhi likh sakte the lekin ye jyada thik he 
//   for (var i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(`${num} is a prime number`);
//   } else {
//     console.log(`${num} is NOT a prime number`);
//   }
// }








//......................................project--12 -- find largest number among 3 numbers--------
//.....................................WAY-1- LONG-------->
// var x = Number(prompt("please enter 1st number"));
// var y = Number(prompt("please enter 2nd number"));
// var z = Number(prompt("please enter 3rd number"));

// if(x>y && x>z){
//     console.log(`${x} is big number between ${x},${y},${z}`)
// }
// else if(y>x && y>z){
//     console.log(`${y} is big number between ${x},${y},${z}`)
// }
// else{
//     console.log(`${z} is big number between ${x},${y},${z}`)
// }


//...*********...............................way---2...using math.max().........----->
// var x = Number(prompt("please enter 1st number"));
// var y = Number(prompt("please enter 2nd number"));
// var z = Number(prompt("please enter 3rd number"));

// var res = Math.max(x,y,z);
// console.log(`${res} is bigger number between ${x} and ${y} and ${z}`)











//...................project--13--find factorial of any number......(ex-5 factorial to 1*2*3*4*5)-
//.....way--1-->
// var num = Number(prompt("please enter a number"));
// var fact = 1;

// if(num == 0){
//     console.log(`factorial of 0 is 1`)
// }
// else if(num < 0){
//     console.log(`factorial of negative number is not possible`);
// }
// else {
//     for(let i = 1; i <= num; i++){
//         fact = fact *i;
//     }
//     console.log(`factorial of ${num} is ${fact}`)
// }


//....HARD.....way-2----factorial using recursion (function calls itself)---hard->
// let number = Number(prompt("please enter a number"));
// var fact = 1;
// function facto(n) {
//     if(n > number){
//         return;
//     }
//     var temp = fact;
//     fact = fact * n;
//     n++;
//     facto(n)
// }
// facto(1)
// console.log(`factorial is ${fact}`);











//.......................project-14 ........print of table of any number function
// var number = prompt("please enter a number");
// function table(number){
//     for(let i = 1; i <= 10; i++){
//         let res = i * number;
//         console.log(`${number} x ${i} = ${res}`);
//     }
// }
// table(number);












//.......project--15 ---  armstrong number.....(ex=> 153 = 1*1*1 + 5*5*5 + 3*3*3)--this for only 3 digit--
// var number = prompt("please enter a number");
// var temp = number;
// var sum = 0;

// while(temp > 0){
//     var digit = temp%10;
//     sum = sum + digit**3;
//     temp = parseInt(temp/10);
// }
// if(sum == number){
//     console.log(`${number} is a armstrong number`)
// } 
// else {
//     console.log(`${number} is NOT a armstrong number`)
// }


//.............jitni digit k liye chaho utni k liye he ye................
// var number = prompt("please enter a number");
// var temp = number;
// var noOfDigit = number.toString().length;
// var sum = 0;

// while(temp > 0){
//     var digit = temp%10;
//     sum = sum + digit**noOfDigit;
//     temp = parseInt(temp/10);
// }
// if(sum == number){
//     console.log(`${number} is a armstrong number`)
// } 
// else {
//     console.log(`${number} is NOT a armstrong number`)
// }








//..project--16--check if the number have same last digit.........
// var a = prompt("please enter a number");
// var b = prompt("please enter b number");
// var c = prompt("please enter c number");
// var num1 = a%10;
// var num2 = b%10;
// var num3 = c%10;

// if(num1 == num2 && num1 == num3){
//     console.log(`${a} and ${b} and ${c} same last digit`);
// }
// else {
//     console.log(`${a} and ${b} and ${c} NOT same last digit`)
// }








//.................project--17--check palindrom using array method--ulta sidha same(ex- madam)
// var data = prompt("please enter something");
// // console.log(data);
// var arr = data.split("");
// // console.log(arr);
// var rev = arr.reverse();
// // console.log(rev);
// var res = rev.join('');
// // console.log(res)

// if(data == res){
//     console.log("this is palondram string")
// }
// else {
//     console.log("this is NOT palondram string")
// }








//...........project--18--  Check the Number of Occurrences of a Character in the String --->
// var string = prompt("enter a string");
// var letter = prompt("enter a letter");
// var strlen = string.length;
// var counter = 0;
// for(let i = 0; i < strlen; i++){
//     if(string[i] == letter){
//         counter++;
//     }
// }
// console.log(`${string} => ${letter} = ${counter}`);









//....project--19--Check Whether a String Starts and Ends With Certain Characters  
// var str = prompt("enter a sring");
// var strstart = str.startsWith("a");
// var strend = str.endsWith("t");
// if(strstart == true && strend == true){
//     console.log(`${str} start with "a" and end with "t"`);
// }
// else if(strstart == true && strend == false){
//     console.log(`${str} is start with "a"`);
// }
// else if(strstart == false && strend == true){
//     console.log(`${str} is ends with "t"`);
// }
// else {
//     console.log(`${str} not matching`);
// }








//...project--20 ---Check Whether a String Contains a Substring    
// let str = prompt("enter a string");
// let substr = "the";
// let res1 = str.includes(substr);
// console.log(res1);
// let res2 = str.indexOf(substr);
// console.log(res2);









//--- project--21--Convert the First Letter of a String in to UpperCase  
// var str = prompt("enter a string");
// console.log(str);
// var toda = str.charAt(0);
// var upper = toda.toUpperCase();
// var slic = str.slice(1);
// console.log(`${upper}${slic}`);






//---project--22-- Count the Number of Vowels in a String using Regex  
// var str = prompt("enter a string");
// const regx = /[aeiou]/gi;
// var chars = str.match(regx);
// console.log(chars.join(','));
// console.log(chars.length)






//--project--23---find sum of natural numbers using recursion    
// function sum (num) {
//     if(num > 0) {
//         return num + sum(num-1);
//     }
//     else{
//         return num;
//     }
// }
// var res = sum(20);
// console.log(res);






//--project--24---find the factors of number --
// var num = prompt("enter a number");
// for(var i = 1; i<= num; i++) {
//     if(num%i == 0){
//         console.log(i)
//     }
// }






//--- project---25 ----make a simple calculator using switch case    

// var num1 = Number(prompt("please enter 1st number"));
// var num2 = Number(prompt("please enter 2nd number"));
// var opr = prompt("please enter among  + , - , x , /");

// switch(opr){
     
//     case "+":
//         var res = num1 + num2;
//         console.log(`${num1} + ${num2} = ${res}`);
//         break;

//     case "-":
//         var res = num1 - num2;
//         console.log(`${num1} - ${num2} = ${res}`);
//         break;  

//     case "x":
//        var res = num1 * num2;
//        console.log(`${num1} x ${num2} = ${res}`);
//        break;   
       
//     case "*":
//        var res = num1 * num2;
//        console.log(`${num1} * ${num2} = ${res}`);
//        break;

//     case "/":
//        var res = num1 / num2;
//        console.log(`${num1} / ${num2} = ${res}`);
//        break;

//    default:
//             console.log("invalid operator");
// }









//--- project---26 ----print fibonacci sequence
// var a = 0 , b = 1;
// console.log(a);
// console.log(b);

// for(var i = 0; i <= 8; i++){
//     var temp = a + b;
//     console.log(temp);
//     a = b;
//     b = temp;
// }






//--- project---27 ----replace character of  a string..using  fun- replace()
// var x = "bad boy Bad";
// console.log(x);
// var res = x.replace("bad","good");
// console.log(res);

//................................using reges...case sensitive hat gai is se
// var str = "hallo Ankit how  u ankiT , U GOOD boy ANKit";
// console.log(str);

// var reg = new RegExp("ankit", "gi")
// var res = str.replace(reg,"meena");
// console.log(res);





















