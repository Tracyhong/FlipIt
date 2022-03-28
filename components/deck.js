import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import React from 'react';
import FlipCard from 'react-native-flip-card';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {useState,useEffect} from 'react';

export default function Deck({route}){
    //A FAIRE AVEC FIREBASE !!!!!!
    // const DATA  = [
    //     { front: '../assets/images/france.png',back: 'France'},
    //     { front: '../assets/images/allemagne.png', back: 'Allemagne'},
    //     { front: '../assets/images/japon.png', back: 'Japon'}
    // ];
    const { cards } = route.params; //recuperer la props envoyé par le onPress
    console.log(cards.length)
    console.log(cards)
    
    
    const [count, setCount] = useState(0);
    const [cardFront, setCardFront] = useState('');
    const [cardBack, setCardBack] = useState('');
    useEffect(() => {
        setCardFront(cards[count].front);
        setCardBack(cards[count].back);
      });
    const onPress = () => {
        if(count==cards.length-1){
            
            setCount(prevCount => prevCount = 0);
        }
        else {setCount(prevCount => prevCount + 1);}

        setCardFront(cards[count].front);
        setCardBack(cards[count].back);
    }

    return (
        <View style={styles.container}>
            <FlipCard 
                style={styles.flashcard}
                friction={8}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false}
                clickable={true}
                onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                {/* Face Side */}
                <View style={styles.card}>
                    <Text>{count+1}</Text>
                    <Text style={styles.cardText}>{cardFront}</Text>
                </View>
                {/* Back Side */}
                <View style={styles.card}>
                    <Text>{count+1}</Text>
                    <Text style={styles.cardText}>{cardBack}</Text>
                </View>
            </FlipCard>
            {/* <Text>Clic to flip ! (mais ca marche pas encore parce que jai rien fait encore j'en ai un peu marre donc si quelquun peut faire aussi ca serait tres cool merci :D  !)</Text>
           <Text style={styles.flashcard}>
               <Image style={styles.content} source={require('../assets/images/france.png')} /> 
           </Text>
           <Text>Pour l'instant ya que un drapeau de la france parce que jsais pas faire pour que ca soit dynamique et jai la flemme aussi ... et en plus le drapeau n'est pas responsive mdr</Text> */}
           <Text>Nombres de cartes : {cards.length}</Text>
           <TouchableOpacity style={styles.next} onPress={onPress}>  
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
        height: hp('20%'), // 70% of height device screen  !!!!!!!!! MAIS CA FONCTIONNE PAS 
        width: wp('80%'),   // 80% of width device screen
        margin: 12,
        borderWidth: 1,
        borderColor:'#BFBFC1',
        backgroundColor:'#FBFBFB',
        borderRadius:15,
        padding: 10,
    },
    card:{
        alignItems: 'center',
        flex:1,
        justifyContent:'center'
    },
    cardText:{
        fontSize:50,
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
    // content:{
    //     position:'absolute',
    //     height: 200, 
    //     width:200,
    // }
});
