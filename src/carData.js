import axios from './utils/request'
import apiUrl from './config/apiUrl'

const carDataFun = (data, myDashboard, time) => {
    function getData() {
        setTimeout(() => {
            axios.get(apiUrl.car).then(res => {
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

export default carDataFun