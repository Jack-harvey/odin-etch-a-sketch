function newUserValue(value) {
  return;
}

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
}

const configureButton = document.querySelector("#btnConfigure");

configureButton.addEventListener("click", () => {
  getNewUserValue();
});
