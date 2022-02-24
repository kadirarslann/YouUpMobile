import React from 'react'
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
    TextInput,Image,PreviewLayout} from 'react-native';

function Therapist() {
  return (
    <Text style={styles.main}>
    Therapist
     </Text>
  )
}

const styles= StyleSheet.create({
    main:{
      color:'red'
    },
  });

export default Therapist