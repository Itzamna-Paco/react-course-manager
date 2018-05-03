import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onTouch, children}) =>{

	const {buttonStyle , buttonTextStyle} = styles;

return(


	<TouchableOpacity style={buttonStyle} onPress={onTouch}>
		<Text style={buttonTextStyle}>
		
			{children}

		</Text>
	</TouchableOpacity>



	); 

};

const styles={

	buttonTextStyle:{ 
		fontSize:18,
		fontWeight:'600',
		color:'#007aff',
		justifyContent:'center',
		alignSelf:'center',
		paddingTop:10,
		paddingBottom:10,

	},

	buttonStyle:{

		flex: 1,
		alignSelf:'stretch',
		backgroundColor:'#eee',
		borderColor:'#007aff',
		borderRadius:5,
		borderWidth:1,
		marginLeft:1,
		marginRight:1,
	}
}

export {Button} 