import React from 'react';
// import FontAwesome from 'react-fontawesome';

// import ReactDOM from 'react-dom';

// import { RippleButton } from 'react-ripple-effect';
import './main.css';


const buttons =() => {
	return(
		<div>
			  <h5>Primary Buttons</h5>
	          <button className="Primary-btn-solid">Primary</button>
	          <h5>Secondary Buttons</h5>
	          <button className="Secondary-btn-solid">Secondary</button>
	          <h5>Disable Buttons</h5>
	          <button className="Disable-btn-solid">Disable</button>
	          <h5>Danger Buttons</h5>
	          <button className="Danger-btn-solid">Danger</button>
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

