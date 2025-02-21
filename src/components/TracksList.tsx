import library from "@/assets/data/library.json";
import React from "react";
import { FlatList, FlatListProps } from "react-native";
import TrackListItem from "./TrackListItem";

export type TrackListProps = Partial<FlatListProps<unknown>>;

const TracksList = ({ ...flatlistProp }: TrackListProps) => {
  return (
    <FlatList
      data={library}
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
