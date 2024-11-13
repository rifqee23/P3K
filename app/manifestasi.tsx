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

export default function Etiologi() {
  const riskFactors = [
    "Buang air kecil lebih sering dari biasanya.",
    "Nyeri saat berkemih atau disuria.",
    "Sering buang air kecil pada malam hari.",
    "Frekuensi buang air kecil meningkat.",
    "Sulit menahan buang air kecil (inkontinensia urine).",
    "Nyeri atau sensasi terbakar saat buang air kecil.",
    "Sering ingin buang air kecil secara tiba-tiba.",
  ];

  const riskFactors2 = [
    "Nyeri panggul",
    "Tubuh mudah lelah",
    "Hilang nafsu makan",
    "Berat badan menurun",
    "Pembengkakan di tungkai",
    "Nyeri tulang",
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        
        <Text style={styles.headerText}>Manifestasi Klinis</Text>

        <Text style={[styles.text, { fontWeight: "500" }]}>
          Trias Kanker Kandung Kemih
        </Text>
        <View style={styles.imgContainer}>
          <Pressable onPress={openModal}>
            <Image
              source={require("@/assets/images/main/IMG_6048.png")}
              style={styles.image}
            />
          </Pressable>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Pressable onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeText}>Close</Text>
              </Pressable>
              <Image
                source={require("@/assets/images/main/IMG_6048.png")}
                style={styles.fullImage}
              />
            </View>
          </View>
        </Modal>

        <Text style={[styles.text]}>
          Kanker kandung kemih bisa berkembang dan menyebar ke seluruh tubuh
          sebelum menimbulkan gejala apapun. Hal ini membuat deteksi dini
          menjadi sulit. Gejala-gejala kanker kandung kemih dapat mencakup:
        </Text>

        <Text style={[styles.text]}>
          Hematuria atau kencing berdarah adalah kondisi dimana terdapat darah
          pada urin. Terlihat pada warna urin yang berwarna kemerahan yang dapat
          dilihat secara kasat mata atau secara mikroskopis melalui pemeriksaan
          laboratorium. Haematuria dapat terjadi tanpa disertai nyeri.
        </Text>
        <Text style={[styles.text]}>Dapat disertai dengan gejala :</Text>

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

        <Text style={[styles.text]}>
          Jika kanker kandung kemih terus berkembang dan menyebar ke bagian
          tubuh lain, gejala yang muncul dapat makin beragam, di antaranya :
        </Text>

        <View style={styles.listContainer}>
          {riskFactors2.map((item, index) => (
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
    paddingTop: 90,
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
  imgContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  closeText: {
    color: "#007BFF",
    fontSize: 16,
  },
  fullImage: {
    width: "100%",
    height: 300,
  },
});
