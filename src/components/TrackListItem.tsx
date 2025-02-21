import { unknownTrackImageUri } from "constants/images";
import { colors, fontSize } from "constants/tokens";
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import FastImage from "react-native-fast-image";
import { defaultStyles } from "styles";

export type TrackListItemProps = {
  track: { track: string; image?: string; artist?: string; title?: string };
};

const TrackListItem = ({ track }: TrackListItemProps) => {
  const isActiveTrack = false;
  return (
    <TouchableHighlight>
      <View style={styles.trackListItemContainer}>
        <View>
          <FastImage
            source={{
              uri: track.image ?? unknownTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={{
              ...styles.trackArtworkImage,
              opacity: isActiveTrack ? 0.6 : 1,
            }}
          />
        </View>

        <View style={{ width: "100%" }}>
          <Text
            numberOfLines={1}
            style={{
              ...styles.trackTitleText,
              color: isActiveTrack ? colors.primary : colors.text,
            }}
          >
            {track.title}
          </Text>
          {track.artist && (
            <Text
              numberOfLines={1}
              style={{
                ...styles.trackArtistText,
              }}
            >
              {track.artist}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default TrackListItem;

const styles = StyleSheet.create({
  trackListItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  trackArtworkImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: "600",
    maxWidth: "90%",
    fontFamily: "Montserrat-ExtraBold",
  },
  trackArtistText: {
    ...defaultStyles.text,
    fontSize: fontSize.xsm,
    fontWeight: "600",
    fontFamily: "Montserrat-Regular",
    color: colors.muted,
    marginTop: 4,
  },
});
