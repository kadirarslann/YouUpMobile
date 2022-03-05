import React,{  useState} from 'react'
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
    TextInput,Image,PreviewLayout} from 'react-native';
import { Icon } from 'react-native-elements';

function ListeningItem() {
  return (
    <ScrollView style={{display:'flex',padding:20,backgroundColor:'#eee'}}>
          <View  style={{display:'flex',flexDirection:'row',width:'100%'}}>
            <Icon       
                        name='file-audio-o'
                        type={'font-awesome'}
                        color='green'
                        size={30}
            />
        
        
      </View>
    </ScrollView>
  )
}

export default ListeningItem