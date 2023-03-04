import React, {FC} from 'react';
import styled from 'styled-components/native';
import {goBack} from '../../navigation/NavigationUtil';

interface IProps {}

const LeadersBoardScreen: FC<IProps> = () => {
  const back = () => {
    goBack();
  };

  return (
    <Container>
      <ScreenTitle>{'Leaders Board page'}</ScreenTitle>
      <NextButton title="Back to Home" onPress={() => back()} />
    </Container>
  );
};

export default LeadersBoardScreen;

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding: 24px;
`;

const ScreenTitle = styled.Text``;

const NextButton = styled.Button``;
