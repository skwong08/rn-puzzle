import React, {FC, useCallback, useMemo} from 'react';
import styled from 'styled-components/native';

import {usePuzzle} from '../../../core/puzzle';
import TextBoxRandom from './TextBoxRandom';

interface IProps {
  randomText: string[];
  onPress: (string, number, boolean) => void;
}

const AvailableCharacters: FC<IProps> = props => {
  const {randomText, onPress} = props;

  const {firstRowIndex, secondRowIndex} = usePuzzle();

  const handleOnPress = useCallback(
    (char: string, i: number, firstRow: boolean) => {
      onPress(char, i, firstRow);
    },
    [onPress],
  );

  const buildRandomTextBox = useMemo(() => {
    if (randomText.length < 6) {
      const firstRow: any[] = [];

      randomText.map((char: string, i: number) => {
        firstRow.push(
          <TextBoxRandom
            key={`${char}_${i}_selectable`}
            character={char}
            onPress={() => handleOnPress(char, i + 1, true)}
            disabled={!!firstRowIndex.find(index => index === i + 1)}
          />,
        );
      });

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
        const char = randomText[i];
        firstRow.push(
          <TextBoxRandom
            key={`${char}_${i}_selectable`}
            character={char}
            onPress={() => handleOnPress(char, i + 1, true)}
            disabled={!!firstRowIndex.find(index => index === i + 1)}
          />,
        );
      }
      for (let i = 5; i < randomText.length; i++) {
        const char = randomText[i];
        secondRow.push(
          <TextBoxRandom
            key={`${char}_${i}_selectable`}
            character={char}
            onPress={() => handleOnPress(char, i + 1, false)}
            disabled={!!secondRowIndex.find(index => index === i + 1)}
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
  }, [firstRowIndex, secondRowIndex, randomText, handleOnPress]);

  return <Content>{buildRandomTextBox}</Content>;
};

export default AvailableCharacters;

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
