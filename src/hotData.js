import axios from './utils/request'
import {apiUrl} from './config/index'

const hotDataFun = (data, myDashboard, time) => {
    function getData() {
        axios.get(apiUrl.hot).then(res => {
            data.config.source = res.data.data.splice(0, 1000)
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

export default hotDataFun