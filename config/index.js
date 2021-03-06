import { resolve } from 'path'
import { SVC_PATH, DIST_PATH, ASSET_PATH, SRC_PATH } from '../path.config'
import config from './_'

export const define = name => {
  const outputPath         = resolve(DIST_PATH)
  config.entry.app         = SRC_PATH
  config.output.path       = outputPath
  config.output.publicPath = ''

  if(config.devServer) { //测试
    config.devServer.historyApiFallback = { index: config.output.publicPath }
  }

  return config
}

export default config
