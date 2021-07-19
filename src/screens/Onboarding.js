import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <Text>onboarding</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bababa',
  },
});