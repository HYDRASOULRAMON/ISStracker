import React from 'react';

//import { SafeAreaView } from 'react-native-web';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocation';
import MeteorScreen from './screens/Meteors';

const stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="home">
        <stack.Screen name="home" component={HomeScreen} />
        <stack.Screen name="Meteors" component={MeteorScreen} />
        <stack.Screen name="IssLocation" component={IssLocationScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}
