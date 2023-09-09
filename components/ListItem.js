import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/app-config';
import {ListItem as RNEListItem, Avatar, Button} from '@rneui/themed';

const ListItem = ({singleMedia, navigation}) => {
  return (
    <TouchableOpacity>
      <RNEListItem
        bottomDivider
        containerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            size={100}
            source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
          />
          <View style={{flex: 1, marginLeft: 10}}>
            <RNEListItem.Title style={{flex: 1}}>
              {singleMedia.title}
            </RNEListItem.Title>
            <RNEListItem.Subtitle style={{flex: 1}}>
              {singleMedia.description}
            </RNEListItem.Subtitle>
          </View>
        </View>
        <Button
          title="View"
          onPress={() => {
            console.log('touched', singleMedia.title);
            navigation.navigate('Single', singleMedia);
          }}
        />
      </RNEListItem>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
