import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../redux/features/navigationSlice'
import { useNavigation } from '@react-navigation/native'

const GooglePlacesInput = ({ placeholder, origin, destination, styled, navigate }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    return (
        <GooglePlacesAutocomplete
            nearbyPlacesAPI='GooglePlacesSearch'
            placeholder={placeholder}
            debounce={200}
            query={{
                key: GOOGLE_MAPS_API_KEY,
                language: 'en'
            }}
            minLength={2}
            fetchDetails={true}
            onPress={(data, details = null) => {
                origin ?
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description
                    }))
                    : destination ? (
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }))
                    ) : (null)
                navigate ? (
                    navigation.navigate('RideCard')
                ) : (null)
            }}
            styles={{
                container: {
                    flex: 0,
                    marginHorizontal: 6,
                    paddingTop: styled ? 20 : 0
                }, textInput: {
                    fontSize: 18,
                    backgroundColor: styled ? "lightgrey" : 'white',
                }
            }}

        />
    )
}

export default GooglePlacesInput