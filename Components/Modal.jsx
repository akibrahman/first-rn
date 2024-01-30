/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

const Modall = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.main}>
      <Button onPress={() => setIsOpen(true)} title="Open Modal" />
      <Modal animationType="fade" transparent={true} visible={isOpen}>
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Helooooo</Text>
            <Button onPress={() => setIsOpen(false)} title="Close" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  modalWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#3B82F6',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 5,
    elevation: 10,
  },
  modalText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3B82F6',
    marginBottom: 30,
  },
});

export default Modall;
