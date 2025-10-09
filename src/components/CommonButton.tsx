import { fonts } from "@/utils/assets/fonts";
import { colors } from "@/utils/theme/colors";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { getScaledFontSize, windowWidth } from "@/utils/theme/globalStyles";
import { memo } from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface iProps {
  title: string;
  onPress?: () => void;
  customStyles?: ViewStyle;
  customTextStyles?: TextStyle;
  outlined?: boolean;
  disabled?: boolean;
}

const CommonButton = ({
  title,
  onPress,
  customStyles,
  customTextStyles,
  disabled = false,
}: iProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.btnWrapper,
        disabled && { opacity: 0.4 },
        customStyles,
      ]}
    >
      <Text
        style={[
          styles.btnText,
          customTextStyles,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: colors.appPrimary,
    borderRadius: styleGlobalDefinitions.borderRadius.borderRadius,
    alignItems: "center",
    padding: styleGlobalDefinitions.cardPadding.padding,
  },
  btnText: {
    color: colors.white,
    fontSize: getScaledFontSize(18),
    fontFamily: fonts.medium,
  },
});

export default memo(CommonButton);
