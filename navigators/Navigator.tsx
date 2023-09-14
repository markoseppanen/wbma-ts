import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home } from '../views/Home'
import { Profile } from '../views/Profile'
import { NavigatorStyle } from '../styles/navigatorStyle'
import { Single } from '../views/Single'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
)

const StackScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Tabs" component={TabScreen} />
    <Stack.Screen name="Single" component={Single} />
  </Stack.Navigator>
)

export const Navigator = () => {
  return (
    <NavigationContainer theme={NavigatorStyle}>
      <StackScreen />
    </NavigationContainer>
  )
}
