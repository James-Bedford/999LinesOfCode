//window.addEventListener("DOMContentLoaded", function () {});
singButton.addEventListener(`click`, function () {
  /* Build divs for each friend at this point*/
  //div - h3 - text

  let friends = [`John`, `Paul`, `George`, `Ringo`, `Brian`];
  for (let b = 0; b < 5; b++) {
    let c = friends[b];
    singingFriends(b, c);
  }

  //let value = document.getElementById("singButton");
  //let friends = [`John`, `Paul`, `George`, `Ringo`, `Brian`];
  // let i = 0;
  // let name = friends[i];

  while (i < 5) {
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
}); //end of sing button addEventListener
//  });
//}); //end of document.addEventListener

function singingFriends(b, c) {
  //let nameDiv = friends[b];
  let nameDiv = c;
  let friendDiv = document.createElement(`div`);
  friendDiv.classList.add(`friend`);
  let friendH3 = document.createElement(`h3`);
  let friendNameText = document.createTextNode(`${nameDiv}`);
  friendH3.appendChild(friendNameText);
  friendDiv.appendChild(friendH3);
  document.body.appendChild(friendDiv);
}
function song(b) {
  let friends = [`John`, `Paul`, `George`, `Ringo`, `Brian`];
  let i = 0;
}
