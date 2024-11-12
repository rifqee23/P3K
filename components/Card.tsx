import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Link } from "expo-router";

type Props = {
  imageSrc: ImageSourcePropType;
  title: string;
  href: string;
  styleCard?: StyleProp<ViewStyle>;
};

export default function Card({ imageSrc, title, href, styleCard }: Props) {
  return (
    <View style={[styles.card, styleCard]}>
      <Image style={styles.subImg} source={imageSrc} />
      <Text style={styles.textSubTitle}>{title}</Text>
      <Link style={styles.subButton} href={href as any}>
        Mulai
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "45%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    justifyContent: "space-between",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    marginVertical: 10,
  },
  subButton: {
    backgroundColor: "#0077b6",
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    color: "#fff",
    textAlign: "center",
    width: "100%",
    fontWeight: "600",
  },
  subImg: {
    width: 75,
    height: 75,
    borderRadius: 30,
    marginBottom: 15,
  },
  textSubTitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
    marginBottom: 8,
  },
});
