import React,{useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Alert} from 'react-native';
import ExternalStyle from '../styles/ExternalStyle';

const CounterNumber = () => {
    const [count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(count+10)
        
    }
   
        const handleDeccrement=()=>{
            if(count>0){
                setCount(count-10)
            }
            else{
                Alert.alert("reach its minimum value")
            }
            
        }
  return (
    <View>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.button_group}>
        <TouchableOpacity style={styles.commonButton} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+ 10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.commonButton} onPress={()=>setCount(0)}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.commonButton} onPress={handleDeccrement}>
          <Text style={styles.buttonText}>- 10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
  },
  button_group: {
      justifyContent:"center",
    width: '100%',
    display: 'flex',
    alignItem: 'center',
  },
  counter: {
    fontSize: 80,
    textAlign: 'center',
    width: '100%',
    padding: 20,
    marginTop: 60,
    marginBottom: 30,
  },
  commonButton: {
    // textAlign: 'center',
    width: 200,
    height: 100,
    backgroundColor: '#453d3f',
   
    marginTop: 20,
    marginLeft:100
  },
  buttonText:{
      textAlign:"center",
      color:"white",

      paddingTop:40,
      fontSize:20,
  }
});
export default CounterNumber;
