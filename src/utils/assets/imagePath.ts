import { ImageSourcePropType } from "react-native";

type ImagePath = {
    filter: ImageSourcePropType;
    back: ImageSourcePropType;
};

export const imagePath: ImagePath = {
    filter: require('../../../assets/images/filter.png'),
    back: require('../../../assets/images/back.png'),
};