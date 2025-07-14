import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Pressable,
  Animated,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';

// Pasangan gambar: 9 utama dan 9 alternatif
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

export default function App() {
  const imageSize = Dimensions.get('window').width / 3 - 12;

  // Inisialisasi state gambar
  const [imageStates, setImageStates] = useState(
    imagePairs.map(() => ({
      isAlt: false,
      scale: new Animated.Value(1),
      scaleValue: 1,
    }))
  );

  const handleImagePress = (index: number) => {
    // Dapatkan state lama lalu ubah
    setImageStates((prevStates) => {
      const updatedStates = prevStates.map((state, i) => {
        if (i !== index) return state;

        const nextScaleValue = Math.min(state.scaleValue * 1.2, 2.0);

        // Jalankan animasi pembesaran
        Animated.timing(state.scale, {
          toValue: nextScaleValue,
          duration: 200,
          useNativeDriver: true,
        }).start();

        // Return state yang diubah
        return {
          ...state,
          isAlt: !state.isAlt,
          scaleValue: nextScaleValue,
        };
      });

      return updatedStates; // 🔧 PENTING: RETURN updatedStates!
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.grid}>
      {imagePairs.map((pair, index) => {
        const { isAlt, scale } = imageStates[index];
        const imageSource = isAlt ? pair.alt : pair.main;

        return (
          <Pressable key={index} onPress={() => handleImagePress(index)}>
            <Animated.View style={[styles.cell, { transform: [{ scale }] }]}>
              <Image source={{ uri: imageSource }} style={styles.image} />
            </Animated.View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 6,
  },
  cell: {
    width: Dimensions.get('window').width / 3 - 12,
    height: Dimensions.get('window').width / 3 - 12,
    margin: 3,
    borderRadius: 10,
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#aaa',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
