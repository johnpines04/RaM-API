import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Character, CharacterResponse } from "../types/character";
import CharacterCard from "../components/CharacterCard";

const Home = () => {
  const [CharacterList, setCharacterList] = useState<Character[]>([]);
  const URL = "https://rickandmortyapi.com/api/character";

  const getCharacters = async () => {
    try {
      const response = await axios.get<CharacterResponse>(
        `${URL}`
      );
      setCharacterList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Personagens</Text>
      <FlatList
        data={CharacterList}
        renderItem={({ item }) => <CharacterCard character={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a349a4",
    color: "#FFFFFF",
    padding: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 22,
  },
});
