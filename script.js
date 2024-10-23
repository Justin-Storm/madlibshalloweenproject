let adjective1 = prompt('Enter an adjective.');
let adjective2 = prompt('Enter another adjective.');
let manName = prompt('Enter a man\'s name.');
let item1 = prompt('Enter an item.');
let item2 = prompt('Enter another item.');

let story = `It was a <span style="color: orange">${adjective1}</span> and <span style="color: orange">${adjective2}</span> night. It was Halloween and all the kids were going out to trick or treat while <span style="color: orange">${manName}</span> was in his home. He grabbed a <span style="color: orange">${item1}</span> and <span style="color: orange">${item2}</span> and went out to scare the kids.`;

let output = story;

document.getElementById('output').innerHTML = output;



