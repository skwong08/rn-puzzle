import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';

import Button from '../../components/Button';
import {ALL_MOBILE_ROUTES} from '../../navigation/NavigationRouter';
import {navigate} from '../../navigation/NavigationUtil';
import {Container, HeaderText} from '../../styles';

import {PuzzleObject, AnimalTypes} from './PuzzleTypes';
import AvailableCharacters from './AvailableCharacters';

interface IProps {}

const PuzzleScreen: FC<IProps> = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [list, setList] = useState<PuzzleObject[]>([]);

  const endGame = () => {
    if (list.length === 0) {
      return;
    }

    const index = currentQuestion;

    if (index <= list.length) {
      setCurrentQuestion(index + 1);
    } else {
      navigate(ALL_MOBILE_ROUTES.MAIN.RESULT);
    }
  };

  const currentWordPuzzle = useMemo(() => {
    if (list.length === 0) {
      return;
    }

    const answer = list[currentQuestion].answer;
    return <AvailableCharacters answer={answer} />;
  }, [list, currentQuestion]);

  const shufflePuzzleList = useCallback(() => {
    const wordPuzzleList: PuzzleObject[] = [...AnimalTypes];

    if (wordPuzzleList.length === 0) {
      return;
    }

    for (let i = wordPuzzleList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = wordPuzzleList[i];
      wordPuzzleList[i] = wordPuzzleList[j];
      wordPuzzleList[j] = temp;
    }

    setList(wordPuzzleList);
  }, []);

  useEffect(() => {
    shufflePuzzleList();
  }, [shufflePuzzleList]);

  return (
    <Container>
      <HeaderText>Puzzle page</HeaderText>
      {currentWordPuzzle}
      <Button onPress={endGame}>Next</Button>
    </Container>
  );
};

export default PuzzleScreen;
