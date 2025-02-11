import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome back</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={globalStyles.linkText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={globalStyles.linkText}>New User? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
