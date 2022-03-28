import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import {useEffect, useState} from 'react';



export default function ListDeck({navigation}) {
    
  const deck = () => {
    navigation.navigate('Deck')   //modif redirection apres connexion
  }
  const getDataList = async (liste) => {
    const cartes = collection(db, 'public/' + liste + '/cartes');
    const carteSnapshot = await getDocs(cartes);
    let cards=[];
    carteSnapshot.forEach((carte) => {
      // console.log(carte.data().back);
      cards.push({front:carte.data().front, back:carte.data().back})
    })
    // console.log('cards');
    // console.log(cards);
    return cards
  }

  const [DATA, setData] = useState([]);
  useEffect(async() => {
    const colRef = collection(db, 'public');
    const listeSnapshot = await getDocs(colRef);
    let i = 1;
    let tabList = [];
    listeSnapshot.forEach((doc) => { 
      
      // tabListCard=getDataList(doc.id)
      // console.log(tabListCard)

      var data=[]
      Promise.resolve(getDataList(doc.id)).then(value=>{
      // data = value;
      // console.log('value:',value)
        value.forEach((v)=>{
          data.push({front:v.front,back:v.back})
          // console.log(data)
        }) 
        // console.log(data) //data existe 
        tabList.push({id: i, title: doc.id, cartes:data}) //
        i += 1;
    setData(tabList)
      }) 
      // console.log(data) //data existe plus
       
    });
    // console.log(DATA)  
  }, []); 
  return (
    <View style={styles.container}>
      {/* {console.log(DATA)} */}
      <FlatList style={styles.flatList}
        data={DATA}
        renderItem={({item}) => 
          <View style={styles.item}> 
            {/* <TouchableOpacity  onPress={(deck, item={item})}>   */}

            <TouchableOpacity   onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('Deck', {
                cards:item.cartes 
                // props pour envoyer la liste des cartes du deck 
              });
            }}
            >

           
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
