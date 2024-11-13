import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const cardData = [
    {
      imageSrc: require("../assets/icons/introduction.png"),
      title: "Definisi",
      link: "/definisi",
    },
    {
      imageSrc: require("../assets/icons/virus.png"),
      title: "Etiologi",
      link: "/etiologi",
    },
    {
      imageSrc: require("../assets/icons/reproductive-system.png"),
      title: "Embriologi dan Proses Penurunan Testis",
      link: "/embriologi",
    },
    {
      imageSrc: require("../assets/icons/classification.png"),
      title: "Klasifikasi",
      link: "/klasifikasi",
    },
    {
      imageSrc: require("../assets/icons/diagnosis.png"),
      title: "Diagnosis",
      link: "/diagnosis",
    },
    {
      imageSrc: require("../assets/icons/all-inclusive.png"),
      title: "Tatalaksana",
      link: "/tatalaksana",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../assets/images/main/IMG_6033.jpg")}
        />
        <View>
          <View style={styles.title}>
            <Ionicons name="book" size={24} color="#333" />
            <Text style={styles.textTitle}>About</Text>
          </View>
          <View style={styles.main}>
            <Card
              imageSrc={require("../assets/icons/mobile.png")}
              title={"Tentang Aplikasi"}
              href={"/about"}
              styleCard={{ width: "100%" }}
            />
          </View>

          <View style={styles.title}>
            <Ionicons name="book" size={24} color="#333" />
            <Text style={styles.textTitle}>Materi</Text>
          </View>
          <View style={styles.mainContent}>
            {cardData.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                href={card.link}
                styleCard={{ width: "100%" }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  textTitle: { marginLeft: 10, fontSize: 18, fontWeight: "700", color: "#333" },

  main: {
    paddingBottom: 20,
  },
  mainContent: {
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-between",
  },
  cardAbout: {},
});
