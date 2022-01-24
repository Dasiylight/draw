import { ElButton} from 'element-plus'
const plugins = [ElButton]


export default app => {
  // app.use(ElementPlus)
  plugins.forEach(plugin => {
      app.use(plugin)
  })
}