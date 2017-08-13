import { resolve } from 'path'

import { SRC_PATH, SVC_PATH, MODULE_PATH, IMG_PATH, SVG_PATH } from '../../path.config'

const alias = {
  'containers': resolve(SRC_PATH, 'containers'),
  'components': resolve(SRC_PATH, 'components'),
  'actions'   : resolve(SRC_PATH, 'actions'),
  'images'    : resolve(SRC_PATH, 'images'),
  'common'    : resolve(SRC_PATH, 'common'),
  'styles'    : resolve(SRC_PATH, 'styles')
}

export default alias
