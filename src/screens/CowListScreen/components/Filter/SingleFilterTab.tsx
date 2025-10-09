import { fonts } from "@/utils/assets/fonts";
import { colors } from "@/utils/theme/colors";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { getScaledFontSize } from "@/utils/theme/globalStyles";
import React, { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type SingleFilterTabProps = {
    title: string;
    selectedValue: string;
    setSelectedValue: (value: string) => void;
};

const SingleFilterTab = ({ title, selectedValue, setSelectedValue }: SingleFilterTabProps) => {

    const onSingleTabPress = () => {
        if (selectedValue === title) {
            setSelectedValue("");
        } else {
            setSelectedValue(title);
        }
    };

    return (
        <Pressable
            onPress={onSingleTabPress}
            style={[
                styles.statusButton,
                selectedValue === title && styles.statusButtonActive,
            ]}
        >
            <Text
                style={[
                    styles.statusText,
                    selectedValue === title && styles.statusTextActive,
                ]}
            >
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    statusButton: {
        paddingVertical: styleGlobalDefinitions.cardPadding.padding * 0.5,
        paddingHorizontal: styleGlobalDefinitions.cardPadding.padding,
        borderRadius: styleGlobalDefinitions.borderRadius.borderRadius,
        backgroundColor: colors.appSecondary,
        marginRight: 0.5 * styleGlobalDefinitions.commonItemsMargin.margin,
    },
    statusButtonActive: {
        backgroundColor: colors.appPrimary,
    },
    statusText: {
        fontSize: getScaledFontSize(14),
        fontFamily: fonts.medium,
        color: colors.secondaryText,
    },
    statusTextActive: {
        color: colors.white,
    },
});

export default memo(SingleFilterTab);