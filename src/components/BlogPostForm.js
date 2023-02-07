import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  //default olarak bunları boş atadım artık creat ekranı sorun çıkarmayacak
  initialValues: {
    title: "",
    content: "",
  },
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

export default BlogPostForm;
