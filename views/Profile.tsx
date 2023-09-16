import { Button, SafeAreaView, Text } from 'react-native'
import { containerStyle } from '../styles/mainStyles'
import { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'

export const Profile = () => {
  const { setIsLoggedIn } = useContext(MainContext)

  const logout = () => {
    setIsLoggedIn(false)
  }
  return (
    <SafeAreaView style={containerStyle.container}>
      <Text>Profile</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  )
}
