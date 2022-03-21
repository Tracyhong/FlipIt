import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// TEST 
