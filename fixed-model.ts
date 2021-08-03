export interface monad {
  answers: number[];
  firstNumber: number;
  secondNumber: number;
}

export interface statusOfFixedGeneration {
  tens: {
    Complement: {
      Easy: string[];
      Difficult: string[];
    };
    unComplement: {
      Easy: string[];
      Difficult: string[];
    };
  };
  single: {
    Complement: {
      Easy: string[];
      Difficult: string[];
    };
    unComplement: {
      Easy: string[];
      Difficult: string[];
    };
  };
  mixed: {
    Complement: {
      Easy: string[];
      Difficult: string[];
    };
    unComplement: {
      Easy: string[];
      Difficult: string[];
    };
  };
}
