function generatePoss(generation: string[], level: string, rule: string) {
  let fN = 6,
    sN = 6,
    rang = 9;
  if (rule == 'tens') {
    if (level == 'Easy') {
      fN = 1;
      sN = 0;
      rang = 5;
    }
  } else if (rule == 'single') {
    if (level == 'Easy') {
      fN = 0;
      sN = 1;
      rang = 5;
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
function generateComplement(
  arrComplement: string[],
  level: string,
  rule: string
) {
  let fN = 5,
    sN = 1,
    rang = 9;
  if (rule == 'tens') {
    if (level == 'Easy') {
      fN = 1;
      rang = 5;
    } else {
      fN = 6;
    }
  } else if (rule == 'single') {
    if (level == 'Easy') {
      fN = 0;
      rang = 4;
    }
  }
  for (let i = fN; i <= rang; i++) {
    for (let j = 1; j <= 9; j++) {
      if (rule == 'tens') {
        let firstNum = i.toString() + j.toString();
        let secondNum = i.toString() + (10 - j).toString();
        let fullNum = firstNum + '*' + secondNum;
        arrComplement.push(fullNum);
      } else if (rule == 'single') {
        let firstNum = j.toString() + i.toString();
        let secondNum = (10 - j).toString() + i.toString();
        let fullNum = firstNum + '*' + secondNum;
        arrComplement.push(fullNum);
      }
    }
  }
  return arrComplement;
}
function 
