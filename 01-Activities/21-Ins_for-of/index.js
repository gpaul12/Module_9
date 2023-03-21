// 1. Using arrays
const songs = ["Bad Guy", "The Wheels on the Bus", "Friday"];

console.log("--- for loop");
for (let i = 0; i < songs.length; i++) {
  let song = songs[i];
  console.log(song);
}

console.log("--- forEach()");
songs.forEach((song) => console.log(song));

console.log("--- for...of");
for (const song of songs) {
  console.log(song);
}

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

// console.log("\n================================================\n");

// 2. Using multidimensional arrays
// const moreSongs = [
//   ["Bad Guy", 1],
//   ["The Wheels on the Bus", 2],
//   ["Friday", 3],
// ];

// // for of loop
// for (const song of moreSongs) {
//   console.log(song);
// }

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/
