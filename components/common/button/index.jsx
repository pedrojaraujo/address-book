import React, { useState } from "react";
import { Pressable, Text, StyleSheet, Animated } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Button = ({ update }) => {
  const [animation] = useState(new Animated.Value(0));

  const handlePressIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 150, // Duração da animação em milissegundos
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["steelblue", "skyblue"],
  });

  return (
    <Animated.View style={[styles.buttonContainer, { backgroundColor }]}>
      <Pressable
        onPress={update}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.button}
      >
        <Text style={styles.text}>
          <Icon name="refresh-outline" color="#ffffff" size={30} />
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 5,
    marginVertical: 10,
    borderRadius: 5,
    width: "40%",
  },
  button: {
    padding: 5,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },
});

export default Button;
