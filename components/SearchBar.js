import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  return (
    <View style={styles.container}>
      <Image
        style={{width:18, height:18}}
        source={require('../assets/searchLens.png')}
      />
      <TextInput
        style={styles.input}
        onChangeText={setSearchText}
        value={searchText}
        placeholder="Поиск мест и событий"
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
    width: '90%',
    paddingHorizontal: 20

  }
})