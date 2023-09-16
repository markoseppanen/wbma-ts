import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home } from '../views/Home'
import { Login } from '../views/Login'
import { Profile } from '../views/Profile'

import { Single } from '../views/Single'

import { NavigatorStyle } from '../styles/navigatorStyle'
import { MediaFile } from '../types/Media'
import { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'

export type RootStackParamList = {
  Tabs: undefined
  Single: { singleMedia: MediaFile }
  Login: undefined
}

export type BottamTabParamList = {
  Home: undefined
  Profile: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<BottamTabParamList>()

const TabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
)

const StackScreen = () => {
  const { isLoggedIn } = useContext(MainContext)
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Tabs"
            component={TabScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Single" component={Single} />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  )
}

export const Navigator = () => {
  return (
    <NavigationContainer theme={NavigatorStyle}>
      <StackScreen />
    </NavigationContainer>
  )
}
