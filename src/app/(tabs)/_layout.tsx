import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, fontSize } from "constants/tokens";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

const TabsNavigation = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: "600",
        },
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          paddingTop: 0,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={10}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: "hidden",
              backgroundColor: colors.backgroundTabBar,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Whishlist",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="heart" size={25} color={color} />
            ) : (
              <FontAwesome name="heart-o" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialIcons name="playlist-play" size={25} color={color} />
            ) : (
              <MaterialIcons name="playlist-play" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="(songs)"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="search" size={25} color={color} />
            ) : (
              <FontAwesome name="search" size={20} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="artists"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialIcons name="home" size={25} color={color} />
            ) : (
              <MaterialIcons name="home" size={20} color={color} />
            ),
        }}
      />
    </Tabs>
  );
};

export default TabsNavigation;
