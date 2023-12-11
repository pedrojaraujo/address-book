import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { fetchDadosAPI } from "../utils/API";
import Button from "../components/common/button";

const Home = () => {
  const [dados, setDados] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosRecebidos = await fetchDadosAPI();
        setDados(dadosRecebidos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [refreshing]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Gender: {item.gender}</Text>
      <Text>Name: {item.name.first} {item.name.last}</Text>
    </View>
  );


const update = () => {
  setRefreshing(!refreshing)
  console.log("O botão foi pressionado")
}
  return (
    <View style={styles.container}>
      <Button style={styles.button}  update={update}/>
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
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 300,
    width: '100%',
  },
  item: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    padding: 10,
    width: 350,
  },

  button : {
    padding: 4,
    backgroundColor: 'gray'
  }
});

export default Home;
