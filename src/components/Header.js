import React from 'react';
import {style} from '_constants';
import {StyleSheet, Text, View} from 'react-native';

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.header_title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ...style,
});
