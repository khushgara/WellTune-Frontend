import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import BottomNav from "../components/BottomNav";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Image
            source={require("../assets/setting.png")}
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Greeting Section */}
      <ScrollView>
        <View style={styles.greetingSection}>
          <Text style={styles.greetingText}>Good evening, it's 9:41pm</Text>
          <View style={styles.profileSection}>
            <Image
              source={require("../assets/user.png")}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Katherine</Text>
            <Text style={styles.profileSubtext}>
              How are you feeling today?
            </Text>
            <TouchableOpacity style={styles.logDayButton}>
              <Text style={styles.buttonText}>Log Your Day</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Workout Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Workout Summary</Text>
          <View style={styles.summaryItem}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/checked.png")}
                style={styles.icon}
              />
            </View>
            <Text style={styles.summaryText}>
              You've worked out 3 times this week
            </Text>
          </View>
          <View style={styles.summaryItem}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/checked.png")}
                style={styles.icon}
              />
            </View>
            <Text style={styles.summaryText}>You're on a 3-day streak</Text>
          </View>
          <View style={styles.summaryItem}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/trophy.png")}
                style={styles.icon}
              />
            </View>
            <Text style={styles.summaryText}>
              Keep going to beat your record
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.quickActionsContainer}>
              <TouchableOpacity style={styles.quickAction}>
                <Image
                  source={require("../assets/yoga.png")}
                  style={styles.quickActionImage}
                />
                <Text style={styles.quickActionText}>Yoga</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickAction}>
                <Image
                  source={require("../assets/meditation.png")}
                  style={styles.quickActionImage}
                />
                <Text style={styles.quickActionText}>Meditation</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickAction}>
                <Image
                  source={require("../assets/running.png")}
                  style={styles.quickActionImage}
                />
                <Text style={styles.quickActionText}>Running</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
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
            source={require("../assets/calendar.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>My Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../assets/user.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View> */}
      <BottomNav />
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
    justifyContent: "flex-end",
    padding: 16,
  },
  settingsButton: {
    padding: 8,
  },
  settingsIcon: {
    width: 24,
    height: 24,
  },
  greetingSection: {
    padding: 16,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111418",
    textAlign: "center",
    marginBottom: 16,
  },
  profileSection: {
    alignItems: "center",
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
  profileSubtext: {
    fontSize: 16,
    color: "#637488",
    marginBottom: 16,
  },
  logDayButton: {
    backgroundColor: "#f0f2f4",
    padding: 10,
    borderRadius: 20,
    width: "100%",
    maxWidth: 480,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#111418",
    marginBottom: 16,
  },
  summaryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f2f4",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#f0f2f4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  summaryText: {
    fontSize: 16,
    color: "#111418",
    flex: 1,
  },
  quickActionsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  quickAction: {
    width: 160,
    marginRight: 16,
  },
  quickActionImage: {
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  quickActionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111418",
    marginTop: 8,
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

export default DashboardScreen;
