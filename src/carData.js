import axios from './utils/request'
import apiUrl from './config/apiUrl'

const carDataFun = (data, myDashboard, time) => {
    function getData() {
        axios.get(apiUrl.car).then(res => {
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

export default carDataFun