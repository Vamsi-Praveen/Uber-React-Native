import { View, Text } from 'react-native'
import React from 'react'
import GooglePlacesInput from './googlePlacesInput'
import FavOptions from './favOptions'

const NavigateCard = () => {
    return (
        <View className="bg-white flex-1 p-2">
            <Text className="text-2xl font-semibold tracking-wider text-center py-4">Hi,{" "}Vamsi</Text>
            <View className="border-t border-gray-100">
                <View>
                    <GooglePlacesInput placeholder={"Where to go?"} destination styled navigate />
                </View>
            </View>
            <View className="px-2 py-3">
                <FavOptions navCard />
            </View>
        </View>
    )
}

export default NavigateCard