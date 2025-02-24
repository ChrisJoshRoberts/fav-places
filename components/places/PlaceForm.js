import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/colors'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('')

  const changeTitleHandler = (text) => {
    setEnteredTitle(text)
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.screenTitle}>Add favourite place:</Text>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={changeTitleHandler} />
      </View> 
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 24,
    fontWeight: 700,
    marginVertical: 16,
    color: Colors.gray700,
  },
  form: {
    flex: 1,
    padding: 24,
    width: '100%'
  },
  label: {
    fontWeight: 700,
    marginBottom: 4,
    color: Colors.primary700
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary800,
  }
})