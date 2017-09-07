import React from 'react';

import './main.css'



const Input =() => {
	return(
		<div>
			<div className="styled-input">
		      <input type="text" required />
		      <label>Name</label>
		      <span></span>
		    </div>
		    <div className="styled-input">
		      <input type="email" required />
		      <label>Email</label>
		      <span></span>
		    </div>
		    <div className="styled-input">
		      <input type="tel" required />
		      <label>Phone</label>
		      <span></span>
		    </div>
		</div>
	)
}
export default Input;