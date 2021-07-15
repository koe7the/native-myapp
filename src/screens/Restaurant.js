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
          paddingTop: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 2,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: 'center',
            paddingLeft: SIZES.padding,
            paddingRight: SIZES.padding,
            paddingTop: SIZES.padding * 2,
            paddingBottom: SIZES.padding * 2,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              ...FONTS.h3,
              backgroundColor: COLORS.lightGray3,
              borderRadius: SIZES.radius,
              padding: SIZES.padding * 1.2,
              paddingHorizontal: SIZES.padding * 5,
            }}>
            {restaurant?.name}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            paddingLeft: SIZES.padding,
            paddingRight: SIZES.padding * 2,
            paddingTop: SIZES.padding * 2,
            paddingBottom: SIZES.padding * 2,
          }}>
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFoodInfo = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        style={{marginVertical: 25}}>
        {restaurant?.menu.map((item, index) => (
          <View style={{alignItems: 'center'}} key={`menu-${index}`}>
            <View style={{height: SIZES.height * 0.35}}>
              {/* food image */}
              <Image
                source={item?.photo}
                resizeMode="cover"
                style={{
                  width: SIZES.width,
                  height: '100%',
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: -20,
                  width: SIZES.width,
                  height: 50,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  backgroundColor: COLORS.white,
                  width: '45%',
                  alignSelf: 'center',
                  borderRadius: SIZES.radius,
                  ...styles.shadow,
                }}>
                <TouchableOpacity>
                  <Text style={{...FONTS.body1}}>-</Text>
                </TouchableOpacity>
                <Text style={{...FONTS.body2}}>0</Text>
                <TouchableOpacity>
                  <Text style={{...FONTS.body1}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
