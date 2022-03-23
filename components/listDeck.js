import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function ListDeck({navigation}){
    const deck = () => {
        navigation.navigate('Deck')   //modif redirection apres connexion
    }
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
          <TouchableOpacity onPress={deck}>  
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        </View>
      );
      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={['#00A2E8', '#fff']} 
                style={styles.gradient} 
            />
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
        backgroundColor: '#fff', //e6eeff
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
      },
});
