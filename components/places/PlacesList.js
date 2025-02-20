import { FlatList, StyleSheet} from 'react-native'
import React from 'react'

const PlacesList = ({places}) => {
  return (
    <FlatList 
      data={places}
      
    />
  )
}

export default PlacesList

const styles = StyleSheet.create({})