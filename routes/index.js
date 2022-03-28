import Accueil from '../components/accueil';
import Profil from '../components/profil';
import Connexion from '../components/connexion';
import ListDeck from '../components/listDeck';
import Deck from '../components/deck';
import Inscription from '../components/inscription';
import About from '../components/about';
import Ajout from '../components/ajout';
import {
  View,
  Image,
} from 'react-native';

import { Ionicons,MaterialCommunityIcons,EvilIcons } from '@expo/vector-icons';

import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName="Accueil"
        // screenOptions={{
        //   activeTintColor: '#00A2E8',
        //   // itemStyle: {padding: 0},
        // }}
        drawerContent={props => {
          return (
            <DrawerContentScrollView{...props}
            contentContainerStyle={{backgroundColor: '#00A2E8', padding:0}}>
            
              <View style={{flexDirection: 'row', height:150, justifyContent:'center', alignItems:'center'}}>
                <LinearGradient 
                colors={['#00A2E8', '#fff']} 
                style={{ width: '100%',
                height: '100%',padding: 20,zIndex:0,position:'absolute'}}
                />
                <Image
                  source={require('../assets/flipitLogoWhite.png')}
                  style={{height: 60, width:85,  marginRight:10, marginBottom:20}}
                />
                <Image
                  source={require('../assets/FlipItWhite.png')}
                  style={{height: 60, width: 110,  margin: 15}}
                />
              </View>
              <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                <DrawerItemList {...props} />
              </View>
              {/*
                 <DrawerItem style={{backgroundColor:'#fff', width:'100%', height:'100%'}} label="Déconnexion" onPress={() => props.navigation.navigate("Accueil")} />
            */}
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
        <Drawer.Screen options={{headerShown:false, swipeEdgeWidth: 0,drawerItemStyle: {display: "none"}}} name="Ajout" component={Ajout} />
        <Drawer.Screen options={{drawerIcon: () => (<EvilIcons name="user" size={27} color="black" /> )}} name="Profil" component={Profil} />
        <Drawer.Screen options={{drawerIcon: () => (<MaterialCommunityIcons name="cards-outline" size={24} color="black" /> )}} name="ListDeck" component={ListDeck} />
        <Drawer.Screen options={{drawerIcon: () => (<Ionicons name="information-circle-outline" size={24} color="black" /> )}}name="A propos" component={About} />
        <Drawer.Screen options={{headerShown:false, swipeEdgeWidth: 0, drawerIcon: () => (<Ionicons name="power" size={24} color="#f05454" />)}} name="Déconnexion" component={Accueil} />
        {/* modifier le name en fonction du deck */}
        <Drawer.Screen options={{drawerItemStyle: {display: "none"}}} name="Deck" component={Deck} /> 

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
