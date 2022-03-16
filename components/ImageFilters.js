import { Canvas, ColorMatrix, Image, Paint, useImage } from '@shopify/react-native-skia';
import React, { useCallback, useState } from 'react';
import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';

const {height, width} = Dimensions.get('window');

const filters = {
    Juno : [
        1, 0, 0, 0, 0,
        -0.4, 1.3, -0.4, 0.2, -0.1,
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0,
    ],
    Sepia: [
        0.393, 0.769, 0.189, 0, 0,
        0.349, 0.686, 0.168, 0, 0,
        0.272, 0.534, 0.131, 0, 0,
        0,     0,     0,     1, 0,
    ],
    Greyscale: [
        0.2126, 0.7152, 0.0722, 0, 0,
        0.2126, 0.7152, 0.0722, 0, 0,
        0.2126, 0.7152, 0.0722, 0, 0,
        0,      0,      0,      1, 0,
    ],
    Gingham: [
        2, 0, 0, 0, 0,
        1, 1, 0, 0, 0,
        0.5, 0, 1, 0, 0,
        0, 0, 0, 1, 0,
    ],
    Mayfair: [
        1, 1, 0.5, 0, 0,
        0, 0.5, 1, 0, 0,
        0.5, 0.5, 1, 0, 0,
        0, 0, 0, 1, 0,
    ],
    Valencia: [
        1, 0, 0, 0, 0,
        -0.2, 1, 0, 0, 0,
        -0.8, 1.6, 1, 0, 0,
        0, 0, 0, 1, 0,
    ],
    'No Filter': [
        1, 0, 0, 0, 0,
        0, 1, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0,
    ]
};

export const ImageFilters = () => {
  const [selectedFilter, setSelectedFilter] = useState('No Filter');

  const handlePress = useCallback(
    item => () => {
      setSelectedFilter(item);
    },
    [],
  );
  
  const image = useImage(require('../assets/image.jpg'));
  if (image === null) return null;
  
  return (
    <SafeAreaView>
      <Text style={styles.title}>Image Filters</Text>
      <Canvas style={styles.canvas}>
        <Paint>
          <ColorMatrix matrix={filters[selectedFilter]} />
        </Paint>
        <Image
          x={0}
          y={0}
          width={width - 32}
          height={height - 300}
          image={image}
          fit="cover"
        />
      </Canvas>
      <FlatList
        numColumns={3}
        data={Object.keys(filters)}
        keyExtractor={(_, index) => index}
        renderItem={({item}) => (
          <Text
            style={[
              styles.item,
              selectedFilter === item && styles.selectedItem,
            ]}
            onPress={handlePress(item)}>
            {item}
          </Text>
        )}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontWeight: '700',
    fontSize: 32,
    letterSpacing: 1.4,
    color: '#000',
  },
  canvas: {
    height: height - 300,
    marginHorizontal: 16,
    width: width - 32,
    borderRadius: 12,
  },
  list: {
    margin: 16,
  },
  item: {
      width: '33%',
      textAlign: 'center',
      marginBottom: 12,
      fontWeight: '600',
      fontSize: 18,
  },
  selectedItem: {
      color: '#ea4c89',
      borderWidth: 1,
      borderColor: '#ea4c89',
      borderRadius: 12,
 },
});
