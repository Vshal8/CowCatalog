import AddButton from "@/screens/CowListScreen/components/AddButton";
import PrimaryTextInput from "@/components/PrimaryTextInput";
import WrapperContainer from "@/components/WrapperContainer";
import { RootStackParamList } from "@/navigation/routeParams.types";
import { Cow } from "@/utils/schemas/types";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { globalStyles } from "@/utils/theme/globalStyles";
import { Filters } from "@/zustand/state.types";
import { useCowStore } from "@/zustand/store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SingleCowListItem from "./components/CowListCard";
import AppHeader from "@/components/AppHeader";
import FilterIcon from "./components/Filter/FilterIcon";
import ListEmptyContainer from "./components/ListEmptyContainer";

export default function CowListScreen() {

  const { cows, filterCows } = useCowStore();

  const [searchQuery, setSearchQuery] = useState("");

  const [filters, setFilters] = useState<Filters>({
    status: undefined,
    pen: undefined,
  });

  const onFiltersSelect = (filters: Filters) => {
    setFilters(filters);
    filterCows(filters, searchQuery);
  };

  const onSearch = (query: string) => {
    setSearchQuery(query);
    filterCows(filters, query);
  };

  const renderCowItem = useCallback(
    ({ item, index }: { item: Cow; index: number }) => {
      return <SingleCowListItem item={item} index={index} />;
    },
    [cows]
  );

  const ListEmptyComponent = useCallback(() => {
    return (
      <ListEmptyContainer />
    );
  }, []);

  const keyExtractor = useCallback((item: Cow) => item.earTag.toString(), []);

  console.log('cows', cows);

  return (
    <WrapperContainer>
      <View style={globalStyles.flexFull}>
        <AppHeader showBackIcon={false} headerTitle="Cows" />
        <View style={globalStyles.screenContainer}>
          <View style={styles.filterContainer}>
            <PrimaryTextInput
              value={searchQuery}
              onChangeText={onSearch}
              placeholder="Search by ear tag"
              customStyles={globalStyles.flexFull}
            />
            <FilterIcon filters={filters} setFilters={onFiltersSelect} />
          </View>
          <FlatList
            data={cows}
            renderItem={renderCowItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={ListEmptyComponent}
            contentContainerStyle={styles.contentContainer}
          />
          <AddButton />
        </View>
      </View>
    </WrapperContainer>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: styleGlobalDefinitions.commonItemsMargin.margin,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
});
