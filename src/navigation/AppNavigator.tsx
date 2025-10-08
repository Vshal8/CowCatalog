import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./routeParams.types";
import { Text, View } from "react-native";


const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
    headerShown: false,
};

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"CowList"} component={CowListScreen} options={screenOptions} />
            <Stack.Screen name={"CowDetail"} component={CowDetailScreen} options={screenOptions} />
            <Stack.Screen name={"CowCreate"} component={CowCreateScreen} options={screenOptions} />
        </Stack.Navigator>
    );
}

const CowListScreen = () => {
    return <View>
        <Text>Cow List</Text>
    </View>
};

const CowDetailScreen = () => {
    return <View>
        <Text>Cow Detail</Text>
    </View>
};

const CowCreateScreen = () => {
    return <View>
        <Text>Cow Create</Text>
    </View>
};