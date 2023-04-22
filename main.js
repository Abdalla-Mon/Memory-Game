let startGame = document.createElement("div");
startGame.classList.add("start-game");

let startClick = document.createElement("span");
startClick.innerHTML = "Start Game";
startGame.appendChild(startClick);

document.body.appendChild(startGame);

document.querySelector(".start-game span").onclick = function () {
  this.parentElement.remove();
};

let yourName = prompt("Type Your Name Please:");

if (yourName == null || yourName == "") {
  // Set Name To Unknown
  document.querySelector(".hello span").innerHTML = "Unknown";

  // Name Is Not Empty
} else {
  // Set Name To Your Name
  document.querySelector(".hello span").innerHTML = yourName;
}
// //
let duration = 1000;

let boxesArr = Array.from(document.querySelectorAll(".box"));

let indexesArr = Array.from(boxesArr.keys());

shuffle(indexesArr);

//change orderOfBoxes

boxesArr.forEach((box, index) => {
  box.style.order = indexesArr[index];

  box.addEventListener("click", function () {
    hasFlibbed(box);
  });
});
// hasFlibbed function

function hasFlibbed(box) {
  box.classList.add("has-flibbed");

  let flibbedBoxes = boxesArr.filter((box) => {
    return box.classList.contains("has-flibbed");
  });

  if (flibbedBoxes.length === 2) {
    stopClickng();

    hasMatched(flibbedBoxes[0], flibbedBoxes[1]);
  }
}

// stopClicking

function stopClickng() {
  document.querySelector(".boxes-container").classList.add("no-clicking");

  window.setTimeout(() => {
    document.querySelector(".boxes-container").classList.remove("no-clicking");
  }, duration);
}
function hasMatched(firstBox, secondBox) {
  let tries = document.querySelector(".tries span");
  if (firstBox.dataset.img === secondBox.dataset.img) {
    let succ = document.querySelector(".success");
    succ.play();

    firstBox.classList.remove("has-flibbed");
    secondBox.classList.remove("has-flibbed");

    firstBox.classList.add("has-matched");
    secondBox.classList.add("has-matched");
  } else {
    tries.innerHTML = +tries.innerHTML + 1;
    document.querySelector(".fail").play();
    window.setTimeout(() => {
      firstBox.classList.remove("has-flibbed");
      secondBox.classList.remove("has-flibbed");
    }, duration);
  }
}
//shufflingArr

function shuffle(arr) {
  let currnet = indexesArr.length;
  let tempel, randomEle;

  while (currnet > 0) {
    randomEle = [Math.floor(Math.random() * currnet)];

    currnet--;

    tempel = arr[currnet];

    arr[currnet] = arr[randomEle];

    arr[randomEle] = tempel;
  }
}
