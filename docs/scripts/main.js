window.onload = () => {
  let gameTable = document.getElementById("game");
  gameTable.classList.add("toe");

  for (let i = 0; i < 3; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("td");

      cell.appendChild(buildGame());
      cell.classList.add("tac");

      row.appendChild(cell);
    }

    gameTable.appendChild(row);
  }
};

function buildGame() {
  let table = document.createElement("table");
  table.classList.add("miniGame");

  for (let i = 0; i < 3; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("td")
      cell.innerHTML = "-";
      cell.classList.add("tic");
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  return table;
}

function buildCell() {
  // #github - zarlo265


}
