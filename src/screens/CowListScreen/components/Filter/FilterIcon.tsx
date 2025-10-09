import { colors } from "@/utils/theme/colors";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { memo, useRef, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import FilterModal from "./FilterModal";
import { Filters } from "@/zustand/state.types";
import { imagePath } from "@/utils/assets/imagePath";

type FilterIconProps = {
    filters: Filters;
    setFilters: (filters: Filters) => void;
};

const FilterIcon = ({ filters, setFilters }: FilterIconProps) => {

    const refFilterModal = useRef<any>(null);

    const [filterCount, setFilterCount] = useState(0);

    const onFilterPress = () => {
        refFilterModal.current?.open();
    };

    const onFilterConfirm = (filters: Filters) => {
        setFilters(filters);
        setFilterCount(
            Object.values(filters).filter((f) => f !== undefined).length
        )
    };

    return (
        <View>
            <Pressable onPress={onFilterPress}>
                <Image
                    source={imagePath.filter}
                    style={{ width: 30, height: 30, tintColor: colors.appPrimary }}
                />
            </Pressable>
            {filterCount > 0 && (
                <View style={styles.filterCountContainer}>
                    <Text style={styles.filterCountText}>{filterCount}</Text>
                </View>
            )}
            <FilterModal
                ref={refFilterModal}
                setFilters={onFilterConfirm}
                filters={filters}
            />
        </View>
    )
};

export default memo(FilterIcon);

const styles = StyleSheet.create({
    filterCountContainer: {
        backgroundColor: colors.appPrimary,
        height: 20,
        width: 20,
        borderRadius: 10,
        position: "absolute",
        right: -2,
        top: -2,
        alignItems: "center",
        justifyContent: "center",
    },
    filterCountText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: "600",
    },
});