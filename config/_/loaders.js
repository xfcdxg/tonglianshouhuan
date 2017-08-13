import path from 'path'
import extractTextPlugin from 'extract-text-webpack-plugin'
import { SRC_PATH, MODULE_PATH } from '../../path.config'
//webpack loaders
const loader =
[
  {
    test: /\.jsx?$/,
    loader: 'happypack/loader?id=happybabel',
    include: [ SRC_PATH, MODULE_PATH ]
  },
  {
    test: /\.(css|scss|sass)$/,
    include: [ SRC_PATH, MODULE_PATH ],
    loader: 'happypack/loader?id=happystyle'
  },
  {
    test: /\.(png|jpg|gif)$/,
    include: [ SRC_PATH, MODULE_PATH ],
    loader: 'url',
    query : {
      limit: 1,
      name : 'images/[name].[ext]'
    }
  },
  {
    test: /\.json$/,
    loader: 'json-loader'
  },
]

export default loader
