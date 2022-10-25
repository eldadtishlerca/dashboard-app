import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Navbar } from './cmps/Navbar'
import { Sidebar } from './cmps/Sidebar'
import { BoardPage } from './pages/board-page'
import { Route, Routes } from 'react-router-dom'
import { TeamPage } from './pages/team-page'

export const RootCmp = () => {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="root-cmp">
          <Sidebar />
          <main className="content">
            <Navbar />
            <Routes>
              <Route path="/" element={<BoardPage />} />
              <Route path="/team" element={<TeamPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}