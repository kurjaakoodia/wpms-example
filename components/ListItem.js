import {Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/app-config';
import {ListItem as RNEListItem, Avatar, Button} from '@rneui/themed';

const ListItem = ({singleMedia, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('touched!', singleMedia.title);
        navigation.navigate('Single', singleMedia);
      }}
    >
      <RNEListItem>
        <Avatar
          size="large"
          source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
        ></Avatar>
      </RNEListItem>
      <Image style={{width: 100, height: 100}} />
      <RNEListItem.Title>{singleMedia.title}</RNEListItem.Title>
      <RNEListItem.Subtitle>{singleMedia.description}</RNEListItem.Subtitle>
      <RNEListItem.ButtonGroup>
        <Button size="sm">View</Button>
      </RNEListItem.ButtonGroup>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
