import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import {useTag} from '../components/hooks/apiHooks';
import {MainContext} from '../contexts/MainContext';
import {mediaUrl} from '../utils/app-config';
import {Card, Icon, Button, ListItem} from '@rneui/base';

const Profile = (props) => {
  const [avatars, setAvatar] = useState('');
  const {getFilesByTag} = useTag();
  const {setIsLoggedIn, user} = useContext(MainContext);
  const logOut = async () => {
    console.log('profile, logout');
    try {
      await AsyncStorage.clear();
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  const loadAvatar = async () => {
    try {
      const avatars = await getFilesByTag('avatar_' + user.user_id);
      if (avatars.length > 0) {
        setAvatar(mediaUrl + avatars.pop().filename);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadAvatar();
  }, []);

  return (
    <Card>
      <Card.Title>{user.username}</Card.Title>
      <Card.Image source={{uri: avatars}} />
      <Button title="Log out!" onPress={logOut} />
      <ListItem>
        <Icon name="person" />
        <ListItem.Title>{user.username}</ListItem.Title>
      </ListItem>
      <ListItem>
        <Icon name="email" />
        <ListItem.Title>{user.email}</ListItem.Title>
      </ListItem>
      {user.full_name && (
        <ListItem>
          <Icon name="person" />
          <ListItem.Title>{user.full_name}</ListItem.Title>
        </ListItem>
      )}
      <ListItem>
        <ListItem.Title>{user.user_id}</ListItem.Title>
      </ListItem>
    </Card>
  );
};

export default Profile;
