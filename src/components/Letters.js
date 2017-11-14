import React from 'react';
import {
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

import LetterBlock from './LetterBlock';
import styles from '../styles/style';

export default class Letters extends React.Component {
  constructor(props) {
    super(props);
    this.start();
    this.state = { ...this.props.stopwatch };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.win) {
      Alert.alert('You won!');
      clearTimeout(this.timer);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.props.timer({
      min: this.state.min,
      sec: this.state.sec,
    });
  }

  start = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        const { min, sec } = prevState;
        return {
          min: (sec === 59) ? min + 1 : min,
          sec: (sec === 59) ? 0 : sec + 1,
        };
      });
    }, 1000);
  }

  restart = () => {
    clearTimeout(this.timer);
    this.setState(() => ({
      min: 0,
      sec: 0,
    }));
    this.props.reset();
    this.start();
  }

  render() {
    let { min, sec } = this.state;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    return (
      <View style={styles.game}>
        <View style={styles.controlPanel}>
          <Text style={styles.header}>
            {this.props.counter} moves
          </Text>
          <Text style={styles.header}>
            {min}
            :
            {sec}
          </Text>
          <Button
            onPress={this.restart}
            title="Restart"
          />
        </View>

        <View style={styles.matrix}>
          {
            this.props.matrix.map((row, i) => {
              const entry = row.map(el =>
                <LetterBlock {...this.props} key={el.id} details={el} />);
              return <View style={styles.row} key={i}>{entry}</View>;
            })
          }
        </View>

      </View>
    );
  }
}
