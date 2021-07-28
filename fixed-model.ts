export interface Probability {
  tens: {
    Complement: {
      Easy: number[],
      Difficult: number[]
    },
    unComplement:{
      Easy: number[],
      Difficult: number[]
    }
  },
  single: {
    Complement: {
      Easy: number[],
      Difficult: number[]
    },
    unComplement:{
      Easy: number[],
      Difficult: number[]
    }
  },
  mixed: {
    Complement: {
      Easy: number[],
      Difficult: number[]
    },
    unComplement:{
      Easy: number[],
      Difficult: number[]
    }
  }
}