import React, {FC, useState} from 'react';
import styled from 'styled-components/native';

import Button from '../../components/Button';
import CategoryButton from '../../components/OptionButton';
import {ALL_MOBILE_ROUTES, navigate} from '../../navigation/NavigationUtil';
import {Container, HeaderText} from '../../styles';

interface IProps {}

enum ECategory {
  NOT_SELECTED = 'NOT_SELECTED',
  CITIES = 'CITIES',
  FOOD = 'FOOD',
  ANIMALS = 'ANIMALS',
}

const LandingScreen: FC<IProps> = () => {
  const [category, setCategory] = useState<ECategory>(ECategory.NOT_SELECTED);

  const startGame = () => {
    navigate(ALL_MOBILE_ROUTES.MAIN.PUZZLE);
  };

  const selectedCategory = (c: ECategory) => {
    setCategory(c);
  };

  console.log('category = ', category);

  return (
    <Container>
      <HeaderText>Word Puzzle</HeaderText>
      <Buttons>
        <CategoryButton
          onPress={() => selectedCategory(ECategory.CITIES)}
          selected={category === ECategory.CITIES}>
          Cities
        </CategoryButton>
        <CategoryButton
          onPress={() => selectedCategory(ECategory.FOOD)}
          selected={category === ECategory.FOOD}>
          Food
        </CategoryButton>
        <CategoryButton
          onPress={() => selectedCategory(ECategory.ANIMALS)}
          selected={category === ECategory.ANIMALS}>
          Animals
        </CategoryButton>
      </Buttons>
      <Button onPress={startGame}>Start Playing</Button>
      <Button onPress={startGame} transparent>
        Leaders board
      </Button>
    </Container>
  );
};

export default LandingScreen;

const Buttons = styled.View`
  flex: 1;
`;
