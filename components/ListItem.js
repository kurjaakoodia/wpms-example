import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native';
import PropTypes from 'prop-types';
const ListItem = ({singleMedia}) => {
  return (
    <TouchableOpacity
      onPress={() => {
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
    </TouchableOpacity>
  );
};

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

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
