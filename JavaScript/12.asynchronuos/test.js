let num = [1, 2, 3, 4, 5];

let text = `아무말 ${num.map((number) => `아무말 ${number}`).join("")}`;



console.log(text);
