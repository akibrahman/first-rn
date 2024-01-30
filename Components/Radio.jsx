/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const Radio = () => {
  const [radioSelector, setRadioSelector] = useState(0);
  const gender = [
    {id: 1, data: 'Male'},
    {id: 2, data: 'Female'},
  ];
  return (
    <View style={styles.radioContainer}>
      {gender.map(data => (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => setRadioSelector(data.id)}
          key={data.id}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {radioSelector === data.id && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioText}>{data.data}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  radioWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  radio: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'skyblue',
    borderRadius: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 30,
    height: 30,
    backgroundColor: 'skyblue',
    borderRadius: 999,
  },
  radioText: {
    fontSize: 22,
  },
});

export default Radio;
