import { Box } from '@mui/material'
import { BarHelper } from '../cmps/BarHelper'
import { Header } from '../cmps/Header'

export const BarChartPage = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="A simple bar chart" />
      <Box height="75vh">
        <BarHelper />
      </Box>
    </Box>
  )
}
