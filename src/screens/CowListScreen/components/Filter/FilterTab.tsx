import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { memo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SingleFilterTab from "./SingleFilterTab";

type FilterTabProps = {
  tabs: string[];
  selectedValue: string;
  setSelectedValue: (value: any) => void;
};

const FilterTab = ({
  tabs,
  selectedValue,
  setSelectedValue,
}: FilterTabProps) => {
  return (
    <View style={styles.fullContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tabs.map((tab) => (
          <SingleFilterTab
            key={tab}
            title={tab}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default memo(FilterTab);

const styles = StyleSheet.create({
  fullContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0.5 * styleGlobalDefinitions.commonItemsMargin.margin,
  },
});
