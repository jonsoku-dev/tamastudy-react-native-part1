import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import { Text, TouchableOpacity } from 'react-native'

const Stack = createStackNavigator();

const defaultStackOptions = {
  cardStyle: {
    backgroundColor: '#FFF',
  },
  headerStyle: {
    backgroundColor: 'green',
  },
  headerTintColor: 'white',
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} 
          options={{
            ...defaultStackOptions,
            headerTitle : "로그인 페이지",
          }}
        />
        <Stack.Screen name="Main" component={MainScreen} 
          options={{
            ...defaultStackOptions,
            headerTitle : "메인 페이지",
            headerRight: () => <Text>아이콘</Text>
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
