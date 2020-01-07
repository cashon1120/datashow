import axios from './utils/request'
import apiUrl from './config/apiUrl'

const runningDataFun = (data, myDashboard, time) => {
    function getData() {
        setTimeout(() => {
            axios.get(apiUrl.running).then(res => {
                data.config.source = res.data.data
                myDashboard.updateDataTableConfig(data.id, data.config);
                getData()
            }).catch(() => {
                getData()
            })
        }, time);
    }
    getData()
}

export default runningDataFun