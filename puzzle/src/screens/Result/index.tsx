import React, {FC} from 'react';
import {CommonActions} from '@react-navigation/native';
import styled from 'styled-components/native';

import Button from '../../components/Button';
import {navigate, navigationRef} from '../../navigation/NavigationUtil';
import {ALL_MOBILE_ROUTES} from '../../navigation/NavigationRouter';
import {Container, HeaderText, PointsText} from '../../styles';

interface IProps {
  corrects: number;
}

const ResultScreen: FC<IProps> = props => {
  const {corrects = 3} = props;

  const tryAgain = () => {
    navigate(ALL_MOBILE_ROUTES.MAIN.PUZZLE);
  };

  const finish = () => {
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
        {corrects > 0 ? (
          <>
            <HeaderText>Congratulations!</HeaderText>
            <PointsText>You earn {corrects * 10} points!</PointsText>
          </>
        ) : (
          <>
            <HeaderText>Never Give Up!</HeaderText>
            <PointsText>Let's try again</PointsText>
          </>
        )}
      </ResultContainer>
      {!(corrects > 0) && <Button onPress={tryAgain}>Try Again</Button>}
      <Button onPress={finish} transparent={!(corrects > 0)}>
        Back to Home
      </Button>
    </Container>
  );
};

export default ResultScreen;

const ResultContainer = styled.View`
  flex: 1;
`;
