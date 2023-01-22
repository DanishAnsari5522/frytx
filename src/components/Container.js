import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { CONTAINER_OUTER_SPACING } from '../config/constants';
import theme from '../config/theme';

// type Props = React.ComponentProps<typeof View> & {
//     children: React.ReactNode;
//     style?: StyleProp<ViewStyle>;
// };

const Container = ({ children, style }) => (
    <View style={[{ flex: 1, backgroundColor: theme.colors.background }, style]}>
        {children}
    </View>
);

export default Container;
