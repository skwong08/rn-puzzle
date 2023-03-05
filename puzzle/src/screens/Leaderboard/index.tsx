import React, {FC, useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {FlatList, Share, Alert} from 'react-native';

import {resultService, useResult} from '../../core/result';

import Button from '../../components/Button';
import {goBack} from '../../navigation/NavigationUtil';
import {Container, HeaderText} from '../../styles';
import {LeaderboardObject} from './LeaderboardTypes';

interface IProps {}

const LeaderboardScreen: FC<IProps> = () => {
  const {leaderboardList, leaderboard} = useResult();

  const share = async () => {
    try {
      const result = await Share.share({
        message: `This is my scores (${leaderboard})! Come join me!`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const back = () => {
    goBack();
  };

  const mapKeyExtractor = useCallback((item: LeaderboardObject) => {
    return item.player;
  }, []);

  const renderItem = useCallback(props => {
    const {item} = props;

    return (
      <LeaderboardItem>
        <LeaderboardItemText>{item.player}</LeaderboardItemText>
        <LeaderboardItemText>{item.score}</LeaderboardItemText>
      </LeaderboardItem>
    );
  }, []);

  useEffect(() => {
    resultService.initLeaderboard();
  }, []);

  return (
    <Container>
      <ResultContainer>
        <HeaderText>LEADERBOARD</HeaderText>
        <Leaderboards
          data={leaderboardList}
          renderItem={renderItem}
          keyExtractor={mapKeyExtractor}
        />
      </ResultContainer>
      <Button onPress={share} color={'lightblue'}>
        Share
      </Button>
      <Button onPress={back} transparent>
        Back to Home
      </Button>
    </Container>
  );
};

export default LeaderboardScreen;

const ResultContainer = styled.View`
  flex: 1;
`;

const Leaderboards = styled(
  FlatList as new () => FlatList<LeaderboardObject>,
)``;

const LeaderboardItem = styled.View`
  flex-direction: row;
  justify-content: space-between;

  border-width: 1px;
  border-radius: 4px;
  border-color: lightgray;

  margin-bottom: 10px;
`;

const LeaderboardItemText = styled.Text`
  color: black;
  font-size: 20px;

  padding: 20px;
`;
