import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

export const Container = styled.View`
  background-color: white;
  flex: 1;
  padding: 24px;
`;

export const HeaderText = styled.Text`
  color: black;
  font-size: 40px;

  margin-bottom: 20px;
  align-self: center;
`;

export const DescriptionText = styled.Text`
  color: black;
  font-size: 25px;

  margin-vertical: 20px;
  align-self: center;
`;

export const PointsText = styled.Text`
  color: gray;
  font-size: 40px;
  font-weight: 500;

  margin-bottom: 20px;
  align-self: center;
`;

export const OptionButton = styled.TouchableOpacity<{selected?: boolean}>`
  padding: 20px;
  margin-top: 24px;

  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-radius: 4px;
  border-color: ${({selected}) => (selected ? 'pink' : 'lightgray')};

  background-color: white;
`;

export const OptionButtonText = styled.Text<{selected?: boolean}>`
  color: ${({selected}) => (selected ? 'red' : 'black')};
  font-size: 20px;
  font-weight: ${({selected}) => (selected ? '700' : '400')};

  flex-direction: column;
`;

export const BaseButton = styled.TouchableOpacity<{transparent?: boolean}>`
  padding: 20px;

  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background-color: ${({transparent}) =>
    transparent ? 'transparent' : 'pink'};
`;

export const BaseButtonText = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 500;

  flex-direction: column;
`;

export const StyledText = styled.Text`
  color: black;
  font-size: 20px;
`;
