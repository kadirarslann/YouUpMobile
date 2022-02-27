import React from 'react'
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
    TextInput,Image,PreviewLayout} from 'react-native';
import { Icon } from 'react-native-elements';
function ReadingItem() {
  return (
    <View style={{color:'black',display:'flex',justifyContent:'flex-start'}}>
      
        <Icon       
                    name='book'
                    type={'font-awesome'}
                    color='#f50'
                    size={30}
                    color='red'
                    backgroundColor='aqua'
                />
    </View>
  )
}

export default ReadingItem