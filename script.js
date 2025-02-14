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

// ************** 11 **************
