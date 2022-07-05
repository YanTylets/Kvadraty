

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import CategoriesList from './components/CategoriesList';
import Header from './components/Header';


const App = () => {


  return (
    <SafeAreaView style={styles.container} >
      <Header/>
      <CategoriesList/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF'
  }
})


export default App;
