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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    width: "100%",
  },
  buttonContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "flex-end",
/*     borderColor: "red",
    borderWidth: 3, */
    width: '100%',
    paddingRight: 20
   
  },
});

export default Home;
