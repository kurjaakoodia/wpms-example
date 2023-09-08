import React from 'react';
import {useForm} from 'react-hook-form';
import {Controller} from 'react-hook-form';
import {useUser} from './hooks/apiHooks';
import {Card, Button, Input} from '@rneui/themed';
import {Alert} from 'react-native';
import {PropTypes} from 'prop-types';

const RegisterForm = ({setToggleRegister}) => {
  const {postUser, checkUsername} = useUser();
  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      full_name: '',
    },
    mode: 'onBlur',
  });

  const register = async (userData) => {
    try {
      delete userData.confirm_password;
      const registerResult = await postUser(userData);
      reset();
      Alert.alert('Success!', registerResult.message);
      setToggleRegister(false);
    } catch (error) {
      Alert.alert('Error!', error.message);
    }
  };

  return (
    <Card>
      <Card.Title>Register</Card.Title>
      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'This is required.'},
          minLength: {value: 3, message: 'Min length is 3 characters'},
          validate: async (value) => {
            try {
              const isAvailable = await checkUsername(value);
              console.log('username available?', value, isAvailable);
              return isAvailable ? isAvailable : 'Username taken';
            } catch (error) {
              console.error(error);
            }
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            errorMessage={errors.username?.message}
          />
        )}
        name="username"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: {value: true, message: 'This is required.'},
          minLength: {value: 5, message: 'Min length is 5 characters'},
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="password"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            errorMessage={errors.password?.message}
          />
        )}
        name="password"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: {value: true, message: 'This is required.'},
          validate: (value) => {
            const {password} = getValues();
            console.log('Get values', password);
            return value === password ? true : 'Passwords do not match';
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Confirm password"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            errorMessage={errors.password?.message}
          />
        )}
        name="confirm_password"
      />
      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'This is required.'},
          pattern: {
            // TODO: add better regexp for email
            value: /\S+@\S+\.\S+$/,
            message: 'must be a valid email',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            errorMessage={errors.email?.message}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{minLength: {value: 3, message: 'Min length is 3 characters'}}}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="full name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            errorMessage={errors.full_name?.message}
          />
        )}
        name="full_name"
      />
      <Button title="Register" onPress={handleSubmit(register)} />
    </Card>
  );
};

RegisterForm.propTypes = {
  setToggleRegister: PropTypes.func,
};

export default RegisterForm;
