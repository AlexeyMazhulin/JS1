function getTable() {
  var table = document.createElement('table');
  document.body.appendChild(table);
  table.style.borderCollapse = "collapse";

  for (var i = 0; i < 10; i++) {
    table.appendChild(document.createElement('tr'));
    var tr = table.rows[i];
    for (var j = 0; j < 10; j++) {
      tr.appendChild(document.createElement('td'));
    }
  }

  for (var i = 1; i < 9; i++) {
    var row = table.rows[i];
    for (var j = 1; j < 9; j++) {

      if ((i % 2 == 0 && j % 2 == 0) || i % 2 == 1 && j % 2 == 1) {
        row.cells[j].style.backgroundColor = 'white';
        row.cells[j].style.width = '70px';
        row.cells[j].style.height = '70px';
      } else {
        row.cells[j].style.backgroundColor = 'grey';
        row.cells[j].style.width = '70px';
        row.cells[j].style.height = '70px';

      }
    }
  }

  for (var i = 0; i < 10; i++) {
    var row = table.rows[i];
    row.style.backgroundColor = "black";
    for (var j = 0; j < 10; j++) {

      if ((i == 0 && (j != 0 && j != 9)) ||
        (i == 9 && (j != 0 && j != 9)) ||
        (j == 0 && (i != 0 && i != 9)) ||
        (j == 9 && (i != 0 && i != 9))
      ) {
        row.cells[j].style.color = "white";
        row.cells[j].style.fontSize = "20px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].style.width = '20px';
        row.cells[j].innerHTML = 'H';
      }

      if (i == 0) {
        row.cells[j].style.transform = "rotate(180deg)";
        var sim = 64 + j;
        row.cells[j].innerHTML = "&#" + sim;
      }

      if (i == 9) {
        var sim = 64 + j;
        row.cells[j].innerHTML = "&#" + sim;
      }

      if (j == 0) {
        var sim = 57 - i;
        row.cells[j].innerHTML = "&#" + sim;
      }

      if (j == 9) {
        row.cells[j].style.transform = "rotate(180deg)";
        var sim = 57 - i;
        row.cells[j].innerHTML = "&#" + sim;
      }

      if (i == 7 && j != 0 && j != 9) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9817"
      }

      if (i == 8 && (j == 1 || j == 8)) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9814;"
      }

      if (i == 8 && (j == 2 || j == 7)) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9816"
      }

      if (i == 8 && (j == 3 || j == 6)) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9815"
      }

      if (i == 8 && j == 4) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9813;"
      }

      if (i == 8 && j == 5) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9812;"
      }


      if (i == 2 && j != 0 && j != 9) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9823"
      }

      if (i == 1 && (j == 1 || j == 8)) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9820;"
      }

      if (i == 1 && (j == 2 || j == 7)) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9822;"
      }

      if (i == 1 && (j == 3 || j == 6)) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9821;"
      }

      if (i == 1 && j == 4) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9819;"
      }

      if (i == 1 && j == 5) {
        row.cells[j].style.fontSize = "50px";
        row.cells[j].style.textAlign = "center";
        row.cells[j].innerHTML = "&#9818;"
      }
    }
  }
}
getTable();