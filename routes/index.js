import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Accueil from '../components/accueil';
import Profil from '../components/profil';
import Connexion from '../components/connexion';
import ListDeck from '../components/listDeck';
import Deck from '../components/deck';
import Inscription from '../components/inscription';

import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList, } from '@react-navigation/drawer';
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
        //pour enlever les trucs du menu mais ca fonctionne pas donc jai mis en com 
        // drawerContent={(props) => {
        //   const filteredProps = {
        //     ...props,
        //     state: {
        //       ...props.state,
        //       routeNames: props.state.routeNames.filter(
        //         // To hide single option
        //         // (routeName) => routeName !== 'HiddenPage1',
        //         // To hide multiple options you can add & condition
        //         (routeName) => {
        //           routeName !== 'Connexion'
        //           && routeName !== 'Inscription';
        //         },
        //       ),
        //       // routes: props.state.routes.filter(
        //       //   (route) =>
        //       //     route.name !== 'Connexion'
        //       //     && route.name !== 'Inscription',
        //       // ),
        //     },
        //   };
        //   return (
        //     <DrawerContentScrollView {...filteredProps}>
        //       <DrawerItemList {...filteredProps} />
        //     </DrawerContentScrollView>
        //   );
        // }}
        >
        {/* 
        headerShown:false //pour enlever le header
        swipeEdgeWidth: 0 // pour enlever le swipe 
        */}
        <Drawer.Screen options={{headerShown:false, swipeEdgeWidth: 0,}} name="Connexion" component={Connexion} />
        <Drawer.Screen options={{headerShown:false, swipeEdgeWidth: 0,}} name="Inscription" component={Inscription} />
        <Drawer.Screen options={{headerShown:false, swipeEdgeWidth: 0,}} name="Accueil" component={Accueil} />
        <Drawer.Screen name="Profil" component={Profil} />
        <Drawer.Screen name="ListDeck" component={ListDeck} />
        <Drawer.Screen name="Deck" component={Deck} />
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