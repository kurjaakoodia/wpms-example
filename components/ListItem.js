import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";
import PropTypes from "prop-types";

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.someStyle}>
      <View style={styles.someStyle}>
        <Image
          style={styles.someStyle}
          source={{ uri: props.singleMedia.thumbnails.w160 }}
        />
      </View>
      <View style={styles.someStyle}>
        <Text style={styles.someStyle}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
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
