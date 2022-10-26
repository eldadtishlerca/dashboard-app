import { Box, Button, Typography, useTheme } from '@mui/material'
import { DownloadOutlined } from '@mui/icons-material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AddReactionIcon from '@mui/icons-material/AddReaction'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt'
import { Header } from '../cmps/Header'
import { StatBox } from '../cmps/StatBox'
import { BarHelper } from '../cmps/BarHelper'
import { tokens } from '../theme'
import { buyersData } from '../data/data'
import { Progress } from '../cmps/Progress'

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
        <Box
          gridColumn="span 8"
          gridRow="span 4"
          background={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grayC[100]}
            p="15px"
          >
            <Typography
              color={colors.grayC[100]}
              variant="h5"
              fontWeight="bold"
            >
              Recent Buyers
            </Typography>
          </Box>
          {buyersData.map((i, idx) => (
            <Box
              key={idx}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="15px"
            >
              <Box sx={{ minWidth: '40%' }}>
                <Typography
                  color={colors.greenC[500]}
                  variant="h5"
                  fontWeight="bold"
                >
                  {i.id}
                </Typography>
                <Typography color={colors.grayC[100]}>{i.name}</Typography>
              </Box>
              <Box
                sx={{
                  minWidth: '40%',
                  fontWeight: 'bold',
                  color: colors.greenC[400],
                }}
              >
                {i.pack}
              </Box>
              <Box color={colors.grayC[100]}>{i.date}</Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          background={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="bold">
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarHelper isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          background={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="bold">
            Campaign Revenue
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="30px"
          >
            <Progress size="125" />
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.greenC[500]}
              mt="15px"
            >
              Total: $380,105
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
