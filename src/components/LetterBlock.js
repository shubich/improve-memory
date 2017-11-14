import React from 'react';
import {
  Text,
} from 'react-native';

import styles from '../styles/style';

export default class LetterBlock extends React.Component {
  click = () => {
    if (this.props.details.display || this.props.details.open) {
      return 0;
    }

    this.props.click(this.props.details);

    if (this.props.counter % 2 !== 0) {
      this.props.close();
    }

    return 0;
  }

  render() {
    const display = this.props.details.display || this.props.details.open;
    return (
      <Text onPress={this.click} style={[styles.col]}>
        {
          display
            ? this.props.details.val
            : ''
        }
      </Text>
    );
  }
}
