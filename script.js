// ******** 1 **********
// myFun();

// var myFun = function () {
//     console.log("First");
// }

// myFun();

// function myFun() {
//     console.log("Second");
// }

// myFun();

// ****** 2 ********

// var variable = 10;
// (() => {
//     console.log(variable);

//     variable = 20;
//     console.log(variable);
// })();
// console.log(variable);
// var variable = 30;

// ******** 4 ********
// variable = 10;                   //scresnshot vailable for more understanding
// (() => {
//     foo = 100;
//     console.log(variable);
//     var foo = 100;
//     variable = 20;
//     console.log(variable);
// })();                                 //  when we go outside from this function the whole context will delete therefore log(foo)  is not define
// console.log(foo);
// console.log(variable);
// var variable = 30;

// ************ 5 /***********

// for (var i = 0; i < 10; i++) {                   // all the calls to setTimeout() will share the same reference to i, which means when the setTimeout() callbacks run, the loop will have already finished executing, and i will be equal to 10 at that point.
//     setTimeout(() => console.log(i), 0);          //let is a block scope so, it create a newvarable for each execution
// }

// ************ 6 ************
// var fullname = "Rohit Sharma";

// var obj = {
//     fullname: "Yuvraj",

//     props: {
//         fullname: "Inside Props",
//         getFullname: function () {
//             return this.fullname;
//         },
//     },
//     getFullname: function () {
//         return this.fullname;
//     },
//     getFullnameV2: () => this.fullname,

//     getFullnameV3: (function () {
//         return this.fullname;
//     })(),                            //Eiffi is a property therefore is return undefined
// };

// console.log(obj.props.getFullname());
// console.log(obj.getFullname());
// console.log(obj.getFullnameV2());    //this refer to undefined because .this refer to windoe object()

// console.log(obj.getFullnameV3());


// ********** 7 **************
// const rohit = {
//     name: "Rohit Sharma",
//     sayName: function () {
//         console.log(this.name);
//     },
// };

// const jhon = {
//     name: "Jhone sina",
//     sayName: function () {
//         console.log(this.name);
//     },
// };

// jhon.sayName.call(rohit);



// ********** 8 **************

// const rohit = {
//     name: "Rohit Sharma",
//     sayName: function () {
//         console.log(this.name);
//     },
// };

// setTimeout(rohit.sayName, 3 * 1000);

// ******* 9 ************** //

// const obj = Object.create({        //object.create push the height value to the prototype therefore delete cnnot work on prototyprs. 👍
//     height: 30,
// });

// console.log(obj.height);
// delete obj.height;
// console.log(obj.height);

// ***************** 10 ***************

// function a() {
//     console.log("A");
// };

// setTimeout(() => console.log("B"), 0);

// a();

// console.log("C");
// Promise.resolve().then(() => console.log("D"));    // Microtassk Queue have high Priority


//* Easy practise question **/

// [1]

// let a = 1;
// sum = 0;
// while (a <= 10) {
//     sum = sum + a;
//     a++;
// }
// console.log(sum);

// let str = "JavaScript";

// for (let charac of str) {
//     console.log(charac);
// }


//let arr = [1, 2, 3];
//arr[4] = 5;
//console.log(arr.length);   //5
//console.log(arr);          //[ 1, 2, 3, <1 empty item>, 5 ]


//We need 40 element
//const [, , , a] = [10, 20, 30, 40, 50];
//console.log(a);

// Now if we have big arr so ,

// const { 3: a } = [11, 22, 33, 42, 59];
//console.log(a);               //here we use object


/*  Q */
function abc() {
    //console.log("hii");
}
const value = new abc();     // new keyword create a new empty object
//console.log(value);           // new is contructor function


// var x = 20;

// var fun = function () {
//     console.log(x);
//     var x = 21;
// };

// fun()

// function mutilpy(num1, num2) {
//     console.log(num1 * num2);
// }
// var arr = [6, 6]
// mutilpy(...arr);

//IIFE() 👍

// const fn = (a, x, y, ...numbers) => {
//     console.log(a, x, y, numbers);
// }
// fn(2, 3, 4, 5,5)


//Closures 👍

// let count = 0;
// (function printCount() {
//     if (count === 0) {
//         let count = 1;         //let shadow the count = 0 (shadowing)
//         console.log(count);
//     }
//     console.log(count);
// })();


// function a() {
//     for (var i = 0; i < 3; i++) {           //using var
//         function num(i) {
//             setTimeout(function log() {
//                 console.log(i);
//             }, i * 1000);
//         }
//        num(i);
//     }
// }
// a();

//Make this run only once 👍
// let view;
// function likeVideo() {
//     let called = 0;

//     return function () {
//         if (called > 0) {
//             console.log('Alredy Suscribe');
//         } else {
//             view = 'Rohit Sharma'
//             console.log('Suscribe to ', view);
//             called++;
//         }
//     };
// }
// let isSuscribed = likeVideo()

// isSuscribed()
// isSuscribed()
// isSuscribed()


//Curring 👍

//sum(4)(5)(5)

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// };
// console.log(sum(4)(5)(5));

//Infinite currring -> sum(1)(2)(3)....(n)

// function add(a) {
//     return function (b) {
//         if (b) return add(a + b);
//         return a;
//     }
// }
// console.log(add(5)(2)(4)(8)());

