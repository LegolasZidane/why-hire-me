import { useEffect } from "react";

function run() {
    const levels = [0, 0, 0, 3, 5, 10];
    let contributions = [];
    let week = [];

    for( let i = 0; i < 52; i++ ){
        week = [];
        for( let j = 0; j < 7; j++)
            week.push(levels[Math.floor(Math.random() * levels.length)]);
        contributions.push(week);
    }


    document.querySelectorAll('.graph').forEach((graph) => {
        // graph.innerHTML = "";
        for( let i = 0; i < 52; i++ ){

            let graphWeek = document.createElement('ul');
            graphWeek.classList.add(`week-${i+1}`);

            contributions[i].forEach((level) => {

                let square = document.createElement('li');
                square.classList.add('square');
                square.dataset.value = level;
                graphWeek.appendChild(square);
            });
            graph.appendChild(graphWeek);
        }
    });
}

function ConsistencyPage() {

    useEffect(run, []);

    return(
        <div className="ct" >
            <div className="graph-container">
                <h1 className="heading">LeetCode Submissions</h1>
                <div className="graph">

                </div>
                <div className="graph">

                </div>
                <h1 className="heading">GitHub Contributions</h1>
            </div>
        </div>
    );
}

export default ConsistencyPage;