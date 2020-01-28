import axios from './utils/request'
import {apiUrl} from './config/index'

const warningDataFun = (data, myDashboard, time) => {
    function getData() {
        axios.get(apiUrl.warning).then(res => {
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

export default warningDataFun