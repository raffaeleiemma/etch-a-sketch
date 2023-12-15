const container = document.createElement(`div`);
const sliderInput = document.getElementById(`sliderInput`);
const sliderValue = document.getElementById(`sliderValue`);
container.style.cssText = `display:flex;flex-wrap:wrap;width:70vh;height:70vh;margin:2rem auto;border:.1px solid black;border-left:none;border-bottom:none;`;
document.body.appendChild(container);

const updateGrid = function (gridSize) {
  container.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridCell = document.createElement(`div`);
    gridCell.className = `grid-cell`;
    gridCell.style.cssText = `background-color:#fff;border:.1px solid black;border-right:none;border-top:none;width:calc(100%/${gridSize});height:calc(100%/${gridSize})`;

    container.appendChild(gridCell);
  }
};
const updateSliderValue = function () {
  const value = sliderInput.value;
  sliderValue.textContent = `Grid size: ${value}x${value}`;
  return value;
};

sliderInput.addEventListener(`input`, function () {
  const gridSize = updateSliderValue();
  updateGrid(gridSize);
});
const initialGridSize = updateSliderValue();
updateGrid(initialGridSize);
