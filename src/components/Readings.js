import React from 'react'
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  TextInput,Image,PreviewLayout} from 'react-native';
import ReadingItem  from './ReadingItem'
function readings() {
  return (
    <View style={styles.container}>
       <Text style={styles.main}>
      Readings
      </Text>
      <ReadingItem/>

      <ReadingItem/>
      <ReadingItem/>

      <ReadingItem/>
    </View>
   
  )
}

const styles= StyleSheet.create({
  main:{
    color:'red'
  },
  container:{
    display:'flex',
    padding:0,
    margin:0
  },
});

export default readings