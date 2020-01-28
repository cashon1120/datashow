import axios from './utils/request'
import {apiUrl} from './config/index'

const positionDataFun = (data, myDashboard, time) => {
    function getData() {

        axios.get(apiUrl.position).then(res => {
            const result = []
            res.data.data.forEach(item => {
                result.push({
                    ID: item.ID,
                    NumberPlate: item.NumberPlate,
                    BDLongitude: item.BDLongitude,
                    BDLatitude: item.BDLatitude,
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
export default positionDataFun