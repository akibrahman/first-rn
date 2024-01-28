import React from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import tw from 'tailwind-rn';
import Details from './Components/Details';
import Home from './Components/Home';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const testPress = () => {
    Alert.alert('Meal Master', 'You clicked me');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.sectionContainer} className="">
        <Text style={styles.topText}>Meal Manager</Text>
      </View>
      <View style={styles.navContainer}>
        <View style={styles.navMenu}>
          <Text
            onPress={() => console.warn('Ami First')}
            style={styles.navText}>
            Box 1
          </Text>
        </View>
        <View style={styles.navMenu}>
          <Text
            onPress={() => console.warn('Ami Second')}
            style={styles.navText}>
            Box 2
          </Text>
        </View>
        <View style={styles.navMenu}>
          <Text
            onPress={() => console.warn('Ami Third')}
            style={tw`text-blue-500`}>
            Box 3
          </Text>
        </View>
      </View>
      <View>
        {/* <Image src={'https://i.ibb.co/K9MC2KR/Linkdin1.jpg'} /> */}
        <TouchableOpacity
          onPress={testPress}
          activeOpacity={0.8}
          style={styles.button}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Home />
        <Details />
      </View>
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        />
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {backgroundColor: '#333', elevation: 50},
  topText: {
    color: '#fff',
    fontSize: 25,
    paddingVertical: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 100,
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  navContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  navMenu: {
    backgroundColor: '#444',
    borderRadius: 10,
  },
  navText: {
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
});

export default App;
