import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

export default function Accueil({ navigation }) {

  const profil = () => {
    navigation.navigate('Profil')
  }
  const connexion = () => {
    navigation.navigate('Connexion')
  }

  return (
    <View style={styles.container}>
      <Text>FlipIt!</Text>
      <Button title='Profil' onPress={profil}/>
      <Button title='Connexion' onPress={connexion}/>
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
