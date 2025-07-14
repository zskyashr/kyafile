import React, { useState } from 'react';
import {
  View,
  FlatList,
  Pressable,
  Animated,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const imagePairs = [
  { main: 'https://picsum.photos/id/101/300', alt: 'https://picsum.photos/id/201/300' },
  { main: 'https://picsum.photos/id/102/300', alt: 'https://picsum.photos/id/202/300' },
  { main: 'https://picsum.photos/id/103/300', alt: 'https://picsum.photos/id/203/300' },
  { main: 'https://picsum.photos/id/104/300', alt: 'https://picsum.photos/id/204/300' },
  { main: 'https://picsum.photos/id/105/300', alt: 'https://picsum.photos/id/205/300' },
  { main: 'https://picsum.photos/id/106/300', alt: 'https://picsum.photos/id/206/300' },
  { main: 'https://picsum.photos/id/107/300', alt: 'https://picsum.photos/id/207/300' },
  { main: 'https://picsum.photos/id/108/300', alt: 'https://picsum.photos/id/208/300' },
  { main: 'https://picsum.photos/id/109/300', alt: 'https://picsum.photos/id/209/300' },
];

const CELL_SIZE = Dimensions.get('window').width / 3 - 12;

export default function GambarGrid3x3() {
  const [imageStates, setImageStates] = useState(
    imagePairs.map(() => ({
      isAlt: false,
      scale: new Animated.Value(1),
      scaleValue: 1,
    }))
  );

  const handleImagePress = (index: number) => {
    setImageStates((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;

        const nextScale = Math.min(item.scaleValue * 1.2, 2);

        Animated.timing(item.scale, {
          toValue: nextScale,
          duration: 200,
          useNativeDriver: true,
        }).start();

        return {
          ...item,
          isAlt: !item.isAlt,
          scaleValue: nextScale,
        };
      })
    );
  };

  return (
    <FlatList
      data={imagePairs}
      numColumns={3}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.grid}
      renderItem={({ item, index }) => {
        const { isAlt, scale } = imageStates[index];
        return (
          <Pressable onPress={() => handleImagePress(index)}>
            <Animated.View style={[styles.cell, { transform: [{ scale }] }]}>
              <Image source={{ uri: isAlt ? item.alt : item.main }} style={styles.image} />
            </Animated.View>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
