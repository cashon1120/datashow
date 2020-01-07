import carDataFun from './src/carData'
import hotDataFun from './src/hotData'
import positionDataFun from './src/positionData'
import runningDataFun from './src/runningData'
import safeDataFun from './src/safeData'
import riskDataFun from './src/riskData'
import speedDataFun from './src/speedData'
import warningDataFun from './src/warningData'
import todayDataFun from './src/todayData'


const bdIotVizPlayer = window.BDIotVizPlayer;
const container = document.getElementById('content');
const myDashboard = bdIotVizPlayer({
  containerElement: container,
  dashboardId: '5e02dfa8d34645786b4b633b',
  fillMode: 'none', // <-- Optional, Possible value: 'none', 'contain', 'cover', 'responsive'
  token: {
    type: 'embedded', // <-- Must be 'embedded'
    value: '61d88964dd117e5b3415a237a8c540dc' // <-- Access Token for current dashboard
  }
});

const timer = {
  safe: 1000 * 60, // 主动安全占比
  warning: 1000 * 60, // 报警轮训时间
  running: 1000 * 60, // 运行总数
  carNumber: 1000 * 60, // 车辆总数
  speed: 1000 * 60, // 速度统计
  position: 1000 * 2, // 位置
  hot: 1000 * 2, // 热力图
  risk: 1000 * 10, // 风险趋势
  today: 1000 * 60 * 60 * 24 // 24小时
}

myDashboard.getDashboardConfig().then(function (config) {
  let dataTables = config.dataTables;
  let safeData, positionData, hotData, riskData, todayData, speedData, warningData, carData, runningData
  dataTables.forEach(data => {
    switch (data.name) {
      case '主动安全占比':
        safeData = data;
        break;
      case '位置':
        positionData = data;
        break;
      case '热力图':
        hotData = data;
        break;
      case '风险趋势':
        riskData = data;
        break;
      case '24小时':
        todayData = data;
        break;
      case '速度':
        speedData = data;
        break;
      case '实时报警':
        warningData = data;
        break;
      case "车辆总数":
        carData = data;
        break;
      case '车辆运行':
        runningData = data;
        break;
      default:
        break;
    }
  });

  carDataFun(carData, myDashboard, timer.carNumber)
  runningDataFun(runningData, myDashboard, timer.running)
  safeDataFun(safeData, myDashboard, timer.safe)
  riskDataFun(riskData, myDashboard, timer.risk)
  todayDataFun(todayData, myDashboard, timer.today)
  warningDataFun(warningData, myDashboard, timer.warning)
  speedDataFun(speedData, myDashboard, timer.speed)
  hotDataFun(hotData, myDashboard, timer.hot)
  positionDataFun(positionData, myDashboard, timer.position)

});