/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const Buttons = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        onPress={() => console.warn('Touchable Highlight Cicked')}>
        <Text style={styles.button}>Touchable Highlight</Text>
      </TouchableHighlight>
      <TouchableOpacity
        onPress={() => console.warn('Touchable Opacity Cicked')}>
        <Text style={styles.button}>Touchable Opacity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    marginVertical: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    width: 150,
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#333',
    color: 'white',
    fontSize: 20,
  },
});

export default Buttons;
