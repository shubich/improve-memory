import React from 'react';
import { Link } from 'react-router-native';
import { Text } from 'react-native';

import styles from '../styles/style';

const NavLink = (props) => {
  const active = props.place === props.to;
  const activeLink = active ? styles.navItemActive : {};
  const activeText = { color: active ? 'white' : 'green' };

  return (
    <Link
      {...props}
      underlayColor="#f0f4f7"
      style={
          [
            styles.navItem,
            activeLink,
          ]
        }
    >
      <Text style={activeText}>{props.title}</Text>
    </Link>
  );
};

export default NavLink;
