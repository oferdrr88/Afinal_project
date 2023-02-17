import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://dub01pap003files.storage.live.com/y4mTDDBLwZ4QikUE8M75_Jj5mpShxA7NI_xtwMC4YKoqcEG7gyG5ctGrAV0soygddmhuEzLH9qo_uaAMgdFncRaL34gKADq9B1fk7C-3rIXW44u4JPv10Bat4CFJ9VmIqKeHvlXlrajTd7-qtEwrljkz2gxkioy5iTQXM7gajAeQ_yLI_5NP63IucBcyRVF41Dl2sUBY17An42B8nLAHwLRuQwrxFP95KyZzPRuMth4zHo?encodeFailures=1&width=197&height=230"
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
                                <NavLink className="nav-link active navbar-brand fs-6" aria-current="page" to="/">
                                    Home3 <i className="fas fa-dragon "></i>
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
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
                            </li> */}
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
