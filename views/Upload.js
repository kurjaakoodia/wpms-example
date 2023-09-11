import React from 'react';
import {Card, Input, Button} from '@rneui/themed';
import {Controller, useForm} from 'react-hook-form';

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
    <Card>
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
          minLength: 10,
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
  );
};

export default Upload;
