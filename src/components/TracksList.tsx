import library from "@/assets/data/library.json";
import React from "react";
import { FlatList, FlatListProps, View } from "react-native";
import { utilsStyles } from "styles";
import TrackListItem from "./TrackListItem";

export type TrackListProps = Partial<FlatListProps<unknown>> & {
  tracks: any[];
}

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 8, marginLeft: 50 }}
  />
);

const TracksList = ({ tracks,...flatlistProp }: TrackListProps) => {
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ListFooterComponent={ItemDivider}
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
