import { useEffect } from "react";

function setValue(contribution){

    if( contribution === 0 || contribution === 1 )
        return contribution;
    else if( contribution < 5)
        return 2;
    else if( contribution < 10)
        return 5;
    else
        return 10;
}

function generateContributions(startDate){

    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // const nameOfMonth = ["", "Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let contributions = [];

    const startDay = parseInt(startDate.slice(0,2));
    const startMonth = parseInt(startDate.slice(3,5));

    const date = new Date();
    const endDay = parseInt(date.getDate());
    const endMonth = parseInt(date.getMonth() + 1);

    let start = startDay, end;
    let days = 0;
    let week = [];

    let input = [13, 3, 6, 13, 2, 0, 33, 12, 2, 10, 1, 14, 0, 0, 11, 25, 5, 12, 9, 11, 0, 2, 3, 5, 9, 10, 23, 6, 10, 11, 13, 13, 3, 2, 19, 8, 12, 4, 0, 0, 0, 12, 15, 20, 0, 12, 3, 4, 4, 3, 16, 19, 2, 19, 16, 5, 1, 6, 16, 6, 3, 1, 4, 1, 7, 12, 17, 0, 0, 15, 10, 15, 7, 1, 20, 8, 4, 7, 4, 5, 1, 1, 8, 13, 3, 1, 6, 1, 5, 2, 3, 1, 1, 1, 1, 1, 1, 1, 0, 1, 3, 1, 0, 1, 1, 1, 3, 0, 2, 5, 3, 4, 2, 1, 2, 0, 1, 1, 4, 2, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1];
    let day = 0;

    for( let i = startMonth; i <= endMonth; i++ ){
            if( i == endMonth )
                end = endDay;
            else
                end = daysInMonth[i];
        for( let j = start; j <= end; j++ ){
            days = days%7 + 1;
            week.push(input[day++]);//contributions baad mei
            if( days == 7 || j == end ){
                contributions.push(week);
                week = [];
                if( days == 7 )
                    days = 0;
                if( j != end )
                    days = 0;
            }
        }
        let lastDays = days;
        while( lastDays-- != 0 )
            week.push(-1);
        start = 1;
    }
    return contributions;
}


function makeGraphGH() {

    let graph = document.querySelector('.graphGH');
    graph.innerHTML = "";
    //Please give date in DD/MM/YYYY format, thank you.
    let contributions = generateContributions("19/05/2025");

    for( let i = 0; i < contributions.length; i++ ){

        let week = document.createElement('ul');
        week.classList.add(`week-${i+1}`);

        for( let j = 0; j < contributions[i].length; j++ ){
            
            let weekDay = document.createElement('li');
            weekDay.classList.add('square');
            weekDay.dataset.value = setValue(contributions[i][j]);
            week.appendChild(weekDay);
        }
        graph.appendChild(week);

    }
}

function makeGraphLC() {

    let graph = document.querySelector('.graphLC');
    graph.innerHTML = "";
    //Please give date in DD/MM/YYYY format, thank you.
    let contributions = generateContributions("09/03/2025");

    for( let i = 0; i < contributions.length; i++ ){

        let week = document.createElement('ul');
        week.classList.add(`week-${i+1}`);

        for( let j = 0; j < contributions[i].length; j++ ){
            
            let weekDay = document.createElement('li');
            weekDay.classList.add('square');
            weekDay.dataset.value = setValue(contributions[i][j]);
            week.appendChild(weekDay);
        }
        graph.appendChild(week);
    }
}

function ConsistencyPage() {

    useEffect(() => {
        makeGraphGH();
        makeGraphLC();
    }, []);

    return(
        <div className="ConsistencyPage" >
            <div className="graph-container">
                <h1 className="heading">LeetCode Submissions</h1>
                <div className="graphLC">
                </div>
                <div className="graphGH">
                </div>
                <h1 className="heading">GitHub Contributions</h1>
            </div>
        </div>
    );
}

export default ConsistencyPage;