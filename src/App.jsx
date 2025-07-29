import NavBar from './components/NavBar.jsx';
import LandingPage from './components/LandingPage.jsx';
import ExplanationPage from './components/ExplanationPage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import ConsistencyPage from './components/ConsistencyPage.jsx';
import TheGrind from './components/TheGrind.jsx';
import ConceptsPage from './components/ConceptsPage.jsx';
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
      <TheGrind />
      <ConceptsPage />
      <Resume />
      <AboutMe />
    </div>
  );
}

export default App;
