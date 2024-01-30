/* eslint-disable prettier/prettier */
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size="large" color={'#3B82F6'} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 50,
  },
});

export default Loader;
