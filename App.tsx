import { StatusBar } from 'expo-status-bar'

import { Navigator } from './navigators/Navigator'
import { MainProvider } from './contexts/MainContext'

const App = () => (
  <>
    <MainProvider>
      <Navigator />
    </MainProvider>
    <StatusBar style="auto" />
  </>
)

export default App
