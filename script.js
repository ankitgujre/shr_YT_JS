// word vs keyword

/**Ram shyam ankit */
/** for let var const = keyword */

/**-----------------------------Variables and Decalarations---------------------------- */

// var let const - line by line comparision
// var a = 12;    // globally use kr sakte hai
// var a = 5000000000000000;
// console.log(a)

// decalaration and initialization

// var a; // yeh hota hai declare karna
// var b = 15;  // yeh hota hai declare and initialize karna

// initialize ka matlab hota hai 1st value dena

// var window me add hota hai
// jab bhi variable window me add hai samjhao vo var se create hua hai

// var yeh hamesa function scoped hota hai
// var ko firse declare karsakte hai error nahi ayega

// let a = 5223;
// console.log(a)

// const pi = 3.14;
// console.log(pi)


/**------------------------------Scope----------------------------------------------- */

// global,block,functional
/*
var a = 12;  // yeh pure code me kahi bhi use ho sakta ha = global

function abc(){
    var a = 45;  // yeh is function me kahi bhi use ho sakta hai = functional
}

{
    // var a = 55;  // agar kisi curly braces me variable banaoge toh var nahi chalega
    let a = 4; // yeh chal jayega 
    // curly braces ke andar ke variables hote hai block scope
}
    */

/**--------------------------------reassignment and redeclaration---------------------- */

// var a = 13;
// a = 56;  // reassignment

// var a = 78996; // redeclaration

// let b = 456;
// b = 89;


/*-----------------Temporal Dead Zone------------------------*/
// console.log(a)
// let a = 56;

// console.log(b)
// var b = 456;

/**------------------------------Hoisting------------------------ */

// Ek variable ko jab js me banate hai toh voh variable do hisso me tut jata hai uska
// declare part upper chale jata hai aur uska initialize part niche rah jata hai

// var a = undefined;
console.log(a)
var a = 12;  // kuch is tarike se