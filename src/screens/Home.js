import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {
  affordable,
  categoryData,
  expensive,
  fairPrice,
  initialCurrentLocation,
  restaurantData,
} from './dummyData';

import {COLORS, images, SIZES, FONTS, icons} from '_constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: '2%',
    paddingBottom: '4%',
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
  header: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  header_touchable_opacity: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
  },
  header_image: {
    width: 30,
    height: 30,
  },
});

export default function Home({navigation}) {
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation,
  );

  function getCategoryNameById(id) {
    let category = categories.filter(v => v.id === id);

    if (category.length > 0) return category[0];

    return '';
  }

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity style={styles.header_touchable_opacity}>
        <Image
          source={icons.nearby}
          resizeMode="contain"
          style={styles.header_image}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '70%',
            height: '100%',
            backgroundColor: COLORS.lightGray3,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius,
          }}>
          <Text style={{...FONTS.h3}}>{currentLocation.streetName}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.basket}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
    </View>
  );

  const onSelectCategory = category => {
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  };

  const renderMainCategories = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => onSelectCategory(item)}
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius * 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          </View>
          <Text
            style={{
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              marginTop: SIZES.padding,
              fontSize: 16,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{padding: SIZES.padding * 2.2}}>
        <Text style={{...FONTS.h1, fontWeight: '700'}}>Main</Text>
        <Text style={{...FONTS.h1, fontWeight: '700'}}>Categories</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    );
  };

  function renderRestaurantList() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{marginBottom: SIZES.padding * 2}}
        onPress={() =>
          navigation.navigate('Restaurant', {
            item,
            currentLocation,
          })
        }>
        {/* foto y duracion */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{width: '100%', height: 200, borderRadius: SIZES.radius}}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.h4}}>{item.duration}</Text>
          </View>
        </View>

        {/* nombre */}
        <Text style={{...FONTS.body2}}>{item.name}</Text>

        {/* categorias, rating, y precio */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginRight: 15, flexDirection: 'row'}}>
            {/* Rating */}
            <Image
              source={icons.star}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.primary,
                marginRight: 10,
              }}
            />
            <Text style={{...FONTS.body3}}>{item.rating}</Text>
          </View>
          {/* price */}
          <Text>
            {[1, 2, 3].map(priceRating => (
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginRight: 9,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}
                key={priceRating}>
                $
              </Text>
            ))}
          </Text>
          {item.categories.map(categoryId => {
            return (
              <View style={{flexDirection: 'row'}} key={categoryId}>
                <TouchableOpacity
                  onPress={() =>
                    onSelectCategory(getCategoryNameById(categoryId))
                  }>
                  <Text
                    style={{
                      ...FONTS.body3,
                      backgroundColor: COLORS.lightGray,
                      marginRight: SIZES.padding,
                      padding: 8,
                      borderTopEndRadius: SIZES.radius,
                    }}>
                    {getCategoryNameById(categoryId).name}.
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
}
