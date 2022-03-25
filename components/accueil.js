import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,ImageBackground } from 'react-native';
import 'react-native-gesture-handler';

export default function Accueil({ navigation }) {

  const connexion = () => {
    navigation.navigate('Connexion')
  }

  return (
    <View style={styles.container}>
      {/* <ImageBackground style={{flex:1}} source={require('../assets/StartingPageBG.png')}> */}
        <Image
          style={styles.logoFlipit}
          source={require('../assets/FlipIt.png')}
        />
        <Text>Révisez plus facilement en étant rapide et efficace !   </Text>
        <TouchableOpacity style={styles.btn} onPress={connexion}>
          <Text style={styles.btnText} >Démarrer</Text>
        </TouchableOpacity>
      {/* </ImageBackground> */}

      
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
  logoFlipit:{
    width: 110,
      height: 60,
  },
  btn:{
    position:'absolute',
    bottom:80,
    height: 40,
      width:'80%',
      borderRadius:25,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'#00A2E8',
      color:'#fff', //marche pas pour mettre le text en blanc
      marginBottom: 30,
      marginTop: 30,
  }
});
