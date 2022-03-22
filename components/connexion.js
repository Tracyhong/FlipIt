import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
/*import {useState} from 'react';
const [email, setEmail ] = useState('');
const [password , setPassword ] = useState( '' ) ;*/


export default function Connexion({navigation}) {
  const accueil = () => {
    navigation.push('ListDeck')   //modif redirection apres connexion //mettre Accueil pour acceder a la page accueil avec les autres boutons
  }
  return (
    <View style={styles.container}>
      <Image
          style={styles.tinyLogo}
          source={require('../assets/Flip!t.png')}
      />
      <TextInput style={styles.input}
        editable
        maxLength={50}
        //leftIcon='email'  //je sais pas ca sert a quoi
        placeholder='Enter email'
        autoCapitalize='none'
        keybordType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        //value={email}
        //onChangeText={(email) => setEmail(email)}

      />
      <TextInput style={styles.input}
        editable
        maxLength={50}
        //leftIcon='lock' //je sais pas ca sert a quoi
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='password'
        //rightIcon={rightIcon} //je sais pas ca sert a quoi

        secureTextEntry={true}

        //value={password}
        //onChangeText={(password) => setPassword(password)}
      />
       {/* a modifier ici juste pour pouvoir faire le lien vers la page d'accueil */}
      <TouchableOpacity style={styles.loginBtn} onPress={accueil}>  
          <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.signup_button}>Sign up ?</Text>
      </TouchableOpacity>
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
  signup_button: {
      height: 30,
      marginTop: 30,
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
  }
});
