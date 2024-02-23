import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setTravelInfo } from '../redux/features/navigationSlice'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_API_KEY } from '@env'

const MapComponent = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const disptach = useDispatch()

    useEffect(() => {
        if (!origin || !destination) return;
        //zoom and fit to map markers
        setTimeout(() => {
            mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
                edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }, animated: true
            })
        }, 1000);
    }, [origin, destination])

    useEffect(() => {
        if (!origin || !destination) return;
        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`)
                .then((res) => res.json())
                .then((data) => {
                    disptach(setTravelInfo(data.rows[0].elements[0]))
                })
        }
        getTravelTime()

    }, [origin, destination, GOOGLE_MAPS_API_KEY])

    return (
        <MapView
            ref={mapRef}
            mapType='mutedStandard'
            className='flex-1'
            initialRegion={{
                latitude: origin?.location.lat,
                longitude: origin?.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {
                origin?.location && destination?.location && (
                    <MapViewDirections
                        origin={origin.description}
                        destination={destination.description}
                        apikey={GOOGLE_MAPS_API_KEY}
                        strokeWidth={4}
                        strokeColor='black'
                    />
                )
            }



            {
                origin?.location && (
                    <Marker
                        coordinate={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng
                        }}
                        identifier='origin'
                        description={origin.description}


                    />
                )
            }
            {
                destination?.location && (
                    <Marker
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng
                        }}
                        identifier='destination'
                        description={destination.description}


                    />
                )
            }
        </MapView>
    )
}

export default MapComponent