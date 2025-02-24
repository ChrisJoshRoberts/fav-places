import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../UI/Button'
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from 'expo-location'

const LocationPicker = () => {
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

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
    console.log(location)
  }
  const pickOnMapHandler = () => {

  }
  return (
    <View>
      <View style={styles.mapPreviewContainer}>
        <Text style={{opacity: 0.5}}>No location chosen yet!</Text>
      </View>
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
    borderRadius: 10
  }
})