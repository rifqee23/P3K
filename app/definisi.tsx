import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
const PlaceHolderImage = require("@/assets/images/main/IMG_6052.png");

export default function definisi() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
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

        <Text style={styles.headerText}>Definisi</Text>
        <Text style={styles.text}>
          Kanker kandung kemih atau kanker buli berasal dari dalam organ kandung
          kemih. Organ ini tergolong dalam sistem genitourinari, merupakan organ
          berongga yang terletak di bagian bawah panggul, berfungsi sebagai
          tempat penampungan urin. Gejala yang muncul pada kanker kandung kemih
          adalah bak darah, tidak nyeri, dan intermittent.
        </Text>

        <Text style={styles.text}>
          Pada fase awal, seringkali gejala yang timbul tidak khas dan
          menyerupai penyakit urologi lain seperti batu pada saluran kemih, dan
          infeksi saluran kemih. Karena alasan ini, diperlukan evaluasi oleh
          seorang dokter ahli urologi. Secara umum, kanker kandung kemih dapat
          diobati melalui berbagai metode termasuk operasi, kemoterapi, dan
          pendekatan pengobatan kanker lainnya.
        </Text>

        <Text style={styles.text}>
          Karsinoma kandung kemih (ca buli-buli) adalah suatu penyakit keganasan
          yang mengenai kandung kemih dan menempati urutan ke 4 keganasan pada
          laki-laki, dan urutan ke 12 pada perempuan. Kejadian penyakit ini
          lebih tinggi pada orang kulit putih dibanding kulit hitam dan lebih
          sering pada laki-laki dibandingkan perempuan, dan terbanyak dijumpai
          pada usia 60-70 tahun.
        </Text>
        <View style={styles.imgContainer}>
          <Pressable onPress={openModal}>
            <Image
              source={require("@/assets/images/main/IMG_6050.jpg")}
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
                source={require("@/assets/images/main/IMG_6050.jpg")}
                style={styles.fullImage}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
    paddingHorizontal: 16,
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4a4a4a",
    marginBottom: 16,
    marginTop: 8,
    textAlign: "justify",
    paddingHorizontal: 16,
  },
  heroContainer: {
    position: "relative",
    height: 200, // Atur tinggi sesuai kebutuhan
    overflow: "hidden",
    borderRadius: 12, // Menambah efek border radius jika dibutuhkan
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
