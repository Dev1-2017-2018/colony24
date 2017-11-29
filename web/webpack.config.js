module.exports = {
  entry: "./src/app.js",
  output: {
  	path: "./dist/",
  	publicPath: './dist/',
    filename: "bundle.js"
  },
  module: {
   loaders: [
     {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015',  'stage-0'] 
        }
     }
   ]
 },
 resolve: {
   	extensions: ['', '.js']
 }
}