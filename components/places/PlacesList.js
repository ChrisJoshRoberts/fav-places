import { FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import { Earth } from 'lucide-react-native';
import Button from '../UI/Button';
import { Colors } from '../../constants/colors';


const PlacesList = ({places, nav}) => {  

  const addPlaceHandler = () => {
    nav.navigate('AddPlace')
  }

  if (places.length === 0 || !places) {
    return (
      <View style={styles.fallbackContainer}>
        <Earth size={60} style={styles.fallbackIcon}/>
        <Text style={styles.fallbackText}>No places found. Maybe start adding some!</Text>
        <Button onPress={addPlaceHandler} mode='primary' >Add Place</Button>
      </View>
    )
  }

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

const styles = StyleSheet.create({
  fallbackContainer : { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: 'center',
    color: 'gray'
  },
  fallbackIcon: {
    margin: 8,
    color: Colors.primary800,
    opacity: 0.7
  }
})