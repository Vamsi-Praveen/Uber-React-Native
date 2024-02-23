import { Provider } from 'react-redux'
import AppNavigator from './src/navigation/AppNavigator'
import { store } from './src/redux/store'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
      <StatusBar style='dark' />
    </Provider>
  )
}

export default App