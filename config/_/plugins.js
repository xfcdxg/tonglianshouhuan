import { resolve }       from 'path'
import os                from 'os'
import webpack           from 'webpack'
import happyPack         from 'happypack'
import htmlWebpackPlugin from 'html-webpack-plugin'
import extractTextPlugin from 'extract-text-webpack-plugin'
import { ASSET_PATH }    from '../../path.config'
//webpack common plugins
const happyThreadPool = happyPack.ThreadPool({ size: os.cpus().length });

const hashName =  process.env.NODE_ENV === 'production' ? 'chunkhash:8': 'hash:8'
const isProduction    = process.env.NODE_ENV === 'production'
const plugin = [
  new htmlWebpackPlugin({
    template: resolve(ASSET_PATH, 'index.ejs'),
    inject  : true,
    cache   : true,
    minify  : {
      removeComments    : true,
      collapseWhitespace: true,
      minifyJS          : true
    },
    isProduction,
    serviceName: 'shouhuan'
  }),
  new happyPack({
    id: 'happybabel',
    loaders: ['babel-loader'],
    threadPool: happyThreadPool,
    cache: true,
    verbose: true
  }),
  new happyPack({
    id: 'happystyle',
    loaders: [ 'style', 'css', 'postcss', 'sass' ],
    threadPool: happyThreadPool,
    cache: true,
    verbose: true
  }),
  new extractTextPlugin('style/[name].css', { allChunks: true }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name     : 'vendor',
    filename : `scripts/vendor.bundle.[${ hashName }].js`,
    minChunks: 'Infinity'
  })
]

export default plugin
