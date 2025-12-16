import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Analytics from './pages/Analytics';
import Automation from './pages/Automation';
import Profile from './pages/Profile';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #2A2D3A;
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

function App() {
  return (
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
  );
}

export default App;

