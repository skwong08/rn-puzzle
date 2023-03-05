import React, {FC} from 'react';
import {CommonActions} from '@react-navigation/native';
import styled from 'styled-components/native';

import {puzzleService, usePuzzle} from '../../core/puzzle';
import Button from '../../components/Button';
import {ALL_MOBILE_ROUTES} from '../../navigation/NavigationRouter';
import {navigationRef} from '../../navigation/NavigationUtil';
import {Container, HeaderText, PointsText} from '../../styles';

interface IProps {}

const ResultScreen: FC<IProps> = () => {
  const {correct} = usePuzzle();
  console.log('correct = ', correct);

  const finish = () => {
    puzzleService.reset();

    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: ALL_MOBILE_ROUTES.MAIN.LANDING}],
      }),
    );
  };

  return (
    <Container>
      <ResultContainer>
        {correct > 0 ? (
          <>
            <HeaderText>Congratulations!</HeaderText>
            <PointsText>You earn {correct * 10} points!</PointsText>
          </>
        ) : (
          <>
            <HeaderText>Never Give Up!</HeaderText>
            <PointsText>Let's try again</PointsText>
          </>
        )}
      </ResultContainer>
      <Button onPress={finish}>Back to Home</Button>
    </Container>
  );
};

export default ResultScreen;

const ResultContainer = styled.View`
  flex: 1;
`;
