import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import { defaultStyles } from "styles";

const LibraryScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Library" }} />
      </Stack>
    </View>
  );
};

export default LibraryScreenLayout;
