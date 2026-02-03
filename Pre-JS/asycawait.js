//   API = ("https://jsonplaceholder.typicode.com/users");

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// const newLocal =

//     async () => {
//         Promise.resolve().then(() => console.log("C"));
//         await Promise.resolve();
//     };

//      newLocal()

// console.log("D");
// A
// D
// C
// B

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// await Promise.resolve();

// console.log("D");
// A
// C
// D
// B

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 1:TODO:

// async function banao jo 2 sec baad "Hello MERN" print kare.

// const sec = async () => {
//   setTimeout(() => {
//     console.log("mern printed");
//   }, 2000);
// };
// sec();

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 2:TODO:

// Array of objects se sirf email list nikaal kar do.

// const users = [
//   { name: "A", email: "a@mail.com" },
//   { name: "B", email: "b@mail.com" },
// ];

// const mail = async () => {
//   const obj = users.map(el => el.email);

//   console.log(obj);
// };
// mail();
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 3:TODO:

// // Destructure karke name aur city nikaalo:

// const user = {name: "Dhruv", age: 21, address: {city: "Delhi"}};

// const users = [user]

//  const hell=async () => {
//   const get = users.map(({name,  address: {city}}) =>
//     {   return {name , city}

//     })

//   console.log(get);
// }
// hell()
// console.log(users);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task 5:

// fetch("https://jsonplaceholder.typicode.com/posts") se 10 posts lao → titles print kro → error handle kro.

// const postTital = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//   const data = await res.json();

//   const photo = data.map((el) => {
//     return el.title;
//   });
//   console.log(photo);
// };

// postTital();
