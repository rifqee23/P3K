import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
const PlaceHolderImage = require("@/assets/images/main/IMG_6056.jpg");
const PlaceHolderImage2 = require("@/assets/images/main/IMG_6057.jpg");

export default function Etiologi() {
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
        <View style={styles.heroContainer2}>
          <Image
            style={styles.hero}
            source={PlaceHolderImage2}
            transition={1000}
          />
        </View>

        <Text style={styles.headerText}>Pencegahan</Text>

        <Text style={styles.text}>
          Pencegahan kanker kandung kemih dimulai dari pola hidup yang sehat.
          Berhenti merokok adalah salah satunya karena merokok diyakini sebagai
          penyebab dari separuh kasus kanker kandung kemih. Selanjutnya adalah
          mengurangi paparan terhadap zat kimia tertentu. Beberapa zat yang
          menjadi faktor resiko kanker kandung kemih adalah seperti paparan
          pewarna rambut dan bahan bakar solar. Mengkonsumsi air dalam jumlah
          yang cukup atau produksi urine sekitar 1,5 liter perhari dapat
          menurunkan resiko terkena kanker kandung kemih. Konsumsi buah dan
          sayuran yang mengandung antioksidan juga terbukti dapat menurunkan
          resiko mengalami kanker kandung kemih dari beberapa studi yang sudah
          dilakukan.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flexWrap: "wrap",
  },
  heroContainer: {
    position: "relative",
    height: 200,
    overflow: "hidden",
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 60,
  },
  heroContainer2: {
    position: "relative",
    height: 200,
    overflow: "hidden",
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 5,
  },
  hero: {
    width: "100%",
    height: "100%",
  },
});
