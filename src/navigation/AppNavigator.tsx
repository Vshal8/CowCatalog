import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./routeParams.types";
import CowListScreen from "@/screens/CowListScreen";
import CowDetailsScreen from "@/screens/CowDetailsScreen";
import CreateCowScreen from "@/screens/CreateCowScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
    headerShown: false,
};

export default function AppNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen name={"CowList"} component={CowListScreen} options={screenOptions} />
            <Stack.Screen name={"CowDetail"} component={CowDetailsScreen} options={screenOptions} />
            <Stack.Screen name={"CowCreate"} component={CreateCowScreen} options={screenOptions} />
        </Stack.Navigator>
    );
}