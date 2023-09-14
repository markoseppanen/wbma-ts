import { SafeAreaView } from 'react-native'
import { List } from '../components/List'
import { containerStyle } from '../styles/mainStyles'

export const Home = () => (
  <SafeAreaView style={containerStyle.container}>
    <List />
  </SafeAreaView>
)
