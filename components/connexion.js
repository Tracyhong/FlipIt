import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import {useState} from 'react';

const Connexion = ({navigation}) => {
  const accueil = () => {
    navigation.navigate('ListDeck')   //modif redirection apres connexion //mettre Accueil pour acceder a la page accueil avec les autres boutons
  }

  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const connexion = () => {
      signInWithEmailAndPassword(auth, email, mdp)
      .then((re) => {
        navigation.navigate('ListDeck');
      })
      .catch((re) => {console.log(re)});
  }

  const inscription = () => {
    navigation.navigate('Inscription');
  }

  return (
    <View style={styles.container}>
      <Image
          style={styles.tinyLogo}
          source={require('../assets/FlipIt.png')}
      />
      <TextInput style={styles.input}
        editable
        maxLength={50}
        //leftIcon='email'  //je sais pas ca sert a quoi
        placeholder='Email'
        autoCapitalize='none'
        keybordType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={text => setEmail(text)}

      />
      <TextInput style={styles.input}
        editable
        maxLength={50}
        //leftIcon='lock' //je sais pas ca sert a quoi
        placeholder='Mot de passe'
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='password'
        //rightIcon={rightIcon} //je sais pas ca sert a quoi

        secureTextEntry={true}

        value={mdp}
        onChangeText={text => setMdp(text)}

      />
       {/* a modifier ici juste pour pouvoir faire le lien vers la page d'accueil */}
      <TouchableOpacity style={styles.loginBtn} onPress={connexion}>  
          <Text style={styles.loginText}>SE CONNECTER</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={inscription}>
          <Text>Pas encore inscrit ?</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default Connexion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 110,
      height: 60,
  },
  input: {
      height: 40,
      width:'80%',
      margin: 12,
      borderWidth: 1,
      borderColor:'#BFBFC1',
      backgroundColor:'#FBFBFB',
      borderRadius:15,
      padding: 10,
  },
  loginBtn:{
      height: 40,
      width:'80%',
      borderRadius:25,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'#00A2E8',
      color:'#fff', //marche pas pour mettre le text en blanc
      marginBottom: 30,
      marginTop: 30,
  },
  loginText:{
    color: 'white',
    fontWeight: 'bold',
  }
});
