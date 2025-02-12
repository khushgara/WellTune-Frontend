import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomNav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image source={require("../assets/home.png")} style={styles.navIcon} />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Explore")}
      >
        <Image
          source={require("../assets/search.png")}
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("MyPlan")}
      >
        <Image
          source={require("../assets/calendar.png")}
          style={styles.navIcon}
        />
        <Text style={styles.navText}>My Plan</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image source={require("../assets/user.png")} style={styles.navIcon} />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#f0f2f4",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    color: "#637488",
  },
});

export default BottomNav;
