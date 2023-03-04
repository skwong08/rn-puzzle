import React, {FC} from 'react';
import styled from 'styled-components/native';
import {ALL_MOBILE_ROUTES} from '../../navigation/NavigationRouter';
import {navigate} from '../../navigation/NavigationUtil';

interface IProps {}

const PuzzleScreen: FC<IProps> = () => {
  const endGame = () => {
    navigate(ALL_MOBILE_ROUTES.MAIN.RESULT);
  };

  return (
    <Container>
      <ScreenTitle>{'Puzzle page'}</ScreenTitle>
      <NextButton title="End" onPress={() => endGame()} />
    </Container>
  );
};

export default PuzzleScreen;

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding: 24px;
`;

const ScreenTitle = styled.Text``;

const NextButton = styled.Button``;
