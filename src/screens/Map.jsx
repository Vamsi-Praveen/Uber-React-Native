import { View, Text } from 'react-native'
import React from 'react'
import MapComponent from '../components/mapView'
import CardNavigator from '../navigation/CardNavigator'

const MapScreen = () => {
    return (
        <View>
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