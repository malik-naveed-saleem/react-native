import React from "react";
import {View,Text} from "react-native";
import ExternalStyle from "../styles/ExternalStyle";
 const BoxModal=()=>{
     return(
         <View>

         <View style={[ExternalStyle.viewStyle]}>

             <Text style={[ExternalStyle.boxStyle1,ExternalStyle.commonStyle]}>Box 1</Text>
             <Text style={[ExternalStyle.boxStyle2,ExternalStyle.commonStyle]}>Box 2</Text>
             <Text style={[ExternalStyle.boxStyle3,ExternalStyle.commonStyle]}>Box 3</Text>
             <Text style={[ExternalStyle.boxStyle4,ExternalStyle.commonStyle]}>Box 4</Text>
             <Text style={[ExternalStyle.boxStyle5,ExternalStyle.commonStyle]}>Box 5</Text>

         </View>
         </View>
     )


 }
 export default BoxModal;