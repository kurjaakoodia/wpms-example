import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuthentication} from '../components/hooks/apiHooks';

const Login = ({navigation}) => {
  // props is needed for navigation
  const {setIsLoggedIn} = useContext(MainContext);
  const {postLogin} = useAuthentication();

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      // hardkoodattu tokenin validaatio
      if (token === 'abcde') {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const logIn = async () => {
    console.log('Login button pressed');
    try {
      const loginResponse = await postLogin({
        username: 'atte',
        password: '12345',
      });
      console.log('login response', loginResponse);

      // TODO: fix dofetch() to display errors from API
      // use loginResponse.user for storing token and userdata

      await AsyncStorage.setItem('userToken', 'abcde');
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
      // TODO: Notify user of a login error
    }
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
