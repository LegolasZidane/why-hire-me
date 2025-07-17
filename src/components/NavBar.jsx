
function NavBar() {
    return (
        <div className="NavBar">
            <nav className="navbar fixed navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#">LZ</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About Me</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default NavBar;