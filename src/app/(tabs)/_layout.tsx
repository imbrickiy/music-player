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
      <Tabs.Screen name="wishlist" />
      <Tabs.Screen name="library" />
      <Tabs.Screen name="(songs)" />
      <Tabs.Screen name="artists" />
    </Tabs>
  );
};

export default TabsNavigation;
