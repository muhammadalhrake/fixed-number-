// Import stylesheets
import './style.css';
// imports
import { monad, poss } from './fixed-model';
import { generateQuestion } from './fixed-generation';
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
          let statusGeneration = filterGenerateSitting(rule, level, status);
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
function filterGenerateSitting(rule: string, level: string, status: string) {
  let copy = {
    levelArray: {
      tens: {
        Complement: { Easy: [''], Difficult: [''] },
        unComplement: { Easy: [''], Difficult: [''] }
      },
      single: {
        Complement: { Easy: [''], Difficult: [''] },
        unComplement: { Easy: [''], Difficult: [''] }
      },
      mixed: {
        Complement: { Easy: [''], Difficult: [''] },
        unComplement: { Easy: [''], Difficult: [''] }
      }
    },
    generate: {
      answers: [5, 5, 5, 5],
      firstNumber: 5,
      secondNumber: 5
    }
  };
  if (rule == 'xa*xb') {
    if (status == 'Complement') {
      if (level == 'Easy') {
        let statusGeneration = generateQuestion(
          fixedProbability.tens.Complement.Easy,
          rule,
          status,
          level
        );
        copy.levelArray.tens.Complement.Easy = statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      } else {
        let statusGeneration = generateQuestion(
          fixedProbability.tens.Complement.Difficult,
          rule,
          status,
          level
        );
        copy.levelArray.tens.Complement.Difficult = statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      }
    } else {
      if (level == 'Easy') {
        let statusGeneration = generateQuestion(
          fixedProbability.tens.unComplement.Easy,
          rule,
          status,
          level
        );
        copy.levelArray.tens.unComplement.Easy = statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      } else {
        let statusGeneration = generateQuestion(
          fixedProbability.tens.unComplement.Difficult,
          rule,
          status,
          level
        );
        copy.levelArray.tens.unComplement.Difficult =
          statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      }
    }
  } else if (rule == 'ax*bx') {
    if (status == 'Complement') {
      if (level == 'Easy') {
        let statusGeneration = generateQuestion(
          fixedProbability.single.Complement.Easy,
          rule,
          status,
          level
        );
        copy.levelArray.single.Complement.Easy = statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      } else {
        let statusGeneration = generateQuestion(
          fixedProbability.single.Complement.Difficult,
          rule,
          status,
          level
        );
        copy.levelArray.single.Complement.Difficult =
          statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      }
    } else {
      if (level == 'Easy') {
        let statusGeneration = generateQuestion(
          fixedProbability.single.unComplement.Easy,
          rule,
          status,
          level
        );
        copy.levelArray.single.unComplement.Easy = statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      } else {
        let statusGeneration = generateQuestion(
          fixedProbability.single.unComplement.Difficult,
          rule,
          status,
          level
        );
        copy.levelArray.single.unComplement.Difficult =
          statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      }
    }
  } else if (rule == 'ab*xx') {
    if (status == 'Complement') {
      if (level == 'Easy') {
        let statusGeneration = generateQuestion(
          fixedProbability.mixed.Complement.Easy,
          rule,
          status,
          level
        );
        copy.levelArray.mixed.Complement.Easy = statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      } else {
        let statusGeneration = generateQuestion(
          fixedProbability.mixed.Complement.Difficult,
          rule,
          status,
          level
        );
        copy.levelArray.mixed.Complement.Difficult =
          statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      }
    } else {
      if (level == 'Easy') {
        let statusGeneration = generateQuestion(
          fixedProbability.mixed.unComplement.Easy,
          rule,
          status,
          level
        );
        copy.levelArray.mixed.unComplement.Easy = statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      } else {
        let statusGeneration = generateQuestion(
          fixedProbability.mixed.unComplement.Difficult,
          rule,
          status,
          level
        );
        copy.levelArray.mixed.unComplement.Difficult =
          statusGeneration.levelArray;
        copy.generate = statusGeneration.generate;
        return copy;
      }
    }
  }
}
console.log(
  fixedNumberGeneration(40, ['xa*xb'], ['Complement'], ['Difficult'])
);
console.log(fixedProbability);
//console.log(generateComplement(ezComplement, 'hard', 'single'));
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
