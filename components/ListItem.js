import {Image, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/app-config';
import {ListItem as RNEListItem, Avatar, Button} from '@rneui/themed';

const ListItem = ({singleMedia, navigation}) => {
  return (
    <TouchableOpacity>
      <RNEListItem bottomDivider containerStyle={{width: '100%'}}>
        <View style={{flexDirection: 'row', aligntItems: 'center'}}>
          <Avatar
            size="large"
            source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
          />
        </View>
      </RNEListItem>
      <Image style={{width: 100, height: 100}} />
      <RNEListItem.Title>{singleMedia.title}</RNEListItem.Title>
      <RNEListItem.Subtitle>{singleMedia.description}</RNEListItem.Subtitle>
      <RNEListItem.ButtonGroup>
        <Button
          size="sm"
          onPress={() => {
            navigation.navigate('Single', singleMedia);
          }}
          containerStyle={{
            width: '15%',
            position: 'absolute',
            right: 10,
            top: '50%',
            transform: [{translateY: -10}],
            borderRadius: 5,
          }}
        >
          View
        </Button>
      </RNEListItem.ButtonGroup>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
