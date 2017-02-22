var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		// publicPath: '/dist/',
		filename: 'build.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	],
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue',
			options: {
				// vue-loader options go here
			}
		}, {
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file',
			options: {
				name: '[name].[ext]?[hash]'
			}
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
			loader: 'file-loader'
		}]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
		// proxy: {
		// 	'/src/vue-shopcart/list.json': {
		// 		target: 'http://localhost:3000/src/vue-shopcart/list.json?page=1&limit=10',
		// 		secure: false
		// 	}
		// }
	},
	devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
		// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
