import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 10,
  },
});

export default Title;
