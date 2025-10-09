import { colors } from '@/utils/theme/colors';
import React, { memo, ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type WrapperContainerProps = {
    children: ReactNode;
};

const WrapperContainer = (props: WrapperContainerProps) => {

    const insets = useSafeAreaInsets()

    return (
        <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: colors.white }}>
            {props?.children}
        </View>
    );
};

export default memo(WrapperContainer);
