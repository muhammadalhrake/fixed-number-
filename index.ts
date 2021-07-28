// Import stylesheets
import './style.css';
// imports
import { generatePoss } from './fixed-generation';
let tensHard = new Array();
let tensEz = new Array();
let hardComplement = new Array();
let ezComplement = new Array();
let fixedProbability = {
  tens: {
    Complement: {
      Easy: new Array(),
      Difficult: new Array()
    },
    unComplement: {
      Easy: new Array(),
      Difficult: new Array()
    }
  },
  single: {
    Complement: {
      Easy: new Array(),
      Difficult: new Array()
    },
    unComplement: {
      Easy: new Array(),
      Difficult: new Array()
    }
  },
  mixed: {
    Complement: {
      Easy: new Array(),
      Difficult: new Array()
    },
    unComplement: {
      Easy: new Array(),
      Difficult: new Array()
    }
  }
};

// console.log(generatePoss())
//console.log(generateComplement(ezComplement, 'hard', 'single'));
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
