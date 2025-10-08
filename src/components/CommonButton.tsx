import React, { memo } from 'react';
import { View, Text } from 'react-native';

const CommonButton = () => {
    return (
        <View>
            <Text>Common Button</Text>
        </View>
    );
};

export default memo(CommonButton);