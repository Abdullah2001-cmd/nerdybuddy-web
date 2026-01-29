import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;