

import React,{useState} from 'react';
// import {View,Text} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  PreviewLayout
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MenuItem from './components/MenuItem';



const App= () => {


  return (
  <View style={styles.container}>
    
      <View style={styles.leftMenu}>
        <MenuItem  name="heart"   />
        <MenuItem  name="user"  />
        <MenuItem  name="book"  />
        <MenuItem  name="music"  />
        <MenuItem  name="account-settings" type="material-community"  />
      </View>
      <View style={styles.main}>
        <Text>Some mre text</Text>
       
      </View>
    
  </View>
  );
};

const styles= StyleSheet.create({
  container:{
    backgroundColor:'aqua',
    display:'flex',
    height:'100%',
    flexDirection:'row',
  },
  leftMenu:{
    width:'15%',
    height:'100%',
    backgroundColor:'aqua',
  },
  main:{
    width:'85%',
    height:'100%',
    backgroundColor:'blue',
  },
});

export default App;
