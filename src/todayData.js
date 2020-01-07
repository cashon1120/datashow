import axios from './utils/request'
import apiUrl from './config/apiUrl'

const safeDataFun = (data, myDashboard, time) => {
    function getData() {
        setTimeout(() => {
            axios.get(apiUrl.today).then(res => {
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

export default safeDataFun