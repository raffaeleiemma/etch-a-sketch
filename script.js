let isDrawing = false;
let isOpacity = false;
let isRandomColour = false;

const gridMaker = function (size) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  document.querySelector(".gridContainer").append(grid);

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.append(row);
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.append(cell);
    }
  }
};

const draw = function () {
  const cells = document.querySelector(".gridContainer");
  cells.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("cell") && isDrawing) {
      const randomInt = (min, max) =>
        Math.floor(Math.random() * (max - min + 1) + min);
      let opacity = 1;
      let colour = "0,0,0";
      let currentBG = window.getComputedStyle(e.target).backgroundColor;
      if (/rgb\(0,\s*0,\s*0\)/.test(currentBG)) return;
      if (isRandomColour) {
        colour = `${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)}`;
      }
      if (isOpacity) {
        let currentOpacity = Number(
          currentBG
            .slice(currentBG.indexOf("(") + 1, currentBG.indexOf(")"))
            .split(", ")[3],
        );
        if (Number.isNaN(currentOpacity)) {
          currentOpacity = 1;
          return;
        } else currentOpacity += 0.1;
        e.target.style.backgroundColor = `rgba(${colour},${currentOpacity})`;
      } else e.target.style.backgroundColor = `rgba(${colour},${opacity})`;
    }
  });
};

const beginGame = function () {
  const chooseSize = document.getElementById("chooseSize");
  chooseSize.addEventListener("click", function (e) {
    e.preventDefault();
    let size = Number(prompt("Size: choose a number between 8 and 100"));
    while (size < 8 || size > 100 || isNaN(size)) {
      alert("Size should be between 8 and 100");
      size = Number(prompt("Choose a valid size: "));
    }
    const grid = document.querySelector(".grid");
    if (grid) grid.remove();
    gridMaker(size);

    draw();
    setupDrawingButton();
    setupOpacityButton();
    setupRandomColourButton();
  });
};
const setupDrawingButton = function () {
  const button = document.getElementById("drawing");
  button.style.display = "block";
  button.addEventListener("click", function () {
    isDrawing = !isDrawing;
    if (isDrawing) {
      button.textContent = "Stop drawing!!!";
    } else {
      button.textContent = "Start drawing!!!";
    }
  });
};
const setupOpacityButton = function () {
  const button = document.getElementById("opacity");
  button.style.display = "block";
  button.addEventListener("click", function () {
    isOpacity = !isOpacity;
    if (isOpacity) {
      button.textContent = "Stop progressive opacity!!!";
    } else {
      button.textContent = "Start progressive opacity!!!";
    }
  });
};
const setupRandomColourButton = function () {
  const button = document.getElementById("random");
  button.style.display = "block";
  button.addEventListener("click", function () {
    isRandomColour = !isRandomColour;
    if (isRandomColour) {
      button.textContent = "Stop random colour!!!";
    } else {
      button.textContent = "Start random colour!!!";
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  beginGame();
});
