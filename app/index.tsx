import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
     <View
  style={{
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "blue",
  }}
/>


      {/* Pil (berisi stambuk) */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "green",
          borderRadius: 50,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>105841105722</Text>
      </View>

      {/* Persegi panjang horizontal (berisi nama) */}
      <View
        style={{
          width: 200,
          height: 50,
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Zaskya Aulia Ashar
        </Text>
      </View>
    </View>
  );
}