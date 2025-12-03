import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { defaultTheme as theme } from './styles/themes';
import MainLayout from './layouts/MainLayout';
import { ArchivePage } from './pages/ArchivePage';
import { MoodboardsPage } from './pages/MoodboardsPage';

/**
 * Placeholder Page Component
 * 아직 구현되지 않은 페이지용 임시 컴포넌트
 */
function PlaceholderPage({ title }) {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary">
        이 페이지는 아직 구현되지 않았습니다.
      </Typography>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<ArchivePage />} />
            <Route path="moodboards" element={<MoodboardsPage />} />
            <Route path="settings" element={<PlaceholderPage title="Settings" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
