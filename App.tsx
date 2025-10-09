/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppNavigator from '@/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { initialWindowMetrics, SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

