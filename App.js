import React from 'react';
import BoxModal from './src/screens/BoxModal';
import CounterNumber from './src/screens/CounterNumber';
import CustomComponent from './src/screens/CustomComponent';
import FlatDemo from './src/screens/FlatDemo';
import HookEffect from './src/screens/HookEffect';
// import { NavigationContainer } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-navigation/native-stack';

import ImagesFile from './src/screens/ImagesFile';
import OurButton from './src/screens/OurButton';
const App = () => {
  const Stack = createNativeStackNavigator();

  // let a=1;
  console.log('naveed');
  // let x;
  // x.toString();

  // const firstName = 'malik naveed';
  // const lastName = 'Muhammad Saleem';

  return (
    // <BoxModal/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OurButton">
        <Stack.Screen component={BoxModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// const styles = StyleSheet.create({
//   textStyle: {
//     color: 'green',
//     marginTop: 50,
//     backgroundColor: 'red',
//     marginLeft: 25,
//     marginRight: 25,
//     marginBottom: 100,
//   },
// });
export default App;
