import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Button from "../components/common/Button/index";
import List from "../components/common/List";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const update = () => {
    setRefreshing(!refreshing);
    console.log("O botão foi pressionado");
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button update={update} />
      </View>
      <View>
        <List refreshing={refreshing} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 100,
    width: "100%",
  },
  item: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    padding: 10,
    width: 350,
  },
});

export default Home;
