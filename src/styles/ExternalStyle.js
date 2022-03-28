import {StyleSheet} from 'react-native';
const ExternalStyle = StyleSheet.create({
  listStyle: {
    //  backgroundColor:"red"
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
    // borderWidth:3,
  },
  textStyle: {
    fontSize: 30,
    textTransform: 'capitalize',

    borderWidth: 2,
    marginVertical: 5,
    // borderColor:"red"
  },
  picStyle: {
    width: 350,
    height: 250,
    borderRadius: 40,
    // textShadowOffset:{width:-3,height:4},
    // textShadowRadius:10,
    // textShadowColor: "rgba(0,0,0,0.75)",
  },
  viewStyle: {
    height: 500,
    position:"relative",
    borderWidth: 3,
    padding: 2,
    margin: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems:"center",

    // alignContent:"end"
  },
  commonStyle: {
    // backgroundColor:"black"
    textAlign: 'center',
    borderWidth: 3,
    fontSize: 20,
    width: 60,
    // fontWeight: '900',
    height: 60,
    position:"absolute"
  },
  boxStyle1: {
    backgroundColor: 'green',
    borderColor: '#0b5932',
    color: 'white',
    // top:"right"
    bottom:230,
    right:160
  },
  boxStyle2: {
    backgroundColor: 'yellow',
    borderColor: '#ebae34',
    top:0
  },
  boxStyle3: {
    backgroundColor: '#0caded',
    borderColor: '#141057',
    color: 'white',
    // alignSelf:"stretch"
    bottom:0,
    right:0
  },
  boxStyle4: {
    backgroundColor: 'red',
    borderColor: '#141057',
    color: 'white',
      right:0

  },
  boxStyle5: {
    backgroundColor: 'blue',
    borderColor: '#141057',
    color: 'white',
    bottom:0
  },
  counterText:{

    textAlign:"center",
    marginTop:20,
    fontSize:50

  }
});
export default ExternalStyle;
