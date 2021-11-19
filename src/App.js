import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { VscGithub } from 'react-icons/vsc';
import { FaLinkedinIn} from 'react-icons/fa';

import HomePage from './pages/HomePage';
import PeakPage from './pages/work/PeakPage';
import TrailsPage from './pages/work/TrailsPage';
import BlinkPage from './pages/work/BlinkPage';
import SitesPage from './pages/work/SitesPage';

import ScrollToTop from './components/ScrollToTop';
import Container from './components/Container';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-900 min-h-screen p-3">
        <div className="bg-white text-gray-900 min-h-screen rounded-md border border-gray-900">

          <Container>
            <header className="flex items-center py-2.5 mb-6">
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

                <div className="flex-1 text-right">
                  <a title="LinkedIn" href="https://www.linkedin.com/in/nateweller/" className="inline-block mr-4" target="_blank" rel="noreferrer">
                    <FaLinkedinIn className="h-5 w-5" />
                    <span className="sr-only">
                      LinkedIn
                    </span>
                  </a>
                  <a title="GitHub" href="https://github.com/nateweller" className="inline-block mt-0.5" target="_blank" rel="noreferrer">
                    <VscGithub className="h-6 w-6" />
                    <span className="sr-only">
                      GitHub
                    </span>
                  </a>
                </div>
            </header>
          </Container>

          <Switch>
            <Route path="/work/peak" component={PeakPage} />
            <Route path="/work/trails" component={TrailsPage} />
            <Route path="/work/blink" component={BlinkPage} />
            <Route path="/work/sites" component={SitesPage} />
            <Route path="/" component={HomePage} />
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
