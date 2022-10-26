import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../theme'
import { Header } from '../cmps/Header'
import { teamData } from '../data/data'

export const ContactPage = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'cell-name' },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      flex: 1,
    },
  ]

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="CONTACTS INFO"
          subtitle="List of contacts for reference"
        />
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
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grayC[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={teamData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}
