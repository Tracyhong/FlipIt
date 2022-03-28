import { StyleSheet, Text, View, TextInput,TouchableOpacity, Modal, FlatList  } from 'react-native';
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { addDoc, collection, updateDoc, deleteField, setDoc, doc, getDocs, deleteDoc } from "firebase/firestore/lite";
import { auth } from '../firebase';
import { db } from '../firebase';

const Modifier =({navigation, route})=> {

  const [titre, setTitre] = useState(route.params.titre)
  const [DATA, setData] = useState([]);
  const [id, setId] = useState(0);
  const [openTitle, setOpenTitle] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  useEffect(async() => {
    const user = auth.currentUser
    const colRef = collection(db, 'privee/'+user.uid+'/Listes/' + route.params.titre + '/cartes');
    const listeSnapshot = await getDocs(colRef);
    let tabList = [];
    listeSnapshot.forEach((doc) => {
        tabList.push({id: doc.id, front: doc.data().front, back:doc.data().back}) //
    });
    setData(tabList)
  }, []);


  const addCarte =()=> {
    if(front === '' || back === ''){
      return;
    }
    else {
      let carte = {
        id: id,
        front: front,
        back: back,
      };
      setData([...DATA, carte]);
      setFront('');
      setBack('');
      setId(id + 1);
    }
  }

  const deleteCarte =(id)=>{
    var array = [...DATA];
    var newArray = array.filter((item) => item.id !== id);
    setData(newArray);
  }

  const modifier = async()=> {
    if(titre === '' || DATA == ''){
      return;
    }
    var user = auth.currentUser
    if(titre === route.params.titre){ // si le nom de la liste ne change pas
        var path = 'privee/' + user.uid + '/Listes/' + titre + '/cartes';
        // supprimer les cartes existantes
        const colRef = collection(db, path);
        const listeSnapshot = await getDocs(colRef);
        listeSnapshot.forEach(async(document) => {
          await deleteDoc(doc(db, "privee/"+user.uid+'/Listes/'+ titre + '/cartes', document.id));
        });

        // remplacer par les nouvelles cartes
        for(let carte of DATA) {
            await addDoc(collection(db, path), {
                front: carte.front,
                back: carte.back,
            });
        }
        console.log(DATA);
    }
    else { // si le nom de la liste change
        var path = 'privee/' + user.uid + '/Listes/' + route.params.titre + '/cartes';
        // supprimer la liste
        const colRef = collection(db, path);
        const listeSnapshot = await getDocs(colRef);
        listeSnapshot.forEach(async(document) => {
          await deleteDoc(doc(db, path, document.id));
        });
        await deleteDoc(doc(db, "privee/"+user.uid+'/Listes', route.params.titre));

        // créer une nouvelle liste avec les nouvelles cartes
        var newPath = 'privee/' + user.uid + '/Listes';
        await setDoc(doc(db, newPath, titre), {
          titre: titre
        });

        for(let carte of DATA) {
            await addDoc(collection(db, newPath+ '/' + titre + '/cartes'), {
                front: carte.front,
                back: carte.back,
            });
        }
        
        const docRef = doc(db, newPath, titre);
        await updateDoc(docRef, {
            titre: deleteField()
        });
    }
    setData([]);
    setTitre('');
  }

  const open=()=>{
    setOpenCard(true)
  }

  const close=()=>{
    setOpenCard(false)
  }

  const openModal=()=>{
    setOpenTitle(true)
  }

  const closeModal=()=>{
    setOpenTitle(false)
  }

  const profil=()=>{
    navigation.navigate('Profil')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>{titre}</Text>
      <TouchableOpacity style={styles.modifBtn} onPress={openModal}>
        <Text style={styles.loginText}>Modifier</Text>
      </TouchableOpacity>
      
      <Modal transparent visible={openTitle}>
        <View style={styles.modalBackGround}>
          <View style={styles.modalContainer}>
            <TextInput style={styles.modalInput}
              editable
              maxLength={50}
              placeholder='Titre'
              autoCapitalize='none'
              value={titre}
              onChangeText={text => setTitre(text)}
            />
            <TouchableOpacity style={styles.modalBtn} onPress={closeModal}>
              <Text style={styles.loginText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <FlatList style={styles.list}
        data={DATA}
        renderItem={({item}) => 
          <View style={styles.item}>
              <TouchableOpacity style={styles.deleteBtn} onPress={()=>deleteCarte(item.id)}>
                <Text style={styles.deleteText}>X</Text>
              </TouchableOpacity>
              <Text style={{color: '#00A2E8'}}>{item.front}</Text>
              <Text style={{color: '#00A2E8'}}>{item.back}</Text>
          </View>
        } 
      />
      <TouchableOpacity style={styles.loginBtn} onPress={modifier}>
        <Text style={styles.loginText}>Modifier la liste</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={open}>
        <Text style={styles.loginText}>Ajouter une carte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={profil}>
        <Text style={styles.loginText}>Annuler</Text>
      </TouchableOpacity>

      <Modal transparent visible={openCard}>
        <View style={styles.modalBackGround}>
          <View style={styles.modalContainer}>
            <TextInput style={styles.modalInput}
              editable
              maxLength={50}
              placeholder='Front'
              autoCapitalize='none'
              value={front}
              onChangeText={text => setFront(text)}
            />
            <TextInput style={styles.modalInput}
              editable
              maxLength={50}
              placeholder='Back'
              autoCapitalize='none'
              value={back}
              onChangeText={text => setBack(text)}
            />
            <TouchableOpacity style={styles.modalBtn} onPress={addCarte}>
              <Text style={styles.loginText}>Ajouter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalBtn} onPress={close}>
              <Text style={styles.loginText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Modifier;

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
    position: 'absolute',
    top: 50,
    height: 40,
    width:'80%',
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
      margin: 5
  },
  loginText:{
    color: 'white',
    fontWeight: 'bold',
  },
  modalBackGround:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer:{
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  modalBtn:{
    height: 40,
    width:'100%',
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'#00A2E8',
    margin: 5
  },
  modalInput: {
    height: 40,
    width:'100%',
    margin: 5,
    borderWidth: 1,
    borderColor:'#BFBFC1',
    backgroundColor:'#FBFBFB',
    borderRadius:15,
    padding: 10,
  },
  list: {
    marginTop: 100,
    width: '80%'
  },
  item:{
    alignItems: 'center',
    backgroundColor: '#DAF0FA',
    borderRadius: 25,
    paddingVertical: 10,
    marginBottom: 5,
  },
  deleteBtn:{
    position: 'absolute',
    right: 10,
    height: '100%',
    width: 20,
    borderRadius:25,
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor:'rgba(0,0,0,0)',
},
deleteText:{
  color: 'tomato',
  fontWeight: 'bold',
},
titre: {
    position: 'absolute',
    top: 50,
    height: 31,
    left: 40,
    width: '55%',
    borderWidth: 1,
    borderColor:'#BFBFC1',
    backgroundColor:'#FBFBFB',
    borderRadius:15,
    textAlign: 'center',
    textAlignVertical: 'center',
},
modifBtn: {
    position: 'absolute',
    top: 50,
    right: 10,
    height: 30,
    width: '30%',
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'#00A2E8',
},
});
