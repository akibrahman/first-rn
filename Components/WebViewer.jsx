/* eslint-disable prettier/prettier */
import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewer = () => {
  return (
    <WebView source={{uri: 'https://reactnative.dev/'}} style={{flex: 1}} />
  );
};

export default WebViewer;
