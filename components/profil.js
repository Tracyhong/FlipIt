import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import {useEffect, useState} from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

const Profil = ({navigation}) =>  {

  const deck = () => {
    navigation.navigate('Deck')   //modif redirection apres connexion
  }

  const deconnexion = () => {
    signOut(auth)
    .then((re)=>{
      console.log(auth.currentUser);
      navigation.navigate('Accueil');
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  const [user, setUser] = useState('');
  const [DATA, setData] = useState([]);

  const getDataList = async (user,liste) => {
    const cartes = collection(db, 'privee/'+user+'/Listes/' + liste + '/cartes');
    const carteSnapshot = await getDocs(cartes);
    let cards=[];
    carteSnapshot.forEach((carte) => {
      // console.log(carte.data().back);
      cards.push({front:carte.data().front, back:carte.data().back})
    })
    // console.log('cards');
    console.log(cards);
    return cards
  }

  useEffect(async() => {
    const u = auth.currentUser
    setUser(u);

    const colRef = collection(db, 'privee/'+u.uid+'/Listes');
    const listeSnapshot = await getDocs(colRef);
    let i = 1;
    let tabList = [];
    listeSnapshot.forEach((doc) => {

      var data=[]
      Promise.resolve(getDataList(u.uid,doc.id)).then(value=>{
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
      // tabList.push({id: i, title: doc.id})
      // i += 1;
    });
    // setData(tabList)
  }, []);

  // const createList = (name, front, back)=>{
  //   const newList = doc(db, 'privee', user.id, name)
  //   .doc(user.id)
  //   .collection(name)
  //   .doc(collection(db, 'privee/'+name))
  //   .set({"front": front, "back": back})
  // }

  return (
    <View style={styles.container}>
      <EvilIcons name="user" size={80} color="#00A2E8" />
      <Text style={{fontSize:20, color:"#00A2E8"}}>{user.email}</Text>
      <Text style={{paddingTop:30, fontSize:20, fontWeight:'bold' ,alignSelf:'center', color:'#00A2E8'}}>Mes listes</Text>
      <StatusBar style="auto" />
      {/* {console.log(DATA)} */}
            <FlatList style={styles.flatList}
            
                data={DATA}
                renderItem={({item}) => 
                <View style={styles.item}>
                  <TouchableOpacity onPress={() => {
              /* 1. Navigate to the Details route with params */
                    navigation.navigate('Deck', {
                      cards:item.cartes
                    });
                  }}>  
                    <Text style={styles.title}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              } 
            />
            <TouchableOpacity style={styles.logOutBtn} onPress={deconnexion}>
              <Text style={styles.logOutText}>SE DECONNECTER</Text>
            </TouchableOpacity>
    </View>
    
  );
}

export default Profil;

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
  logOutBtn:{
    height: 45,
    width:'80%',
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'#00A2E8',
    marginBottom: 45,
    marginTop: 20,
},
logOutText:{
  color: 'white',
  fontWeight: 'bold',
}
});
