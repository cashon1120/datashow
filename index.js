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
  safe: 10000, // 主动安全占比
  warning: 10000, // 报警轮训时间
  running: 2000, // 运行总数
  carNumber: 20000, // 车辆总数
  speed: 10000, // 速度统计
  position: 10000, // 位置
  hot: 10000, // 热力图
  risk: 2000,
  today: 20000
}

myDashboard.getDashboardConfig().then(function (config) {
  let dataTables = config.dataTables;
  console.log(dataTables)
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
  // positionDataFun(positionData, myDashboard)
  // hotDataFun(hotData, myDashboard)

});