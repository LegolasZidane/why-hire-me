import PDescription from './PDescription.jsx';
import PImageCarousel from './PImageCarousel.jsx';

//>make your projects go live
////>the entire data will be here and flow will transfer from like right to left because right contains
//the buttons so get your data ready
//>by default we will have the first page on display
//

function ProjectsPage(){
    return (
        <div className="ProjectsPage">
            <h1>Projector</h1>
            <div className="container">
                <PDescription />
                <PImageCarousel />
            </div>
        </div>
    );
}

export default ProjectsPage;