import {StatusBar} from 'expo-status-bar';
<<<<<<< HEAD
import {SafeAreaView} from 'react-native';
=======
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
>>>>>>> http-b
import List from './components/List';

const App = () => {
  return (
<<<<<<< HEAD
    <SafeAreaView>
=======
    <SafeAreaView style={styles.container}>
>>>>>>> http-b
      <List />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
