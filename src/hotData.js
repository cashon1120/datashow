const hotDataFun = (data, myDashboard) => {
    const dataSource = data.config.source
    let len = dataSource.length
    let index = 0
    setInterval(() => {
        data.config.source = dataSource.slice(index, index + 10)
        index = index + 10 > len ? 0 : index + 10
        myDashboard.updateDataTableConfig(data.id, data.config);
    }, window.timer.hot);
}

export default hotDataFun