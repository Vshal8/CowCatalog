import { colors } from "@/utils/theme/colors";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { getScaledFontSize } from "@/utils/theme/globalStyles";
import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

const ListEmptyContainer = () => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No cows found</Text>
        </View>
    )
}

export default memo(ListEmptyContainer);


const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: styleGlobalDefinitions.screenPadding.padding,
    },
    emptyText: {
        fontWeight: "600",
        color: colors.secondaryText,
        fontSize: getScaledFontSize(16),
        textAlign: "center",
    },
});