import React,{useContext} from 'react'
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
    TextInput,Image,PreviewLayout} from 'react-native';

import ProfilePage from './ProfilePage';
import Context from '../Context';
import Readings from './Readings';
import Statistics from './Statistics';
import Listenings from './Listenings';
import Therapist from './Therapist';


    
function Main() {

    
  const {currentPage}=useContext(Context)

    const profilePage=()=>{
        return(
        <ProfilePage>

        </ProfilePage>
        )
    }
    const readings=()=>{
      return(
        <Readings>

        </Readings>
      )
    }
    const listenings=()=>{
      return(
        <Listenings>

        </Listenings>
      )
    }
    const statistics=()=>{
      return(
        <Statistics>

        </Statistics>
      )
    }
    const therapist=()=>{
      return(
        <Therapist>

        </Therapist>
      )
    }



  return (
    <View >
        {currentPage.pageIndex==1 && profilePage() }
        
        {currentPage.pageIndex==2 && statistics() }
        {currentPage.pageIndex==3 && readings() }
        {currentPage.pageIndex==4 && listenings() }
        {currentPage.pageIndex==5 && therapist() }
      
     
    </View>
  )
}

const styles= StyleSheet.create({
    main:{
      color:'red'
    },
  });
  
export default Main