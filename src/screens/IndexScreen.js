import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "./context/BlogContext";
import { Entypo } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.head}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })} //show ekranına giderken yanında id nesnesinide götürüyor
            >
              <View style={styles.container}>
                <Text style={styles.text}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Entypo name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  //yukardaki gibi başka sayfaya geçerken navigation props unu vermem lazım
  return {    //burda bir nesne geri döndürüyorum
    headerRight: () => (
      <TouchableOpacity  onPress={() => navigation.navigate("Create")}>
        <Entypo style={styles.icon} name="circle-with-plus" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
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
    fontWeight: "bold",
  },
  head: {
    flex: 1,
  },
  icon: {
    margin: 10,
  }
});

export default IndexScreen;
