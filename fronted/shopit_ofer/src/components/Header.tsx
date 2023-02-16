function Header() {
    return (
        <>
            <p>Header work</p>
            <nav className="navbar navbar-expand-lg navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="data:image/png;base64,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"
                            alt=""
                            width="100"
                            height="80"></img>
                    </a>
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" aria-disabled="true">
                                    Disabled
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>{' '}
        </>
    );
}

export default Header;
