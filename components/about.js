import { StatusBar } from 'expo-status-bar';
import {Text, View, SafeAreaView, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import  Membres from './membres';

const membres = [
  {
    nom: "CHEN",
    prenom: "Lorie",
    image: require('../assets/images/Lorie.png')
  },
  {
    nom: "HONG",
    prenom: "Tracy",
    image: require('../assets/images/tracy.png')
  },
  {
    nom: "BADAR",
    prenom: "Nahean",
    image: require('../assets/images/nahean.png')
  },
  {
    nom: "SERGENT",
    prenom: "Mathis",
    image: require('../assets/images/mathis.png') 
  },
];

export default function Accueil({ navigation }) {

  const connexion = () => {
    navigation.navigate('Connexion')
  }


  return (
    <SafeAreaView>
    <Text style={{fontSize:14, textAlign:'center', color:'gray', marginTop:20 }} >Cette application mobile est développé en React Native dans le cadre d'un projet universitaire.</Text>
    <Text style={{fontWeight:'bold', textAlign:'center', marginTop:5, marginBottom:5, color:'#00A2E8'}} >Nous sommes une jeune équipe composée de 4 membres: </Text>
    <FlatList
      numColumns={2}
      data={membres}
      renderItem={ ( {item}) => (<Membres membres={item}/>)}>
      </FlatList>

  </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }, 
// });
