import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { navOptionsData } from '../utils/navOptionsData'
import Icon from "react-native-vector-icons/Feather"
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../redux/features/navigationSlice'

const NavOptions = () => {
    const navigator = useNavigation()
    const origin = useSelector(selectOrigin)
    const navigateToScreen = (screen) => {
        if (origin) {
            navigator.navigate(screen)
        }
    }
    return (
        <View className="items-center justify-center">
            <ScrollView horizontal scrollEnabled={false} showsHorizontalScrollIndicator={false}>
                {
                    navOptionsData.map((item, index) => {
                        return <TouchableOpacity className={"bg-gray-200 pb-5 pt-1 mx-3 w-40 mt-3 rounded-md "} disabled={!origin}
                            key={index}
                            onPress={() => {
                                navigateToScreen(item.screen)
                            }}
                        >
                            <View className={"items-center justify-center "}>
                                <Image
                                    source={item.image}
                                    className="w-[120px] h-[120px]"
                                    resizeMode='contain'
                                />
                                <Text className="text-lg font-semibold mt-1 tracking-wide">{item.name}</Text>
                                <View className="bg-black w-10 p-2 rounded-full mt-4">
                                    <Icon
                                        name='arrow-right'
                                        size={24}
                                        color={'#fff'}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default NavOptions