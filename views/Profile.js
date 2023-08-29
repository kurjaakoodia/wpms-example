import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, Platform, StyleSheet, Text} from 'react-native';

const Profile = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile view</Text>
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

Profile.propTypes = {};

export default Profile;
