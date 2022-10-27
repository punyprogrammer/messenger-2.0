import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons"
import ChatListScreen from '../screens/ChatListScreen';
import ChatSettingsScreen from '../screens/ChatSettingsScreen';


const Stack = createStackNavigator();
const Tab=createBottomTabNavigator();
const TabNavigator=()=>{
  return(
     <Tab.Navigator screenOptions={{headerTitle:''}}>
      <Tab.Screen name="ChatList" component={ChatListScreen} options={{
         headerTitleStyle:{textAlign:'center'},
         tabBarIcon:({color,size})=><Ionicons size={size} name="chatbubbles-outline" color={color}/>
      }}/>
      <Tab.Screen name="ChatSettings" component={ChatSettingsScreen}
      options={{ tabBarIcon:({color,size})=><Ionicons size={size} name="settings-outline" color={color}/>}}/>
     </Tab.Navigator>
  )
}
const MainNavigator = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name="Home" component={TabNavigator} options={{
              gestureEnabled:true,
              headerShown:false,
              headerTitleStyle:{textAlign:'center',color:'red',fontSize:19}
            }} />
            <Stack.Screen name="Settings" component={ChatSettingsScreen} options={{
              headerTitle: "Settings",
              gestureEnabled:true,
              headerBackTitle: "Back"}}
 />
          </Stack.Navigator>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})