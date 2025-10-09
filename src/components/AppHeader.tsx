import { fonts } from "@/utils/assets/fonts";
import { imagePath } from "@/utils/assets/imagePath";
import { colors } from "@/utils/theme/colors";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { getScaledFontSize, windowWidth } from "@/utils/theme/globalStyles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { memo } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface iProps {
    headerTitle?: string;
    showBackIcon?: boolean;
}

const AppHeader = ({ headerTitle, showBackIcon = true }: iProps) => {
    const navigation = useNavigation<NavigationProp<any>>();

    const onPressBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.fullContainer}>
            {showBackIcon && (
                <Pressable onPress={onPressBack} style={styles.iconContainer}>
                    <Image
                        source={imagePath.back}
                        style={styles.icon}
                    />
                </Pressable>
            )}
            <Text style={styles.title} numberOfLines={1}>
                {headerTitle}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    fullContainer: {
        width: windowWidth,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: colors.white,
    },
    iconContainer: {
        position: "absolute",
        left: styleGlobalDefinitions.screenPadding.padding,
    },
    icon: {
        height: 30,
        width: 30,
        tintColor: colors.appPrimary,
    },
    title: {
        color: colors.appPrimary,
        fontSize: getScaledFontSize(22),
        textAlign: "center",
        fontFamily: fonts.bold,
    },
});

export default memo(AppHeader);