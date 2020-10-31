import React, { FunctionComponent } from 'react'
import { View, Text } from 'react-native'
import dayjs from 'dayjs'
import { AntDesign } from '@expo/vector-icons'
import relativeTime from 'dayjs/plugin/relativeTime'
import ko from 'dayjs/locale/ko'

dayjs.extend(relativeTime)
dayjs.locale(ko)

interface Props {}

const TodoCard: FunctionComponent<Props> = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
      }}
    >
      <View style={{ flex: 3, padding: 16 }}>
        <Text style={{ fontWeight: '900', fontSize: 24, marginBottom: 8 }}>
          청소하기
        </Text>
        <Text>{dayjs(new Date()).fromNow()}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AntDesign name="checkcircle" size={24} color="black" />
        {/* <AntDesign name="checkcircleo" size={24} color="black" /> */}
      </View>
    </View>
  )
}

export default TodoCard
