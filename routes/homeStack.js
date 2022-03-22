import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Accueil from '../components/accueil';
import Profil from '../components/profil';
import Connexion from '../components/connexion';
import ListDeck from '../components/listDeck';
import Deck from '../components/deck';
import { Image } from 'react-native';


const screens = {
    Connexion: {
        screen: Connexion,
        navigationOptions: { //pour enlever le header
           //header: null,
           headerShown:false
          },
    },
    ListDeck:{
        screen: ListDeck,
        navigationOptions: {
            // headerTitle: (
            //     <Image style={{height:45, width:82, margin:'27%' }} source={require('../assets/Flip!t.png')}/>
            // ),
            headerTitle: () => <Image style={{height:45, width:82, margin:'27%' }} source={require('../assets/Flip!t.png')}/>
          }
    },
    Deck:{
        screen:Deck
    },
    
    Accueil: {
        screen: Accueil
    },
    Profil: {
        screen: Profil
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);