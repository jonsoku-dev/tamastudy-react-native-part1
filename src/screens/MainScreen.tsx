import React, { FunctionComponent, useEffect } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ko from 'dayjs/locale/ko'
import TodoCard from '../components/TodoCard'
import EmptyTodoList from '../components/EmptyTodoList'
import axios from 'axios'

dayjs.extend(relativeTime)
dayjs.locale(ko)

interface Props {
  logout: any
}

export interface ITodo {
  id: string
  body: string
  completed: boolean
  createdAt: string
  updatedAt: string
}

const MainScreen: FunctionComponent<Props> = ({ logout }) => {
  const [todoList, setTodoList] = React.useState<ITodo[]>([] as ITodo[])
  const [body, setBody] = React.useState('')

  const handleChangeBody = (value: string) => {
    setBody(value)
  }

  const addTodo = () => {
    if (!body) {
      return alert('할 일을 입력해주세요.')
    }
    const todo: ITodo = {
      id: new Date().getTime().toString(),
      body: body.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setTodoList([...todoList, todo])
    setBody('')
  }

  const onClickCompleteTodo = ({
    id,
    completed,
  }: {
    id: string
    completed: boolean
  }) => () => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !completed } : todo
    )
    setTodoList(newTodoList)
    // + axios post
  }

  const getTodoList = async () => {
    try {
      const response = await axios.get(
        'https://tamastudy-todo-api.herokuapp.com/api/todo'
      )
      setTodoList(response.data.result)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getTodoList()
  }, [])

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
          value={body}
          onChangeText={handleChangeBody}
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
      <View>
        <FlatList
          data={todoList}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item }) => (
            <TodoCard
              id={item.id}
              completed={item.completed}
              content={item.body}
              createdAt={item.createdAt}
              onClickCompleteTodo={onClickCompleteTodo}
            />
          )}
          ListEmptyComponent={() => <EmptyTodoList />}
        />
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
    height: 80,
  },
  contentInput: {},
})

export default MainScreen
