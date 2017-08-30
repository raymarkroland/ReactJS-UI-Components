import React from 'react';
import { render } from 'react-dom';

import PropTypes from 'prop-types';

import ButtonComponents from '../components/button-components';


 
render(
	<div className="container-fluid padding-remove">
	<label className="lbl-title">ReactJS UI Componen Library</label>

	<div className="container">
		
		<div className="row">
			<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<ButtonComponents/>
			</div>	
			<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">2</div>	
		</div>
	</div>
	</div>	
	,

	document.getElementById('app')	
);