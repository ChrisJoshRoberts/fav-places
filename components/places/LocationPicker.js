import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../UI/Button'
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from 'expo-location'
import { getMapPreview } from '../../util/location'
import { useNavigation } from '@react-navigation/native'

const LocationPicker = () => {
  const [pickedLocation, setPickedLocation] = useState()
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions()
  const navigation = useNavigation()


  const verifyPermissions = async() => {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
          const permissionResponse = await requestPermission()
          return permissionResponse.granted
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
          Alert.alert('Permission Denied', 'You need to grant location permissions to use this app', [{text: 'Okay'}])
          return false
        }
        return true
  }

  const getLocationHanadler = async() => {
    const hasPermission = await verifyPermissions()
    if (!hasPermission) {
      return
    }

    const location = await getCurrentPositionAsync()
    try {
      setPickedLocation({
        lat:location.coords.latitude,
        lng: location.coords.longitude,
      })
    } catch (error) {
      console.error(error.message)
    };
  }
  const pickOnMapHandler = () => {
    navigation.navigate('Map')
  }
  return (
    <View>
        {!pickedLocation &&
          <Text style={{opacity: 0.5}}>No location chosen yet!</Text>
        } 
        {pickedLocation &&
          <Image
            source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}}
            style={styles.mapPreviewImage}
            resizeMode='cover'
            />
        }       
      <View style={styles.mapButtonsContainer}>
        <Button onPress={pickOnMapHandler} mode='secondary' icon='map'>Pick on Map</Button>
        <Button onPress={getLocationHanadler} mode='primary'icon='location'>Get location</Button>
      </View>
    </View>
  )
}

export default LocationPicker

const styles = StyleSheet.create({
  mapButtonsContainer: {
    gap: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  mapPreviewContainer: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  }, 
  mapPreviewImage: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  }
})