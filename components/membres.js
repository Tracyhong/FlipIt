import React from 'react';
import { View, Text, Image} from 'react-native';

class membres extends React.Component{
  render() {
    const{ nom, prenom, image } = this.props.membres
    return(
        <View style={{
            width:'48%', 
            backgroundColor: '#DAF0FA',
            alignItems:'center', 
            alignSelf:'center',
            marginHorizontal: '1%', 
            marginVertical:'1%', 
            borderRadius:2,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 0.5,
            elevation: 4,
            }}>
          <Image style={{borderRadius:56, width:100, height:130}} source={image}/>
          <Text style={{textAlign:'center', fontWeight:"bold", color:'#00A2E8'}}>{nom}</Text>
          <Text>{prenom}</Text>
        </View>
    );
  };
};

export default membres;
