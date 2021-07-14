/**
 * Sample React Native App
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Greeting from '_atoms/Greeting';

const App = () => {
  return (
    <View style={styles.main}>
      <Text>
        hola
      </Text>
      <Greeting message="hola desde componente" />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bababa"
  }
});

export default App;
