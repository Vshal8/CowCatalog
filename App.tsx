/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View } from 'react-native';
import { globalStyles } from '@/utils/theme/globalStyles';
import AppNavigator from '@/navigation/AppNavigator';

export default function App() {
  return (
    <View style={globalStyles.flexFull}>
      <AppNavigator />
    </View>
  );
}

