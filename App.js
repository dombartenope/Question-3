import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Text,
  View,
  Button,
} from 'react-native';
import OneSignal from 'react-native-onesignal';

const Stack = createNativeStackNavigator();
let opened = false;

const HomeScreen = ({ navigation }) => {
  if (opened) {
    navigation.navigate('Second');
  }
  return (
    <View>
      <Text>Android Home</Text>
      </View>
  );
}

const SecondScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Android Second Page</Text>
    </View>
  );
} 


const App = () => {

  useEffect(() => {
    //OneSignal Init Code
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId("d28b0240-89c5-42d6-abcb-59edc4fa9bca");
  //END OneSignal Init Code

  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log("OneSignal: notification opened:", notification);
    opened = true;
    console.log(opened);
  });
}, [opened])

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
