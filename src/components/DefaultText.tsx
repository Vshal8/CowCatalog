import { fonts } from "@/utils/assets/fonts";
import { colors } from "@/utils/theme/colors";
import { getScaledFontSize } from "@/utils/theme/globalStyles";
import { memo } from "react";
import { StyleSheet, Text } from "react-native";

interface iProps {
    text: string;
    size: number;
    color: string;
}

const DefaultText = ({ text, size = 16, color = colors.primaryText }: iProps) => {
    return <Text style={[styles.text, { fontSize: getScaledFontSize(size), color: color }]}>{text}</Text>;
};

export default memo(DefaultText);

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.regular,
        color: colors.primaryText,
    },
});