import { useState } from 'react';
import PDescription from './PDescription.jsx';
import PImageCarousel from './PImageCarousel.jsx';
import desc from './description.js';

function ProjectsPage(){

    let [currentP, setCurrentP] = new useState(0);

    return (
        <div className="ProjectsPage">
            <h1>Projector</h1>
            <div className="container">
                <div className="item">
                    <PDescription 
                        title={desc[0].title}
                        description={desc[0].description}
                        liveLink={desc[0].liveLink}
                        githubRepo={desc[0].githubRepo}
                    />
                </div>
                <div className="item">
                    <PImageCarousel />
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;