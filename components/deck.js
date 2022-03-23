import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function Deck(){

 
    //A FAIRE AVEC FIREBASE !!!!!!
    const DATA  = [
        { front: '../assets/images/france.png',back: 'France'},
        { front: '../assets/images/allemagne.png', back: 'Allemagne'},
        { front: '../assets/images/japon.png', back: 'Japon'}
    ];

    // counter=()=>{

    // }
    //const id = 2;
    //const index = DATA.map(function(x) {return x.id; }).indexOf(id);
  
    // DATA[index].name = "Mehul Bagada";


    return (
        <View style={styles.container}>
            <Text>Clic to flip ! (mais ca marche pas encore parce que jai rien fait encore j'en ai un peu marre donc si quelquun peut faire aussi ca serait tres cool merci :D  !)</Text>
           <Text style={styles.flashcard}>
               <Image style={styles.content} source={require('../assets/images/france.png')} /> 
           </Text>
           <Text>Pour l'instant ya que un drapeau de la france parce que jsais pas faire pour que ca soit dynamique et jai la flemme aussi ... et en plus le drapeau n'est pas responsive mdr</Text>
           <TouchableOpacity style={styles.next} /*onPress={}*/>  
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
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
    flashcard:{
        height: '60%',
        width:'80%',
        margin: 12,
        borderWidth: 1,
        borderColor:'#BFBFC1',
        backgroundColor:'#FBFBFB',
        borderRadius:15,
        padding: 10,
        fontSize:12,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        //textAlignVertical:'center',
    },
    next:{
      height: 40,
      width:'80%',
      borderRadius:25,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'#00A2E8',
      marginBottom: 30,
      marginTop: 30,
    },
    buttonText:{
        fontWeight: 'bold',
        color:'#fff',
    },
    content:{
        position:'absolute',
        height: 200, 
        width:200,
    }
});
