
import React from 'react';
import {View,Text,Alert} from 'react-native';
import { Icon } from 'react-native-elements';


const MenuItem = (props) =>{

    const goTo = () =>
    Alert.alert(
       'go to '+props.name,
      "",
      [
        {
          text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );



    return (
        <View>
            {/* <Text>
             wwwww
            </Text> */}
            <Icon 
                  raised
                  name={props.name}
                  type={props.type?props.type:'font-awesome'}
                  color='#f50'
                  size={20}
                  onPress={goTo}
                  
            />
        
        </View>
    )
}

export default MenuItem