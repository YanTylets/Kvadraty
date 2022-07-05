import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <View style={styles.header}>
    <View style={styles.logo}>
      <Image
        style={{width: 24, height: 27}}
        source={require(`../assets/location.png`)}
      />
      <Text style={styles.headerText}>Логотип</Text>
      <Image
        style={{width: 24, height: 27}}
        source={require(`../assets/person.png`)}
      />
    </View>
    <SearchBar/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#FFFFFF',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: 'center',
        paddingVertical: 20,
        shadowColor: '#5F73F1',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10,

    },
    logo: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width: '100%',
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    headerText: {
      color: '#5F73F1',
      fontSize: 34,
      fontWeight: 'bold'
    }
})