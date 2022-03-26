import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';

export default function Accueil({ navigation }) {

  const connexion = () => {
    navigation.navigate('Connexion')
  }

  return (
      <View style={styles.container}>
        <Text style={{fontWeight:'bold'}}>
            Développé en React Native 
        </Text>
        <Text>
            dans le cadre d'un projet universitaire
        </Text>
        <Text>
           par
        </Text>
        <Text>
            Nahean BADAR
        </Text>
        <Text>
            Lorie Chen
        </Text>
        <Text>
            Tracy HONG
        </Text>
        <Text>
            Mathis Sergent
        </Text>
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
