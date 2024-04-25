const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

let results = "";

for (const row of rows) {
    results = results + "\n" + row;
}
console.log(results);

//check update