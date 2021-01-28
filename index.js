// jshint esversion: 6

boxGame();

function boxGame() {
  let b1 = document.querySelector(".box1");
  let b2 = document.querySelector(".box2");
  let b3 = document.querySelector(".box3");
  let b4 = document.querySelector(".box4");
  let b5 = document.querySelector(".box5");
  let b6 = document.querySelector(".box6");
  let rgbColorValue = document.querySelector(".colourValue");
  let b1RGB = randomColor();
  let b2RGB = randomColor();
  let b3RGB = randomColor();
  let b4RGB = randomColor();
  let b5RGB = randomColor();
  let b6RGB = randomColor();
  var boxValues = [];

  // Adds values to empty array to let colorValue choose one to use
  boxValues.push(b1RGB);
  boxValues.push(b2RGB);
  boxValues.push(b3RGB);
  boxValues.push(b4RGB);
  boxValues.push(b5RGB);
  boxValues.push(b6RGB);

  // generates random number between 0 and box array to match one set of values with a box.
  let boxNum = Math.floor(Math.random() * boxValues.length);
  let color = boxValues[boxNum];
  rgbColorValue.innerHTML = color;

  console.log(boxValues);
  console.log(boxNum);

  function boxes() {
    //Function changes style of boxes to random RGB value created by randomColor()
    b1.style.backgroundColor = b1RGB;
    b2.style.backgroundColor = b2RGB;
    b3.style.backgroundColor = b3RGB;
    b4.style.backgroundColor = b4RGB;
    b5.style.backgroundColor = b5RGB;
    b6.style.backgroundColor = b6RGB;
  }

  function colorCheck() {
    // Function uses event listeners to check rgb values match. If they don't they remove the box.
    let check = document.querySelector(".check");

    b1.addEventListener("click", function() {
      if (b1RGB == color) {
        rgbColorValue.innerHTML = "Correct! Click Reset To Play Again.";
        check.innerHTML = "";
      } else {
        check.innerHTML = "Try Again";
        b1.style.display = "none";
      }
    });

    b2.addEventListener("click", function() {
      if (b2RGB == color) {
        rgbColorValue.innerHTML = "Correct! Click Reset To Play Again.";
        check.innerHTML = "";
      } else {
        check.innerHTML = "Try Again";
        b2.style.display = "none";
      }
    });

    b3.addEventListener("click", function() {
      if (b3RGB == color) {
        rgbColorValue.innerHTML = "Correct! Click Reset To Play Again.";
        check.innerHTML = "";
      } else {
        check.innerHTML = "Try Again";
        b3.style.display = "none";
      }
    });

    b4.addEventListener("click", function() {
      if (b4RGB == color) {
        rgbColorValue.innerHTML = "Correct! Click Reset To Play Again.";
        check.innerHTML = "";
      } else {
        check.innerHTML = "Try Again";
        b4.style.display = "none";
      }
    });

    b5.addEventListener("click", function() {
      if (b5RGB == color) {
        rgbColorValue.innerHTML = "Correct! Click Reset To Play Again.";
        check.innerHTML = "";
      } else {
        check.innerHTML = "Try Again";
        b5.style.display = "none";
      }
    });

    b6.addEventListener("click", function() {
      if (b6RGB == color) {
        rgbColorValue.innerHTML = "Correct! Click Reset To Play Again.";
        check.innerHTML = "";
      } else {
        check.innerHTML = "Try Again";
        b6.style.display = "none";
      }
    });
  }

  boxes();
  colorCheck();

}

function randomColor() {
  //Creates random number between 0 + 256 for each value. Then concatenates into value for box display
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
