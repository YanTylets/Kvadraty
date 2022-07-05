import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

const Icon = ({width, height, svg}) => {
  return (
    <View style={{width: width, height: height}}>
      <Image
        style={{width: width, height: height}}
        // source={require(`../assets/${svg}`)}
      />
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({})