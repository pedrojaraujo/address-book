import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { fetchDadosAPI } from "../utils/API";
import { Icon } from "@rneui/themed";
import { Button } from "@rneui/themed";

const Users = ({ navigation }) => {
  const [dados, setDados] = useState(null);

  const fetchData = async () => {
    try {
      const dadosRecebidos = await fetchDadosAPI();
      setDados(dadosRecebidos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const randomUser = () => {
    fetchData();
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.titleText}>
        Name: {item.name.first} {item.name.last}
      </Text>
      <Text>Gender: {item.gender}</Text>
      <Button
        containerStyle={{
          width: '80%',
          marginRight: "70%",
        }}
        style={styles.refreshButton}
        radius={"sm"}
        type="solid"
        onPress={() => {
          navigation.navigate("UserDetails", {
            userData: item,
          });
        }}
      >
        Detalhes
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button
        containerStyle={{
          width: 80,
          marginLeft: "70%",
        }}
        style={styles.refreshButton}
        radius={"sm"}
        type="solid"
        onPress={() => randomUser()}
      >
        <Icon name="refresh" color="white" />
      </Button>
      {dados && dados.results ? (
        <FlatList
          data={dados.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.login.uuid}
        />
      ) : (
        <Text>Carregando dados...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "start",
    marginTop: 250,
    width: "100%",
    paddingTop: 30,
    gap: 10,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    width: "100%",
    paddingStart: 10,
    gap: 5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Users;
