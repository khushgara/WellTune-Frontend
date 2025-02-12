import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Add logout logic here (e.g., clear token, navigate to login)
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Welltune!</Text>
      <Text style={styles.subtitle}>You are now logged in.</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
});

export default WelcomeScreen;
