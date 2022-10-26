import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Navbar } from './cmps/Navbar'
import { Sidebar } from './cmps/Sidebar'
import { BoardPage } from './pages/board-page'
import { Route, Routes } from 'react-router-dom'
import { TeamPage } from './pages/team-page'
import { ContactPage } from './pages/contact-page'
import { InvoicesPage } from './pages/invoices-page'
import { ProfilePage } from './pages/profile-page'

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
              <Route path="/contacts" element={<ContactPage />} />
              <Route path="/invoices" element={<InvoicesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
