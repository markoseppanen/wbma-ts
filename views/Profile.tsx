import { useContext } from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { containerStyle } from '../styles/mainStyles'
import { MainContext } from '../contexts/MainContext'

export const Profile = () => {
  const { setIsLoggedIn } = useContext(MainContext)

  const logout = async () => {
    setIsLoggedIn(false)
    await AsyncStorage.clear()
  }
  return (
    <SafeAreaView style={containerStyle.container}>
      <Text>Profile</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  )
}
