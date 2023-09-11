import React, {useState} from 'react';
import {Card, Input, Button} from '@rneui/themed';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {placeholderImage} from '../utils/app-config';
import {Video} from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMedia} from '../components/hooks/apiHooks';

const Upload = () => {
  const [image, setImage] = useState(placeholderImage);
  const [type, setType] = useState('image');
  const {postMedia} = useMedia();
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
    const formData = new FormData();
    formData.append('title', uploadData.title);
    formData.append('description', uploadData).description;
    const filename = image.split('/').pop();

    let fileExtension = filename.split('.').pop();
    fileExtension = fileExtension === 'jpg' ? 'jpeg' : fileExtension;

    formData.append('file', {
      uri: image,
      name: filename,
      type: `${image}/${fileExtension}`,
    });

    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await postMedia(formData, token);
      console.log('lataus', response);
    } catch (error) {
      console.log(error.message);
    }
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
      setType(result.assets[0].type);
    }
  };

  return (
    <ScrollView>
      <Card>
        {type === 'image' ? (
          <Card.Image
            source={{uri: image}}
            style={styles.image}
            onPress={pickImage}
          />
        ) : (
          <Video
            source={{uri: image}}
            style={styles.image}
            useNativeControls={true}
            resizeMode="cover"
          />
        )}
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
        <Button loading={true} title="Upload" onPress={handleSubmit(upload)} />
        <Button title="Choose media" onPress={pickImage} />
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
    resizeMode: 'cover',
  },
});

export default Upload;
