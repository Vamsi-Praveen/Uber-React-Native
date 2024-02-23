import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MapComponent from '../components/mapView'
import CardNavigator from '../navigation/CardNavigator'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setDestination } from '../redux/features/navigationSlice'

const MapScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
        <View>
            <TouchableOpacity className="absolute z-10 top-12 left-4 bg-gray-100 p-3 rounded-full"
                onPress={() => {
                    navigation.goBack()
                    dispatch(setDestination(null))
                }}
            >
                <Icon name='home' size={24} />
            </TouchableOpacity>
            <View className="h-1/2">
                <MapComponent />
            </View>
            <View className="h-1/2">
                <CardNavigator />
            </View>
        </View>
    )
}

export default MapScreen