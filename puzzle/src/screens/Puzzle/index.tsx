import React, {FC} from 'react';
import {navigate} from '../../navigation/NavigationUtil';

import Button from '../../components/Button';
import {ALL_MOBILE_ROUTES} from '../../navigation/NavigationRouter';
import {Container, HeaderText} from '../../styles';

interface IProps {}

const PuzzleScreen: FC<IProps> = () => {
  const endGame = () => {
    navigate(ALL_MOBILE_ROUTES.MAIN.RESULT);
  };

  return (
    <Container>
      <HeaderText>Puzzle page</HeaderText>
      <Button onPress={endGame}>Next</Button>
    </Container>
  );
};

export default PuzzleScreen;
