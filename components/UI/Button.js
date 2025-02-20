import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = ({onPress, children, mode}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [{opacity: pressed ? 0.2 : 1}]} >
      <View style={mode === 'primary' ? styles.buttonContainer :  styles.secondaryButtonContainer}> 
        <Text style={mode === 'primary' ? styles.buttonText : styles.buttonTextSecondary}>{children}</Text>
      </View>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    backgroundColor: '#146EEE',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonContainer: {
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#146EEE',
    borderWidth: 1
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700
  },
  buttonTextSecondary: {
    color: '#146EEE',
    fontSize: 16,
    fontWeight: 700
  }
})