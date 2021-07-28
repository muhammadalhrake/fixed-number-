// Import stylesheets
import './style.css';
// imports
import { Probability } from './fixed-model';
let tensHard = new Array();
let tensEz = new Array();
let hardComplement = new Array();
let ezComplement = new Array();
let fixedProbability:Probability = {
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
function fixedNumGeneration(count:number ,rules:string[],cases:string[],levels:string[]){
  for(let i=0;i<count;i++){
    for(let j=0;j<rules.length&&i<count;j++){
      for(let k=0;k<cases.length&&i<count;k++){
        for(let l=0;l<levels.length&&i<count;l++){
          let rule=rules
        }
      }
    }
  }
}
// console.log(generatePoss())
//console.log(generateComplement(ezComplement, 'hard', 'single'));
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
