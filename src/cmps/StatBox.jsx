import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { Progress } from './Progress'

export const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grayC[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Progress progress={progress} />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.greenC[500] }}
        >
          {subtitle}
        </Typography>
        <Typography variant="h5" sx={{ color: colors.greenC[600] }}>
          {increase}
        </Typography>
      </Box>
    </Box>
  )
}
