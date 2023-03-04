import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  ALL_MOBILE_ROUTES,
  MobileMainRoutesParamsList,
} from './NavigationRouter';

import LandingScreen from '../screens/Landing';
import PuzzleScreen from '../screens/Puzzle';
import ResultScreen from '../screens/Result';
import LeadersBoardScreen from '../screens/LeadersBoard';

interface IProps {}

const ScreensStack = createStackNavigator<MobileMainRoutesParamsList>();

const MainNavigation: FC<IProps> = () => {
  return (
    <ScreensStack.Navigator
      initialRouteName={ALL_MOBILE_ROUTES.MAIN.LANDING}
      screenOptions={{
        headerShown: false,
      }}>
      <ScreensStack.Screen
        name={ALL_MOBILE_ROUTES.MAIN.LANDING}
        component={LandingScreen}
      />
      <ScreensStack.Screen
        name={ALL_MOBILE_ROUTES.MAIN.PUZZLE}
        component={PuzzleScreen}
      />
      <ScreensStack.Screen
        name={ALL_MOBILE_ROUTES.MAIN.RESULT}
        component={ResultScreen}
      />
      <ScreensStack.Screen
        name={ALL_MOBILE_ROUTES.MAIN.LEADERSBOARD}
        component={LeadersBoardScreen}
      />
    </ScreensStack.Navigator>
  );
};

export default MainNavigation;
