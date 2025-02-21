import TracksList from "@/components/TracksList";
import { screenPadding } from "constants/tokens";
import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { defaultStyles } from "styles";

export class SongsScreen extends Component {
  render() {
    return (
      <View style={defaultStyles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ paddingHorizontal: screenPadding.horizontal }}
        >
          <TracksList scrollEnabled={false} />
        </ScrollView>
      </View>
    );
  }
}

export default SongsScreen;
