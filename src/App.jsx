import LandingPage from './components/LandingPage.jsx';
import NavBar from './components/NavBar.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import ConsistencyPage from './components/ConsistencyPage.jsx';
import Resume from './components/Resume.jsx';
import AboutMe from './components/AboutMe.jsx';

function App() {

  return (
    <div className="spa">
      <NavBar />
      <LandingPage />
      <ProjectsPage />
      <ConsistencyPage />
      <Resume />
      <AboutMe />
    </div>
  );
}

export default App;
