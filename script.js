const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear");
const randomButton = document.querySelector("#random");
createGrid(15);

function createGrid(x) {
  container.style.gridTemplateColumns = "1fr ".repeat(x);
  container.style.gridTemplateRows = "1fr ".repeat(x);

  for (i = 0; i < x * x; i++) {
    let square = document.createElement("div");
    square.classList.add("squares");
    square.classList.remove("hover");
    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
      square.classList.remove("squares");
    });
    container.appendChild(square);
  }
}

function clear() {
  let x = prompt("Pick a number");
  createGrid(x);
}

clearButton.addEventListener("click", () => {
  clear();
});
