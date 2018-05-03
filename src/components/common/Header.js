 
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { viewStyle, textStyle } = styles;

return (

	<View style={viewStyle} backgroundColor={props.color}>
		<Text style={textStyle}>{props.headerText}</Text>
	</View>
	);
};

const styles = {
 textStyle: {
  fontSize: 30,
  color:'#f8f8f8',
   
 },
 viewStyle:{
 	backgroundColor: 'blue',
    justifyContent: 'center',
    height: 60,
    elevation: 2,
    position: 'relative',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    alignItems: 'center',

 }

};

export { Header };
