
import './App.scss';

import TOP from './pages/Top.js';
import Profile from './pages/Profile.js';
import Skills from './pages/Skills.js';
import Works from './pages/Works.js';
import Footer from './pages/Footer.js';

function App() {
  return (
    <div className="App">
      <TOP />
      <Profile />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
