
function PDescription({title, description, liveLink, githubRepo}) {
    return (
        <div className="PDescription">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={liveLink}>Check it out</a><br />
            <a href={githubRepo}>Github Repository</a>
        </div>
    );
}

export default PDescription;