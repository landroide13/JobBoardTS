import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, } from '@react-navigation/drawer';
import Main from '../screens/Main';
import History from '../screens/History';
import ProfileStack from './ProfileStack';
import { styles } from '../themes/AppThemes';

const Drawer = createDrawerNavigator();

const DrawerMain = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
          headerShown: false
      }}
      drawerContent={(props) => <InternalMenu {...props} />}
    >
      <Drawer.Screen name="Main" component={ProfileStack} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  )
}

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
  return(
    <DrawerContentScrollView>
      <View style={ styles.menuContainer }>
        <TouchableOpacity 
          style={ styles.menuBtn }
          onPress={() => navigation.navigate('Main')}
        >
          <View style={ styles.drawerItemContainer }>
            {/* <Text><Icon name="outdent" size={25} color='black'  /></Text>     */}
            <Text style={{ ...styles.menuText, marginLeft: 8 }}>Main</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={ styles.menuBtn }
          onPress={() => navigation.navigate('History')}
        >
          <View style={ styles.drawerItemContainer }>
            {/* <Text><Icon name="sliders" size={25} color='black'  /></Text>      */}
            <Text style={{ ...styles.menuText, marginLeft: 8 }}>History</Text>
          </View>    
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )

}

export default DrawerMain
