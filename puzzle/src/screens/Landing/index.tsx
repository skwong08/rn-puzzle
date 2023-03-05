import React, {FC, useEffect} from 'react';
import styled from 'styled-components/native';

import Button from '../../components/Button';
import CategoryButton from '../../components/OptionButton';
import {puzzleService, usePuzzle} from '../../core/puzzle';
import {ECategory} from '../../core/puzzle/service';
import {ALL_MOBILE_ROUTES, navigate} from '../../navigation/NavigationUtil';
import {Container, HeaderText} from '../../styles';

interface IProps {}

const LandingScreen: FC<IProps> = () => {
  const {selectedCategory} = usePuzzle();

  const selectCategory = (c: ECategory) => {
    puzzleService.setCategory(c);
  };

  const startGame = () => {
    if (selectedCategory === ECategory.NOT_SELECTED) {
      return;
    }

    navigate(ALL_MOBILE_ROUTES.MAIN.PUZZLE);
  };

  const goLeaderboard = () => {
    navigate(ALL_MOBILE_ROUTES.MAIN.LEADERBOARD);
  };

  useEffect(() => {
    puzzleService.reset();
  }, []);

  return (
    <Container>
      <HeaderText>Word Puzzle</HeaderText>
      <Buttons>
        <CategoryButton
          onPress={() => selectCategory(ECategory.CITIES)}
          selected={selectedCategory === ECategory.CITIES}>
          Cities
        </CategoryButton>
        <CategoryButton
          onPress={() => selectCategory(ECategory.FOOD)}
          selected={selectedCategory === ECategory.FOOD}>
          Food
        </CategoryButton>
        <CategoryButton
          onPress={() => selectCategory(ECategory.ANIMALS)}
          selected={selectedCategory === ECategory.ANIMALS}>
          Animals
        </CategoryButton>
      </Buttons>
      <Button onPress={startGame}>Start Playing</Button>
      <Button onPress={goLeaderboard} transparent>
        Leaders board
      </Button>
    </Container>
  );
};

export default LandingScreen;

const Buttons = styled.View`
  flex: 1;
`;
