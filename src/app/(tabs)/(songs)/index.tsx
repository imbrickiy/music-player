import React, { Component } from "react";
import { Text, View } from "react-native";
import { defaultStyles } from "styles";

export class SongsScreen extends Component {
  render() {
    return (
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.text}>Songs screen</Text>
      </View>
    );
  }
}

export default SongsScreen;
