import React from 'react';
// import FontAwesome from 'react-fontawesome';
// import { RippleButton } from 'react-ripple-effect';
import './main.css';


const buttons =() => {
	return(
		<div>
			<div className="col-lg-6 col-md-6 col-sm-12 col-xs12">
			  <h5>Primary Normal Buttons</h5>
	          <button className="Primary-btn-solid">Primary</button>
	          <h5>Secondary Normal Buttons</h5>
	          <button className="Secondary-btn-solid">Secondary</button>
	          <h5>Disable Normal Buttons</h5>
	          <button className="Disable-btn-solid">Disable</button>
	          <h5>Danger Normal Buttons</h5>
	          <button className="Danger-btn-solid">Danger</button>
	        </div> 
	        <div className="col-lg-6 col-md-6 col-sm-12 col-xs12">
	          <h5>Primary No Fill Buttons</h5>
	          <button className="Primary-btn-NoFill">Primary</button>
	          <h5>Secondary No Fill Buttons</h5>
	          <button className="Secondary-btn-NoFill">Secondary</button>
	          <h5>Disable No Fill Buttons</h5>
	          <button className="Disable-btn-NoFill">Disable</button>
	          <h5>Danger No Fill Buttons</h5>
	          <button className="Danger-btn-NoFill">Danger</button>
	         </div>	
		</div>
	)
}

export default buttons;




// class buttons extends React.Component {
// 	constructor(){
// 		super();
// 		this.state = {
// 			cursorPos: {}
// 		}
// 	}


// 	handleClick(e) {
// 		let cursorPos = {
// 			top: e.clientY,
// 			left: e.clientX,

// 			time: Date.now()
// 		}

// 		this.setState({cursorPos: cursorPos})
// 	}


// 	render(){
// 		return(
// 			<div>
// 			  <h5>Primary Buttons</h5>
// 	          <button className="Primary-btn-solid">Primary</button>
// 	          <h5>Secondary Buttons</h5>
// 	          <button className="Secondary-btn-solid">Secondary</button>
// 	          <h5>Disable Buttons</h5>
// 	          <button className="Disable-btn-solid">Disable</button>
// 	          <h5>Danger Buttons</h5>
// 	          <button className="Danger-btn-solid">Danger</button>
// 			</div>
// 		)
// 	}
// }

// export default buttons;

