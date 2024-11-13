import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: 500,
          marginTop: 20,
        }}
      >
        Selamat Datang Di P3K
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          marginTop: 10,
          fontWeight: 600,
          color: "color: rgb(100 116 139);",
          lineHeight: 24,
        }}
      >
        P3K (Pengenalan Kanker Kandung Kemih) sebuah aplikasi yang dibuat
        sebagai Health Project pada Blok Genitourinaria FK UNILA 2022 yang
        berisi pengenalan mengenai Kanker Kandung Kemih.
      </Text>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/main/IMG_6033.jpg")}
          style={{
            width: 150,
            height: 150,
          }}
        />
      </View>
      <Text style={{ marginTop: 10, fontSize: 24, fontWeight: 500 }}>
        Dibuat oleh:
      </Text>
      <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 500 }}>
        Asyifa Dinda Putri
      </Text>
      <Text
        style={{
          marginTop: 10,
          marginBottom: 10,
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        NPM: 2258011016
      </Text>

      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/main/Asyifa_Dinda_Putri_2258011016.png")}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
});
