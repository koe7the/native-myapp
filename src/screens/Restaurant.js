import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {COLORS, images, SIZES, FONTS, icons} from '_constants';

export default function Restaurant({route, navigation}) {
  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    let {item, currentLocation} = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  }, []);

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: SIZES.padding * 2,
          paddingTop: SIZES.padding * 2,
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: 'center',
            backgroundColor: COLORS.lightGray4,
            paddingLeft: SIZES.padding,
            paddingRight: SIZES.padding,
            paddingTop: SIZES.padding * 2,
            paddingBottom: SIZES.padding * 2,

            borderRadius: SIZES.radius,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: 'red',
          }}>
          <Text
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            restuasjdsah
          </Text>
        </View>
      </View>
    );
  };

  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
