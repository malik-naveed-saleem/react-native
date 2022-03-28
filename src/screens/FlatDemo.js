import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
const names = [
  {index: '1', name: 'malik', age: 24, degree: 'cs'},
  {index: '2', name: 'naveed', age: 24, degree: 'cs'},

  {index: '3', name: 'saleem', age: 24, degree: 'it'},

  {index: '4', name: 'hafizzzz', age: 24, degree: 'csa'},
  {index: '5', name: 'Ayaan', age: 24, degree: 'csa'},
];

const FlatDemo = () => {
  return (
    <FlatList
    style={Styles.listStyle}
      keyExtractor={key => {
        return key.index;
      }}
      data={names}
      horizontal
      showsHorizontalScrollIndicator={false}
    //   inverted
      renderItem={({item}) => {
        return(

        <Text style={Styles.demoText}>
          {item.name}
        </Text>
        )

        console.log(item.name);
      }}
    />
  );
};
const Styles = StyleSheet.create({
  demoText: {
      fontSize:40,
      padding:30,
      backgroundColor:"blue",
      margin:10,
      color:"white"

    // color: 'red',
    // width:25,
    // height:25,
    // backgroundColor:"black"
  },
  listStyle:{
      textAlign:"center",
      margin:20,
      padding:10
  }

});
export default FlatDemo;
