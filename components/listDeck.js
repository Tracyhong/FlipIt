import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import React from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import {useEffect, useState } from 'react';

export default function ListDeck () {
  const deck = ({navigation}) => {
    navigation.navigate('Deck')   //modif redirection apres connexion
  }

  // const [DATA, updateData] = useState([]);
  // useEffect(() => {
  //   const getData = async ()=>{
  //     const listes = collection(db, 'public');
  //     const listeSnapshot = await getDocs(listes);
  //     let id = 1;
  //     listeSnapshot.forEach((doc) => {
  //       let nom = doc.id;
  //       updateData([...DATA, ...{id: id, title: nom}])
  //       id += 1;
  //     });
  //     getData
  //   }
  // }, []);

  const DATA = [
    {
      id: 1,
      title: 'Test',
    },
    {
      id: 'Maths',
      title: 'Calculs',
    },
    {
      id: 'Animaux',
      title: 'Animaux/Pets',
    },
  ];
    
  const Item = ({ title }) => ( 
    <View style={styles.item}>
      <TouchableOpacity onPress={getData}>  
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const getData = async ()=>{
    const listes = collection(db, 'public');
    const listeSnapshot = await getDocs(listes);
    let id = 1;
    listeSnapshot.forEach((doc) => {
      //let nom = doc.id;
      //updateData([...DATA, ...{id: id, title: nom}])
      //id += 1;
      console.log(doc.id);
      getDataList(doc.id);
    });
  }

  const getDataList = async (liste) => {
    const cartes = collection(db, 'public/' + liste + '/cartes');
    const carteSnapshot = await getDocs(cartes);
    carteSnapshot.forEach((carte) => {
      console.log(carte.data());
    })
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.flatList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
