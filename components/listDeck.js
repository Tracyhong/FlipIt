import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import {useEffect, useState} from 'react';

// const getDataList = async (liste) => {
//   const cartes = collection(db, 'public/' + liste + '/cartes');
//   const carteSnapshot = await getDocs(cartes);
//   carteSnapshot.forEach((carte) => {
//     console.log(carte.data());
//   })
// }

export default function ListDeck({navigation}) {
    
  const deck = () => {
    navigation.navigate('Deck')   //modif redirection apres connexion
  }

  const [DATA, setData] = useState([]);
  useEffect(async() => {
    const colRef = collection(db, 'public');
    const listeSnapshot = await getDocs(colRef);
    let i = 1;
    let tabList = [];
    listeSnapshot.forEach((doc) => {
      tabList.push({id: i, title: doc.id})
      i += 1;
    });
    setData(tabList)
  }, []);

  return (
    <View style={styles.container}>
      {/* {console.log(DATA)} */}
      <FlatList style={styles.flatList}
        data={DATA}
        renderItem={({item}) => 
          <View style={styles.item}>
            <TouchableOpacity onPress={deck}>  
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          </View>
      } 
      />
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
    flatList:{
        marginTop:10,
        margin:5,
        width:'100%',
        height:'100%'
    },
    item: {
        backgroundColor: '#DAF0FA', //e6eeff
        padding: 28,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.40,
        shadowRadius: 1.41,
        elevation: 5,
      },
      title: {
        fontSize: 20,
        color:'#00A2E8'
      },
});
