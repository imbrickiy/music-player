import React, { Component } from "react";
import { Text, View } from "react-native";
import { defaultStyles } from "styles";

export class SongsScreen extends Component {
  render() {
    return (
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.text}>Whishlist screen</Text>
        {/* Add your wishlist component here */}

      </View>
    );
  }
}

export default SongsScreen;
