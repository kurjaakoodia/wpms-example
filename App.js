import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainProvider} from './contexts/MainContext/';
import Navigator from './navigators/Navigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainProvider>
        <Navigator />
        <StatusBar style="auto" />
      </MainProvider>
    </SafeAreaProvider>
  );
};

export default App;
