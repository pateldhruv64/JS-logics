// const Mem = [
//   {
//     id: 1,
//     name: "Aarav Patel",
//     age: 22,
//     city: "Ahmedabad",
//     email: "aarav.patel@example.com",
//   },
//   {
//     id: 2,
//     name: "Riya Sharma",
//     age: 24,
//     city: "Surat",
//     email: "riya.sharma@example.com",
//   },
//   {
//     id: 3,
//     name: "Vivaan Mehta",
//     age: 21,
//     city: "Vadodara",
//     email: "vivaan.mehta@example.com",
//   },
//   {
//     id: 4,
//     name: "Diya Joshi",
//     age: 23,
//     city: "Rajkot",
//     email: "diya.joshi@example.com",
//   },
//   {
//     id: 5,
//     name: "Krish Desai",
//     age: 25,
//     city: "Mumbai",
//     email: "krish.desai@example.com",
//   },
//   {
//     id: 6,
//     name: "Ananya Shah",
//     age: 22,
//     city: "Pune",
//     email: "ananya.shah@example.com",
//   },
//   {
//     id: 7,
//     name: "Rudra Thakkar",
//     age: 23,
//     city: "Bhavnagar",
//     email: "rudra.thakkar@example.com",
//   },
//   {
//     id: 8,
//     name: "Mira Parmar",
//     age: 20,
//     city: "Junagadh",
//     email: "mira.parmar@example.com",
//   },
//   {
//     id: 9,
//     name: "Harsh Gohil",
//     age: 26,
//     city: "Nadiad",
//     email: "harsh.gohil@example.com",
//   },
//   {
//     id: 10,
//     name: "Saanvi Trivedi",
//     age: 24,
//     city: "Gandhinagar",
//     email: "saanvi.trivedi@example.com",
//   },
//   {
//     id: 11,
//     name: "Dhruv Solanki",
//     age: 22,
//     city: "Anand",
//     email: "dhruv.solanki@example.com",
//   },
//   {
//     id: 12,
//     name: "Kavya Rana",
//     age: 23,
//     city: "Bharuch",
//     email: "kavya.rana@example.com",
//   },
//   {
//     id: 13,
//     name: "Yash Patel",
//     age: 27,
//     city: "Navsari",
//     email: "yash.patel@example.com",
//   },
//   {
//     id: 14,
//     name: "Ishani Dave",
//     age: 21,
//     city: "Valsad",
//     email: "ishani.dave@example.com",
//   },
//   {
//     id: 15,
//     name: "Manav Chauhan",
//     age: 22,
//     city: "Mehsana",
//     email: "manav.chauhan@example.com",
//   },
//   {
//     id: 16,
//     name: "Jiya Vyas",
//     age: 20,
//     city: "Morbi",
//     email: "jiya.vyas@example.com",
//   },
//   {
//     id: 17,
//     name: "Arjun Parmar",
//     age: 24,
//     city: "Kutch",
//     email: "arjun.parmar@example.com",
//   },
//   {
//     id: 18,
//     name: "Nisha Bhatt",
//     age: 25,
//     city: "Ahmedabad",
//     email: "nisha.bhatt@example.com",
//   },
//   {
//     id: 19,
//     name: "Kabir Modi",
//     age: 23,
//     city: "Surat",
//     email: "kabir.modi@example.com",
//   },
//   {
//     id: 20,
//     name: "Priya Pandya",
//     age: 22,
//     city: "Rajkot",
//     email: "priya.pandya@example.com",
//   },
// ];
// if-else function bhai/////////////////////////////////////////////////////// ////////////////   /////////////////   /////////////////////////////////////////

// const Age = 18;

// if ( Age >= 18)  {
//   console.log("18+ Age ae aeeee");

// } else{console.log(" You <18 Age 🥲");
// }

// if-else if-else/////////////////////////////////////////////////////////////////////////////////////////

// const Mark = 75;

// if (Mark >=90) {
// console.log("You are topper brohhh");

// } else if (Mark >= 70) {
//     console.log("you are avg brohhhh");

// } else { console.log("you are dufffre");
// }

// jove string chhe ke nai srike jove badhu//////////////////////////////////////////////////////////////////////////////////////////

// const Number = 22;

// if (Number === "22" ) {

// console.log("ok babe!!!!");

// } else alert ('no babe')

//  !not wala tuk ma sachhu hoy to else walu run thay nai to khotu hoy to if walu run thay/////////////////////////////////////////////////

// const Isnot = false ;

// if ( !Isnot ) {
//  console.log("velllee");

// } else {console.log("youuuuuuu");
// }

// const Isnot = 3;

// if ( Isnot !== "3" ) {
//  console.log("velllee");

// } else {console.log("youuuuuuu");
// }

// tuggel button bg change with click/////////////////////////////////////////////////////////////////////////////

// const Btn = document.querySelector(".Button");
// const Body = document.querySelector("body");

// const White = Btn.addEventListener("click", () => {
//   if (
//     Body.style.backgroundColor === "white" ||
//     Btn.style.backgroundColor === "black" ||
//     Btn.style.color === "white"
//   ) {
//     Body.style.backgroundColor = "black";
//     Btn.style.backgroundColor = "white";
//     Btn.style.color = " black";
//   } else {
//     (Body.style.backgroundColor = "white"),
//       (Btn.style.backgroundColor = "black"),
//       (Btn.style.color = "white");
//   }

//   console.log("ok");
// });

//  for loop hee/////////////////////////////////////////////////////////////////////////////////////

// for (let index = 0; index <= 5; index++) {
//   console.log(index);

// }

// import users from './JS.json' assert { type: 'json'};////////////////////////////////////////////////import of json but not working FIXME:

//arrry walaa//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const User = Mem.map((el) =>{
//    return {name: el.name, age: el.age }
// });

// console.log(User);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////// with out return add
// const User = Mem.map(el => ({ name: el.name, age: el.age }));

// console.log(User);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////overbro////////////////////////////////////////////////////////////////////////////

// console.log("2" + 1 + 3); ans:=213

// console.log(3+4+"5"); ans:=75

// console.log(typeof(Number));

// push() – add end

// pop() – remove end

// shift() – remove front

// unshift() – add front

// map() – return new array

// filter() – condition ke base par

// forEach() – loop
/////////////////////////////////////////////////////////////////////
// const userdays = 391;
// const months = 12;
// const days = 360;

// const year =( userdays / 360);
// console.log("year: ", year);//////////////////////

// const month =(userdays%360)/30;

// console.log("month: ", month);////////////////////////

// const day  = (userdays-360) % 30 ;
// console.log("day: ", day);///////////////////////////

///////////////////////////////// min and max use in if else condition //////////////////////////////////////////////////////
// let A = 10 , B = 12;

// if (A<B) {
//     console.log("a is min");

// } else {
//     console.log("b is min");
// }
///////////////////////////////////////////////DATA ne json ma badle //////////////////

// const name = "Dhruv";
// const number = 9876543210;

// const body = JSON.stringify({ name, number });
// console.log(body);
/////////////////////////////////////////////////json ne normal data ma badle////////////////////////////////

// let jsonData = '{"name":"Dhruv","number":9876543210}';

// let obj = JSON.parse(jsonData);

// obj.name = "Raj";
// obj.number = 1234567890;

// let updatedJson = JSON.stringify(obj);

// console.log(updatedJson);

////////////////////////////////////////////////////////////gadiyooo banavyooo  ////////////////////////////////////////////////

// const hello = window.prompt("");

// for (let i = 1; i < 11; i++) {
//   let total = i * hello;

//   let final = `${hello} * ${i} = ${total}`;

//   console.log(final);
// }

/////////////////////////////////////////////////////rent pat calllllll///////////////////////////////////////////////////////////////

// let Amunt=10000; rent=2; month=5;

// const Permonth = (Amunt*1)*rent/100;

// const TotalAmunt = Permonth*month;

// const final = Amunt + TotalAmunt;

// const EMI = final /month;

// console.log("per month rent",Permonth);
// console.log("EMI amunt pay per month",EMI);
// console.log("total month rent",TotalAmunt);
// console.log("total amunt pay",final);

//////////////////////////////////////////////////create billlll with gst include //////////////////////////////////////////////////////

// const ProductAmunt = 100;

// const GST = 18/100;

// const offer = 5/100;

// const ProductGst = (ProductAmunt * GST);

// const productamountwithgst = ProductAmunt+ProductGst;

// const finalans = (productamountwithgst * offer);

// const final = (productamountwithgst-finalans);

// console.log("product amount without gst =" , ProductAmunt);

// console.log("GST = 18%");

// console.log("product GSt = ",ProductGst );

// console.log("product prize = ",productamountwithgst );

// console.log("offer = 5%");

// console.log("offer includ final prize is =", final);

//////////////////////////////////////////////////////////////light bill junret///////////////////////////////////////////////////

// const unit = 2000;
// let Bill = 0;

// if (unit <= 50){
//    Bill = (unit*0.50);
// } else if (  unit <=150){
//    Bill = (50*0.50) + (unit-50)*0.75;
// }
// else if (  unit <= 250){
//    Bill = (50*0.50) + ((100)*0.75) + ((unit-100)*1.2);
// } else {  Bill = (50*0.50) + (100)*0.75 + (100)*1.2 + (unit-250)*1.5};

// console.log(Bill);
//////////////////////////////////////////////////////////month fine //////////////////////////////////////////////////////////////////////////

// let month = prompt("give me number 1 to 12 only one number give");

// if (month == 1){
//     console.log("Jan");

// } else if (month == 2){
// console.log("Feb");
// }
// else if (month == 3){
// console.log("mar");
// }
// else if (month == 4){
// console.log("apr");
// }
// else if (month == 5){
// console.log("may");
// }
// else if (month == 6){
// console.log("jun");
// }
// else if (month == 7){
// console.log("july");
// }
// else if (month == 8){
// console.log("aug");
// }
// else if (month == 9){
// console.log("sep");
// }
// else if (month == 10){
// console.log("oct");
// }
// else if (month == 11){
// console.log("nav");
// }
// else if (month == 12){
// console.log("dec");
// }
// else {"plzz add number 1 to 12"};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = 50000000,
//   b = 999,
//   c = 1000;

// switch (a, b, c) {
//   case 1:
//     if (a < b) {
//       if (a < c) {
//         console.log("c is max");
//       } else {
//         console.log("a is max");
//       }
//     } else {
//       ("b is max");
//     }
//     break;
// }

// let a = 500,
//   b =4409,
//   c = 1000000,
//   x = 0;

//   switch (a>b){
//     case true:   x = a
//      break;
//     case false: x = b
//     break;

// }
//   switch (c>x){
//     case true:   x = c
//      break;
//     case false: x = x
//     break;

// }

// console.log("max is =",x);

////////////////////////////////////////////////////////////Write a JS program to check whether a number is divisible by 5 and 11 or not/////////////////////////////

// const user = 110;

// if (user%5 == 0 && user%11 == 0  ){
// console.log("divisible by 5 and 11 ");

// }else {console.log(" not divisible by 5 and 11 ");
// }

///////////////////////////////////////////////////////////Write a JS program to check whether a number is even or odd./////////////////////////////////////////////

// const user = 14;

// // console.log(10%2);

// if (user%2 == 0){

//     console.log("even number");

// }else {console.log("odd number");
// }

////////////////////////////////////////////////////////Write a JS program to check whether a year is leap year or not.////////////////////////////

// const hello  = setInterval(() => {
//    const now =   new Date ;

// //    console.log(now.toLocaleTimeString());

// }, 1000);

// const year = 2020;

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log("leap year");
// } else {
//     console.log(" not a leap year");
// }
