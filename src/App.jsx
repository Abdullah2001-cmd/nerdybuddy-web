import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* App root is always mounted so LoadingScreen can reveal it from behind. */}
      <div id="app-root" className={isLoading ? 'hidden-during-loading' : 'visible-after-loading'}>
        <Router>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route path="/" element={<Home isLoading={isLoading} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/corporate-teams" element={<CorporateTeamsSection />} />
              <Route path="/finance" element={<FinanceTeamsSection />} />
              <Route path="/health-care" element={<HealthCareSection />} />
              <Route path="/public-sector" element={<PublicSectorSection />} />
              <Route path="/retail-chain" element={<RetailChainsSection />} />
              <Route path="/telecom" element={<TelecomSection />} />
            </Route>
          </Routes>
        </Router>
      </div>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
    </>
  );
}

export default App;