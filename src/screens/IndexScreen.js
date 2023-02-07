import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "./context/BlogContext";
import { Entypo } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text style={styles.text}>{item.title}</Text>
              <Entypo name="trash" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default IndexScreen;
