import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "./context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id == navigation.getParam("id")
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.text} >Blog Post id: {blogPost.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 350,
    borderWidth: 2,
    alignSelf: "center",
    marginTop: 60,
  },
  title: {
    margin: 15,
    fontSize: 25,
  },
  text: {
    fontSize: 17,
    margin: 15,
  }
});

export default ShowScreen;
