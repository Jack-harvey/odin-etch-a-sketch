const configureButton = document.querySelector("#btnConfigure");
const sketchPad = document.querySelector("#sketchPad");
let numberOfDivsOnEachAxis = 16;

function validateUserInput(value) {
  while (isNaN(value)) {
    value = Number(
      prompt(
        "You didn't select a number. Select the number of grids you'd like to display horizontally/vertically"
      )
    );
  }
  return value;
}

function getNewUserValue() {
  let userValue = Number(
    prompt(
      "Select the number of grids you'd like to display horizontally/vertically"
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
}

function randomHexColorCode() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}

document.addEventListener("DOMContentLoaded", () => {
  configureButton.addEventListener("click", () => {
    numberOfDivsOnEachAxis = getNewUserValue();
    createNewSketchPad();
  });

  sketchPad.addEventListener("mouseover", (e) => {
    colorPixel(e);
  });

  createNewSketchPad();
});
