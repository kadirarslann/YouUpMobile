
import React, { useContext } from 'react';
import {View,Text,Alert} from 'react-native';
import { Icon } from 'react-native-elements';
import Context from '../Context';

const MenuItem = (props,pageIndex) =>{
    const {user,setPageIndex}=useContext(Context)

    const changePage= () =>{
      setPageIndex(props.pageIndex)
    }
    


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
                  onPress={changePage}
                  
            />
        
        </View>
    )
}

export default MenuItem