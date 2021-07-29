import random from 'random';
import { ansArray } from './fixed-anwers';

function between(min: number, max: number) {
  return random.int(min, max);
}
export function generateUnComplement(
  arrUnComplement: string[],
  level: string,
  rule: string
) {
  let fN = 6,
    sN = 6,
    rang = 9;
  if (rule == 'xa*xb') {
    if (level == 'Easy') {
      fN = 1;
      sN = 0;
      rang = 5;
    }
  } else if (rule == 'ax*bx') {
    if (level == 'Easy') {
      fN = 0;
      sN = 1;
      rang = 5;
    }
  } else if (rule == 'ab*xx') {
    if (level == 'Easy') {
      fN = 1;
      sN = 1;
      rang = 5;
    }
  }
  /* rule حالايت ال  */
  /* xa*xb rule // الثابت بالعشرات في الرقمين */
  /* ax*bx rule // الثابت بالاحاد في الرقمين  */
  /* ab*xx rule // الثابت بالاحاد والعشرات في رقم واحد  */
  /* i cont is x in rule */
  /* j cont is a in rule */
  /* k cont is b in rule */
  for (let i = fN; i <= rang; i++) {
    for (let j = sN; j <= rang; j++) {
      let h = j;
      if (rule == 'ab*xx') {
        h = 0;
      }
      for (let k = h; k <= rang; k++) {
        if (rule == 'xa*xb') {
          let firstNum = i.toString() + j.toString();
          let secondNum = i.toString() + k.toString();
          let fullNum = firstNum + '*' + secondNum;
          arrUnComplement.push(fullNum);
        } else if (rule == 'ax*bx') {
          let firstNum = j.toString() + i.toString();
          let secondNum = k.toString() + i.toString();
          let fullNum = firstNum + '*' + secondNum;
          arrUnComplement.push(fullNum);
        } else if (rule == 'ab*xx') {
          let firstNum = i.toString() + i.toString();
          let secondNum = j.toString() + k.toString();
          let fullNum = firstNum + '*' + secondNum;
          arrUnComplement.push(fullNum);
        }
      }
    }
  }
  return arrUnComplement;
}
export function generateComplement(
  arrComplement: string[],
  level: string,
  rule: string
) {
  let fN = 5,
    sN = 1,
    rang = 9;
  if (rule == 'xa*xb' || rule == 'ab*xx') {
    if (level == 'Easy') {
      fN = 1;
      rang = 5;
    } else {
      fN = 6;
    }
  } else if (rule == 'ax*bx') {
    if (level == 'Easy') {
      fN = 0;
      rang = 4;
    }
  }
  for (let i = fN; i <= rang; i++) {
    for (let j = 1; j <= 9; j++) {
      if (rule == 'xa*xb') {
        let firstNum = i.toString() + j.toString();
        let secondNum = i.toString() + (10 - j).toString();
        let fullNum = firstNum + '*' + secondNum;
        arrComplement.push(fullNum);
      } else if (rule == 'ax*bx') {
        let firstNum = j.toString() + i.toString();
        let secondNum = (10 - j).toString() + i.toString();
        let fullNum = firstNum + '*' + secondNum;
        arrComplement.push(fullNum);
      } else if (rule == 'ab*xx') {
        let firstNum = i.toString() + i.toString();
        let secondNum = j.toString() + (10 - j).toString(); //متتم للعشرة
        let fullNum = firstNum + '*' + secondNum;
        arrComplement.push(fullNum);
      }
    }
  }
  return arrComplement;
}

export function generateQuestion(
  stateLevelArr: string[],
  rule: string,
  state: string,
  level: string
) {
  let copyGeneration = {
    levelArray: [''],
    generate: {
      answers: [5, 5, 5, 5],
      firstNumber: 5,
      secondNumber: 5
    }
  };
  if (stateLevelArr.length == 0) {
    if (state == 'Complement') {
      generateComplement(stateLevelArr, level, rule);
    } else if (state == 'UnComplement') {
      generateUnComplement(stateLevelArr, level, rule);
    }
  }
  let random = between(0, stateLevelArr.length - 1);
  let mumber = stateLevelArr[random];
  let question = mumber.split('*');
  copyGeneration.generate.firstNumber = +question[0];
  copyGeneration.generate.secondNumber = +question[1];
  copyGeneration.generate.answers = ansArray(+question[0], +question[1]);
  
  copyGeneration.levelArray = stateLevelArr.filter(value => value != mumber);
  console.log(stateLevelArr)
  return copyGeneration;
}
export function filterGenerateSitting(fixedProbability,rule: string, level: string, status: string) {
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