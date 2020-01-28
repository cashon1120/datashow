import axios from './utils/request'
import {apiUrl} from './config/index'

const riskDataFun = (data, myDashboard, time) => {
    function getData() {
        axios.get(apiUrl.risk).then(res => {
            const result = []
            res.data.data.forEach(item => {
                result.push({
                    日期: item['日期'],
                    风险系数: item['风险系数'],
                    报警次数: item['报警次数'],
                    公里数: item['公里数'],
                })
            })
            data.config.source = result
            myDashboard.updateDataTableConfig(data.id, data.config);
            setTimeout(() => {
                getData()
            }, time);
        }).catch(() => {
            setTimeout(() => {
                getData()
            }, time);
        })
    }
    getData()
}

export default riskDataFun