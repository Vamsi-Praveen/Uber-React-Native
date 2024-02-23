import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Icon from "react-native-vector-icons/Feather"
import { useNavigation } from '@react-navigation/native'


const Success = () => {
    const navigate = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigate.replace('Home')
        }, 1500)
    }, [])
    return (
        <View className="flex-1 items-center justify-center gap-4">
            <Icon name='zap' size={40} color={"black"} />
            <Text className="font-semibold tracking-wider text-[34px]">Ride Booked</Text>
        </View>
    )
}

export default Success