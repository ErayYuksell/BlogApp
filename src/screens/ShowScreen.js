import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "./context/BlogContext";
import { Entypo } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id == navigation.getParam("id")
    //IndexScreen den yolladığım id nesnesi state deki blogpost id si ile eşleşen ilk elemanı tut demek bu
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.text}>Content: {blogPost.content}</Text>
      <Text style={styles.text}>Blog Post id: {blogPost.id}</Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Entypo style={styles.icon} name="edit" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
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
  },
  icon: {
    marginRight: 10,
  },
});

export default ShowScreen;
