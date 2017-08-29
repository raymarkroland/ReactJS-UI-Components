var path = require('path');

module.exports = {
	entry: './src/app/index.js',
	output: {
		path: path.resolve(__dirname, './src/app/index.js'),
		filename: 'transpiled.js'
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