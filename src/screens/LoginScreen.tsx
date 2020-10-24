import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'

const LoginScreen = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigation = useNavigation()

  const goToMainScreen = () => {
    navigation.navigate('Main')
  }

  const handleChangeEmail = (value: string) => {
    setEmail(value)
  }

  const handleChangePassword = (value: string) => {
    setPassword(value)
  }

  const handleSubmit = () => {
    // TODO
    // api -> email, password
    // ... ...
    if (!email || !password) {
      alert('아이디와 비밀번호를 입력해주세요. ')
      return
    }
    if (email && password) {
      goToMainScreen()
      return
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.logo}>
        <Text style={styles.logoTitle}>TAMASTUDY</Text>
        <Text style={styles.logoSubTitle}>React Native Study</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder={'Input your Email address...'}
          value={email}
          onChangeText={handleChangeEmail}
          autoCorrect={false}
          autoCapitalize={'none'}
          style={[styles.defaultInput, styles.emailInput]}
        />
        <TextInput
          placeholder={'Input your Password...'}
          value={password}
          onChangeText={handleChangePassword}
          autoCorrect={false}
          autoCapitalize={'none'}
          secureTextEntry
          style={[styles.defaultInput, styles.passwordInput]}
        />
        <TouchableOpacity onPress={() => alert('clicked!')}>
          <Text style={{ textAlign: 'right', color: '#fff' }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('clicked!')}>
          <Text style={{ textAlign: 'left', color: '#fff' }}>
            Don't have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: 'black',
  },
  // LOGO
  logo: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoTitle: {
    fontSize: 48,
    fontWeight: '700',
    margin: -10,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 4,
  },
  logoSubTitle: {
    fontSize: 14,
    color: '#fff',
  },
  // FORM
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  defaultInput: {
    padding: 16,
    backgroundColor: '#fff',
    borderColor: '#eaeaea',
    borderWidth: 1,
    marginBottom: 8,
    fontSize: 20,
    color: '#000',
  },
  emailInput: {},
  passwordInput: {},
  buttons: {
    flex: 1,
  },
  button: {
    backgroundColor: 'red',
    marginBottom: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    padding: 16,
    fontWeight: '600',
  },
})

export default LoginScreen
