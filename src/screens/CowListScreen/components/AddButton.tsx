import { RootStackParamList } from "@/navigation/routeParams.types";
import { colors } from "@/utils/theme/colors";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AddButton = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigation.navigate("CowCreate");
  };

  return (
    <TouchableOpacity
      style={styles.backContainer}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    alignSelf: "flex-end",
    zIndex: 999,
    position: "absolute",
    right: styleGlobalDefinitions.screenPadding.padding,
    bottom: styleGlobalDefinitions.screenPadding.padding,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.appPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: colors.appSecondary,
    fontSize: 35,
  }
});

export default memo(AddButton);
