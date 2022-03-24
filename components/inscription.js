import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from 'react';

const Connexion = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');

  const inscription = () => {
      createUserWithEmailAndPassword(auth, email, mdp)
      .then((re) => {
        navigation.navigate('ListDeck');
      })
      .catch((re) => {console.log(re)});
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
        // minLength={6} // sa existe pas jcrois
        maxLength={50}
        placeholder='Mot de passe'
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='password'

        secureTextEntry={true}

        value={mdp}
        onChangeText={text => setMdp(text)}

      />
      <TouchableOpacity style={styles.loginBtn} onPress={inscription}>  
          <Text style={styles.loginText}>INSCRIPTION</Text>
      </TouchableOpacity>
      <TouchableOpacity>
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
      marginBottom: 30,
      marginTop: 30,
  },
  loginText:{
    color: 'white',
    fontWeight: 'bold',
  }
});
