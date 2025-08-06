import { useState } from 'react';
import PDescription from './PDescription.jsx';
import PImageCarousel from './PImageCarousel.jsx';
import desc from './description.js';

function ProjectsPage(){

    let [currentP, setCurrentP] = new useState(0);

    function changeP(operation){
        if( currentP === 0 && operation === 'sub' ){
            //change the colour of the left button to faded
        } else if( currentP === (desc.length - 1) && operation === 'add' ){
            //change the colour of the right button to faded
        } else {

            if( operation === 'add' )
                setCurrentP((prev) => prev+1);
            else
                setCurrentP((prev) => prev-1);
        }
    }

    return (
        <div className="ProjectsPage">
            <h1>Projector</h1>
            <div className="container">
                <div className="item">
                    <PDescription 
                        {...desc[currentP]}
                    />
                </div>
                <div className="item">
                    <PImageCarousel 
                        prev={() => changeP('sub')}
                        next={() => changeP('add')}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;