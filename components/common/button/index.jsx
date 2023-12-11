import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({ update }) => {
  return (
    <Pressable onPress={update} style={styles.button}>
      <Text style={styles.text}>Atualizar página!</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    padding: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
  },
});
export default Button;
