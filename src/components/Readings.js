import React from 'react'
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  TextInput,Image,PreviewLayout} from 'react-native';
import ReadingItem  from './ReadingItem'
import readingData from '../static/readings/readingData';

function readings() {
  
  return (
    <View style={styles.container}>  
      {/* <ReadingItem/>
      <ReadingItem/>
      <ReadingItem/> */}
      {readingData.map((data) => (
        <ReadingItem key={data.id} item={data}/>
      ))}
      {/* <Text style={{color:'red'}}>
      { readingData[0].text }
      </Text> */}
      
      
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
  item:{
    flexGrow:10,
    width:'100%',
    margin:0
  },
});

export default readings