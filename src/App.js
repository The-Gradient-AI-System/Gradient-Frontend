import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Analytics from './pages/Analytics';
import Automation from './pages/Automation';
import Profile from './pages/Profile';
import './App.css';
import { lightTheme, darkTheme } from './styles/theme';
import { ThemeProviderWrapper, ThemeContext } from './context/ThemeContext';
import { GlobalStyle } from './styles/GlobalStyle';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.surface};
  transition: background-color 0.3s ease;
`;

const MainLayout = styled.div`
  display: flex;
  flex-grow: 1;
  /* allow page-level scrolling, do not clip children */
  overflow: visible;
`;

const ContentContainer = styled.main`
  flex-grow: 1;
  padding: 2rem;
  /* stretch to full available width next to the Sidebar */
  max-width: none;
  margin: 0;
  /* let the document scroll instead of inner container */
  overflow: visible;
`;

function InnerApp() {
  const { themeMode } = useContext(ThemeContext);
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Header />
          <MainLayout>
            <ContentContainer>
              <Routes>
                <Route path="/" element={<Analytics />} />
                <Route path="/automation" element={<Automation />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </ContentContainer>
            <Sidebar />
          </MainLayout>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeProviderWrapper>
      <InnerApp />
    </ThemeProviderWrapper>
  );
}

export default App;

