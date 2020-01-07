const positionDataFun = (data, myDashboard) => {
    let dataSource = JSON.parse(JSON.stringify(data.config.source))
    setInterval(() => {
        data.config.source = dataSource
        myDashboard.updateDataTableConfig(data.id, data.config);
    }, window.timer.position);
}
export default positionDataFun