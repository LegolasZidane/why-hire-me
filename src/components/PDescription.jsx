
function PDescription(props) {
    return (
        <div className="PDescription">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href={props.liveLink}>Check it out</a><br />
            <a href={props.githubRepo}>Github Repository</a>
        </div>
    );
}

export default PDescription;