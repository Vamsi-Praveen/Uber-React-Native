import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { favPlaces } from '../utils/favOptionsData'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../redux/features/navigationSlice'
import { useNavigation } from '@react-navigation/native'

const FavOptions = ({ home, navCard }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const navigateScreen = home ? 'Map' : navCard ? 'RideCard' : null
    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={favPlaces}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => {
                    return <View className="h-[2px] bg-gray-200" />
                }}
                renderItem={({ item }) => {
                    return <TouchableOpacity className="flex-row p-5 items-center bg-gray-100 rounded-md"
                        onPress={() => {
                            home ? (
                                dispatch(setOrigin({
                                    location: item.destination.location,
                                    description: item.destination.description
                                }))
                            ) : navCard ? (
                                dispatch(setDestination({
                                    location: item.destination.location,
                                    description: item.destination.description
                                }))
                            ) : null
                            navigation.navigate(navigateScreen)
                        }}

                    >
                        <View className="mr-4">
                            <Icon
                                name={item.icon}
                                size={24}
                            />
                        </View>
                        <View>
                            <Text className="text-[18px]">{item.location}</Text>
                            <Text>{item.destination.description}</Text>
                        </View>
                    </TouchableOpacity>
                }}

            />
        </View >
    )
}

export default FavOptions