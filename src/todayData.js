import axios from './utils/request'
import {apiUrl} from './config/index'

const safeDataFun = (data, myDashboard, time) => {
    function getData() {
        axios.get(apiUrl.today).then(res => {
            data.config.source = res.data.data
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

export default safeDataFun