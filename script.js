const configureButton = document.querySelector("#btnConfigure");
const resetButton = document.querySelector("#btnReset");
const sketchPad = document.querySelector("#sketchPad");
let numberOfDivsOnEachAxis = 16;
let opacity = 0.1;

function validateUserInput(value) {
  while (isNaN(value)) {
    value = Number(
      prompt(
        "You didn't select a number. Select the number of grids you'd like to display horizontally/vertically 1-100"
      )
    );
  }

  if (value <= 0 || value >= 101) {
    alert("You didn't select a number that was between 1 and 100");
    return 16;
  }

  return value;
}

function getNewUserValue() {
  let userValue = Number(
    prompt(
      "Select the number of grids you'd like to display horizontally/vertically 1-100"
    )
  );
  userValue = validateUserInput(userValue);
  return userValue;
}

function createNewSketchPad() {
  removeAllChildNodes(sketchPad);
  createDivsOnYAxis(numberOfDivsOnEachAxis);
  createDivsOnXAxis(numberOfDivsOnEachAxis);
}

function createDivsOnXAxis(pixels) {
  let allDivRows = [...document.querySelectorAll(".pixel-row")];
  for (row of allDivRows) {
    for (i = 0; i < pixels; i++) {
      const newPixel = document.createElement("div");
      newPixel.classList.toggle("pixel");
      row.appendChild(newPixel);
    }
  }
}

function createDivsOnYAxis(pixels) {
  for (i = 0; i < pixels; i++) {
    const newRow = document.createElement("div");
    newRow.classList.toggle("pixel-row");
    sketchPad.appendChild(newRow);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function colorPixel(event) {
  const pixel = event.target;
  pixel.style.background = randomHexColorCode();
  pixel.style.opacity = opacity;
  if (opacity <= 1.0) {
    opacity += 0.1;
  }
}

function randomHexColorCode() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}

document.addEventListener("DOMContentLoaded", () => {
  configureButton.addEventListener("click", () => {
    numberOfDivsOnEachAxis = getNewUserValue();
    opacity = 0.1;
    createNewSketchPad();
  });

  resetButton.addEventListener("click", () => {
    opacity = 0.1;
    createNewSketchPad();
  });

  sketchPad.addEventListener("mouseover", (e) => {
    colorPixel(e);
  });

  createNewSketchPad();
});
