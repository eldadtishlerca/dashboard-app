import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../theme'
import { Header } from '../cmps/Header'
import { teamData } from '../data/data'

export const InvoicesPage = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'cell-name' },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1,
    },
    {
      field: 'socialId',
      headerName: 'Social Id',
      flex: 1,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenC[500]}>${params.row.cost}</Typography>
      ),
    },

    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
  ]

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="INVOICES BALANCE" subtitle="List of invoices balances" />
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
          '& .MuiDataGrid-cellCheckbox .MuiButtonBase-root .MuiSvgIcon-root path':
            {
              fill: colors.primary[700],
            },
        }}
      >
        <DataGrid rows={teamData} columns={columns} checkboxSelection />
      </Box>
    </Box>
  )
}
