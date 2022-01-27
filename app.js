let friends = [`John`, `Andrew`, `David`, `Bruce`, `Emma`];

//would a for of loop work

for (let i of friends) {
  console.log(i);
}

for (let i in friends) {
  console.log(i);
}
let i = 0;
while (i < 4) {
  //Get first name and play it 99 times
  let name = friends[i];
  for (let j = 99; j > 0; j--) {
    if (j > 1) {
      console.log(
        `${j} lines of code in the file, ${j} lines of code; ${name} strikes one out, clears it all out, ${
          j - 1
        } lines of code in the file`
      );
    } else {
      console.log(
        `${j} line of code in the file, ${j} line of code; ${name} strikes one out, clears it all out, no more lines of code in the file`
      );
    }
  }
  i++;
} //End while loop
