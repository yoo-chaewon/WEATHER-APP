import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#000000", "#434343"],
    title: "지금날씨,",
    subtitle: "천둥이다 ⚡️"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#d7d2cc", "#304352"],
    title: "지금날씨,",
    subtitle: "부슬부슬 💧"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#24C6DC", "#514A9D"],
    title: "지금날씨, ",
    subtitle: "비온다 🌧"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
    title: "지금날씨, ",
    subtitle: "눈온다 ☃️"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#2c3e50", "#bdc3c7"],
    title: "지금날씨, ",
    subtitle: "흐리다 🌫"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#5B86E5", "#36D1DC"],
    title: "지금날씨,",
    subtitle: "맑다 ☀️"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#2c3e50", "#2980b9"],
    title: "지금날씨",
    subtitle: ", 구름이다 ☁️"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "지금날씨,",
    subtitle: "습하다 💦"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#00223E", "#FFA17F"],
    title: "지금날씨,",
    subtitle: "우엑 먼지다 🤬"
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#00416A", "#E4E5E6"],
    title: "지금날씨, ",
    subtitle: "안개 😎"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
      "Thunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds",
      "Haze",
      "Mist",
      "Dust"
    ]).isRequired
  };

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    color: "white",
    fontSize: 44,
    fontWeight: "800",
    textAlign: "left"
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1
  }
});