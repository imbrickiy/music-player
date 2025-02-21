import TracksList from "@/components/TracksList";
import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { defaultStyles } from "styles";

export class SongsScreen extends Component {
  render() {
    return (
      <View style={defaultStyles.container}>
        {/* <Text style={defaultStyles.text}>Songs screen</Text> */}
        <ScrollView>
          <TracksList scrollEnabled={false} />
        </ScrollView>
      </View>
    );
  }
}

export default SongsScreen;
