import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Accueil from '../components/accueil';
import Profil from '../components/profil';
import Connexion from '../components/connexion';

const screens = {
    Accueil: {
        screen: Accueil
    },
    Profil: {
        screen: Profil
    },
    Connexion: {
        screen: Connexion
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);