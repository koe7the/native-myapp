import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {style} from '_constants';

export default function Home({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: style.container,
});
