import { StatusBar } from 'expo-status-bar';
import theme from './src/config/theme';
import RootNavigator from './src/navigation/RootNavigation';
export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={theme.colors.background} />
      <RootNavigator />
    </>
  );
}


