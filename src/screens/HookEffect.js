import React,{useEffect} from "react"
import {View,Text} from "react-native"
const  HookEffect=()=>{
    useEffect(()=>{


const getApiData=async()=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const myData=await response.json()
        console.log(myData);

    }
    catch(error){
        console.log(error);


    }

}

        getApiData();

    })
    return(
        <View>
            <Text>  this is for check</Text>
        </View>
    )


}
export default HookEffect; 


