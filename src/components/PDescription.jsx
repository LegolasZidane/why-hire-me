
function PDescription(props) {
    return (
        <div className="PDescription">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href={props.liveLink}></a>
            <a href={props.githubRepo}></a>
        </div>
    );
}

export default PDescription;