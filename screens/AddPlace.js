import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import PlaceForm from '../components/places/PlaceForm'
import Button from '../components/UI/Button'

const AddPlace = ({navigation}) => {
  const cancelFormHandler = () => {
    navigation.navigate('AllPlaces')
  }
  return (
    <SafeAreaView style={styles.formContainer}>
      <PlaceForm />
      <View style={styles.formButtonsContainer}>
        <Button onPress={cancelFormHandler} mode='secondary'>Cancel</Button>
      </View>
    </SafeAreaView>
  )
}

export default AddPlace

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  formButtonsContainer: {
    flexDirection: 'row',
    gap: 10
  }
})