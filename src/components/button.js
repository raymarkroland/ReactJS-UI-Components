import React from 'react';
import FontAwesome from 'react-fontawesome';


const buttons =() => {
	return(
		<div>
			  <h4>Primary Buttons</h4>
	          <button className="Primary-btn-solid">Primary</button>
	          <h4>Secondary Buttons</h4>
	          <button className="Secondary-btn-solid">Secondary</button>
	          <h4>Disable Buttons</h4>
	          <button className="Disable-btn-solid">Disable</button>
	          <h4>Danger Buttons</h4>
	          <button className="Danger-btn-solid">Danger</button>
		</div>
	)
}

export default buttons;



// class buttons extends React.Component {
// 	constructor(){
// 		super();
// 		this.onClick = this.onClick.bind(this)
// 	}


// 	onClick () {
// 		this.state({ clickCount: this.state.clickCount + 1 })
// 	}



// 	render(){
// 		return(
// 			<div className="container">
// 	        	<h4>Primary Buttons</h4>
//          		<button
//          		className="Primary-btn-solid"
//          		onClick={this.onClick}
//          		label={'Primary' + this.state.clickCount}
//          		></button>
//           		<h4>Secondary Buttons</h4>
// 	            <button className="Secondary-btn-solid">Secondary</button>
//           		<h4>Disable Buttons</h4>
//           		<button className="Disable-btn-solid">Disable</button>
//           		<h4>Danger Buttons</h4>
// 	      		<button className="Danger-btn-solid">Danger</button>
// 			</div>
// 		)
// 	}
// }

// export default buttons;

