import { Pressable, Text } from "react-native";

const Button = ({ update }) => {
  return (
    <Pressable onPress={update}>
      <Text>You can press me</Text>
    </Pressable>
  );
};

export default Button;
