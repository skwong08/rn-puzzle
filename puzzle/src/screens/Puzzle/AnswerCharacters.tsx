import React, {FC, useMemo} from 'react';
import styled from 'styled-components/native';

import {usePuzzle} from '../../core/puzzle';
import TextBoxRandom from './TextBoxRandom';

interface IProps {
  numberOfWords: number;
}

const AnswerCharacters: FC<IProps> = props => {
  const {numberOfWords} = props;

  const {userAnswer} = usePuzzle();

  const buildAnswerTextBox = useMemo(() => {
    if (numberOfWords < 6) {
      const firstRow: any[] = [];

      for (let i = 0; i < numberOfWords; i++) {
        const char = userAnswer[i];
        firstRow.push(
          <TextBoxRandom key={`${char}_${i}_display`} character={char} />,
        );
      }

      return (
        <BoxContainerRow>
          <TextBoxContainer>
            {firstRow.map((item: any) => {
              return item;
            })}
          </TextBoxContainer>
        </BoxContainerRow>
      );
    } else {
      const firstRow: any[] = [];
      const secondRow: any[] = [];

      for (let i = 0; i < 5; i++) {
        const char = userAnswer[i];
        firstRow.push(
          <TextBoxRandom
            key={`${char}_${i}_display`}
            character={char}
            isDisplay
          />,
        );
      }
      for (let i = 5; i < numberOfWords; i++) {
        const char = userAnswer[i];
        secondRow.push(
          <TextBoxRandom
            key={`${char}_${i}_display`}
            character={char}
            isDisplay
          />,
        );
      }

      return (
        <>
          <BoxContainerRow>
            <TextBoxContainer>
              {firstRow.map((item: any) => {
                return item;
              })}
            </TextBoxContainer>
            <TextBoxContainer>
              {secondRow.map((item: any) => {
                return item;
              })}
            </TextBoxContainer>
          </BoxContainerRow>
        </>
      );
    }
  }, [numberOfWords, userAnswer]);

  return <Content>{buildAnswerTextBox}</Content>;
};

export default AnswerCharacters;

const Content = styled.View`
  flex-direction: row;

  justify-content: center;

  margin-vertical: 20px;
`;

const BoxContainerRow = styled.View`
  flex-direction: column;
`;

const TextBoxContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;

  margin-top: 20px;
`;
