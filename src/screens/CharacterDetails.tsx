import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Character } from "../types/character";
import { useRoute } from "@react-navigation/native";

const CharacterDetails = () => {
  const route = useRoute<any>();

  const { id, name, status, species, type, gender, origin ,location,image,episode,url,created } =
    route.params as Character;
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text} >{id} - {name}</Text>
      <Image style={styles.image} source={{ uri: image}} />
      <Text style={styles.text}>{status}</Text>
      <Text style={styles.text}>{species} - {gender}</Text>
      <Text style={styles.text}>{origin.name} - {location.name}</Text>
<>
{
  episode.map((e, index) => {
    return (
      <Text key={index} style={styles.text}>{e}</Text>
    )
  })
}
</>
      </ScrollView>
    </View>
  );
};

export default CharacterDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
    color: "#FFFFFF",
  },
  name: {
    width: 300,
    height: 200,
    borderRadius: 2,
    margin: 10,
    resizeMode: "contain",
  },
  text: {
    color: "#FFFFFF",
    margin: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 2,
    margin: 10,
    resizeMode: "contain",
  },
});
