import Service from 'react-reservice';
import {
  LeaderboardObject,
  LeaderboardTypes,
} from '../../screens/Leaderboard/LeaderboardTypes';

interface IResultContext {
  result: number;
  leaderboard: number;
  leaderboardList: LeaderboardObject[];
}

const defaultContext: IResultContext = {
  result: 0,
  leaderboard: 0,
  leaderboardList: [],
};

class ResultService extends Service<IResultContext> {
  constructor() {
    super();

    this.context = {
      ...defaultContext,
    };
  }

  public initLeaderboard = () => {
    this.getLeaderboardList();
  };

  public setResult = (result: number) => {
    this.context.result = result;
    this.setLeaderBoard();
  };

  private setLeaderBoard = () => {
    this.context.leaderboard += this.context.result;
  };

  private getLeaderboardList = () => {
    const list: LeaderboardObject[] = LeaderboardTypes.slice();
    list.push({player: 'YOU', score: this.context.leaderboard});

    const leaderboardList = [...list].sort((a, b) => b.score - a.score);

    console.log('leaderboardList = ', leaderboardList);

    this.context.leaderboardList = leaderboardList || [];
  };
}

export default new ResultService();
