import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";


export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 30,
          paddingHorizontal: 10,
        }}>
        {/* PRAKTIKUM SEBELUMNYA */}
        {/* <Text
          style={{
            fontFamily: "PlayfairDisplay-Italic",
            fontSize: 18,
            color: "black",
            fontWeight: "bold",
          }}
        >
          MOBILE LEGEND
        </Text> */}

        {/* TUGAS 4 FONTS*/}
        <View style={{ marginTop: 30, width: "100%" }}>
          <Text
            style={{
              fontFamily: "PlayfairDisplay",
              fontSize: 26,
              color: "blue",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 20,
            }}>
            NAMA-NAMA TEMAN SAYA 5 KEATAS & 5 KEBAWAH DARI NAMA DI ABSENSI
          </Text>

          {/* NAMA-NAMA TEMAN SAYA 5 KEATAS & 5 KEBAWAH DARI NAMA DI ABSENSI */}
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 25,
              marginBottom: 10,
            }}>
            105841105222 - MAR'ATUL AZIZAH
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat",
              fontSize: 25,
              marginBottom: 10,
            }}>
             10584105322 - FIKRAH LEJAHTEGIS
          </Text>

          <Text
            style={{
              fontFamily: "DancingScript",
              fontSize: 25,
              marginBottom: 10,
            }}>
             105841105422 - ALYA ANANDHA
          </Text>

          <Text
            style={{
              fontFamily: "BitcountGridSingle",
              fontSize: 25,
              marginBottom: 10,
            }}>
             10584105522 - M. FIKRIH HAIKAL AYATULLAH
          </Text>

          <Text
            style={{
              fontFamily: "Inter",
              fontSize: 25,
              marginBottom: 20,
            }}>
             10584105622 - MUH. DIRHAM RAHIM
          </Text>

          {/* NAMA SAYA SENDIRI */}
          <Text
            style={{
              fontFamily: "SpaceMono-Regular",
              fontSize: 30,
              fontWeight: "bold",
            }}>
             105841105722 - ZASKYA AULIA ASHAR
          </Text>

          {/* NAMA TEMAN-TEMAN SAYA 5 KE BAWAH DARI NAMA DI ABSENSI */}
          <Text
            style={{
              fontFamily: "Monofett",
              fontSize: 26,
              marginTop: 20,
              marginBottom: 10,
            }}>
             105841105822 - MUH. ILHAM AKBAR
          </Text>

          <Text
            style={{
              fontFamily: "RubikDirt",
              fontSize: 24,
              marginBottom: 10,
            }}>
             10584115922 - ZELVIA
          </Text>

          <Text
            style={{
              fontFamily: "TiltNeon",
              fontSize: 24,
              marginBottom: 10,
            }}>
            10584116022 - ANDI DIFTAH RAMEYZA KAYLA
          </Text>

          <Text
            style={{
              fontFamily: "FasterOne",
              fontSize: 24,
              marginBottom: 10,
            }}>
             10584116122 - ARSIFAH AINUN AULIA
          </Text>

          <Text
            style={{
              fontFamily: "PTSans",
              fontSize: 24,
              marginBottom: 10,
            }}>
             105841106222 - TEGAR SURYA PRAYOGA
          </Text>
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}