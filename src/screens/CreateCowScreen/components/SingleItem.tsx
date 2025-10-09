import DefaultText from "@/components/DefaultText";
import { colors } from "@/utils/theme/colors";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { memo } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type SingleItemProps = {
    item: any;
    index: number;
    selectedItem: any;
    onSelect: (item: any) => void;
}

const SingleItem = ({ item, index, selectedItem, onSelect }: SingleItemProps) => {

    const onPress = () => {
        onSelect(item);
    }

    return (<Pressable
        onPress={onPress}
        style={[styles.singleTabContainer, { backgroundColor: selectedItem === item ? colors.appPrimary : colors.appSecondary, marginLeft: index == 0 ? 0 : styleGlobalDefinitions.commonItemsMargin.margin * 0.5 }]}
    >
        <DefaultText color={selectedItem === item ? colors.white : colors.appPrimary} size={16} text={item} />
    </Pressable >)
};

export default memo(SingleItem);

const styles = StyleSheet.create({
    singleTabContainer: {
        backgroundColor: "#F5F5F5",
        padding: styleGlobalDefinitions.cardPadding.padding,
        borderRadius: styleGlobalDefinitions.borderRadius.borderRadius,
        marginTop: styleGlobalDefinitions.commonItemsMargin.margin,
    },
});