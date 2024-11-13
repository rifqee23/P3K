import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
const PlaceHolderImage = require("@/assets/images/main/IMG_6060.jpg");

export default function Etiologi() {
  const riskFactors = [
    "Berjenis kelamin laki-laki.",
    "Berusia di atas usia 55 tahun.",
    "Memiliki kebiasaan merokok.",
    "Memiliki riwayat kanker, baik pada diri sendiri maupun keluarga.",
    "Terpapar bahan kimia, seperti arsenik atau bahan kimia yang digunakan pada industri pembuatan kulit, karet, tekstil, dan cat.",
    "Pernah menjalani radioterapi untuk mengatasi kanker di dekat kandung kemih, seperti kanker usus.",
    "Pernah menjalani kemoterapi.",
    "Mengalami menopause terlalu awal, yaitu di bawah usia 45 tahun.",
    "Menggunakan kateter urine dalam jangka panjang.",
    "Menderita infeksi saluran kemih dan batu kandung kemih menahun.",
    "Menderita skistosomiasis yang tidak diobati.",
    "Menderita diabetes tipe 2.",
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.heroContainer}>
          <Image
            style={styles.hero}
            source={PlaceHolderImage}
            transition={1000}
          />
        </View>

        <Text style={styles.headerText}>Etiologi</Text>
        <Text style={styles.text}>
          Kanker kandung kemih disebabkan oleh perubahan (mutasi) pada sel-sel
          di dalam kandung kemih. Mutasi menyebabkan sel-sel tersebut tumbuh
          tidak terkendali dan membentuk sel kanker yang dapat menyebar
          (metastasis) ke organ tubuh lain. Belum diketahui apa yang menyebabkan
          sel-sel tersebut bermutasi menjadi sel kanker.
        </Text>

        <Text style={styles.headerText}>Faktor Risiko</Text>
        <View style={styles.listContainer}>
          {riskFactors.map((item, index) => (
            <View key={index} style={styles.listItemContainer}>
              <View style={styles.bullet}>
                <Text style={styles.bulletText}>{index + 1}</Text>
              </View>
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    marginTop: 8,
    textAlign: "justify",
    paddingHorizontal: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  listItemContainer: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start",
  },
  bullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginTop: 2,
  },
  bulletText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  },
  heroContainer: {
    position: "relative",
    height: 200,
    overflow: "hidden",
    borderRadius: 12,
    marginBottom: 20,
  },
  hero: {
    width: "100%",
    height: "100%",
  },
});
