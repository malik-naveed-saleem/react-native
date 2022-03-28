import React from "react";
// import ExternalStyle from "../styles/ExternalStyle"

import {View,Text,Button,Alert,TouchableOpacity } from "react-native"
const OurButton =()=>{
    return(
        <View >
            <Text style={{textAlign:"center"}}>Our Button</Text>
            <Button
   onPress={()=>Alert.alert("join successfully")}
  title="Join Now"
  color="#841584"

/>
<TouchableOpacity onPress={()=>{console.log("touchableopacity")}}>

<Text>TouchAble Opacity</Text>


</TouchableOpacity>
        </View>
    )

}
export default OurButton;
