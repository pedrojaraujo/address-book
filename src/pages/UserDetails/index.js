import { StyleSheet, View, Text } from "react-native";
import { Button } from "@rneui/themed";
import { Icon } from "@rneui/themed";

const UserDetails = ({ route, navigation }) => {
  const { userData } = route.params;

  return (
    <View style={styles.container}>
      <Text>Gender: {userData.gender}</Text>
      <Text>
        Name: {userData.name.first} {userData.name.last}
      </Text>
      <Text>Email: {userData.email}</Text>
      <Text>Phone: {userData.phone}</Text>
      <Text>Cell: {userData.cell}</Text>
      <Button
        onPress={() => navigation.goBack()}
        containerStyle={{
          width: "15%",
          marginTop: 20,
        }}
        radius={"sm"}
        type="solid"
      >
        <Icon
          name="backward"
          type="font-awesome"
          color="white"
          containerStyle={{
            flex: 1,
            alignItems: "flex-start",
            
          }}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: "4%",
    paddingBottom: 100,
  },
});

export default UserDetails;
