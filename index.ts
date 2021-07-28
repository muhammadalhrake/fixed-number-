// Import stylesheets
import './style.css';
let hard = new Array();
let ez = new Array();

function generatePoss(generation: string[], level: string, rule: string) {
  let fN, sN, rang;
  if (rule == 'tens') {
    if (level == 'ez') {
      fN = 1;
      sN = 0;
      rang = 5;
    } else if (level == 'hard') {
      fN = 6;
      sN = 6;
      rang = 9;
    }
  } else if (rule == 'single') {
    if (level == 'ez') {
      fN = 0;
      sN = 1;
      rang = 5;
    } else if (level == 'hard') {
      fN = 6;
      sN = 6;
      rang = 9;
    }
  }
  for (let i = fN; i <= rang; i++) {
    for (let j = sN; j <= rang; j++) {
      for (let k = j; k <= rang; k++) {
        if (rule == 'tens') {
          let firstNum = i.toString() + j.toString();
          let secondNum = i.toString() + k.toString();
          let fullNum = firstNum + '*' + secondNum;
          generation.push(fullNum);
        } else if (rule == 'single') {
          let firstNum = j.toString() + i.toString();
          let secondNum = k.toString() + i.toString();
          let fullNum = firstNum + '*' + secondNum;
          generation.push(fullNum);
        }
      }
    }
  }
  return generation;
}
console.log(generatePoss(ez, 'ez', 'single'));
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
