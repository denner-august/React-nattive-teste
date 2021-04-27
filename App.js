import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Contador from "./components/Contador"


export default function App() {
  return (
    <View style={styles.container}>
        <Contador numeroInicial = {0}/>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent:'center',
   
  },
});
