import { Cow } from "@/utils/schemas/types";
import { colors } from "@/utils/theme/colors";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import React, { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DefaultText from "@/components/DefaultText";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/routeParams.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type SingleCowListItemProps = {
    item: Cow;
    index: number;
};

const SingleCowListItem = ({ item, index }: SingleCowListItemProps) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const onPress = () => {
        navigation.navigate("CowDetail", { id: item.earTag });
    }

    return (
        <Pressable onPress={onPress} style={styles.fullContainer}>
            <View style={styles.innerContainer}>
                <DefaultText color={colors.primaryText} size={16} text={item.earTag} />
                <DefaultText color={colors.appPrimary} size={16} text={item.pen} />
            </View>
            <DefaultText color={colors.secondaryText} size={16} text={item.sex} />
            <DefaultText color={colors.secondaryText} size={16} text={item.status} />
        </Pressable>
    );
};

export default memo(SingleCowListItem);

const styles = StyleSheet.create({
    fullContainer: {
        padding: styleGlobalDefinitions.cardPadding.padding,
        borderWidth: 1,
        borderColor: colors.appPrimary,
        borderRadius: styleGlobalDefinitions.borderRadius.borderRadius,
        backgroundColor: colors.white,
        marginTop: styleGlobalDefinitions.commonItemsMargin.margin,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});