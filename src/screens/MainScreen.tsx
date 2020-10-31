import React, { FunctionComponent } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ko from 'dayjs/locale/ko'
import TodoCard from '../components/TodoCard'

dayjs.extend(relativeTime)
dayjs.locale(ko)

interface Props {
  logout: any
}

interface ITodo {
  id: string
  content: string
  completed: boolean
  createdAt: string
}

const MainScreen: FunctionComponent<Props> = ({ logout }) => {
  const [todoList, setTodoList] = React.useState<ITodo[]>([] as ITodo[])

  const [content, setContent] = React.useState('')

  const handleChangeContent = (value: string) => {
    setContent(value)
  }

  const addTodo = () => {
    if (!content) {
      return alert('할 일을 입력해주세요.')
    }
    const todo: ITodo = {
      id: new Date().getTime().toString(),
      content: content.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    }
    setTodoList([...todoList, todo])
    setContent('')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#606060' }}>
      <View
        style={{
          backgroundColor: 'blue',
          marginTop: Platform.OS === 'android' ? 30 : 0,
          position: 'relative',
        }}
      >
        <TextInput
          placeholder={'할 일을 입력해주세요. '}
          value={content}
          onChangeText={handleChangeContent}
          autoCorrect={false}
          autoCapitalize={'none'}
          style={[styles.defaultInput, styles.contentInput]}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: [{ translateY: -8 }],
            backgroundColor: 'black',
          }}
          onPress={addTodo}
        >
          <Text
            style={{
              padding: 8,
              color: 'white',
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: 'red' }}>
        {/* Card */}
        <TodoCard />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  defaultInput: {
    backgroundColor: '#fff',
    borderColor: '#eaeaea',
    borderWidth: 1,
    fontSize: 20,
    color: '#000',
    padding: 16,
  },
  contentInput: {},
})

export default MainScreen
