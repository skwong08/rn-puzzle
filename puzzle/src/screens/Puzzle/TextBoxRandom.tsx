import React, {FC} from 'react';
import styled from 'styled-components/native';

interface IProps {
  character: string;
  disabled?: boolean;
}

const TextBoxRandom: FC<IProps> = props => {
  const {character, disabled} = props;

  return (
    <ContainerButton disabled={disabled}>
      <Container disabled={disabled}>
        <Alphabet disabled={disabled}>{character}</Alphabet>
      </Container>
    </ContainerButton>
  );
};

export default TextBoxRandom;

const ContainerButton = styled.TouchableOpacity``;

const Container = styled.View<{disabled?: boolean}>`
  width: 50px;
  height: 50px;
  margin-horizontal: 10px;

  justify-content: center;
  align-items: center;

  border-width: 1px;
  border-color: ${({disabled}) => (disabled ? 'lightgray' : 'black')};
`;

const Alphabet = styled.Text<{disabled?: boolean}>`
  font-size: 30px;
  color: ${({disabled}) => (disabled ? 'lightgray' : 'black')};
`;
