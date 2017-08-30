import React from 'react';
import FontAwesome from 'react-fontawesome';

import Buttons from	'./button';





class ButtonsComp extends React.Component{



	render(){
		return(
			<div className='row'>
				<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">	
					<Buttons/>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">	
					
				</div>
			</div>
		)
	}
}


// const ButtonsComp =() => {
// 	return(
// 		<div>
// 			<Buttons/>
// 		</div>
// 	)
// }

export default ButtonsComp;