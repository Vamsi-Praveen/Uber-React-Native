import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from '../components/navigateCard'
import RideOptionsCard from '../components/rideOptionsCard'

const CardNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='NavigateCard' component={NavigateCard} options={{ headerShown: false }} />
            <Stack.Screen name='RideCard' component={RideOptionsCard} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default CardNavigator