let n = 5;

for (let i = 0; i < n; i++) {

    // print spaces
    let row = "";
    for (let s = 0; s < i; s++) {
        row += " ";
    }

    let num = 1;

    // print numbers using Pascal triangle logic
    for (let j = 0; j < n - i; j++) {
        row += num + " ";
        num = num * (n - i - 1 - j) / (j + 1);
    }

    console.log(row);
}