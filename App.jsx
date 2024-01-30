import React, {useState} from 'react';
import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import tw from 'twrnc';
import Buttons from './Components/Buttons';
import Loader from './Components/Loader';
import Modal from './Components/Modal';
import MyForm from './Components/MyForm';
import Radio from './Components/Radio';
import Users from './Components/Users';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const device = Platform.OS;
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const testPress = () => {
    Alert.alert('Meal Master', 'You clicked me');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          barStyle="light-content"
          // backgroundColor={backgroundStyle.backgroundColor}
          backgroundColor="#333"
        />
        <View style={tw`bg-[#333]`} className="">
          <Text style={tw`text-white text-2xl text-center py-5`}>
            Meal Manager
          </Text>
        </View>
        <View style={tw`mt-2 flex flex-row items-center justify-center gap-2`}>
          <View style={tw`bg-[#444] rounded-md`}>
            <Text
              onPress={() => console.warn(tw`w-1`)}
              style={tw`text-white px-7 py-2 text-lg`}>
              Home
            </Text>
          </View>
          <View style={tw`bg-[#444] rounded-md`}>
            <Text
              onPress={() => console.warn('Ami Second')}
              style={tw`text-white px-7 py-2 text-lg`}>
              Order
            </Text>
          </View>
          <View style={tw`bg-[#444] rounded-md`}>
            <Text
              onPress={() => console.warn('Ami Third')}
              style={tw`text-white px-7 py-2 text-lg`}>
              Contact
            </Text>
          </View>
        </View>
        <View>
          {/* <Image src={'https://i.ibb.co/K9MC2KR/Linkdin1.jpg'} /> */}
          <TouchableOpacity
            onPress={testPress}
            activeOpacity={0.8}
            style={tw`bg-[#333] rounded-md p-2 mx-auto w-24 mt-7`}>
            <Text style={tw`text-center text-lg text-white`}>Click Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsOpen(!isOpen)}
            activeOpacity={0.8}
            style={tw`bg-[#333] rounded-md p-2 mx-auto w-24 mt-7`}>
            <Text style={tw`text-center text-lg text-white`}>Users</Text>
          </TouchableOpacity>
        </View>
        <MyForm />
        <Text style={styles.platform}>Platform: {device}</Text>
        {isOpen && <Users />}
        <Buttons />
        <Radio />
        <Loader />
        <Modal />
        {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        />
      </ScrollView> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  platform: {
    fontSize: 28,
    textAlign: 'center',
    color: '#2296F3',
    fontWeight: '800',
  },
});

export default App;
