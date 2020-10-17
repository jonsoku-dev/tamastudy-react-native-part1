import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button, Platform } from 'react-native'

const LoginScreen = () => {

    const navigation = useNavigation()
  
    const goToMainScreen = () => {
      navigation.navigate('Main')
    }
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button title="LogIn" onPress={goToMainScreen} color={Platform.OS === 'android' ? 'blue' : 'green'}/>
      </View>
    );
  }

export default LoginScreen
