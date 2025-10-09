import AppHeader from '@/components/AppHeader';
import DefaultText from '@/components/DefaultText';
import WrapperContainer from '@/components/WrapperContainer';
import { RootStackParamList } from '@/navigation/routeParams.types';
import { fonts } from '@/utils/assets/fonts';
import { Cow } from '@/utils/schemas/types';
import { colors } from '@/utils/theme/colors';
import { styleGlobalDefinitions } from '@/utils/theme/globalStyleDefinitions';
import { getScaledFontSize, globalStyles } from '@/utils/theme/globalStyles';
import { useCowStore } from '@/zustand/store';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

type EventData = {
    id: number;
    title: string;
    date: string;
};

const eventData: Array<EventData> = [
    {
        id: 1,
        title: 'Milking',
        date: '2025-10-09',
    },
    {
        id: 2,
        title: 'Feeding',
        date: '2025-10-07',
    },
    {
        id: 3,
        title: 'Weight check',
        date: '2025-10-06',
    },
];

const CowDetailsScreen = () => {

    const route = useRoute<RouteProp<RootStackParamList, 'CowDetail'>>();
    const { id } = route.params;

    console.log('id', id);

    const { getById } = useCowStore()

    const [cow, setCow] = useState<Cow | undefined>(undefined);

    useEffect(() => {
        getCowDetails();
    }, [id]);

    const getCowDetails = () => {
        const objCow = getById(id);
        setCow(objCow);
    };

    const renderEventItem = useCallback(({ item }: { item: EventData }) => {
        return (
            <View style={styles.eventItemContainer}>
                <DefaultText text={item.title} size={16} color={colors.primaryText} />
                <DefaultText text={item.date} size={16} color={colors.primaryText} />
            </View>
        )
    }, []);

    const keyExtractor = useCallback((item: EventData) => item.id.toString(), []);

    return (
        <WrapperContainer>
            <View style={globalStyles.flexFull}>
                <AppHeader showBackIcon={true} headerTitle="Cow Details" />
                <View style={globalStyles.screenContainer}>
                    <View style={globalStyles.flexFull}>
                        <Text style={styles.lastEventTitle}>
                            Cow Details
                        </Text>
                        <View style={styles.singleDetailContainer}>
                            <DefaultText text="Ear Tag : " size={16} color={colors.primaryText} />
                            <DefaultText text={cow?.earTag || ""} size={16} color={colors.secondaryText} />
                        </View>
                        <View style={styles.singleDetailContainer}>
                            <DefaultText text="Sex : " size={16} color={colors.primaryText} />
                            <DefaultText text={cow?.sex || ""} size={16} color={colors.secondaryText} />
                        </View>
                        <View style={styles.singleDetailContainer}>
                            <DefaultText text="Pen : " size={16} color={colors.primaryText} />
                            <DefaultText text={cow?.pen || ""} size={16} color={colors.secondaryText} />
                        </View>
                        <View style={styles.lastEventContainer}>
                            <Text style={styles.lastEventTitle}>
                                Latest Events
                            </Text>
                            <FlatList
                                data={eventData}
                                renderItem={renderEventItem}
                                keyExtractor={keyExtractor}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </WrapperContainer>
    );
};

export default CowDetailsScreen;

const styles = StyleSheet.create({
    lastEventContainer: {
        flex: 1,
    },
    lastEventTitle: {
        fontSize: getScaledFontSize(20),
        fontFamily: fonts.bold,
        marginTop: styleGlobalDefinitions.commonItemsMargin.margin,
        color: colors.primaryText
    },
    singleDetailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: styleGlobalDefinitions.commonItemsMargin.margin,
    },
    eventItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: styleGlobalDefinitions.commonItemsMargin.margin,
    },
});
