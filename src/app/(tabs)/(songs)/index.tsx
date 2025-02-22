import { trackTitleFilter } from "@/app/helpers/filter";
import { useNavigationSearch } from "@/app/hooks/useNavigationSarch";
import lybrary from "@/assets/data/library.json";
import TracksList from "@/components/TracksList";
import { screenPadding } from "constants/tokens";
import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";
import { defaultStyles } from "styles";

const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Search songs",
      autoFocus: true,
    },
  });

  const filteredSongs = useMemo(() => {
    if (!search) return lybrary;
    return lybrary.filter(trackTitleFilter(search));
  }, [search]);

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <TracksList tracks={filteredSongs} scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
