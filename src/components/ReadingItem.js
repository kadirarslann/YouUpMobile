import React,{  useState} from 'react'
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
    TextInput,Image,PreviewLayout} from 'react-native';
import { Icon } from 'react-native-elements';
function ReadingItem(props) {
  const [textActive, setTextActive] = useState(false)

  const selectText = (e)=>{
    setTextActive(!textActive)
  }

  let tt='aaaaa11aaaa'
  return (
    <ScrollView style={{color:'black',display:'flex',flexDirection:'column',width:'100%',padding:10}}>
      <View  style={{color:'black',display:'flex',flexDirection:'row',width:'100%',alignItems:'center'}}>
        <Icon       
                    name='book'
                    type={'font-awesome'}
                    color='green'
                    size={30}
                    onPress={selectText}
                />
        <Text style={{color:'black',width:'100%',fontSize:25,paddingLeft:10}}>
          {props.item.title}
        </Text>
        
      </View>
      {textActive? <Text style={{color:'black',width:'100%',fontSize:12,overflow:'scroll',paddingBottom:200}}>
          {props.item.text}
      </Text> : null}
      
    </ScrollView>
    
  )
}

export default ReadingItem