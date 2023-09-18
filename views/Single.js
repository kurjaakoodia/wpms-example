import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {mediaUrl} from '../utils/app-config';
import {Card, ListItem, Icon} from '@rneui/base';
import {formatDate} from '../utils/functions';
import {Video} from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFavourite, useUser} from '../components/hooks/apiHooks';
import {Button} from '@rneui/themed';
import {MainContext} from '../contexts/MainContext';

const Single = ({route, navigation}) => {
  const {userLike, setUserLike} = useState(false);
  const [owner, setOwner] = useState({});
  const {getUserById} = useUser();
  const {user} = useContext(MainContext);
  const {likes, setLikes} = useState([]);
  const {postFavourite, getFavouritesById, deleteFavourite} = useFavourite();
  const {
    title,
    description,
    filename,
    time_added: timeAdded,
    user_id: userId,
    filesize,
    media_type: mediaType,
    file_id: fileId,
  } = route.params;

  const createFavourite = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await postFavourite({file_id: fileId}, token);
      response && setUserLike(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const removeFavourite = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await deleteFavourite({fileId, token});
      response && setUserLike(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchLikes = async () => {
    try {
      const likesData = await getFavouritesById(fileId);
      setLikes(likesData);
      likesData.forEach((like) => {
        if (like.user_id === user.user_id) {
          setUserLike(true);
        }
      });
    } catch (error) {
      console.error('getFavourites', error.message);
    }
  };

  // fetch owner info
  const fetchOwner = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const ownerData = await getUserById(userId, token);
      setOwner(ownerData);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchOwner();
  }, []);

  useEffect(() => {
    fetchLikes();
  }, [userLike]);

  // Show full image and metadata
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      {mediaType === 'image' ? (
        <Card.Image
          source={{uri: mediaUrl + filename}}
          resizeMode="center"
          style={{height: 300}}
        />
      ) : (
        <Video
          source={{uri: mediaUrl + filename}}
          resizeMode="center"
          style={{height: 300}}
          useNativeControls={true}
        />
      )}
      <ListItem>
        <Text>{description}</Text>
      </ListItem>
      <ListItem>
        <Icon name="save" />
        <Text>{Math.round(filesize / 1024)} kB</Text>
      </ListItem>
      <ListItem>
        <Icon name="today" />
        <Text>{formatDate(timeAdded)}</Text>
      </ListItem>
      <ListItem>
        <Icon name="person" />
        <Text>id: {owner.username}</Text>
      </ListItem>
      <ListItem>
        {userLike ? (
          <Button onPress={removeFavourite} title={'Dislike'} />
        ) : (
          <Button onPress={createFavourite} title={'Like'} />
        )}
        <Text>Total likes: {likes.length}</Text>
      </ListItem>
    </Card>
  );
};

Single.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default Single;
