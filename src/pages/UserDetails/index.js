const UserDetails = ({ route }) => {
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
          title="Voltar"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  export default UserDetails;
