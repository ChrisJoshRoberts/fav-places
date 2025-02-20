import { StyleSheet } from 'react-native'
import React from 'react'
import PlacesList from '../components/places/PlacesList'

const AllPlaces = ({navigation}) => {
  return (
      <PlacesList places={[]} nav={navigation} />
  )
}

export default AllPlaces

const styles = StyleSheet.create({

})