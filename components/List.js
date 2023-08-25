/* eslint-disable max-len */

import { FlatList } from "react-native";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";

const apiUrl = "https://media.mw.metropolia.fi/wbma/";

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(apiUrl + "media");
      const json = await response.json();
      Promise.all(
        json.map(async (item) => {
          const response = await fetch(apiUrl + "media/" + item.file_id);
          const fileData = await response.json();
          console.log("fileData", fileData);
          return fileData;
        }),
      );

      setMediaArray(json);
    } catch (error) {
      console.error("loadMedia failed", error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <FlatList
      data={mediaArray}
      renderItem={({ item }) => <ListItem singleMedia={item} />}
    />
  );
};
export default List;
