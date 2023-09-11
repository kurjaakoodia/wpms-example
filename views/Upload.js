import React from 'react';
import {Card, Input, Button} from '@rneui/themed';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, StyleSheet} from 'react-native';

const Upload = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const upload = async (uploadData) => {
    console.log('upload', uploadData);
  };

  return (
    <ScrollView>
      <Card>
        <Card.Image
          source={{uri: 'https://placekitten.com/200/200'}}
          style={styles.image}
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: {value: true, message: 'This is required.'},
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Title"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.title?.message}
            />
          )}
          name="title"
        />

        <Controller
          control={control}
          rules={{
            minLength: {value: 10, message: 'min 10 characters'},
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Description (optional)"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.description?.message}
            />
          )}
          name="description"
        />
        <Button title="Upload" onPress={handleSubmit(upload)} />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20,
  },
});

export default Upload;
