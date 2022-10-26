import { Box, Button, useTheme } from '@mui/material'
import { DownloadOutlined } from '@mui/icons-material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AddReactionIcon from '@mui/icons-material/AddReaction'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt'
import { Header } from '../cmps/Header'
import { StatBox } from '../cmps/StatBox'
import { tokens } from '../theme'

export const BoardPage = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.purpleC[700],
              color: colors.grayC[100],
              fontSize: '14px',
              fontWeight: 'bold',
              p: '10px 20px',
            }}
          >
            <DownloadOutlined sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[400]}
          gridColumn="span 3"
        >
          <StatBox
            title="7"
            subtitle="New Employees"
            progress="0.85"
            increase="+10%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenC[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[400]}
          gridColumn="span 3"
        >
          <StatBox
            title="12,410"
            subtitle="New Customers"
            progress="0.55"
            increase="+28%"
            icon={
              <AddReactionIcon
                sx={{ color: colors.greenC[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[400]}
          gridColumn="span 3"
        >
          <StatBox
            title="14,890"
            subtitle="App Downloads"
            progress="0.65"
            increase="+12%"
            icon={
              <SystemUpdateAltIcon
                sx={{ color: colors.greenC[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[400]}
          gridColumn="span 3"
        >
          <StatBox
            title="4,325,970"
            subtitle="Company Value"
            progress="0.9"
            increase="+34%"
            icon={
              <AnalyticsIcon
                sx={{ color: colors.greenC[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  )
}
