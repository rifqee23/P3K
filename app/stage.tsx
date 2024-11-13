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
    {
      title: "Stadium 0",
      isi: "Kanker belum menyebar melewati lapisan kandung kemih.",
    },
    {
      title: "Stadium I",
      isi: "Kanker telah melewati lapisan kandung kemih, tetapi belum mencapai lapisan otot di kandung kemih.",
    },
    {
      title: "Stadium II",
      isi: "Kanker telah menyebar hingga ke lapisan otot di kandung kemih.",
    },
    {
      title: "Stadium III",
      isi: "Kanker telah menyebar ke jaringan di sekitar kandung kemih.",
    },
    {
      title: "Stadium IV",
      isi: "Kanker telah menyebar ke organ lain di sekitar kandung kemih, seperti kelenjar getah bening, tulang, hati, dan paru-paru.",
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>Stage</Text>

        <View style={styles.imgContainer}>
          <Pressable onPress={openModal}>
            <Image
              source={require("@/assets/images/main/IMG_6046.png")}
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
                source={require("@/assets/images/main/IMG_6046.png")}
                style={styles.fullImage}
              />
            </View>
          </View>
        </Modal>

        <Text style={[styles.text]}>
          Kanker kandung kemih dibagi menjadi 5 stadium, dari stadium 0 hingga
          stadium 4.
        </Text>
        <Text style={[styles.text]}>Berikut ini adalah penjelasannya :</Text>

        <View style={styles.listContainer}>
          {riskFactors.map((item, index) => (
            <View key={index} style={styles.listItemContainer}>
              <View style={styles.bullet}>
                <Text style={styles.bulletText}>{index + 1}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.listItemText, { fontWeight: "bold" }]}>
                  {item.title}
                </Text>
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
    paddingTop: 60,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
    paddingHorizontal: 16,
    marginBottom: 8,
    marginTop: 40,
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
