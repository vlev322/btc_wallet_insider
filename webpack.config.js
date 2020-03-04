const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const loaders = {
	ts: {
		test: /\.(ts|tsx|jsx)$/,
		use: ["babel-loader", "ts-loader"]
	},
	styl: env => ({
		test: /\.styl$/,
		use: [
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath: "../",
					hmr: env === "development"
				}
			},
			"css-loader",
			"stylus-loader"
		]
	})
};

const entries = {
	ts: path.join(__dirname, "src", "ts", "index.ts"),
	styl: path.join(__dirname, "src", "style", "stylesheets", "main.styl")
};

module.exports = function(env) {
	return {
		mode: env.ENVIRONMENT,
		target: "web",
		context: `${__dirname}/src/ts/`,
		devtool: "inline-source-map",
		entry: [entries.ts, entries.styl],
		output: {
			path: path.resolve(__dirname, "build"),
			filename: "bundle.min.js",
			publicPath: "/"
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".json"]
		},
		optimization: {
			minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
		},
		module: {
			rules: [loaders.ts, loaders.styl(env.ENVIRONMENT)]
		},
		devServer: {
			hot: true,
			inline: true,
			compress: true,
			port: 9000,
			contentBase: path.join(__dirname, "/build"),
			historyApiFallback: true
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, "/src/index.html")
			}),
			new MiniCssExtractPlugin({
				filename: "style/style.min.css"
			})
		]
	};
};
