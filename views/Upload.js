import React, {useState} from 'react';
import {Card, Input, Button} from '@rneui/themed';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {placeholderImage} from '../utils/app-config';

const Upload = () => {
  const [image, setImage] = useState(placeholderImage);
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

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <Card>
        <Card.Image
          source={{uri: image}}
          style={styles.image}
          onPress={pickImage}
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
