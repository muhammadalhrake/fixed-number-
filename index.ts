// Import stylesheets
import './style.css';
// imports
import { Probability } from './fixed-model';
import { generateQuestion } from './fixed-generation';
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
function fixedNumberGeneration(
  count: number,
  rules: string[],
  cases: string[],
  levels: string[]
) {
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < rules.length && i < count; j++) {
      for (let k = 0; k < cases.length && i < count; k++) {
        for (let l = 0; l < levels.length && i < count; l++) {
          //initial sitting
          let rule = rules[j];
          let status = cases[k];
          let level = levels[l];
        }
      }
    }
  }
}
function filterSitting(rule: string, level: string, status: string) {
  if (rule == 'xa*xb') {
    if (status == 'Complement') {
      if (level == 'Easy') {
        return generateQuestion(
          fixedProbability.tens.Complement.Easy,
          rule,
          status,
          level
        );
      } else {
        return generateQuestion(
          fixedProbability.tens.Complement.Difficult,
          rule,
          status,
          level
        );
      }
    } else {
      if (level == 'Easy') {
        return generateQuestion(
          fixedProbability.tens.unComplement.Easy,
          rule,
          status,
          level
        );
      } else {
        return generateQuestion(
          fixedProbability.tens.unComplement.Difficult,
          rule,
          status,
          level
        );
      }
    }
  } else if (rule == 'xa*xb') {
    if (status == 'Complement') {
      if (level == 'Easy') {
        return generateQuestion(
          fixedProbability.single.Complement.Easy,
          rule,
          status,
          level
        );
      } else {
        return generateQuestion(
          fixedProbability.single.Complement.Difficult,
          rule,
          status,
          level
        );
      }
    } else {
      if (level == 'Easy') {
        return generateQuestion(
          fixedProbability.single.unComplement.Easy,
          rule,
          status,
          level
        );
      } else {
        return generateQuestion(
          fixedProbability.single.unComplement.Difficult,
          rule,
          status,
          level
        );
      }
    }
  } else if (rule == 'ab*xx') {
    if (status == 'Complement') {
      if (level == 'Easy') {
        return generateQuestion(
          fixedProbability.mixed.Complement.Easy,
          rule,
          status,
          level
        );
      } else {
        return generateQuestion(
          fixedProbability.mixed.Complement.Difficult,
          rule,
          status,
          level
        );
      }
    } else {
      if (level == 'Easy') {
        return generateQuestion(
          fixedProbability.mixed.unComplement.Easy,
          rule,
          status,
          level
        );
      } else {
        return generateQuestion(
          fixedProbability.mixed.unComplement.Difficult,
          rule,
          status,
          level
        );
      }
    }
  }
}
// console.log(generatePoss())
//console.log(generateComplement(ezComplement, 'hard', 'single'));
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
