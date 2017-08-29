var path = require('path');

module.exports = {
	entry: './src/app/index.js',
	output: {
		path: path.resolve(__dirname, './src/'),
		filename: 'bundle.min.js'
	},
	module: {
		loaders:[
			{ 
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/, 
				query: {
					presets: ['es2015', 'react']
			} 
		}
		]
	}
}