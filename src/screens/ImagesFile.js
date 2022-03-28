import React from 'react';
import {View, Text, Image} from 'react-native';
import ExternalStyle from "../styles/ExternalStyle"

const ImagesFile = () => {
  return (
    <View style={[ExternalStyle.listStyle]}>
      <Text style={ExternalStyle.textStyle}> images check</Text>
      <Image
        style={ExternalStyle.picStyle}
        source={require('../../assets/natureelep.jpeg')}
        
      />
    </View>
  );
};


export default ImagesFile;
