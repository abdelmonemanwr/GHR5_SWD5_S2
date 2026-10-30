// console.log("hello");

// var firstOrderId = 2;
// var fname = "men3m";
// console.log(typeof(fname));
// console.log(typeof(firstOrderId));

// Student s = new Student();



/*
Typed           Not-Typed
loosely-Typed
Strongly-Typed

// Data types

Primitive DT       Reference DT
 number            anything else
 string
 boolean
 undefined
 null
 symbol (es6)
*/


// var lname;
// console.log(lname);
// console.log(typeof(lname));

// var x = 12;

// var x = 12;
// console.log(x);
// x  = "men3m";
// console.log(x);
// x = true;
// console.log(x);

// var x = "depi";

/*
null is not a zero
null is an object

zero number  0
null null    empty-object
*/


// // 1. literal creation
// var org = "depi";
// // 2. Method Creation
// var org = String("depi");
// var age = Number(30);
// var flag = Boolean(true);


// var z = Number("50");
// console.log(z);
// console.log(typeof(z));

// var a  = Number("DEPI");
// console.log(a);
// console.log(typeof(a));

// is not a number
// console.log(isNaN(23));     // F
// console.log(isNaN("depi")); // T
// console.log(isNaN("35"));   // F

// var flag = Boolean(true);
// console.log(flag);
// console.log(typeof flag);

// console.log(Boolean("ali"));
// console.log(Boolean([1,2]));
// console.log(Boolean(NaN));
// console.log(Boolean(-0));

/*
falsy value
   - false
   - null
   - ""
   - 0
   - undefined
   - NaN
Truthy value
   - anything else
*/ 


// var x = 23;
// var y = 12;
// console.log(x+y);

// var x = "23";
// var y = "12";
// console.log(x+y);

// var x = "org";
// var y = "depi";
// console.log(x+y);

// var x = 12;
// var y = "depi";
// console.log(x+y);

// var x = 12;
// var y = "23";
// console.log(x+y);

// Number("23") > 23
// Number("depi") > NaN

// coercion: process of converting datatype into another one(JS Engine);

// console.log(undefined + undefined); // NaN
// console.log(undefined + 10); // NaN
// console.log(NaN + 10); // NaN
// console.log(null + null); // 0
// console.log(10 + null); // 10

// console.log(10 - 7);       // 3
// console.log(10 - "7");     // 3
// console.log(10 - "depi");  // NaN

// > >= < <=
// console.log(1 > 3);
// console.log(-1 > -3);
// console.log(1 > -3);
// console.log("1" > 3);

// == ===
// var a = "5";
// var b  = 5;
// console.log(a==b);

// var a = "5";
// var b  = 5;
// console.log(a===b);

// var s1 = "mona";
// var s2 = "ola";

// var n1= true;       // Number(true) => 
// var n2 = "true";    // Number("true")

// console.log(Number(true));
// console.log(Number("true"));


// console.log(n1==n2);  // f
// console.log(n1===n2); // f

// Bitwise AND
/*
    t && t => t
    t && f => f
    f && t => f
    f && f => f
*/ 

// OR
/*
    t || t => t
    t || f => t
    f || t => t
    f || f => f
*/ 

5>3 || -3<9
//  t       t  

// Short Circuits

// console.log("ola" || "mona");
// console.log("ola" && "mona");
// console.log(undefined && "mona");
// console.log("" && "mona");

// console.log("mona" || "ali"); // mona
// console.log("mona" || ""); // mona
// console.log(0 || undefined); // undefined
// console.log("undefined" || null); // "undefined"
// console.log("undefined" && "null"); // "null"
// console.log("0" || "a'laa"); // "0"
// console.log("alaa" || "zero"); // "alaa"
// console.log("alaa" || 0); // "alaa"

// function test(){
//     // im a comment
//     console.log("test");
// }

// console.log(test || 0);

// cvv

// var cvv= 123;
// var balance = 110000;
// var orderPrice = 9999;
// if (cvv == "123" && balance >= orderPrice){
//     console.log("payment done successfully");
//     balance-=orderPrice;
// // } else if () {}
// // } else if () {}
// // } else if () {}
// } else {
//     console.log("invalid cvv or insuffecient funds");
// }

// // (condition?x:y);
// console.log(cvv==123 && balance >= orderPrice ? 
//     balance-=orderPrice: 
//     "invalid cvv or insuffecient funds");

// var color = "purple";
// switch (color) {
//     case "green":
//         console.log("green");
//         break;
        
//     case "red":
//         console.log("red");
//         break;

//     case "blue":
//         console.log("blue");
//         break;
        
//     default:
//         console.log("invalid color");
//         break;
// }

// var idx=0;
// for(; ; ){
//     if(idx<10){
//         console.log("hello, world");
//         idx++;
//     }
//     else {
//         // break;
//         // continue 
//     }
// }

// var idx=0;
// for( ;idx<10; ){
//     console.log("hello, world");
//     idx++;
// }

// var idx=0;
// while(idx<10){
//     console.log("hello, world");
//     idx++;
// }

// var idx=0;
// do{
//     console.log("hello, world");
//     idx++;
// }while(idx>1);

// var input = prompt("enter your age");
// console.log(input)
// console.log(typeof input)

// while(input==null){
//     input = prompt("enter your age");
// }

// var input;
// do{
//     input = prompt("enter your age");
//     input = Number(input);
//     var isValid = true;
//     if(isNaN(input)){
//         console.log("please enter valid input");
//         isValid = false;
//     }
// }while(!isValid);

// document.writeln("age = ", input);
// alert("this is a new message");

// var isCaseSensitive = confirm("do you want to consider case sensivity?");
// console.log(isCaseSensitive);
// var inputMessage = prompt("enter your age");
// if(!isCaseSensitive){
//     inputMessage = inputMessage.toLowerCase();
// }

// console.log(inputMessage);


// console.log(window);


var fname = "    hElLo;from;JS   ";
// console.log(fname);
// console.log(fname[3]);
// console.log(fname[232323]);
// console.log(fname[-3]);
// for(var i = 0; i<fname.length; i++){
    // console.log(fname[i]);
    // console.log(fname.charAt(i));
// }

// console.log(fname.indexOf('l'));
// console.log(fname.lastIndexOf('l'));
// fname = fname.toLowerCase();
// fname = fname.toUpperCase();

// var items = fname.split(';');
// for(var i=0; i< items.length; i++){
//     console.log(items[i]);
// }

// fname = "username=men3m;password=234;city=alex";
// var kvps = fname.split(';');
// // console.log(kvps);
// for(var i=0; i<kvps.length; i++){
//     var items = kvps[i].split('=');
//     // console.log(items);
//     var key = items[0];
//     var val = items[1];
//     console.log(key);
//     console.log(val);
// }
    
// fname= fname.trim();
// fname= fname.trimStart();
// fname= fname.trimEnd();

// var firstName = "men3m";
// var lastName = "anwar";
// var fullname = firstName.concat(' ').concat(lastName);
// console.log(fullname);

// console.log(fname);


