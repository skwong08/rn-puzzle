import React, {FC, useCallback, useEffect, useMemo} from 'react';
import styled from 'styled-components/native';

import Button from '../../components/Button';
import {puzzleService, usePuzzle} from '../../core/puzzle';
import {
  ALL_MOBILE_ROUTES,
  MobileRoutesParamsList,
} from '../../navigation/NavigationRouter';
import {navigate} from '../../navigation/NavigationUtil';
import {Container, DescriptionText, HeaderText} from '../../styles';

import AvailableCharacters from './AvailableCharacters';
import AnswerCharacters from './AnswerCharacters';

interface IProps extends MobileRoutesParamsList {}

const PuzzleScreen: FC<IProps> = () => {
  const {currentQuestion, wordPuzzleList} = usePuzzle();

  const shuffleWordsOptions = (item: string) => {
    var a = item.split(''),
      n = a.length;

    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }

    return a;
  };

  const endGame = () => {
    if (wordPuzzleList.length === 0) {
      return;
    }

    puzzleService.checkAnswer(wordPuzzleList[currentQuestion].answer);

    if (currentQuestion < wordPuzzleList.length - 1) {
      puzzleService.nextQuestion(currentQuestion + 1);
    } else {
      navigate(ALL_MOBILE_ROUTES.MAIN.RESULT);
    }
  };

  const randomWordDidPress = useCallback(
    (answer: string, index: number, isFirstRow: boolean) => {
      if (isFirstRow) {
        puzzleService.setFirstRowIndex(index);
      } else {
        puzzleService.setSecondRowIndex(index);
      }

      puzzleService.setUserAnswer(answer);
    },
    [],
  );

  const currentWordPuzzle = useMemo(() => {
    if (
      wordPuzzleList.length === 0 ||
      currentQuestion >= wordPuzzleList.length
    ) {
      return;
    }

    const answer = wordPuzzleList[currentQuestion].answer;
    const description = wordPuzzleList[currentQuestion].description;

    const randomText = shuffleWordsOptions(answer);

    return (
      <AnswerHintSection>
        <AnswerHintSection>
          <AnswerCharacters numberOfWords={answer.length} />
          <DescriptionText>{description}</DescriptionText>
        </AnswerHintSection>
        <AvailableCharacters
          randomText={randomText}
          onPress={randomWordDidPress}
        />
      </AnswerHintSection>
    );
  }, [wordPuzzleList, currentQuestion, randomWordDidPress]);

  useEffect(() => {
    puzzleService.init();
  }, []);

  return (
    <Container>
      <HeaderText>Puzzle page</HeaderText>
      {currentWordPuzzle}
      <Button onPress={endGame}>Next</Button>
    </Container>
  );
};

export default PuzzleScreen;

const AnswerHintSection = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;
