module.exports = {
  entry: "./src/movement.js",
  output: {
  	path: "./../web/js",
  	publicPath: './../web/js',
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