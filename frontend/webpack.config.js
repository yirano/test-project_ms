const path = require("path")
module.exports = {
	// define entry file and output
	entry: {
		main: "./src/index.js"
	},
	output: {
		path: path.resolve("./web/res"),
		filename: "[name].js"
	},

	// define babel loader
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				include: path.resolve(__dirname, "src")
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "svg-url-loader",
						options: { limit: 10000 }
					}
				]
			},
			{
				test: /\.css$/i,
				use: [ "style-loader", "css-loader" ]
			},
			{
				test: /\.(png|gif|jpeg|svg)$/i,
				use: [
					{
						loader: "file-loader"
					}
				]
			},
			{
				test: /\.scss$/,
				loaders: [ "style", "css", "sass?sourceMap" ]
			},
			{
				test: /\.(png|jpg)$/,
				loader: "url-loader"
			}
		]
	},
	resolve: {
		extensions: [ "*", ".js", ".jsx" ]
	},
	devServer: {
		watchContentBase: true
	}
}
