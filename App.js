import React from 'react';
import * as Expo from 'expo';
import { StyleProvider } from 'native-base';
import MainNavigator from './src/MainNavigator';
import getTheme from './src/theme/components';
import mytheme from './src/theme/variables/mytheme';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _cacheResourcesAsync() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <Expo.AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <StyleProvider style={getTheme(mytheme)}>
        <MainNavigator />
      </StyleProvider>
    );
  }
}
