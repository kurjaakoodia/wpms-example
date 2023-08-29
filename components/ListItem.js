<<<<<<< HEAD
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native';
import PropTypes from 'prop-types';
=======
import {Image, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/app-config';

>>>>>>> http-b
const ListItem = ({singleMedia}) => {
  return (
    <TouchableOpacity
      onPress={() => {
<<<<<<< HEAD
        console.log('touched', singleMedia.title);
      }}
    >
      <View style={styles.container}>
        <Image
          style={{borderRadius: 10, width: 100, height: 100}}
          source={{uri: singleMedia.thumbnails.w160}}
        />
        <Text style={styles.text}>{singleMedia.title}</Text>
        <Text style={styles.text}>{singleMedia.description}</Text>
      </View>
=======
        console.log('touched!', singleMedia.title);
      }}
    >
      <Image
        style={{width: 100, height: 100}}
        source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
      />
      <Text>{singleMedia.title}</Text>
      <Text>{singleMedia.description}</Text>
>>>>>>> http-b
    </TouchableOpacity>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexGrow: 1,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    flexWrap: 'wrap',
    flexGrow: 1,
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#000',
    color: '#4CB7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

=======
>>>>>>> http-b
ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
