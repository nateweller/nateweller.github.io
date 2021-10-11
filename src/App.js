import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PeakPage from './pages/work/PeakPage';
import TrailsPage from './pages/work/TrailsPage';
import BlinkPage from './pages/work/BlinkPage';
import SitesPage from './pages/work/SitesPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-900 min-h-screen p-3">
        <div className="bg-white text-gray-900 min-h-screen rounded-md border border-transparent">
          <div className="max-w-7xl mx-auto px-4">

            <header className="py-2.5 mb-6">
                <h1 className="logo">
                  <Link to="/">
                    <span>NW</span>
                    <span>NW</span>
                    <span>NW</span>
                    <span>NW</span>
                    <span>NW</span>
                    <span>NW</span>
                  </Link>
                </h1>
            </header>

            <Switch>
              <Route path="/work/peak" component={PeakPage} />
              <Route path="/work/trails" component={TrailsPage} />
              <Route path="/work/blink" component={BlinkPage} />
              <Route path="/work/sites" component={SitesPage} />
              <Route path="/" component={HomePage} />
            </Switch>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
