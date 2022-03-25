import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

export default function Accueil({ navigation }) {

  const connexion = () => {
    navigation.navigate('Connexion')
  }
  const inscritption = () => {
    navigation.navigate('ListDeck')
  }

  return (
    <View style={styles.container}>
      <Button title='Connexion' onPress={connexion}/>
      <Button title='ListDeck' onPress={inscritption}/>
      <StatusBar style="auto" />
    </View>
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
