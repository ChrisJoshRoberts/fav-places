import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../UI/Button'
import { launchCameraAsync, PermissionStatus, useCameraPermissions } from 'expo-image-picker'
import { Camera } from 'lucide-react-native'
import { Colors } from '../../constants/colors'

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState()
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions()

  const veryfyPermissions = async() => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()
      return permissionResponse.granted
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert('Permission Denied', 'You need to grant camera permissions to use this app', [{text: 'Okay'}])
      return false
    }
    return true
  }
  const takeImageHandler = async() => {
    const hasPermission = await veryfyPermissions()
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync(
      {
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5
      }
    )
    setPickedImage(image.assets[0].uri)
  }
  let imagePreview = 
  <View style={styles.fallbackImage}>
    <Camera color={Colors.gray700} size={24} style={{opacity: 0.8}} />
    <Text style={styles.fallbackText}>No Image taken Yet!</Text>
  </View>

  if (pickedImage) {
    console.log(pickedImage)
    imagePreview = <Image 
      source={{uri: pickedImage}} 
      style={{width: '100%', height: 200}} 
      resizeMode='cover'
      />
  }
  return (
    <View>
      <View style={styles.imagePreview}>
        {imagePreview}
      </View>
      <Button mode='primary' onPress={takeImageHandler}>{pickedImage ? 'Retake Photo' : 'Take Photo'}</Button>
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
  fallbackImage: {
    marginVertical: 8,
    width: '100%',
    height: 200,
    backgroundColor: '#221c300f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  fallbackText: {
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
    color: '#221c307d'
  },
  imagePreview: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 12
  }
})