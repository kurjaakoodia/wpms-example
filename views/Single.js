import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, SafeAreaView, Platform, Image} from 'react-native';
import {mediaUrl} from '../utils/app-config';

const Single = ({route, navigation}) => {
  const singleMedia = route.params;
  console.log('route params', route.params);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{width: '45%', height: '45%', resizeMode: 'contain'}}
        source={{uri: mediaUrl + singleMedia.filename}}
      />
      <Text>{singleMedia.title}</Text>
      <Text>{singleMedia.description}</Text>
      <Text>{singleMedia.time_added}</Text>
      <Text>{singleMedia.user_id}</Text>
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

Single.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default Single;
