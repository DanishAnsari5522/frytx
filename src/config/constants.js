import { Appearance } from 'react-native';

export const SYSTEM_COLOR_SCHEME = Appearance.getColorScheme();

export const DARK_MODE_ENABLED = true || SYSTEM_COLOR_SCHEME === 'dark';

export const CONTAINER_OUTER_SPACING = 24;

