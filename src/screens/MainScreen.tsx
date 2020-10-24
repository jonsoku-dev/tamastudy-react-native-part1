import React, { FunctionComponent } from 'react'
import { View, Text } from 'react-native'

interface Props {
  logout: any
}

const MainScreen: FunctionComponent<Props> = ({ logout }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main Screen</Text>
    </View>
  )
}

export default MainScreen
