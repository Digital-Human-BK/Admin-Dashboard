import { useState, useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'

import { lineChartData, lineChartOptions } from 'constants/charts'
import { ChartData } from 'types'

const LineChart = () => {
  const [chartData, setChartData] = useState<ChartData[]>([])
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData(lineChartData)
    setChartOptions(lineChartOptions)
  }, [])

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartData}
      type="area"
      width="100%"
      height="100%"
    />
  )
}

export default LineChart
