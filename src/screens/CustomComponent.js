import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
const CustomComponent = () => {
  const attention = 'hello world that a world process';
  const myElement = <Text style={styles.textStyle2}> this is props Element </Text>;
  const getFullName = (firstName, lastName, thirdName) => {
    return ` my full Name is ${firstName} ${lastName} ${thirdName}`;
  };
  return (
    <View>
      <Text style={styles.textStyle1}>
        {attention} for custom component
      </Text>
      {myElement}
      <Text >hello EveryOne {getFullName('malik', 'naveed', 'saleem')}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle1: {
    color: 'blue',
    fontWeight:"bold",
    fontSize:40,
    marginLeft: 15,
  },
  textStyle2: {
    fontSize:30,
    color: 'green',
  },
});
export default CustomComponent;
