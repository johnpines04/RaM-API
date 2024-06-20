import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Character } from "../types/character";
import { useNavigation } from "@react-navigation/native";

interface CharacterProps {
  character: Character;
}

const CharacterCard: FC<CharacterProps> = ({ character }) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details", character)}
    >
      <Text style={styles.text}>{character.name}</Text>
      <Image style={styles.image} source={{ uri: character.image }} />
      <Text style={styles.text}>{character.status}</Text>
    </TouchableOpacity>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
    color: "#FFFFFF",
    padding: 16,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    margin: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 2,
    margin: 10,
    resizeMode: "contain",
  },
  text: {
    color: "#FFFFFF",
  },
});
