import React, { useState } from 'react';
import {
  View,
  FlatList,
  Animated,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const sumberGambar = [
  { fotoUtama: 'https://picsum.photos/id/301/300', gambarAlternatif: 'https://picsum.photos/id/401/300' },
  { fotoUtama: 'https://picsum.photos/id/302/300', gambarAlternatif: 'https://picsum.photos/id/402/300' },
  { fotoUtama: 'https://picsum.photos/id/303/300', gambarAlternatif: 'https://picsum.photos/id/403/300' },
  { fotoUtama: 'https://picsum.photos/id/304/300', gambarAlternatif: 'https://picsum.photos/id/404/300' },
  { fotoUtama: 'https://picsum.photos/id/305/300', gambarAlternatif: 'https://picsum.photos/id/405/300' },
  { fotoUtama: 'https://picsum.photos/id/306/300', gambarAlternatif: 'https://picsum.photos/id/406/300' },
  { fotoUtama: 'https://picsum.photos/id/307/300', gambarAlternatif: 'https://picsum.photos/id/407/300' },
  { fotoUtama: 'https://picsum.photos/id/308/300', gambarAlternatif: 'https://picsum.photos/id/408/300' },
  { fotoUtama: 'https://picsum.photos/id/309/300', gambarAlternatif: 'https://picsum.photos/id/409/300' },
];

const UKURAN_KOTAK = Dimensions.get('window').width / 3 - 14;

export default function GaleriInteraktif() {
  const [statusGambar, aturStatusGambar] = useState(
    sumberGambar.map(() => ({
      pakaiAlternatif: false,
      nilaiSkala: 1,
      animasiSkala: new Animated.Value(1),
    }))
  );

  const saatGambarDitekan = (index: number) => {
    aturStatusGambar((lama) =>
      lama.map((elemen, i) => {
        if (i !== index) return elemen;

        const skalaSelanjutnya = Math.min(elemen.nilaiSkala * 1.2, 2);

        Animated.timing(elemen.animasiSkala, {
          toValue: skalaSelanjutnya,
          duration: 200,
          useNativeDriver: true,
        }).start();

        return {
          ...elemen,
          pakaiAlternatif: !elemen.pakaiAlternatif,
          nilaiSkala: skalaSelanjutnya,
        };
      })
    );
  };

  return (
    <FlatList
      data={sumberGambar}
      numColumns={3}
      keyExtractor={(_, i) => i.toString()}
      contentContainerStyle={gaya.grid}
      renderItem={({ item, index }) => {
        const gambarDipakai = statusGambar[index].pakaiAlternatif ? item.gambarAlternatif : item.fotoUtama;
        return (
          <TouchableOpacity onPress={() => saatGambarDitekan(index)} activeOpacity={0.8}>
            <Animated.View style={[gaya.kotak, { transform: [{ scale: statusGambar[index].animasiSkala }] }]}>
              <Image source={{ uri: gambarDipakai }} style={gaya.foto} />
            </Animated.View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const gaya = StyleSheet.create({
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  kotak: {
    width: UKURAN_KOTAK,
    height: UKURAN_KOTAK,
    backgroundColor: '#f0f0f0',
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  foto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
