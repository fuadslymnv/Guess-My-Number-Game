import { StyleSheet, Text } from "react-native";
import Color from "../../constants/Colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.inputText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  inputText: {
    color: Color.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
