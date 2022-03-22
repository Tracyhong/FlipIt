import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

export default function Accueil({ navigation }) {

  const profil = () => {
    navigation.navigate('Profil')
  }
  const listDeck = () => {
    navigation.navigate('ListDeck')
  }
  const deck = () => {
    navigation.navigate('Deck')
  }

  return (
    <View style={styles.container}>
      <Text>FlipIt!</Text>
      <Button title='Profil' onPress={profil}/>
      <Button title='ListDeck' onPress={listDeck}/>
      <Button title='Deck' onPress={deck}/>
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
