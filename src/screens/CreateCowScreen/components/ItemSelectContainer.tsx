import DefaultText from "@/components/DefaultText";
import { colors } from "@/utils/theme/colors";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { memo } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import SingleItem from "./SingleItem";

type ItemSelectContainerProps = {
    data: any[];
    onSelect: (item: any) => void;
    selectedItem: any;
    title: string;
}

const ItemSelectContainer = ({ data, selectedItem, onSelect, title }: ItemSelectContainerProps) => {
    return (
        <View style={styles.fullContainer}>
            <DefaultText color={colors.appPrimary} size={16} text={title} />
            <View style={styles.inputContainer}>
                {data.map((item,index) => (
                    <SingleItem key={`${title }-${index}`} item={item} index={index} selectedItem={selectedItem} onSelect={onSelect} />
                ))}
            </View>
        </View>
    )
};

export default memo(ItemSelectContainer);

const styles = StyleSheet.create({
    fullContainer: {
        marginTop: styleGlobalDefinitions.commonItemsMargin.margin,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
});