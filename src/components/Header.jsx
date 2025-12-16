import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="glass-nav">
            <nav className="navbar navbar-expand-lg container py-3">
                <div className="d-flex align-items-center w-100 justify-content-between">
                    <Link className="text-decoration-none" to={`/`}>
                        <span className="brand-mark">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                className="bi bi-geo-alt"
                                viewBox="0 0 16 16"
                            >
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                            seguvia
                        </span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end">
                        <div className="navbar-nav d-flex align-items-center gap-2">
                            <Link to={`/reportar`}>
                                <button type="button" className="btn btn-pill btn-contrast">
                                    Reportar
                                </button>
                            </Link>
                            <Link to={`/misReportes`}>
                                <button type="button" className="btn btn-pill btn-quiet">
                                    Mis reportes
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className="offcanvas offcanvas-end text-white"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div className="offcanvas-header bg-dark">
                    <h1 className="offcanvas-title" id="offcanvasNavbarLabel">
                        Menú
                    </h1>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body d-flex flex-column gap-2 bg-body-secondary bg-opacity-10">
                    <Link className="text-white" to={`/reportar`} data-bs-dismiss="offcanvas">
                        <div className="btn btn-pill btn-contrast w-100 text-start">Reportar</div>
                    </Link>
                    <Link className="text-white" to={`/misReportes`} data-bs-dismiss="offcanvas">
                        <div className="btn btn-pill btn-quiet w-100 text-start">Mis reportes</div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header