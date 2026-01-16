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

const changeColor = function () {
  const cells = document.querySelector(".gridContainer");
  cells.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("cell")) {
      e.target.style.backgroundColor = "black";
    }
  });
  // cells.forEach((cell) => {
  //   cell.addEventListener("mouseover", function () {
  //     cell.style.backgroundColor = "black";
  //   });
  // });
};
changeColor();
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("myRange");
  const output = document.getElementById("slider-text");
  slider.value = 16;
  output.textContent = "16x16";
  slider.addEventListener("input", function (e) {
    const grid = document.querySelector(".grid");
    if (grid) grid.remove();
    const size = e.target.value;
    output.textContent = `${size}x${size}`;
    gridMaker(size);
  });
  gridMaker(16);
});
