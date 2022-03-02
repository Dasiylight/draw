import { ElButton, ElCard, ElContainer, ElRadioGroup, ElRadio, ElRow, ElCol, ElTag, ElInput, ElResult, ElProgress, ElForm,ElLoading } from 'element-plus'
const plugins = [ElButton, ElCard,ElContainer,ElRadioGroup, ElRadio, ElRow, ElCol, ElTag, ElInput, ElResult, ElProgress, ElForm,ElLoading]

export default app => {
    // app.use(ElementPlus)
    plugins.forEach(plugin => {
        app.use(plugin)
    })
}