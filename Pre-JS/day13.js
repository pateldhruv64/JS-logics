const userunit = 160;
let total = 0;

if (userunit < 50) {
  total = userunit * 0.5;
} else if (userunit < 150) {
  total = 50 * 0.5 + (userunit - 50) * 0.8;
} else if (userunit < 200) {
  total = 50 * 0.5 + 100 * 0.8 + (userunit - 150) * 1.1;
} else if (userunit < 250) {
  total = 50 * 0.5 + 100 * 0.8 + 50 * 1.1 + (userunit - 200) * 1.3;
} else if (userunit > 250) {
  total = 50 * 0.5 + 100 * 0.8 + 50 * 1.1 + 50 * 1.3 + (userunit - 250) * 1.5;
}

console.log(`userunit ${userunit} that charge = ${total}`);

const charge = Math.round(total * (20 / 100));
console.log(` adding 20% charge = ${charge}`);

const payamount = console.log(`pay amount = ${total + charge}`);
