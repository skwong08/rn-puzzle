import React, {FC, useMemo} from 'react';
import styled from 'styled-components/native';

import TextBoxRandom from './TextBoxRandom';

interface IProps {
  answer: string;
}

const AvailableCharacters: FC<IProps> = props => {
  const {answer} = props;

  const shuffleWordsOptions = (item: string) => {
    var a = item.split(''),
      n = a.length;

    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }

    return a;
  };

  const buildRandomTextBox = useMemo(() => {
    const randomText = shuffleWordsOptions(answer);

    if (randomText.length < 6) {
      const firstRow: any[] = [];

      randomText.map((char: string, index: number) => {
        firstRow.push(<TextBoxRandom key={char + index} character={char} />);
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
        firstRow.push(<TextBoxRandom key={char + i} character={char} />);
      }
      for (let i = 5; i < randomText.length; i++) {
        const char = randomText[i];
        secondRow.push(<TextBoxRandom key={char + i} character={char} />);
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
  }, [answer]);

  return <Content>{buildRandomTextBox}</Content>;
};

export default AvailableCharacters;

const Content = styled.View`
  flex: 1;
  flex-direction: row;

  justify-content: center;
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
