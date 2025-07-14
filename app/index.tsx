import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

const generateBas69ImagePairs = () => {
  const baseNIM = '10584110';
  const suffix = '22';
  const baseURL = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
  const query = '_.jpg?1751871539';
  const altURL =
    'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif';

  const pairs = [];
  for (let i = 57; i <= 65; i++) {
    const nim = `${baseNIM}${i}${suffix}`;
    const main = `${baseURL}${nim}${query}`;
    pairs.push({ main, alt: altURL });
  }
  return pairs;
};

const bas69ImagePairs = generateBas69ImagePairs();

export default function Bas69GambarGrid() {
  const [bas69States, setBas69States] = useState(
    bas69ImagePairs.map(() => ({ isAlt: false }))
  );

  // Array of Animated.Value for each image
  const scaleValues = useRef(
    bas69ImagePairs.map(() => new Animated.Value(1))
  ).current;

  const bas69HandlePress = (index: number) => {
    setBas69States((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;

        // Get current scale value
        let currentScale = 0;
        scaleValues[i].extractOffset(); // ensures latest value is used
        scaleValues[i].addListener(({ value }) => {
          currentScale = value;
        });

        // Determine new scale
        let newScale = parseFloat((currentScale + 0.2).toFixed(1));
        if (newScale > 2) newScale = 1;

        // Animate to new scale
        Animated.timing(scaleValues[i], {
          toValue: newScale,
          duration: 200,
          useNativeDriver: true,
        }).start();

        return { isAlt: !item.isAlt };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={bas69Styles.grid}>
      {bas69ImagePairs.map((pair, index) => (
        <Pressable key={index} onPress={() => bas69HandlePress(index)}>
          <Animated.Image
            source={{
              uri: bas69States[index].isAlt ? pair.alt : pair.main,
            }}
            style={[
              bas69Styles.image,
              {
                transform: [{ scale: scaleValues[index] }],
              },
            ]}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const bas69Styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').width / 3 - 20,
    margin: 5,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#aaa',
  },
});
