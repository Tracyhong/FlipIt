import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
<<<<<<< HEAD
import {useEffect, useState} from 'react';
=======
import { EvilIcons } from '@expo/vector-icons';
>>>>>>> 3d59ac444efd9b73455f41dac2a08b169fa159e1

const Profil = ({navigation}) =>  {
  const DATA = [
    {
      id: 'Pays',
      title: 'Drapeaux',
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
        <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

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
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <View style={styles.container}>
      <EvilIcons name="user" size={80} color="#237B7B" />
      <Text style={{fontSize:20, color:"#237B7B"}}>{user.email}</Text>
      <Text style={{paddingTop:30, fontSize:20, fontWeight:'bold' ,alignSelf:'center', color:'#237B7B'}}>Mes listes</Text>
      <StatusBar style="auto" />
            <FlatList style={styles.flatList}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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
gradient: {
    width: '100%',
    height: '100%',
    position:'absolute',
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
    color:'#237B7B'
  },
  logOutBtn:{
    height: 45,
    width:'80%',
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'#237B7B',
    marginBottom: 45,
    marginTop: 20,
},
logOutText:{
  color: 'white',
  fontWeight: 'bold',
}
});
