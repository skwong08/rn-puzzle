/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Root} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './src/navigation/NavigationUtil';
import MainNavigation from './src/navigation';
import {SafeAreaView} from './src/styles';

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <SafeAreaView>
          <NavigationContainer ref={navigationRef}>
            <MainNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </Root>
    );
  }
}
