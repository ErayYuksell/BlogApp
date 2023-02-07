import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "./context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        style={styles.button}
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, ()=> {
            navigation.navigate("Index");
          });
         
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: 350,
    height: 250,
    alignSelf: "center",
    marginTop: 60,
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    width: 300,
    marginTop: 5,
    borderRadius: 5,
    height: 30,
  },
});

export default CreateScreen;
