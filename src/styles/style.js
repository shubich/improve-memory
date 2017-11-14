import { StyleSheet } from 'react-native';
import game from './game';
import matrix from './matrix';
import nav from './nav';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
    flex: 1,
  },
  header: {
    fontSize: 20,
  },
  ...game,
  ...matrix,
  ...nav,
});


export default styles;
