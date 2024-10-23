let adjective1 = prompt('Enter an adjective.');
let adjective2 = prompt('Enter another adjective.');
let manName = prompt('Enter a man\'s name.');
let item1 = prompt('Enter an item.');
let item2 = prompt('Enter another item.');

adjective1.classList.add('highlight');
adjective2.classList.add('highlight');
manName.classList.add('highlight');
item1.classList.add('highlight');
item2.classList.add('highlight');

let story = `It was a ${adjective1} and ${adjective2} night. It was Halloween and all the kids were going out to trick or treat while ${manName} was in his home. He grabbed a ${item1} and ${item2} and went out to scare the kids.`;

let output = story;

document.getElementById('output').innerHTML = output;

