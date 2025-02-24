import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors'
import { Map, MapPin } from 'lucide-react-native'

const Button = ({onPress, children, mode, icon}) => { 

  let buttonIcon = null
  switch (icon) {
    case 'map' : 
      buttonIcon = <Map size={20} color={Colors.primary700}/>
      break
    case 'location' : 
      buttonIcon = <MapPin size={20} color='#fff'/>
      break
  }
  return (
    <Pressable onPress={onPress} style={({pressed}) => [{opacity: pressed ? 0.2 : 1}]} >
      <View style={mode === 'primary' ? styles.buttonContainer :  styles.secondaryButtonContainer}> 
        {buttonIcon}
        <Text style={mode === 'primary' ? styles.buttonText : styles.buttonTextSecondary}>{children}</Text>
      </View>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 20,
    backgroundColor: Colors.primary700,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonContainer: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.primary700,
    borderWidth: 1
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700
  },
  buttonTextSecondary: {
    color: Colors.primary700,
    fontSize: 16,
    fontWeight: 700
  }
})