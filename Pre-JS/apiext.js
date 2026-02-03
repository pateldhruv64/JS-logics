// async function api() {
//     const respons = await  fetch ("https://jsonplaceholder.typicode.com/users");
//     const data = await respons.json();

//     return data;
// }
// api().then(result => {
//     console.log("Bahar ka data:", result);
// });

// function downloadFile(url, callback) {
//   setTimeout(async () => {
//     const respons = await fetch(url);
//     const data = await respons.json();
//     callback(data);
//   }, 2000);
// }

// const call = (result) => {
//   console.log("Callback chal gaya");
//   console.log(result);  // API ka data yahan milega
// };

// downloadFile("https://jsonplaceholder.typicode.com/users", call);

// ///Ek function checkNumber(num) banao:

// Agar number even ho → Promise resolve kare "Even number"

// Odd ho → reject kare "Odd number"

// .then() and .catch() se result print karo.

// let num = 11;
// const p = new Promise((resolve, reject) => {

//  if (num%2 === 0) {

//     resolve ("even number")

//  } else reject ("odd number")

// })

//    p.then(res => console.log("ok", res))
//    p.catch(err => console.log("no", err));

// ////////////////////////////////////////////////////////
// Task 3: Async/Await

// Ek async function banao jo 3 sec baad "Task Completed" return kare.
// Await use karke output print karo.

// const fun = async (data) => {
//   await new Promise(res => setTimeout(res, 3000));

//   console.log("Task completed");

// };
// fun();
// ////////////////////////////////////////////////////////////////

// 🟡 LEVEL 2 — API + Fetch + Arrow Functions
// Task 4: Fetch Users

// Arrow function getUsers likho:

// Fetch "https://jsonplaceholder.typicode.com/users"

// JSON me convert karo

// Sirf names ko array me store karke print karo.

// const getusers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");

//   const data = await res.json();

//   const  username = data.map((datas) => datas.name)

//   console.log("names :",username);

// };
// getusers()
// //////////////////////////////////////////////////////////

// Task 5: Fetch + Error Handling

// Fetch ko try/catch me wrap karo.
// Agar API wrong ho to output aaye:

// const getusers = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!res.ok) {
//       throw new error("api is fail");
//     }

//     const data = await res.json();

//     const username = data.map((datas) => datas.name);
//     console.log("api is running");

//     console.log(username);
//   } catch (error) {
//     console.log("api is not working", error.message);
//   }
// };
// getusers();

// Task 7: Delay Function

// Arrow function me delay(ms) naam ka function banao jo
// ms milliseconds ke baad resolve ho.

// Use:

// await delay(2000);
// console.log("2 seconds passed");

// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// };

// const time = async () => {
//   await delay(2000);

//   console.log("2 sec is start");
// };

// time();
// / //////////////////////////////////////////////////////////////////////////

// 🔴 LEVEL 4 — REAL WORLD MINI PROJECTS
// Task 8: Fetch + Filter + Map

// API se users fetch karo.

// Sirf email list banani hai

// Sirf woh email print karo jisme ".org" ho

// const getemail = async () => {
//   const api = await fetch("https://jsonplaceholder.typicode.com/users");

//   const apis = await api.json();

//   const emails = apis.map(el => el.email);

//   const orgmails = emails.filter(emailss => emailss.endsWith(".org"));

//   console.log(orgmails);
// };

// getemail();

// Task 9: Todo App Logic (without UI)

// Functions banao:

// addTodo(text)

// removeTodo(id)

// getTodos()

// Todos array me store hon:

// [{ id: 1, text: "Learn JS" }]

// let todos = [];

// function addTodo(text) {
//     const newTodo = {
//         id: todos.length + 1,
//         text: text
//     };
//     todos.push(newTodo);
// }

// function removeTodo(id) {
//     todos = todos.filter(todo => todo.id !== id);
// }

// function getTodos() {
//     return todos;
// }

// // Test
// addTodo("Learn JS");
// addTodo("Learn React");
// addTodo("Learn Node");

// console.log(getTodos());

// removeTodo(2);

// console.log(getTodos());
