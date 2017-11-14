import React from 'react';
import { View } from 'react-native';

import NavLink from '../containers/NavLinkContainer';
import styles from '../styles/style';

const Home = () => (
  <View style={styles.nav}>
    <NavLink to="/" title="Letters" />
    <NavLink to="/pause" title="Pause" />
  </View>
);

export default Home;
