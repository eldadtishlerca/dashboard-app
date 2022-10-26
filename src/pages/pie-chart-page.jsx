import { Box } from '@mui/material'
import { PieHelper } from '../cmps/PieHelper'
import { Header } from '../cmps/Header'

export const PieChartPage = () => {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="A simple pie chart" />
      <Box height="75vh">
        <PieHelper />
      </Box>
    </Box>
  )
}
