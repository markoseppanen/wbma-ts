import { View, Text, Button } from 'react-native'
import { containerStyle } from '../styles/mainStyles'
import { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'

export const Login = () => {
  const { setIsLoggedIn } = useContext(MainContext)

  const logIn = () => {
    setIsLoggedIn(true)
  }
  return (
    <View style={containerStyle.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn} />
    </View>
  )
}
