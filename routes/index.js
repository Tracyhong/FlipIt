import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Accueil from '../components/accueil';
import Profil from '../components/profil';
import Connexion from '../components/connexion';
import ListDeck from '../components/listDeck';
import Deck from '../components/deck';
import Inscription from '../components/inscription';
import About from '../components/about';


import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName="Accueil"
        screenOptions={{
          activeTintColor: '#00A2E8',
          itemStyle: {padding: 0},
        }}
        drawerContent={props => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem label="Logout" onPress={() => props.navigation.navigate("Accueil")} />
            </DrawerContentScrollView>
          )
        }}
        >
        {/* 
        headerShown:false //pour enlever le header
        swipeEdgeWidth: 0 // pour enlever le swipe 
        */}
        <Drawer.Screen options={{headerShown:false, swipeEdgeWidth: 0,drawerItemStyle: {display: "none"}}} name="Connexion" component={Connexion} />
        <Drawer.Screen options={{headerShown:false, swipeEdgeWidth: 0,drawerItemStyle: {display: "none"}}} name="Inscription" component={Inscription} />
        <Drawer.Screen options={{headerShown:false, swipeEdgeWidth: 0,drawerItemStyle: {display: "none"}}} name="Accueil" component={Accueil} />
        <Drawer.Screen name="Profil" component={Profil} />
        <Drawer.Screen name="ListDeck" component={ListDeck} />
        <Drawer.Screen name="A propos" component={About} />
        {/* modifier le name en fonction du deck */}
        <Drawer.Screen options={{drawerItemStyle: {display: "none"}}} name="Deck" component={Deck} /> 

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const screens = {
//     Connexion: {
//         screen: Connexion,
//         navigationOptions: { //pour enlever le header
//            //header: null,
//            headerShown:false
//           },
//     },
//     ListDeck:{
//         screen: ListDeck,
//         navigationOptions: {
//             // headerTitle: (
//             //     <Image style={{height:45, width:82, margin:'27%' }} source={require('../assets/Flip!t.png')}/>
//             // ),
//             headerTitle: () => <Image style={{height:45, width:82, margin:'27%' }} source={require('../assets/Flip!t.png')}/>
//           }
//     },
//     Deck:{
//         screen:Deck
//     },
    
//     Accueil: {
//         screen: Accueil
//     },
//     Profil: {
//         screen: Profil
//     },
// }

// const HomeStack = createStackNavigator(screens);

// export default createAppContainer(HomeStack);