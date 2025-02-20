import { FlatList, StyleSheet} from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'

const PlacesList = ({places}) => {  

  const placePressHandler = () => {
    console.log('Place pressed')
  }

  return (
    <FlatList 
      data={places}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PlaceItem place={item} onSelect={placePressHandler}/>}
    />
  )
}

export default PlacesList

const styles = StyleSheet.create({})