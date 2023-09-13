import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'

import { List } from './components/List'
import { containerStyle } from './styles/mainStyles'

const App = () => {
  return (
    <SafeAreaView style={containerStyle.container}>
      <List />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

export default App
