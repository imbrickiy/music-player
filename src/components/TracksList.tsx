import library from "@/assets/data/library.json";
import React from "react";
import { FlatList, FlatListProps, View } from "react-native";
import { utilsStyles } from "styles";
import TrackListItem from "./TrackListItem";

export type TrackListProps = Partial<FlatListProps<unknown>>;

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 8, marginLeft: 60 }}
  />
);

const TracksList = ({ ...flatlistProp }: TrackListProps) => {
  return (
    <FlatList
      data={library}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            ...track,
            image: track.artwork,
          }}
        />
      )}
      {...flatlistProp}
    />
  );
};

export default TracksList;
