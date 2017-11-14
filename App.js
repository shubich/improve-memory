import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { Provider } from 'react-redux';

import store from './src/store/configureStore';

import Nav from './src/components/Nav';
import Letters from './src/containers/LettersContainer';
import Pause from './src/components/Pause';
import styles from './src/styles/style';

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Letters} />
          <Route path="/pause" component={Pause} />
        </Switch>
      </View>
    </NativeRouter>
  </Provider>
);

export default App;
