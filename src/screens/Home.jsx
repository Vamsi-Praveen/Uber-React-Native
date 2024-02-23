import { View, Image } from 'react-native'
import React from 'react'
import NavOptions from '../components/navOptions'
import GooglePlacesInput from '../components/googlePlacesInput'
import FavOptions from '../components/favOptions'

const Home = () => {
  return (
    <View className="h-full bg-white p-5">
      <View>
        <Image
          source={require('../../assets/images/UberLogo.png')}
          className="h-[100px] w-[100px]"
          resizeMode='contain'
        />
      </View>
      <GooglePlacesInput placeholder={"Where are you from ?"} origin />
      <NavOptions />
      <View className="px-3 py-5">
        <FavOptions home />
      </View>
    </View>
  )
}

export default Home