import Service from 'react-reservice';
import {
  AnimalTypes,
  CityTypes,
  FoodTypes,
  PuzzleObject,
} from '../../screens/Puzzle/PuzzleTypes';

export enum ECategory {
  NOT_SELECTED = 'NOT_SELECTED',
  CITIES = 'CITIES',
  FOOD = 'FOOD',
  ANIMALS = 'ANIMALS',
}

interface IPuzzleContext {
  currentQuestion: number;
  correct: number;
  firstRowIndex: number[];
  secondRowIndex: number[];
  selectedCategory: ECategory;
  userAnswer: string[];
  wordPuzzleList: PuzzleObject[];
}

const defaultContext: IPuzzleContext = {
  currentQuestion: 0,
  correct: 0,
  firstRowIndex: [],
  secondRowIndex: [],
  selectedCategory: ECategory.NOT_SELECTED,
  userAnswer: [],
  wordPuzzleList: [],
};

class PuzzleService extends Service<IPuzzleContext> {
  constructor() {
    super();

    this.context = {
      ...defaultContext,
    };
  }

  public init = () => {
    this.shufflePuzzleList();
  };

  public reset = () => {
    this.context = {
      ...defaultContext,
    };
  };

  public checkAnswer = (answer: string) => {
    const userAnswer = this.context.userAnswer.join('');
    const finalUserAnswer = userAnswer.replace(',', '');

    if (answer === finalUserAnswer) {
      this.context.correct += 1;
    }
  };

  public nextQuestion = (index: number) => {
    this.setCurrentQuestion(index);
    this.resetUserAnswer();
    this.resetFirstRowIndex();
    this.resetSecondRowIndex();
  };

  private setCurrentQuestion = (index: number) => {
    this.context.currentQuestion = index;
  };

  public setUserAnswer = (answer: string) => {
    this.context.userAnswer = [...this.context.userAnswer, answer];
  };

  private resetUserAnswer = () => {
    this.context.userAnswer = [];
  };

  public setCategory = (category: ECategory) => {
    this.context.selectedCategory = category;
  };

  public setFirstRowIndex = (index: number) => {
    this.context.firstRowIndex = [...this.context.firstRowIndex, index];
  };

  private resetFirstRowIndex = () => {
    this.context.firstRowIndex = [];
  };

  public setSecondRowIndex = (index: number) => {
    this.context.secondRowIndex = [...this.context.secondRowIndex, index];
  };

  private resetSecondRowIndex = () => {
    this.context.secondRowIndex = [];
  };

  private shufflePuzzleList = () => {
    const getListByCategory = () => {
      switch (this.context.selectedCategory) {
        case ECategory.CITIES:
          return CityTypes;
        case ECategory.FOOD:
          return FoodTypes;
        case ECategory.ANIMALS:
          return AnimalTypes;
        default:
          return [];
      }
    };

    const wordPuzzleList: PuzzleObject[] = getListByCategory().slice();

    if (wordPuzzleList.length === 0) {
      return;
    }

    for (let i = wordPuzzleList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = wordPuzzleList[i];
      wordPuzzleList[i] = wordPuzzleList[j];
      wordPuzzleList[j] = temp;
    }

    this.context.wordPuzzleList = wordPuzzleList;
  };
}

export default new PuzzleService();
