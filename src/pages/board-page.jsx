import { Box } from '@mui/system'
import { Header } from '../cmps/Header'

export const BoardPage = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  )
}
