

import React,{ useState} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  TextInput,Image,PreviewLayout} from 'react-native';
import { Icon } from 'react-native-elements';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import { ContextProvider } from './src/Context';
import MenuItem from './src/components/MenuItem';
import Main from './src/components/Main';





const App= () => {
  

  return (
  <ContextProvider>
      <View style={styles.container}>
    
        <View style={styles.leftMenu}>
          <View>
          
            <Icon 
                    
                    name='arrow-up'
                    type={'font-awesome'}
                    color='#f50'
                    size={30}
                    color='green'
                    backgroundColor='aqua'
                    
              />
          </View>
          
          <MenuItem  name="user" pageIndex="1" /> 
          <MenuItem  name="heart" pageIndex="2"  />
          <MenuItem  name="book" pageIndex="3" />
          <MenuItem  name="music" pageIndex="4" />
          <MenuItem  name="people-circle-sharp" pageIndex="5" type="ionicon" />
          <MenuItem  name="doctor" type="material-community" pageIndex="6" />
          <MenuItem  name="settings" type="ionicon" pageIndex="7" />
        </View>

        <View style={styles.main}>
           <Main>

           </Main>
        
        </View>
  
      </View>
  </ContextProvider>
  
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
    backgroundColor:'white',
  },
});

export default App;
