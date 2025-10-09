import CommonButton from "@/components/CommonButton";
import RbSheet from "@/components/RbSheet";
import { eCowPen, eCowStatus } from "@/utils/schemas/types";
import { colors } from "@/utils/theme/colors";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { getScaledFontSize, globalStyles, windowHeight } from "@/utils/theme/globalStyles";
import { Filters } from "@/zustand/state.types";
import { forwardRef, memo, useImperativeHandle, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FilterTab from "./FilterTab";
import { fonts } from "@/utils/assets/fonts";

interface iProps {
  setFilters: (filters: Filters) => void;
  filters: Filters;
}

const statuses = [
  eCowStatus.Active,
  eCowStatus.InTreatment,
  eCowStatus.Deceased,
];

const pens = [
  eCowPen.A1,
  eCowPen.B2,
  eCowPen.Quarantine,
  eCowPen.Feeding,
  eCowPen.Milking,
  eCowPen.Other,
];

const FilterModal = forwardRef((props: iProps, ref) => {
  const refRBSheet = useRef<any>(null);

  const [selectedStatus, setSelectedStatus] = useState<eCowStatus | undefined>(
    undefined
  );
  const [pen, setPen] = useState<eCowPen | undefined>(undefined);

  useImperativeHandle(ref, () => ({
    open: () => {
      refRBSheet.current?.open();
    },
  }));

  const onClear = () => {
    props.setFilters({ status: undefined, pen: undefined });
    setSelectedStatus(undefined);
    setPen(undefined);
    refRBSheet.current?.close();
  };

  const onFilter = () => {
    props.setFilters({ status: selectedStatus, pen: pen });
    refRBSheet.current?.close();
  };

  return (
    <RbSheet ref={refRBSheet} height={windowHeight * 0.5}>
      <View style={globalStyles.flexFull}>
        <Text style={styles.filterText}>Filter by status</Text>
        <FilterTab
          tabs={statuses}
          selectedValue={selectedStatus || ""}
          setSelectedValue={setSelectedStatus}
        />
        <Text style={styles.filterText}>
          Filter by pen
        </Text>
        <FilterTab
          tabs={pens}
          selectedValue={pen || ""}
          setSelectedValue={setPen}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CommonButton
          title="Clear"
          onPress={onClear}
          customStyles={styles.clearButton}
          outlined
        />
        <CommonButton
          title="Filter"
          onPress={onFilter}
          customStyles={styles.clearButton}
        />
      </View>
    </RbSheet>
  );
});

const styles = StyleSheet.create({
  filterText: {
    fontSize: getScaledFontSize(18),
    fontFamily: fonts.bold,
    color: colors.secondaryText,
    marginTop: styleGlobalDefinitions.commonItemsMargin.margin
  },
  clearButton: {
    width: "48%",
    paddingVertical: styleGlobalDefinitions.cardPadding.padding * 0.5,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: "4%",
  },
});

export default memo(FilterModal);
