import { fonts } from "@/utils/assets/fonts";
import { colors } from "@/utils/theme/colors";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { getScaledFontSize } from "@/utils/theme/globalStyles";
import { memo } from "react";
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";

type iProps = {
  placeholder?: string;
  value: string;
  onChangeText?: (val: string) => void;
  onEndEditing?: () => void;
  customStyles?: ViewStyle;
};

const PrimaryTextInput = ({
  placeholder,
  value,
  onChangeText,
  onEndEditing,
  customStyles,
}: iProps) => {
  return (
    <View style={[styles.container, customStyles]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.border}
        keyboardType="default"
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

export default memo(PrimaryTextInput);


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: styleGlobalDefinitions.borderRadius.borderRadius,
    borderColor: colors.border,
    padding: styleGlobalDefinitions.cardPadding.padding,
  },
  input: {
    fontSize: getScaledFontSize(16),
    color: colors.secondaryText,
    fontFamily: fonts.regular,
  },
});

