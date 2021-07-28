function generatePoss(generation: string[], level: string, rule: string) {
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
          generation.push(fullNum);
        } else if (rule == 'ax*bx') {
          let firstNum = j.toString() + i.toString();
          let secondNum = k.toString() + i.toString();
          let fullNum = firstNum + '*' + secondNum;
          generation.push(fullNum);
        } else if (rule == 'ab*xx') {
          let firstNum = i.toString() + i.toString();
          let secondNum = j.toString() + k.toString();
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
  if (rule == 'xa*xb') {
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
      }
    }
  }
  return arrComplement;
}
