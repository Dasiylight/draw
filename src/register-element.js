import { ElButton, ElCard, ElContainer, ElRadioGroup, ElRadio, ElRow, ElCol, ElTag, ElInput, ElResult, ElProgress, ElForm, ElInputNumber } from 'element-plus'
const plugins = [ElButton, ElCard,ElContainer,ElRadioGroup, ElRadio, ElRow, ElCol, ElTag, ElInput, ElResult, ElProgress, ElForm,ElInputNumber]

export default app => {
    // app.use(ElementPlus)
    plugins.forEach(plugin => {
        app.use(plugin)
    })
}