import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../theme'
import { Header } from '../cmps/Header'
import teamData from '../data/data'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'

export const TeamPage = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'cell-name' },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Lvl',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="75%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            backgroundColor={
              access === 'admin' ? colors.greenC[600] : colors.greenC[700]
            }
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'worker' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grayC[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        )
      },
    },
  ]

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="MANAGE TEAM" subtitle="Manging the team members" />
      </Box>
      <Box
        m="10px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column-cell': {
            color: colors.greenC[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.purpleC[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.purpleC[700],
          },
        }}
      >
        <DataGrid rows={teamData} columns={columns} />
      </Box>
    </Box>
  )
}
