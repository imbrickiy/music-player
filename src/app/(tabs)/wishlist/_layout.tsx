import { StackScreenWithSearchBar } from "constants/layout";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import { defaultStyles } from "styles";

const WhishlistScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ ...StackScreenWithSearchBar, headerTitle: "Whishlist" }}
        />
      </Stack>
    </View>
  );
};

export default WhishlistScreenLayout;
