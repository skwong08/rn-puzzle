import {CommonActions} from '@react-navigation/native';
import React, {FC} from 'react';
import styled from 'styled-components/native';
import {ALL_MOBILE_ROUTES} from '../../navigation/NavigationRouter';
import {navigationRef} from '../../navigation/NavigationUtil';

interface IProps {}

const ResultScreen: FC<IProps> = () => {
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
      <ScreenTitle>{'Result page'}</ScreenTitle>
      <NextButton title="Back to Home" onPress={() => finish()} />
    </Container>
  );
};

export default ResultScreen;

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding: 24px;
`;

const ScreenTitle = styled.Text``;

const NextButton = styled.Button``;
