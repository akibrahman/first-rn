/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

const MyForm = () => {
  const [form, setForm] = useState({name: '', email: ''});

  const handleNameChange = text => {
    setForm({...form, name: text});
  };

  const handleEmailChange = text => {
    setForm({...form, email: text});
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.warn('Name:', form.name, 'Email:', form.email);
  };

  return (
    <View style={tw`p-5`}>
      <TextInput
        style={tw`h-10 border mb-3 px-3`}
        placeholder="Name"
        value={form.name}
        onChangeText={handleNameChange}
      />
      <TextInput
        style={tw`h-10 border mb-3 px-3`}
        placeholder="Email"
        value={form.email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TouchableOpacity
        style={tw`bg-blue-500 p-3 rounded-md items-center`}
        onPress={handleSubmit}>
        <Text style={tw`text-white text-base`}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyForm;
