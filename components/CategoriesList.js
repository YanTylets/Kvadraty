import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { open, close } from '../redux/categoriesSlice';
import React, {useState} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoriesList = () => {
  const categoriesNames = useSelector(state => state.categories.value);
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false)

  const onPress = () => {
    if(!opened) {
      dispatch(open());
      setOpened(true);
    } else { 
    dispatch(close());
    setOpened(false);
    }
  };

  const list = categoriesNames.map((item, index, array) => {
    return(
    <View key={index} style={[styles.listElement, ((index === array.length-2) && {borderBottomLeftRadius:20})]}>
      <Text style={styles.text}>
        {item}
      </Text>
    </View>
    )
  })

  return (
    <ScrollView>
    <View style={styles.container}>
      {list}
      <TouchableOpacity
        style={[styles.listElement, {borderBottomRightRadius:20}]}
        onPress={() => onPress()}
      >
        { !opened && <Text style={styles.text}>Ещё</Text> }
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default CategoriesList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: windowWidth,
    borderColor: 'lightgrey',
    padding: 0,
  },
  text: {
    color: '#5F73F1',
    fontSize: 15
  },
  listElement: {
    height: 125,
    width: windowWidth/3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderRightWidth: 0.6,
    borderBottomWidth: 1.2,
    borderLeftWidth: 0.5,
    // borderBottomRightRadius:20,
    // borderBottomLeftRadius:20,
    // 
  }
})