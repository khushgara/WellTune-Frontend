import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
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
          <Text style={styles.profileName}>Kaitlyn000, 23</Text>
          <Text style={styles.profileInfo}>Joined in 2021</Text>
          <Text style={styles.profileInfo}>San Francisco, CA</Text>
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
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fitness Goals</Text>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>Meditation</Text>
            <Text style={styles.goalDays}>5 days left</Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>Sleep</Text>
            <Text style={styles.goalDays}>4 days left</Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>Strength</Text>
            <Text style={styles.goalDays}>4 days left</Text>
          </View>
        </View>

        {/* Progress Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Progress Stats</Text>
          <View style={styles.statItem}>
            <Text style={styles.statText}>Total Workouts</Text>
            <Text style={styles.statValue}>120</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statText}>Total Minutes</Text>
            <Text style={styles.statValue}>600</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statText}>Total Days Active</Text>
            <Text style={styles.statValue}>30</Text>
          </View>
        </View>

        {/* Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceText}>Dark Mode</Text>
            <Text style={styles.preferenceSubtext}>
              Use dark mode for a better experience
            </Text>
            <TouchableOpacity style={styles.toggleButton}>
              <View style={styles.toggleCircle} />
            </TouchableOpacity>
          </View>
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceText}>Notifications</Text>
            <Text style={styles.preferenceSubtext}>
              Allow Welltune to send you notifications
            </Text>
            <TouchableOpacity style={styles.toggleButton}>
              <View style={styles.toggleCircle} />
            </TouchableOpacity>
          </View>
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceText}>Goals</Text>
            <Text style={styles.preferenceSubtext}>
              Set and manage your fitness goals
            </Text>
            <TouchableOpacity style={styles.setGoalButton}>
              <Text style={styles.setGoalText}>Set Goal</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../assets/home.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../assets/search.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../assets/friends.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../assets/user.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f2f4",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111418",
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
    color: "#111418",
  },
  profileInfo: {
    fontSize: 16,
    color: "#637488",
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
    color: "#111418",
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111418",
    marginBottom: 16,
  },
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f2f4",
  },
  goalText: {
    fontSize: 16,
    color: "#111418",
  },
  goalDays: {
    fontSize: 16,
    color: "#111418",
  },
  statItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f2f4",
  },
  statText: {
    fontSize: 16,
    color: "#111418",
  },
  statValue: {
    fontSize: 16,
    color: "#111418",
  },
  preferenceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f2f4",
  },
  preferenceText: {
    fontSize: 16,
    color: "#111418",
  },
  preferenceSubtext: {
    fontSize: 14,
    color: "#637488",
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
    color: "#111418",
  },
  signOutButton: {
    backgroundColor: "#f0f2f4",
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    margin: 16,
  },
  signOutText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111418",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#f0f2f4",
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

export default ProfileScreen;
