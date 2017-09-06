import React from 'react';

import './main.css'



const radio_and_checkbox_inputs =() => {
	return(
		<div>
			<h5>Checked button</h5>
			<div className="checkbox">
		      <label>
		        <input type="checkbox"/><i className="helper"></i>I'm the label from a checkbox
		      </label>
		    </div>
		    <div className="checkbox">
		      <label>
		        <input type="checkbox"/><i className="helper"></i>I'm the label from a checkbox
		      </label>
		    </div>
		    <h5>Radio button</h5>
		    <div className="form-radio">
		      <div className="radio">
		        <label>
		          <input type="radio" name="radio"/><i className="helper"></i>I'm the label from a radio button
		        </label>
		      </div>
		      <div className="radio">
		        <label>
		          <input type="radio" name="radio"/><i className="helper"></i>I'm the label from a radio button
		        </label>
		      </div>
		    </div>
		</div>
	)
}
export default radio_and_checkbox_inputs;