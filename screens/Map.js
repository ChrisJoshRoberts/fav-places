import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Button from '../components/UI/Button'
import { Search } from 'lucide-react-native'
import { Colors } from '../constants/colors'

const Map = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const backButtonHandler = () => {
    navigation.goBack();
  };

  const region = {
    latitude: -33.9249,
    longitude: 18.42,
    latitudeDelta: 0.0022,
    longitudeDelta: 0.0721
  };

  const selectLocationHandler = (event) => {
    setSelectedLocation(event.nativeEvent.coordinate);
    console.log("Selected Location:", event.nativeEvent.coordinate);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.searchContainer}>
        <Search />
        <TextInput 
          style={styles.searchInput}
        />
      </View>
      <MapView
        initialRegion={region}
        style={styles.map}
        onPress={selectLocationHandler}
      >
        {selectedLocation && (
          <Marker
            title="Picked Location"
            coordinate={selectedLocation}
          />
        )}
      </MapView>
      <View style={styles.buttonContainer}>
        <Button mode="secondary" onPress={backButtonHandler}>Back</Button>
        {selectedLocation && <Button mode="primary">Add</Button>}
      </View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 40,
    height: 40,
    width: '80%',
    padding: 12,
    fontSize: 16,
    color: '#fff',
  }
});
