import {FlatList} from 'react-native';
import {useMedia} from './hooks/apiHooks';
import ListItem from './ListItem';

const List = () => {
  const {mediaArray} = useMedia();
  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
