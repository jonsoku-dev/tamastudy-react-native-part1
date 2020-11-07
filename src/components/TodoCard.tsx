import React, { FunctionComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import dayjs from 'dayjs'
import { AntDesign } from '@expo/vector-icons'
import relativeTime from 'dayjs/plugin/relativeTime'
import ko from 'dayjs/locale/ko'
import Swipeout from 'react-native-swipeout'
import { ITodo } from '../screens/MainScreen'
import { TextInput } from 'react-native-gesture-handler'

dayjs.extend(relativeTime)
dayjs.locale(ko)

interface Props {
  id: string
  content: string
  completed: boolean
  createdAt: string
  onClickCompleteTodo: any
  editTodo: any
  onClickDeleteButton: any
  editLoading: boolean
}

const TodoCard: FunctionComponent<Props> = ({
  id,
  content,
  completed,
  createdAt,
  onClickCompleteTodo,
  editTodo,
  onClickDeleteButton,
  editLoading,
}) => {
  const [editMode, setEditMode] = React.useState(false)
  const [editBody, setEditBody] = React.useState(content)

  const handleChangeEditBody = (value: string) => {
    setEditBody(value)
  }

  const onClickEdit = async () => {
    await editTodo({ id, body: editBody, completed })
    setEditMode(false)
  }

  const swipeoutButtons = [
    {
      text: 'Edit',
      backgroundColor: 'green',
      component: (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <AntDesign name="edit" size={24} color="white" />
          <Text style={{ color: 'white', marginTop: 4 }}>Edit</Text>
        </View>
      ),
      onPress: () => setEditMode(true),
    },
    {
      text: 'Delete',
      backgroundColor: 'red',
      component: (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <AntDesign name="delete" size={24} color="white" />
          <Text style={{ color: 'white', marginTop: 4 }}>Delete</Text>
        </View>
      ),
      onPress: onClickDeleteButton(id),
    },
  ]

  if (editMode) {
    return (
      <View
        style={{
          marginTop: 16,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{ flex: 1, marginRight: 'auto', padding: 16 }}>
          <TextInput
            style={{
              padding: 16,
              borderWidth: 1,
              borderColor: 'black',
            }}
            value={editBody}
            onChangeText={handleChangeEditBody}
          />
        </View>
        <TouchableOpacity
          onPress={onClickEdit}
          style={{ padding: 16, marginRight: 8 }}
        >
          {editLoading ? (
            <AntDesign name="loading1" size={24} color="black" />
          ) : (
            <AntDesign name="edit" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <Swipeout autoClose right={swipeoutButtons} style={{ marginTop: 16 }}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 3, padding: 16 }}>
          <Text style={{ fontWeight: '900', fontSize: 24, marginBottom: 8 }}>
            {content}
          </Text>
          <Text>{dayjs(createdAt).fromNow()}</Text>
        </View>
        <TouchableOpacity
          onPress={onClickCompleteTodo({ id, completed })}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          {completed ? (
            <AntDesign name="checkcircle" size={24} color="black" />
          ) : (
            <AntDesign name="checkcircleo" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </Swipeout>
  )
}

export default TodoCard
