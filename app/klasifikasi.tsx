import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
const PlaceHolderImage = require("@/assets/images/main/IMG_6047.png");

export default function Etiologi() {
  const riskFactors = [
    "Karsinoma urotelial (juga disebut karsinoma sel transisional) adalah kanker yang bermula di sel urotelial, yang melapisi uretra, kandung kemih, ureter, pelvis renalis , dan beberapa organ lainnya. Hampir semua kanker kandung kemih adalah karsinoma urotelial. Sel urotelial juga disebut sel transisi karena bentuknya berubah. Sel ini dapat meregang saat kandung kemih terisi penuh urin dan menyusut saat kosong.",
    "Karsinoma sel skuamosa adalah kanker yang bermula di sel skuamosa (sel tipis dan datar yang melapisi bagian dalam kandung kemih). Jenis kanker ini dapat terbentuk setelah iritasi atau infeksi jangka panjang dengan parasit tropis yang disebut schistosomiasis, yang umum di Afrika dan Timur Tengah tetapi jarang terjadi di Amerika Serikat. Ketika iritasi kronis terjadi, sel transisional yang melapisi kandung kemih dapat secara bertahap berubah menjadi sel skuamosa.",
    "Adenokarsinoma adalah kanker yang bermula di sel-sel kelenjar yang terdapat di lapisan kandung kemih. Sel-sel kelenjar di kandung kemih menghasilkan lendir dan zat-zat lainnya.",
    "Karsinoma sel kecil pada kandung kemih adalah kanker yang bermula pada sel neuroendokrin (sel mirip saraf yang melepaskan hormon ke dalam darah sebagai respons terhadap sinyal dari sistem saraf).",
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

        <Text style={styles.headerText}>Klasifikasi</Text>
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
    color: "#4a4a4a",
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
