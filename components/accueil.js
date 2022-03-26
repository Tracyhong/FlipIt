import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';

export default function Accueil({ navigation }) {

  const connexion = () => {
    navigation.navigate('Connexion')
  }

  return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/start.png')} style={styles.image}>
          <Image
            style={styles.logoFlipit}
            source={require('../assets/FlipIt.png')}
          />
          <Text style={styles.txt}> Révisez plus facilement en </Text>
          <Text style={styles.txt}> étant rapide et efficace !</Text>
          <TouchableOpacity style={styles.btn} onPress={connexion}>
            <Text style={{alignSelf:'center', color:'#fff'}} >Démarrer</Text>
          </TouchableOpacity>
        </ImageBackground>
        
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    width:'100%',
    height:'100%', 
    opacity: 0.8
  },
  logoFlipit:{
    width: '40%',
    height: '10%',
    alignSelf:'center',
    top:60
  },
  txt:{
    top:80,
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold'
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
  }
});
