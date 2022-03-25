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

// Update ( faut l'adapter ) 
// import { StatusBar } from 'expo-status-bar';
// import {SafeAreaView, StyleSheet, Text, View, ScrollView,Image, TouchableOpacity, FlatList } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function App() {
//   const next = () => {
//     navigation.push('')   //A MODIFIER POUR REDIRIGER VERS LA PAGE CONNEXION
//   }
//   const deck = () => {
//     navigation.navigate('Deck')   //modif redirection apres connexion
//   }
//   const DATA = [
//       {
//         id: 'Pays',
//         title: 'Drapeaux',
//       },
//       {
//         id: 'Maths',
//         title: 'Calculs',
//       },
//       {
//         id: 'Animaux',
//         title: 'Animaux/Pets',
//       },
//     ];
//     const Item = ({ title }) => ( 
//       <View style={styles.item}>
//         <TouchableOpacity onPress={deck}>  
//           <Text style={styles.title}>{title}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//     const renderItem = ({ item }) => (
//       <Item title={item.title} />
//     );
//   return (
//     <SafeAreaView style={styles.areaView}>
//       {/* <StatusBar translucent={false}/> */}
//       <ScrollView showsVerticalScrollIndicator={true}>
//         {/* la partie du haut ( "header") */}
//         <View style={styles.bgHeader}>
//           <View style={{flex: 1}}>
//             <Text style={styles.headerTitle}>
//               <Image style={styles.tinyLogo} source={require('./images/FlipIt.png')}/>
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//       {/* la partie du bas mais prend toute la page ... */}
//       <Text style={{fontSize:22, position:'absolute', top:190, left:30, color:'#237B7B'}}>Votre Liste</Text>
//       <View style={styles.cardContainer}>
//         <View>
//         <Text style={styles.textCard}>Vous n'avez pas de liste pour le moment</Text>
//         </View>
//         <TouchableOpacity style={styles.startBtn} onPress={next}>
//           <Text style={styles.startText}>Créer</Text>
//         </TouchableOpacity>        
//       </View>
//       <Text style={{fontSize:22, fontWeight:'normal',position:'absolute', top:426, left:30, color:'#237B7B'}}>Nos sélections</Text>
//       <View style={styles.container}>
//         <LinearGradient 
//           colors={['#00A2E8', '#fff']} 
//           style={styles.gradient} 
//         />
//         <FlatList style={styles.flatList}
//           data={DATA}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   bgHeader:{ //partie du haut / header
//     backgroundColor: '#DAF0FA',
//     height: 180,
//     paddingHorizontal: 20,
//     borderBottomStartRadius:40,
//     borderBottomEndRadius:40
//   },
//   tinyLogo: {
//     width: 110,
//     height: 60,
//   },
//   headerTitle: {
//     color: 'white',
//     fontSize: 50,
//     height:80,
//     alignSelf:'center',
//     marginTop:60    
//   },
//   areaView:{ //partie du bas
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   cardContainer:{
//     position:'absolute',
//     top:230,
//     alignSelf:'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '85%',
//     height:'20%',
//     borderRadius: 20,
//     borderWidth: 0.5,
//     borderColor: '#78909C',
//     padding: 5
//   },
//   startBtn:{
//     width:'40%',
//     height:'28%',
//     padding:8,
//     borderRadius:20,
//     alignItems:"center",
//     marginTop:19,
//     bottom:3,
//     backgroundColor: '#DAF0FA',

//   },
//   startText:{
//       color:'#78909C',
//       fontSize:18,
//   },
//   container: {
//     flex: 1.5,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   flatList:{
//       marginTop:10,
//       margin:5,
//       width:'100%',
//       height:'100%'
//   },
//   item: {
//     backgroundColor: '#DAF0FA', //e6eeff
//     padding: 28,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius:20,
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.40,
//     shadowRadius: 1.41,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 20,
//   }
// });
