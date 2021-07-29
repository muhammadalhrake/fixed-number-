// Import stylesheets
import './style.css';
// imports
import { monad, poss } from './fixed-model';
import { filterGenerateSitting, generateQuestion } from './fixed-generation';
let fixedProbability: poss = {
  tens: {
    Complement: {
      Easy: new Array<string>(),
      Difficult: new Array<string>()
    },
    unComplement: {
      Easy: new Array<string>(),
      Difficult: new Array<string>()
    }
  },
  single: {
    Complement: {
      Easy: new Array<string>(),
      Difficult: new Array<string>()
    },
    unComplement: {
      Easy: new Array<string>(),
      Difficult: new Array<string>()
    }
  },
  mixed: {
    Complement: {
      Easy: new Array<string>(),
      Difficult: new Array<string>()
    },
    unComplement: {
      Easy: new Array<string>(),
      Difficult: new Array<string>()
    }
  }
};
function fixedNumberGeneration(
  count: number,
  rules: string[],
  cases: string[],
  levels: string[]
) {
  let generateQuestions = new Array<monad>();
  for (let i = 0; i < count; ) {
    for (let j = 0; j < rules.length && i < count; j++) {
      for (let k = 0; k < cases.length && i < count; k++) {
        for (let l = 0; l < levels.length && i < count; l++) {
          //initial sitting
          let rule = rules[j];
          let status = cases[k];
          let level = levels[l];
          let statusGeneration = filterGenerateSitting(
            fixedProbability,
            rule,
            level,
            status
          );
          let generate = statusGeneration.generate;
          fixedProbability = statusGeneration.levelArray;
          generateQuestions.push(generate);
          //console.log(generate);
          i++;
        }
      }
    }
  }
  return generateQuestions;
}

console.log(
  fixedNumberGeneration(40, ['xa*xb'], ['Complement'], ['Difficult'])
);
console.log(fixedProbability);
//console.log(generateComplement(ezComplement, 'hard', 'single'));
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
