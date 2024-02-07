import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/app/index";
import UserDetails from "./src/pages/UserDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Início" component={Home} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
