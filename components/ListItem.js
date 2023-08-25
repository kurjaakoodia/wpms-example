import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import PropTypes from "prop-types";
import { mediaUrl } from "./utils/app-config";

const ListItem = (singleMedia) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: mediaUrl + singleMedia.thumbnails.w160 }}
      />
      <Text>{singleMedia.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
