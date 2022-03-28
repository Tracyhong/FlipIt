import { StyleSheet, Text, View, TextInput,TouchableOpacity, Modal, FlatList  } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { addDoc, collection, updateDoc, deleteField, setDoc, doc } from "firebase/firestore/lite";
import { auth } from '../firebase';
import { db } from '../firebase';

class Ajout extends React.Component {
  state = {
    titre: '',
    Cartes: [],
    front: '',
    back: '',
    open: false,
    id: 0,
  }

  addCarte =()=> {
    if(this.state.front === '' || this.state.back === ''){
      return;
    }
    else {
      let carte = {
        id: this.state.id,
        front: this.state.front,
        back: this.state.back,
      };
      this.setState({Cartes: [...this.state.Cartes, carte]});
      this.setState({front: ''});
      this.setState({back: ''});
      this.setState({id: this.state.id + 1})
    }
  }

  deleteCarte =(id)=>{
    var array = [...this.state.Cartes];
    var newArray = array.filter((item) => item.id !== id);
    this.setState({Cartes: newArray});
  }

  addList = async()=> {
    if(this.state.titre === '' || this.state.Cartes == ''){
      return;
    }
    var path = 'privee/' + auth.currentUser.uid + '/Listes';
    await setDoc(doc(db, path, this.state.titre), {
      titre: this.state.titre
    });
    this.state.Cartes.map(async(carte) => {
      await addDoc(collection(db, path+ '/' + this.state.titre + '/cartes'), {
        front: carte.front,
        back: carte.back,
      });
    })
    const docRef = doc(db, path, this.state.titre);
    await updateDoc(docRef, {
      titre: deleteField()
    });
    this.setState({Cartes: []});
    this.setState({titre: ''});
  }

render(){

  const open=()=>{
    this.setState({open: true})
  }

  const close=()=>{
    this.setState({open: false})
  }

  const profil=()=>{
    this.props.navigation.navigate('Profil')
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        editable
        maxLength={50}
        placeholder='Titre'
        autoCapitalize='none'
        value={this.state.titre}
        onChangeText={text => this.setState({titre: text})}
      />
      <FlatList style={styles.list}
        data={this.state.Cartes}
        renderItem={({item}) => 
          <View style={styles.item}>
              <TouchableOpacity style={styles.deleteBtn} onPress={()=>this.deleteCarte(item.id)}>
                <Text style={styles.deleteText}>X</Text>
              </TouchableOpacity>
              <Text style={{color: '#00A2E8'}}>{item.front}</Text>
              <Text style={{color: '#00A2E8'}}>{item.back}</Text>
          </View>
        } 
      />
      <TouchableOpacity style={styles.loginBtn} onPress={this.addList}>
        <Text style={styles.loginText}>Créer la liste</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={open}>
        <Text style={styles.loginText}>Ajouter une carte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={profil}>
        <Text style={styles.loginText}>Annuler</Text>
      </TouchableOpacity>

      <Modal transparent visible={this.state.open}>
        <View style={styles.modalBackGround}>
          <View style={styles.modalContainer}>
            <TextInput style={styles.modalInput}
              editable
              maxLength={50}
              placeholder='Front'
              autoCapitalize='none'
              value={this.state.front}
              onChangeText={text => this.setState({front:text})}
            />
            <TextInput style={styles.modalInput}
              editable
              maxLength={50}
              placeholder='Back'
              autoCapitalize='none'
              value={this.state.back}
              onChangeText={text => this.setState({back:text})}
            />
            <TouchableOpacity style={styles.modalBtn} onPress={this.addCarte}>
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
}

export default Ajout;

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
});
