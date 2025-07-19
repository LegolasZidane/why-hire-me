import LandingPage from './components/LandingPage.jsx';
import NavBar from './components/NavBar.jsx';
import ExplanationPage from './components/ExplanationPage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import ConsistencyPage from './components/ConsistencyPage.jsx';
import Resume from './components/Resume.jsx';
import AboutMe from './components/AboutMe.jsx';

function App() {

  return (
    <div className="spa">
      <NavBar />
      <LandingPage />
      <ExplanationPage />
      <ProjectsPage />
      <ConsistencyPage />
      <Resume />
      <AboutMe />
    </div>
  );
}

export default App;
