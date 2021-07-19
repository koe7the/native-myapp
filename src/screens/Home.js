import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {style} from '_constants';
import {Header} from '_components';

export default function Home({navigation, route}) {
  return (
    <View style={styles.container}>
      <Header title="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  ...style,
});
