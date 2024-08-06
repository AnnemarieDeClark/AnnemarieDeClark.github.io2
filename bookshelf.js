import { getRootCssStyles} from './cssUtils.js';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let spines = Object.values(document.getElementsByClassName("spine"));
let covers = Object.values(document.getElementsByClassName("cover"));
let tops = Object.values(document.getElementsByClassName("top"));

let availablePatterns = getRootCssStyles();

let availableColors = [
  "maroon",
  "darkgreen",
  "darkolivegreen",
  "brown",
  "saddlebrown",
  "sienna",
  "midnightblue",
];

// assign a random height, pattern and colour to each book
spines.forEach((s, i) => {
  let randomHeight;
  if (i === 3 || i=== 8 || i === 10) { // Check if it's the fourth book (index 3)
    randomHeight = getRandomInt(260, 280); // Smaller height range for the fourth book
  } 
  // else if (i === 10) { // Check if it's the fourth book (index 3)
  //   randomHeight = getRandomInt(230, 235); // Smaller height range for the fourth book
  // } 
  else {
    randomHeight = getRandomInt(220, 280); // Regular height range for other books
  }
  
  s.style.height = `${randomHeight}px`;
  s.style.top = `${280 - randomHeight}px`;

  let randomPattern = randomChoice(availablePatterns);
  s.style.backgroundImage = `var(${randomPattern})`;

  let randomColor = randomChoice(availableColors);
  s.style.backgroundColor = randomColor;

  covers[i].style.height = `${randomHeight}px`;
  covers[i].style.top = `${280 - randomHeight}px`;

  tops[i].style.top = `${280 - randomHeight}px`;
});