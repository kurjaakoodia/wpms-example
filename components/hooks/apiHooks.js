import {useState} from 'react';
import {apiUrl} from '../../utils/app-config';
import {useEffect} from 'react';
import {doFetch} from '../../utils/functions';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const json = await doFetch(apiUrl + 'media');
      // console.log(json);
      const mediaFiles = await Promise.all(
        json.map(async (item) => {
          const fileData = await doFetch(apiUrl + 'media/' + item.file_id);
          // console.log('fileData', fileData);
          return fileData;
        }),
      );
      // console.log(data);
      setMediaArray(mediaFiles);
    } catch (error) {
      console.error('loadMedia failed', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);
  return {mediaArray};
};

const useAuthentication = () => {
  const postLogin = async () => {
    try {
      await doFetch(apiUrl + 'login', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.error('postLogin error', error);
    }
  };
  return {postLogin};
};

export {useMedia, useAuthentication};
