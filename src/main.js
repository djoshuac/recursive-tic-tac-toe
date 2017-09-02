window.onload = () => {
  let gameTable = document.getElementById("game");

  for (let i = 0; i < 3; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("td");

      cell.appendChild(buildGame());

      row.appendChild(cell);
    }

    gameTable.appendChild(row);
  }
};

function buildGame() {
  let table = document.createElement("table");

  for (let i = 0; i < 3; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("td")
      cell.innerHTML = "-";
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  return table;
}

function buildCell() {
  // #github - zarlo265


}
