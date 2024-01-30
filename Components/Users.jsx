/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import tw from 'twrnc';

const user = [
  {
    name: 'Akib Rahman',
    email: 'akib@gmail.com',
  },
  {
    name: 'Abid Rahman',
    email: 'abid@gmail.com',
  },
  {
    name: 'Suchona Islam',
    email: 'suchona@gmail.com',
  },
];

const Users = () => {
  return (
    <View>
      <FlatList
        style={tw`flex flex-row mx-auto`}
        data={user}
        renderItem={({item}) => (
          <View style={tw`border mb-3 p-5 rounded-md`}>
            <Text style={tw`text-blue-500 text-xl`}>{item.name}</Text>
            <Text style={tw`text-blue-500 text-xl`}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Users;
