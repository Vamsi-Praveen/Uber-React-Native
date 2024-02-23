import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { rideOptions } from '../utils/rideOptionsData'
import { useSelector } from 'react-redux'
import { selectTravelTime } from '../redux/features/navigationSlice'

const RideOptionsCard = () => {
    const navigate = useNavigation()
    const [selectedRide, setSelectedRide] = useState(null)
    const travelTime = useSelector(selectTravelTime)
    const distance = (Number(travelTime?.distance?.text.split(' ')[0]) * 1.6).toFixed(1)
    return (
        <View className="flex-1 bg-white p-2">
            <View className="items-center">
                <Text className="text-center text-[24px] font-semibold tracking-wider pb-3 pt-1 realtive">Select a Ride - {distance} KM</Text>
                <TouchableOpacity className="absolute top-2 left-5"
                    onPress={() => { navigate.goBack() }}
                >
                    <Icon name='arrow-left' size={22} color={'#000'} />
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={rideOptions}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { multiplier, image, title, id }, item }) => {
                    return <TouchableOpacity className={`mb-1 flex-row items-center justify-between rounded-sm px-10 transition-all ease-in-out pb-2  ` + (selectedRide?.id === id && 'bg-gray-200')}
                        onPress={() => { setSelectedRide(item) }}
                    >
                        <Image
                            source={{ uri: image }}
                            height={100}
                            width={100}
                            resizeMode='contain'
                        />
                        <View className="-ml-6 mt-5">
                            <Text className="font-bold text-[30px]">{title}</Text>
                            <Text className="font-semibold tracking-wider">{travelTime?.duration?.text}</Text>
                        </View>
                        <Text className="text-2xl font-semibold mt-5">{
                            new Intl.NumberFormat('en', {
                                style: "currency",
                                currency: 'INR'
                            }).format(
                                (travelTime?.duration.value * 1.5 * multiplier) / 100
                            )
                        }</Text>

                    </TouchableOpacity>
                }}
            />
            {
                selectedRide && (<View className="w-full">
                    <TouchableOpacity className="bg-black py-4 mx-2 rounded-sm"
                        onPress={() => { navigate.navigate('Success') }}
                    >
                        <Text className="tracking-wider text-white text-center text-[24px] font-medium">Choose {selectedRide?.title}</Text>
                    </TouchableOpacity>
                </View>)
            }


        </View>
    )
}

export default RideOptionsCard