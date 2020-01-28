import axios from './utils/request'
import {apiUrl} from './config/index'

const speedDataFun = (data, myDashboard, time) => {
    function getData() {

        axios.get(apiUrl.speed).then(res => {
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

export default speedDataFun