import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
    color: "#e33e01",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default Title;
