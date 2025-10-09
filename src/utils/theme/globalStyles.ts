import { Dimensions, PixelRatio, StyleSheet } from "react-native";

import { EdgeInsets } from 'react-native-safe-area-context';

let currentInsets: EdgeInsets = { top: 0, bottom: 0, left: 0, right: 0 };

export const setSafeAreaInsets = (insets: EdgeInsets) => {
    currentInsets = insets;
};

export const windowWidth: number = Dimensions.get('window').width;
export const windowHeight: number = Dimensions.get('window').height;

export const getScaledFontSize = (size: number) => {
    return size / PixelRatio.getFontScale();
};

export const globalStyles = StyleSheet.create({
    flexFull: {
        flex: 1,
    },
    screenContainer: {
        flex: 1,
        padding: 20,
    },
});