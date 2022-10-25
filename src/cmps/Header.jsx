import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme'

export const Header = ({ title, subtitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        sx={{ mb: '5px', fontWeight: 'bold', color: colors.grayC[100] }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenC[400]}>
        {subtitle}
      </Typography>
    </Box>
  )
}
