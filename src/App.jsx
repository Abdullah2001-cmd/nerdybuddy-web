import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import About from './pages/about';
import ContactUs from './pages/contact-us';
import LoadingScreen from './components/loadingScreen';
import CorporateTeamsSection from './pages/corporateTeam';
import FinanceTeamsSection from './pages/finance';
import HealthCareSection from './pages/healthCare';
import PublicSectorSection from './pages/publicSector';
import RetailChainsSection from './pages/retailChain';
import TelecomSection from './pages/telecom';
import PricingPage from './pages/pricingPage';
import ServicesPage from './pages/services';
import Login from './pages/login';

function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('user'));

  return (
    <>
      <div id="app-root" className={isLoading ? 'hidden-during-loading' : 'visible-after-loading'}>
        <Router>
          <Routes>
            <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/" replace />} />
            <Route path="/" element={<Navbar />}>
              <Route
                path="home"
                element={<Home isLoading={isLoading} />}
              />
              <Route path="about" element={<About />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="corporate-teams" element={<CorporateTeamsSection />} />
              <Route path="finance" element={<FinanceTeamsSection />} />
              <Route path="health-care" element={<HealthCareSection />} />
              <Route path="public-sector" element={<PublicSectorSection />} />
              <Route path="retail-chain" element={<RetailChainsSection />} />
              <Route path="telecom" element={<TelecomSection />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="/" element={<Navigate to="home" replace />} /> {/* default redirect */}
            </Route>
          </Routes>
        </Router>
      </div>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
    </>
  );
}

export default App;