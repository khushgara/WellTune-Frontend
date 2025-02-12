import React, { useContext } from "react"; // Add useContext here
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import BottomNav from "../components/BottomNav";
import { DarkModeContext } from "../context/DarkModeContext";

const ProfileScreen = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const navigation = useNavigation(); // Initialize navigation

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  // Dynamic styles based on Dark Mode
  const dynamicStyles = {
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? "#121212" : "#fff",
    },
    text: {
      color: isDarkMode ? "#fff" : "#111418",
    },
    section: {
      backgroundColor: isDarkMode ? "#1E1E1E" : "#f0f2f4",
    },
  };

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, dynamicStyles.text]}>Profile</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Image
            source={require("../assets/setting.png")}
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Profile Details */}
      <ScrollView>
        <View style={styles.profileSection}>
          <Image
            source={require("../assets/user.png")}
            style={styles.profileImage}
          />
          <Text style={[styles.profileName, dynamicStyles.text]}>
            Kaitlyn000, 23
          </Text>
          <Text style={[styles.profileInfo, dynamicStyles.text]}>
            Joined in 2021
          </Text>
          <Text style={[styles.profileInfo, dynamicStyles.text]}>
            San Francisco, CA
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addFriendButton}>
              <Text style={styles.buttonText}>Add Friends</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Fitness Goals */}
        <View style={[styles.section, dynamicStyles.section]}>
          <Text style={[styles.sectionTitle, dynamicStyles.text]}>
            Fitness Goals
          </Text>
          <View style={styles.goalItem}>
            <Text style={[styles.goalText, dynamicStyles.text]}>
              Meditation
            </Text>
            <Text style={[styles.goalDays, dynamicStyles.text]}>
              5 days left
            </Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={[styles.goalText, dynamicStyles.text]}>Sleep</Text>
            <Text style={[styles.goalDays, dynamicStyles.text]}>
              4 days left
            </Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={[styles.goalText, dynamicStyles.text]}>Strength</Text>
            <Text style={[styles.goalDays, dynamicStyles.text]}>
              4 days left
            </Text>
          </View>
        </View>

        {/* Progress Stats */}
        <View style={[styles.section, dynamicStyles.section]}>
          <Text style={[styles.sectionTitle, dynamicStyles.text]}>
            Progress Stats
          </Text>
          <View style={styles.statItem}>
            <Text style={[styles.statText, dynamicStyles.text]}>
              Total Workouts
            </Text>
            <Text style={[styles.statValue, dynamicStyles.text]}>120</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statText, dynamicStyles.text]}>
              Total Minutes
            </Text>
            <Text style={[styles.statValue, dynamicStyles.text]}>600</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statText, dynamicStyles.text]}>
              Total Days Active
            </Text>
            <Text style={[styles.statValue, dynamicStyles.text]}>30</Text>
          </View>
        </View>

        {/* Preferences */}
        <View style={[styles.section, dynamicStyles.section]}>
          <Text style={[styles.sectionTitle, dynamicStyles.text]}>
            Preferences
          </Text>
          <TouchableOpacity
            style={[styles.preferenceItem, dynamicStyles.section]}
            onPress={toggleDarkMode} // Toggle Dark Mode
          >
            <Text style={[styles.preferenceText, dynamicStyles.text]}>
              Dark Mode
            </Text>
            <Text style={[styles.preferenceSubtext, dynamicStyles.text]}>
              {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
            </Text>
          </TouchableOpacity>
          <View style={[styles.preferenceItem, dynamicStyles.section]}>
            <Text style={[styles.preferenceText, dynamicStyles.text]}>
              Notifications
            </Text>
            <Text style={[styles.preferenceSubtext, dynamicStyles.text]}>
              Allow Welltune to send you notifications
            </Text>
            <TouchableOpacity style={[styles.toggleButton, dynamicStyles.text]}>
              <View style={[styles.toggleCircle, dynamicStyles.text]} />
            </TouchableOpacity>
          </View>
          <View style={[styles.preferenceItem, dynamicStyles.section]}>
            <Text style={[styles.preferenceText, dynamicStyles.text]}>
              Goals
            </Text>
            <Text style={[styles.preferenceSubtext, dynamicStyles.text]}>
              Set and manage your fitness goals
            </Text>
            <TouchableOpacity
              style={[styles.setGoalButton, dynamicStyles.text]}
            >
              <Text style={[styles.setGoalText, dynamicStyles.text]}>
                Set Goal
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity
          style={[styles.signOutButton, dynamicStyles.section]}
          onPress={handleLogout}
        >
          <Text style={[styles.signOutText, dynamicStyles.text]}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  settingsButton: {
    padding: 8,
  },
  settingsIcon: {
    width: 24,
    height: 24,
  },
  profileSection: {
    alignItems: "center",
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  profileInfo: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    width: "100%",
  },
  editButton: {
    backgroundColor: "#f0f2f4",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    marginRight: 8,
    alignItems: "center",
  },
  addFriendButton: {
    backgroundColor: "#1979e6",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    marginLeft: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  section: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  goalText: {
    fontSize: 16,
  },
  goalDays: {
    fontSize: 16,
  },
  statItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  statText: {
    fontSize: 16,
  },
  statValue: {
    fontSize: 16,
  },
  preferenceItem: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  preferenceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  preferenceSubtext: {
    fontSize: 14,
  },
  toggleButton: {
    width: 51,
    height: 31,
    borderRadius: 15,
    backgroundColor: "#f0f2f4",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  toggleCircle: {
    width: 27,
    height: 27,
    borderRadius: 13,
    backgroundColor: "#fff",
  },
  setGoalButton: {
    backgroundColor: "#f0f2f4",
    padding: 8,
    borderRadius: 20,
  },
  setGoalText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  signOutButton: {
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    margin: 16,
  },
  signOutText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
