import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
const PlaceHolderImage = require("@/assets/images/main/IMG_6055.jpg");

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

        <Text style={styles.headerText}>Patofisiologi</Text>
        <Text style={styles.text}>
          Karakteristik paling penting yang terkait dengan agresivitas dan prognosis kanker kandung kemih adalah tingkat
          invasinya (penetrasi) ke dinding kandung kemih dan tingkat sel tumornya. Oleh karena itu, kanker kandung kemih
          diklasifikasikan menjadi MIBC dan NMIBC berdasarkan invasi tumor dan tingkat rendah dan tinggi berdasarkan karakteristik sel.
        </Text>

        <Text style={styles.text}>
          <Text style={{fontWeight:"bold"}}>Kanker kandung kemih non-invasif otot</Text> adalah karsinoma urotelial yang terbatas pada mukosa dan submukosa karena tidak
          menembus lamina propria ke lapisan otot di bawahnya. Jenis ini cenderung kurang agresif dan biasanya diobati
          dengan terapi lokal seperti reseksi transuretral. NMIBC adalah jenis kanker kandung kemih yang paling umum ditemukan
          dan mencakup sekitar 75% dari total kasus. Satu pengecualian adalah CIS, yang merupakan bentuk kanker kandung
          kemih yang agresif dan bermutu tinggi tetapi relatif jarang (1% hingga 3%) dan superfisial. Meskipun secara teknis
          non-invasif otot, biasanya dibahas dan diobati secara berbeda.
        </Text>
        
        <Text style={styles.text}>
          <Text style={{fontWeight:"bold"}}>Kanker kandung kemih invasif otot</Text> menembus lamina propria dan
          memasuki lapisan otot superfisial atau dalam kandung kemih.  Kanker ini juga dapat menyebar ke jaringan
          lain di sekitar kandung kemih atau tempat lain. MIBC mencakup sekitar 25% dari semua keganasan kandung
          kemih. Jenis kanker ini jauh lebih mungkin bermetastasis daripada NMIBC dan diobati dengan jauh lebih
          agresif, seringkali dengan pembedahan radikal dan kemoterapi. 
        </Text>

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
