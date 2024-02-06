import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { fetchDadosAPI } from "../utils/API";

const Home = () => {
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
      <Text>Gender: {item.gender}</Text>
      <Text>
        Name: {item.name.first} {item.name.last}
      </Text>
      <Button
        title="Detalhes"
        onPress={() => {
          navigation.navigate("UserDetails", {
            userData: item,
          });
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Refresh" onPress={() => randomUser()} />
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
    flex: 6,
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 300,
    width: "100%",
    paddingTop: 30,
    gap: 50,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    width: "100%",
  },
});

export default Home;
