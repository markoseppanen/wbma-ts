import { useContext, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { containerStyle } from '../styles/mainStyles'
import { MainContext } from '../contexts/MainContext'

export const Login = () => {
  const { setIsLoggedIn } = useContext(MainContext)

  const logIn = async () => {
    setIsLoggedIn(true)
    await AsyncStorage.setItem('userToken', 'abc')
  }

  const checkToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    if (userToken === 'abc') {
      setIsLoggedIn(true)
    }
  }

  useEffect(() => {
    checkToken()
  }, [checkToken])

  return (
    <View style={containerStyle.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn} />
    </View>
  )
}
