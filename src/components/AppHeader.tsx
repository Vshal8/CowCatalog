import React, { memo } from 'react';
import { View, Text } from 'react-native';

const AppHeader = () => {
    return (
        <View>
            <Text>App Header</Text>
        </View>
    );
};

export default memo(AppHeader);