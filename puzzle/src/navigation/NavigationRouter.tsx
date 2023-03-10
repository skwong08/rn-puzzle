interface IScreenRouteParams {
  screen?: string;
}

export enum MobileRoutes {
  LANDING = 'LANDING',
  PUZZLE = 'PUZZLE',
  RESULT = 'RESULT',
  LEADERBOARD = 'LEADERBOARD',
}

export type AllMobileRoutes = keyof MobileRoutesParamsList;

export type MobileRoutesParamsList = MobileMainRoutesParamsList;

export type MobileMainRoutesParamsList = {
  [MobileRoutes.LANDING]?: IScreenRouteParams;
  [MobileRoutes.PUZZLE]?: IScreenRouteParams;
  [MobileRoutes.RESULT]?: IScreenRouteParams;
  [MobileRoutes.LEADERBOARD]?: IScreenRouteParams;
};

export const ALL_MOBILE_ROUTES = {
  MAIN: MobileRoutes,
};
