import { View, StyleSheet } from "react-native";
import Color from "../../constants/Colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 36,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Color.primary700,
    borderRadius: 8,
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
