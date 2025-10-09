import AppHeader from "@/components/AppHeader";
import CommonButton from "@/components/CommonButton";
import DefaultText from "@/components/DefaultText";
import PrimaryTextInput from "@/components/PrimaryTextInput";
import WrapperContainer from "@/components/WrapperContainer";
import { RootStackParamList } from "@/navigation/routeParams.types";
import { eCowPen, eCowSex, eCowStatus } from "@/utils/schemas/types";
import { colors } from "@/utils/theme/colors";
import { styleGlobalDefinitions } from "@/utils/theme/globalStyleDefinitions";
import { globalStyles } from "@/utils/theme/globalStyles";
import { useCowStore } from "@/zustand/store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import moment from "moment";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ItemSelectContainer from "./components/ItemSelectContainer";

type P = NativeStackScreenProps<RootStackParamList, "CowCreate">;

const statuses = [
  eCowStatus.Active,
  eCowStatus.InTreatment,
  eCowStatus.Deceased,
];

const sexes = [eCowSex.Male, eCowSex.Female];

const pens = [
  eCowPen.A1,
  eCowPen.B2,
  eCowPen.Quarantine,
  eCowPen.Feeding,
  eCowPen.Milking,
  eCowPen.Other,
];


export default function CreateCowScreen({ navigation }: P) {
  const addCow = useCowStore((s) => s.addCow);

  const [status, setStatus] = useState<eCowStatus>(
    eCowStatus.Active
  );
  const [sex, setSex] = useState<eCowSex>(eCowSex.Male);

  const [earTag, setEarTag] = useState("");
  const [pen, setPen] = useState<eCowPen>(eCowPen.A1);

  const onSubmit = () => {
    try {
      if (!earTag || !sex || !pen || !status) {
        Alert.alert("Error", "Please fill all fields");
        return;
      }
      addCow({
        earTag: earTag,
        sex: sex,
        pen: pen,
        status: status,
        lastEventDate: moment().toISOString(),
      });
      navigation.goBack();
    } catch (e: any) {
      Alert.alert("Error", e.message);
    }
  };

  return (
    <WrapperContainer>
      <View style={globalStyles.flexFull}>
        <AppHeader showBackIcon={true} headerTitle="Create Cow" />
        <View style={globalStyles.screenContainer}>
        <View style={globalStyles.flexFull}>
          <PrimaryTextInput
            value={earTag}
            onChangeText={setEarTag}
            placeholder="Enter ear tag"
          />
          <ItemSelectContainer data={statuses} selectedItem={status} onSelect={setStatus} title="Select Cow Status" />
          <ItemSelectContainer data={sexes} selectedItem={sex} onSelect={setSex} title="Select Cow Sex" />
          <ItemSelectContainer data={pens} selectedItem={pen} onSelect={setPen} title="Select Cow Pen" />
        </View>
        <CommonButton title="Save" onPress={onSubmit} />
      </View>
      </View>
    </WrapperContainer>
  );
}

