import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
const PlaceHolderImage = require("@/assets/images/main/IMG_6049.jpg");

export default function Etiologi() {
  const riskFactors = [
    {
      title: "Tes sitologi urine\n",
      isi: "untuk mendeteksi keberadaan sel-sel kanker di dalam sampel urine pasien.",
    },
    {
      title: "Ultrasonografi (USG)\n",
      isi: "Pemeriksaan USG dalam langkah diagnostik kanker kandung kemih memiliki peranan yang penting. Pemeriksaan ini dapat digunakan untuk melihat massa intravesika, mendeteksi adanya bekuan darah, dan melihat adanya obstruksi pada traktus urinarius bagian atas. Selain itu, USG juga berperan dalam pemantauan pasien kanker kandung kemih pasca terapi.",
    },
    {
      title: "Intravenous Urography (IVU), Computed Tomography (CT), Magnetic Resonance Imaging (MRI), dan Foto Toraks\n",
      isi: "IVU digunakan untuk mendeteksi tumor kandung kemih (berupa space occupying lession (SOL), menentuka.\n\n CT scan dengan kontras atau lazim disebut CT urografi memberikan informasi yang lebih baik dari IVU. Penggunaan CT urografi atau MRI dapat mengetahui derajat invasi tumor dan digunakan untuk mendeteksi adanya pembesaran kelenjar getah bening regional serta dapat mendeteksi adanya metastasis ke hati.",
    },
    {
      title: "Sistoskopi\n",
      isi: "Sistoskopi dilakukan bersamaan dengan biopsi/reseksi. Sistoskopi juga dikerjakan untuk evakuasi bekuan darah jika terjadi retensi urin akibat bekuan darah.",
    },
    {
      title: "Reseksi Tumor Kandung Kemih Transuretra (TUR-BT)\n",
      isi: "TUR-BT dilakukan pada KKKNIO/NMIBC dan KKKIO/MIBC memiliki tujuan yang berbeda. Pada KKKNIO/NMIBC, tujuan TUR-BT adalah untuk menegakkan diagnosis dan tatalaksana kuratif yaitu dengan menghilangkan seluruh tumor yang terlihat.",
    },
    {
      title: "Biopsi Histopatologi\n",
      isi: "Pemeriksaan patologi anatomi merupakan alat baku emas untuk menentukan diagnosis pasti, jenis, derajat diferensiasi dan derajat invasi (keterlibatan lapisan otot kandung kemih, apakah sudah atau belum mengenai lapisan otot kandung kemih), adanya carsinoma in situ (CIS) dan invasi limfovaskuler.",
    },
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

        <Text style={styles.headerText}>Pemeriksaan Penunjang</Text>
        <View style={styles.listContainer}>
          {riskFactors.map((item, index) => (
            <View key={index} style={styles.listItemContainer}>
              <View style={styles.bullet}>
                <Text style={styles.bulletText}>{index + 1}</Text>
              </View>
              <View style={{flex: 1}}>
              <Text style={[styles.listItemText, {fontWeight:"bold"}]}>{item.title}</Text>
                <Text style={styles.listItemText}>{item.isi}</Text>
              </View>
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
    flexWrap: 'wrap',
  },
  heroContainer: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 60
  },
  hero: {
    width: "100%",
    height: 280,
  },
});
