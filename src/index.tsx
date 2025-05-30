import { root } from '@lynx-js/react'

import NewRoutes from './routes/index.js'

root.render(<NewRoutes />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
