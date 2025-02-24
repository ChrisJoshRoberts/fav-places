import { StyleSheet, Image } from 'react-native'
import React from 'react'
import PlacesList from '../components/places/PlacesList'

const AllPlaces = ({navigation}) => {
  return (
    <>
      <Image 
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNwj_kMM0RpyiQRYnyv6ROzYLCw0dsk9R4A&s'}}
        style={{width: '100%', height: 200}}
        resizeMode='cover'
      />
      <PlacesList places={[]} nav={navigation} />
    </>
  )
}

export default AllPlaces

const styles = StyleSheet.create({

})