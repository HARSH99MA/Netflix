import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthPage } from '@/pages/auth';
import BrowsePage from '@/pages/browse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/browse" element={<BrowsePage />} />
      </Routes>
    </Router>
  );
}

export default App;