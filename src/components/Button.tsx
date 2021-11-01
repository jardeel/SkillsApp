import React from 'react';
import { 
  TouchableOpacity, 
  TouchableOpacityProps, 
  Text, 
  StyleSheet,
} from 'react-native';

type ButtonProps = TouchableOpacityProps;

export function Button({ onPress, children }: ButtonProps){
  return(
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText} >{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
});