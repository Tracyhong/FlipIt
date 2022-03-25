import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';

export default function Accueil({ navigation }) {

  const connexion = () => {
    navigation.navigate('Connexion')
  }

  return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/imageTest.png')} style={styles.image}>
          <Image
            style={styles.logoFlipit}
            source={require('../assets/FlipIt.png')}
          />
          <Text style={{position:'absolute', top:76, color:'#fff', margin: 30}}>Révisez plus facilement en étant rapide et efficace !   </Text>
          <TouchableOpacity style={styles.btn} onPress={connexion}>
            <Text style={{alignSelf:'center'}} >Démarrer</Text>
          </TouchableOpacity>
        </ImageBackground>

        
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    width:'100%',
    height:'100%', 
    opacity: 0.8
  },
  logoFlipit:{
    width: 110,
    height: 60,
    position:'absolute',
    top:42,
    marginLeft:31
  },
  btn:{
    position:'absolute',
    bottom:50,
    height: 40,
    width:'80%',
    borderRadius:25,
    alignSelf:'center',
    justifyContent:"center",
    backgroundColor:'#00A2E8',
    color:'#fff', //marche pas pour mettre le text en blanc
    // marginBottom: 30,
    // marginTop: 30,
  }
});
