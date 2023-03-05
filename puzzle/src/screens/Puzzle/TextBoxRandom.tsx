import React, {FC} from 'react';
import styled from 'styled-components/native';

interface IProps {
  character: string;
  isDisplay?: boolean;
  disabled?: boolean;
  onPress?: (string) => void;
}

const TextBoxRandom: FC<IProps> = props => {
  const {character, isDisplay, disabled, onPress} = props;

  return (
    <ContainerButton
      disabled={disabled || isDisplay}
      onPress={() => (onPress ? onPress(character) : {})}>
      <Container disabled={disabled}>
        <Alphabet disabled={disabled}>{character}</Alphabet>
      </Container>
    </ContainerButton>
  );
};

export default TextBoxRandom;

const ContainerButton = styled.TouchableOpacity``;

const Container = styled.View<{disabled?: boolean; isDisplay?: boolean}>`
  width: 50px;
  height: 50px;
  margin-horizontal: 10px;

  justify-content: center;
  align-items: center;

  border-width: 1px;

  border-color: ${({disabled, isDisplay}) =>
    disabled || !isDisplay ? 'lightgray' : 'black'};
`;

const Alphabet = styled.Text<{disabled?: boolean}>`
  font-size: 30px;
  color: ${({disabled}) => (disabled ? 'lightgray' : 'black')};
`;
